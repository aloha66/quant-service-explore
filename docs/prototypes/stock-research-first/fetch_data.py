"""PROTOTYPE: fetch a fixed 2024–2025 public historical sample, with no dependencies.

Run: python3 docs/prototypes/stock-research-first/fetch_data.py
Network access is needed only to refresh history.json, never to open index.html.
"""

from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import subprocess
import time
from urllib.parse import parse_qs, urlencode, urlsplit


OUTPUT = Path(__file__).parent / "data" / "history.json"
START = "2024-09-01"
END = "2025-12-31"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36"
GROUPS = [
    ("801770", "通信", [("300502.SZ", "新易盛"), ("300308.SZ", "中际旭创")]),
    ("801080", "电子", [("688256.SH", "寒武纪"), ("688981.SH", "中芯国际")]),
    ("801150", "医药生物", [("600276.SH", "恒瑞医药"), ("688506.SH", "百利天恒")]),
    ("801780", "银行", [("600036.SH", "招商银行"), ("601398.SH", "工商银行")]),
    ("801050", "有色金属", [("601899.SH", "紫金矿业"), ("600547.SH", "山东黄金")]),
    ("801890", "机械设备", [("688017.SH", "绿的谐波"), ("601100.SH", "恒立液压")]),
    ("801730", "电力设备", [("300274.SZ", "阳光电源"), ("601012.SH", "隆基绿能")]),
    ("801120", "食品饮料", [("600519.SH", "贵州茅台"), ("000858.SZ", "五粮液")]),
    ("801750", "计算机", [("688111.SH", "金山办公"), ("002230.SZ", "科大讯飞")]),
    ("801880", "汽车", [("002594.SZ", "比亚迪"), ("601127.SH", "赛力斯")]),
]


def get_raw(url):
    # curl uses the operating system trust store; do not disable TLS verification.
    raw = subprocess.run(["curl", "--fail", "--silent", "--show-error", "--location",
                          "--max-time", "35", "--user-agent", UA,
                          "--referer", "https://www.swsresearch.com/", url],
                         check=True, capture_output=True).stdout
    digest = hashlib.sha256(raw).hexdigest()
    parsed = urlsplit(url)
    query = parse_qs(parsed.query)
    if "param" in query:
        source = "tencent-" + query["param"][0].split(",")[0]
        extension = ".json"
    elif "swindexcode" in query:
        source = "shenwan-" + query["swindexcode"][0]
        extension = ".json"
    else:
        source = "unit-" + parsed.netloc.split(".")[0]
        extension = ".js"
    path = OUTPUT.parent / "raw" / f"{source}-{digest[:16]}{extension}"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(raw)
    return raw, {
        "source_url": url,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "response_sha256": digest,
        "raw_path": str(path.relative_to(OUTPUT.parent.parent)),
    }


def get_json(url):
    raw, provenance = get_raw(url)
    return json.loads(raw), provenance


def fetch_unit_evidence():
    evidence = {}
    evidence_path = OUTPUT.parent / "unit-evidence.json"
    existing = json.loads(evidence_path.read_text()) if evidence_path.exists() else {}
    for source, url, labels in [
        ("tencent", "https://st.gtimg.com/quotes/hs-fund/zxgweb-chart-5878585c4a61.js",
         {"STOCK_UNIT.sh": "手", "STOCK_UNIT.sz": "手"}),
        ("shenwan", "https://www.swsresearch.com/institute_sw/p__allIndex__releasedIndex__releaseDetail__index.js",
         {"bargainamount": "亿股", "bargainsum": "亿元"}),
    ]:
        previous = existing.get(source, {})
        cached = OUTPUT.parent.parent / previous.get("raw_path", "missing-raw-evidence")
        if cached.is_file() and hashlib.sha256(cached.read_bytes()).hexdigest() == previous.get("response_sha256"):
            raw = cached.read_bytes()
            provenance = {key: previous[key] for key in ["source_url", "fetched_at", "response_sha256", "raw_path"]}
        else:
            raw, provenance = get_raw(url)
        decoded = re.sub(r"\\u([0-9a-fA-F]{4})", lambda match: chr(int(match[1], 16)), raw.decode())
        if source == "tencent":
            if not re.search(r'STOCK_UNIT:\s*\{\s*sz:\s*"手",\s*sh:\s*"手"', decoded):
                raise ValueError("Tencent official volume labels changed; recheck units before refreshing")
            rule = "Official daily kline numeric parser retains original field[5] without unit conversion; STOCK_UNIT.sh/sz is 手."
        else:
            if "亿股" not in decoded or "亿元" not in decoded or "e.bargainamount,e.bargainsum" not in decoded:
                raise ValueError("Shenwan official volume labels changed; recheck units before refreshing")
            rule = "Official historical detailTrend maps bargainamount/bargainsum into tooltip positions 5/6, labelled 亿股/亿元."
        evidence[source] = {**provenance, "labels": labels, "field_rule": rule}
    return evidence


