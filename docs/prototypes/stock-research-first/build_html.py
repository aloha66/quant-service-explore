"""Build the throwaway, offline, single-file observation prototype."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
template = (ROOT / "index.template.html").read_text(encoding="utf-8")
data = json.loads((ROOT / "data/history.json").read_text(encoding="utf-8"))
payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
for marker, content in {
    "/* HISTORY_DATA */": "const HISTORY_DATA = " + payload + ";",
    "/* RESEARCH_MODEL */": (ROOT / "prototype_model.js").read_text(encoding="utf-8"),
    "/* RESEARCH_CHART */": (ROOT / "prototype_chart.js").read_text(encoding="utf-8"),
    "/* RESEARCH_UI */": (ROOT / "prototype_ui.js").read_text(encoding="utf-8"),
}.items():
    if template.count(marker) != 1:
        raise ValueError(f"Expected exactly one template marker: {marker}")
    template = template.replace(marker, content)
(ROOT / "index.html").write_text(template, encoding="utf-8")
print(f"Built {ROOT / 'index.html'} ({len(template.encode('utf-8')):,} bytes)")