def base_instrument(name, kind, source_id, provenance, price_basis):
    return {
        "name": name, "kind": kind, "source_id": source_id,
        **provenance, "price_basis": price_basis,
        "price_unit": "point" if kind == "index" else "CNY_per_share",
        "volume_unit": "hand", "amount_unit": "CNY", "bars": [],
    }


def tencent(code, name, kind):
    number, market = code.split(".")
    symbol = market.lower() + number
    url = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?" + urlencode({
        "param": f"{symbol},day,{START},{END},640,",
    })
    response, provenance = get_json(url)
    if response.get("code") != 0:
        raise ValueError(f"Tencent rejected {code}: {response.get('msg')}")
    rows = response["data"][symbol]["day"]
    result = base_instrument(name, kind, "tencent_fqkline_day_unadjusted", provenance,
                             "index_points" if kind == "index" else "unadjusted")
    result["raw_field_order"] = ["date", "open", "close", "high", "low", "volume_hand"]
    result["missing_fields"] = ["amount", "prev_close", "turnover_rate"]
    result["volume_verified"] = True
    result["unit_source_url"] = "https://st.gtimg.com/quotes/hs-fund/zxgweb-chart-5878585c4a61.js"
    result["unit_evidence"] = "Official chart STOCK_UNIT uses sh/sz=手. Daily kline parser preserves numeric field[5] without conversion."
    for row in rows:
        if START <= row[0] <= END:
            result["bars"].append({
                "trade_date": row[0], "open": float(row[1]), "high": float(row[3]),
                "low": float(row[4]), "close": float(row[2]), "volume": float(row[5]),
                "amount": None, "prev_close": None, "turnover_rate": None,
            })
    return result


def shenwan(code, name):
    url = "https://www.swsresearch.com/institute-sw/api/index_publish/trend/?" + urlencode({
        "swindexcode": code, "period": "DAY",
    })
    response, provenance = get_json(url)
    if str(response.get("code")) != "200":
        raise ValueError(f"Shenwan rejected {code}: {response.get('message')}")
    result = base_instrument(name, "index", "shenwan_official_trend_day", provenance, "index_points")
    result["source_page_url"] = f"https://www.swsresearch.com/institute_sw/allIndex/releasedIndex/releasedetail?code={code}"
    result["missing_fields"] = ["prev_close", "turnover_rate"]
    result["raw_volume_unit"] = "100_million_shares"
    result["raw_amount_unit"] = "100_million_CNY"
    result["unit_conversion"] = {"volume": "bargainamount * 1_000_000 (hand = 100 shares)",
                                 "amount": "bargainsum * 100_000_000"}
    result["unit_source_url"] = "https://www.swsresearch.com/institute_sw/p__allIndex__releasedIndex__releaseDetail__index.js"
    result["volume_verified"] = True
    result["unit_evidence"] = "Official historical candlestick tooltip labels bargainamount 亿股 and bargainsum 亿元."
    for row in response["data"]:
        day = row["bargaindate"][:10]
        if START <= day <= END:
            if row["swindexcode"] != code:
                raise ValueError(f"Wrong industry code in response: {row['swindexcode']}")
            result["bars"].append({
                "trade_date": day, "open": row.get("openindex"), "high": row.get("maxindex"),
                "low": row.get("minindex"), "close": row.get("closeindex"),
                "volume": round(row["bargainamount"] * 1_000_000, 6) if row.get("bargainamount") is not None else None,
                "amount": round(row["bargainsum"] * 100_000_000, 2) if row.get("bargainsum") is not None else None,
                "prev_close": None, "turnover_rate": None,
            })
    return result


def validate(code, instrument):
    bars = instrument["bars"]
    bars.sort(key=lambda row: row["trade_date"])
    dates = [row["trade_date"] for row in bars]
    if not bars or len(set(dates)) != len(dates):
        raise ValueError(f"Missing or duplicate dates for {code}")
    for row in bars:
        o, h, l, c = (row[key] for key in ["open", "high", "low", "close"])
        if None not in (o, h, l, c) and not (0 < l <= min(o, c) <= max(o, c) <= h):
            raise ValueError(f"Invalid OHLC for {code} on {row['trade_date']}")
    instrument["coverage"] = {
        "first_date": dates[0], "last_date": dates[-1], "rows": len(bars),
        "warmup_rows": sum(day < "2025-01-01" for day in dates),
        "replay_rows": sum(day >= "2025-01-01" for day in dates),
    }


def main():
    unit_evidence = fetch_unit_evidence()
    package = {
        "metadata": {
            "prototype_only": True, "schema_version": "1", "requested_start": START,
            "requested_end": END, "replay_year": 2025, "timezone": "Asia/Shanghai",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "null_semantics": "Not supplied or not verified by this source; never zero-filled or synthesized.",
            "date_semantics": "Actual source trade dates; replay calendar comes from 000300.SH, with no forward fill.",
            "price_basis_notes": "Stocks are unadjusted historical prices. Cross-ex-dividend/split windows can produce mechanical gaps; simple returns/MA comparisons are not total returns. No future-anchored qfq prices are used.",
            "sample_membership_notes": "Groups are manual research references from the user's roadmap, not verified 2025 industry membership, and never reconstructed from current constituents.",
            "known_missing": "Fundamentals, events, historical membership, official previous close and stock turnover rates are not included. Tencent historical amount is unavailable.",
            "source_scope": "Unmodified public responses, including any current Tencent quote snapshots and full Shenwan histories, are archived in data/raw for source readback. Only 2024-09-01 through 2025-12-31 daily bars enter the inline research dataset. Current quotes and post-2025 bars are never used by replay or research calculations.",
            "standard_field_rules": "Dates: trade_date. OHLC: raw source prices. Tencent: [date,open,close,high,low,volume]. Shenwan: openindex/maxindex/minindex/closeindex; documented 100-million units converted into hand/CNY. Missing fields are null. All prev_close and turnover_rate values remain null because they were not independently verified.",
            "point_in_time_limitations": "Retrieved in 2026, not an archived as-of-2025 feed; later corrections cannot be ruled out. No verified point-in-time fundamentals, events or constituents are supplied. Manual commentary must have dated sources to count as contemporary evidence.",
            "unit_evidence": unit_evidence,
        },
        "instruments": {},
        "groups": [{"sector_code": c, "sector_name": n,
                    "stocks": [{"code": s, "name": sn} for s, sn in stocks]}
                   for c, n, stocks in GROUPS],
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    (OUTPUT.parent / "unit-evidence.json").write_text(json.dumps(unit_evidence, ensure_ascii=False, indent=2) + "\n")
    tasks = [("000300.SH", "沪深300", "index", tencent)]
    tasks += [(code, name, "index", shenwan) for code, name, _ in GROUPS]
    tasks += [(code, name, "stock", tencent) for _, _, stocks in GROUPS for code, name in stocks]
    for code, name, kind, fetch in tasks:
        instrument = fetch(code, name, kind) if fetch == tencent else fetch(code, name)
        validate(code, instrument)
        package["instruments"][code] = instrument
        print(code, name, instrument["coverage"], flush=True)
        time.sleep(0.5)
    calendar = {row["trade_date"] for row in package["instruments"]["000300.SH"]["bars"]}
    for instrument in package["instruments"].values():
        instrument["coverage"]["missing_benchmark_dates"] = sorted(
            calendar - {row["trade_date"] for row in instrument["bars"]})
    OUTPUT.write_text(json.dumps(package, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Saved {len(package['instruments'])} instruments to {OUTPUT}", flush=True)


if __name__ == "__main__":
    main()
