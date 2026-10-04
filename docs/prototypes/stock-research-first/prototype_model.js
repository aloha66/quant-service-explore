/* PROTOTYPE / THROWAWAY. No DOM, dependencies, persistence, or investment rules.
 * Public API: ResearchModel.create_state(dataset, options),
 *             ResearchModel.derive(state, dataset),
 *             ResearchModel.reduce(state, action, dataset).
 * All functions are pure. Percent factors use percentage points: 5 means 5%.
 * volume_ratio_5_20 is a ratio; missing / unverified values are null.
 * State.layers are submitted human judgments; derive().layers are market data.
 * Action fields are flat: {type:'save_layer',layer:'market',conclusion:..., ...}.
 * Versions are numeric; id is stable, e.g. 'market:v1'. Records are deep frozen.
 */
const ResearchModel = (() => {
  const layer_keys = ["market", "sector", "stock"];
  const method_keys = [...layer_keys, "context", "combination", "observation"];
  const layer_names = {market: "大盘", sector: "板块", stock: "个股"};
  const limitations = [
    "真实历史行情来自当前下载的修订快照；历史发布和修订时点未核实，不冒称严格历史信息时点数据。",
    "股票价格不复权；跨除权、除息或其他公司行动的价格变化不可直接解读为纯投资收益。",
    "板块参照来自路线图给定映射；2025 年实际成员归属和成员变化尚未核实。",
    "量活跃比仅在来源成交量单位已核实且 5/20 日完整时计算；不比较不同来源的量值。",
    "本轮限于价格结构观察；基本面、事件、公司行动、股本和板块参与情况仍可能未知。",
    "方法及组合是试验假设，回放完成与单次涨跌不构成方法有效性证据。"
  ];
  const copy = value => JSON.parse(JSON.stringify(value));
  const clean = value => typeof value === "string" ? value.trim() : "";
  const numeric = value => typeof value === "number" && Number.isFinite(value);
  const valid_date = value => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  };
  const freeze = value => {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const finish = state => {
    state.records.forEach(freeze);
    return state;
  };
  const error = (state, message) => ({...state, notice: {kind: "error", text: message}});
  const instrument = (dataset, code) => dataset.instruments?.[code] || null;
  const visible_bars = (dataset, code, date) => (instrument(dataset, code)?.bars || [])
    .filter(bar => bar.trade_date <= date).slice().sort((a, b) => a.trade_date.localeCompare(b.trade_date));
  const calendar = dataset => [...new Set((instrument(dataset, "000300.SH")?.bars || [])
    .map(bar => bar.trade_date))].sort();
  const exact_at = (bars, date) => bars.find(bar => bar.trade_date === date) || null;
  const mean = (bars, field, count) => {
    const tail = bars.slice(-count);
    if (tail.length !== count || !tail.every(bar => bar && numeric(bar[field]))) return null;
    return tail.reduce((sum, bar) => sum + bar[field], 0) / count;
  };
  const price_change = (from, to) => from && to && numeric(from.close) && from.close > 0 && numeric(to.close)
    ? (to.close / from.close - 1) * 100 : null;
  const return_between = (bars, from_date, to_date) => from_date
    ? price_change(exact_at(bars, from_date), exact_at(bars, to_date)) : null;
  const max_drawdown = bars => {
    const tail = bars.slice(-20);
    if (tail.length < 20 || !tail.every(bar => bar && numeric(bar.close) && bar.close > 0)) return null;
    let peak = tail[0].close;
    let worst = 0;
    tail.forEach(bar => { peak = Math.max(peak, bar.close); worst = Math.min(worst, (bar.close / peak - 1) * 100); });
    return worst;
  };
  const initial_methods = date => {
    const descriptions = {
      market: ["大盘趋势研究", "大盘的价格结构是否支持开展有限观察？", "沪深300原始日线、MA5/10/20、N交易日价格变化与20日收盘价回撤", "中期盘后价格结构可提供观察背景；不预设对下层的否决", "供板块研究与组合解释引用", "推进后核对结构、解释与未知是否变化"],
      sector: ["相关板块趋势研究", "给定板块参照是否支持或质疑个股观察？", "路线图板块参照原始日线、均线、N交易日价格变化和相对大盘变化", "给定板块映射仅作参照，历史实际成员归属未知", "解释板块对本次观察的贡献和限制", "核对板块结构、相对表现及参照适用性"],
      stock: ["个股趋势研究", "个股的价格结构是否值得进一步观察？", "不复权原始日线、均线、价格变化、相对变化、回撤；经核实的量比可选", "仅价格结构观察；公司行动未知时价格变化解释受限", "提供支持、反对和未知，供人工组合", "复核原关注点及三层新证据，不以涨跌代替理由"],
      context: ["情境与适用性识别", "本轮各层方法在什么情境下能解释当前证据？", "三层当时可见证据、人工情境说明及已知/未知资料", "情境由研究者解释；不自动贴行情标签", "给各层记录适用、待确认或不适用及原因", "区分对象变化、方法适用变化与资料不足"],
      combination: ["依据组合", "三层判断与其他必要信息共同支持多大范围的观察选择？", "三层已提交判断、支持/反对/未知、方法适用说明及补充资料", "研究顺序不构成自动否决；冲突由人解释", "形成人工选择理由及仍未知的部分", "复核各层贡献、冲突与判断范围是否变化"],
      observation: ["持续观察与复核", "下一时点应关注什么，怎样解释继续、结束或暂缓？", "本轮理由、关注点、历史记录及推进后的三层证据", "观察与买入准备不同；单次结果不证明方法有效", "记录观察选择与下一次复核关注点", "对照原理由重新研究三层并记录变化原因"]
    };
    return Object.fromEntries(method_keys.map(key => {
      const [name, question, inputs, assumptions, output_use, review_basis] = descriptions[key];
      return [key, {key, name, version: 1, id: `${key}:v1`, experimental: true,
        question, required_inputs: inputs, assumptions, output_use, review_basis,
        explanation: `试验假设：${assumptions}。${review_basis}。`, created_as_of_date: date}];
    }));
  };
  const create_state = (dataset, options = {}) => {
    const first_group = dataset.groups?.[0];
    const stock_code = clean(options.stock_code) || first_group?.stocks?.[0]?.code || "";
    const group = dataset.groups?.find(item => item.stocks.some(stock => stock.code === stock_code));
    const dates = calendar(dataset).filter(date => date.startsWith("2025-"));
    const requested_date = clean(options.start_date) || dates[0] || "";
    const as_of_date = dates.filter(date => date <= requested_date).at(-1) || "";
    const periods = Object.fromEntries(layer_keys.map(key => [key, Number(options.periods?.[key] ?? 20)]));
    const methods = initial_methods(as_of_date);
    const state = {
      prototype: true, user_id: "admin", as_of_date,
      input: {stock_code, stock_name: instrument(dataset, stock_code)?.name || stock_code,
        sector_code: group?.sector_code || "", sector_name: group?.sector_name || "",
        market_code: "000300.SH", market_name: "沪深300", requested_start_date: requested_date,
        start_date: as_of_date, question: clean(options.question) || "从价格结构看，这只股票是否值得观察，并在后续时点复核？",
        periods, sector_mapping: "路线图给定的板块参照；2025实际成员归属未知",
        scope: "仅价格结构的有限观察，不涉及买入判断", price_basis: "不复权",
        data_scope: limitations.slice()},
      layers: {market: null, sector: null, stock: null}, methods,
      method_history: Object.values(copy(methods)), extra: {note: "", available_date: "", source: "", required: false, status: "missing"},
      simulate_missing: false, missing_reason: "", decision: null, observation_status: "new",
      records: [], last_feedback: null, log: [], notice: {kind: "info", text: "先查看本轮口径，再依次解释大盘、板块与个股；试验方法不自动决定选择。"}
    };
    if (!group || !instrument(dataset, stock_code)) return error(state, "请选择样本中的给定个股。");
    if (!instrument(dataset, group.sector_code) || !instrument(dataset, "000300.SH")) return error(state, "缺少对应大盘或板块真实行情，无法创建研究。");
    if (!valid_date(requested_date) || !as_of_date || requested_date > dates.at(-1)) return error(state, "研究日期必须是真实日期，且位于已下载的2025年历史区间内。");
    if (layer_keys.some(key => !Number.isInteger(periods[key]) || periods[key] < 5 || periods[key] > 120)) {
      return error(state, "各层观察周期需为5至120个交易日的整数。");
    }
    if (as_of_date !== requested_date) state.notice = {kind: "info", text: `指定日无交易，使用此前最近沪深300交易日 ${as_of_date}。`};
    return state;
  };
  const derive = (state, dataset) => {
    const date = state.as_of_date;
    const dates = calendar(dataset).filter(item => item <= date);
    const by_layer = {market: state.input.market_code, sector: state.input.sector_code, stock: state.input.stock_code};
    const all_bars = Object.fromEntries(layer_keys.map(key => [key, visible_bars(dataset, by_layer[key], date)]));
    const layers = Object.fromEntries(layer_keys.map(layer => {
      const code = by_layer[layer];
      const item = instrument(dataset, code) || {};
      const bars = all_bars[layer];
      const bar_map = new Map(bars.map(bar => [bar.trade_date, bar]));
      const aligned = dates.map(day => bar_map.get(day) || null);
      const period = state.input.periods[layer];
      const from_date = dates.at(-period - 1) || null;
      const latest = bars.at(-1) || null;
      const change = return_between(bars, from_date, date);
      const market_change = return_between(all_bars.market, from_date, date);
      const sector_change = return_between(all_bars.sector, from_date, date);
      const volume_verified = item.volume_verified === true || item.volume_unit_verified === true;
      const avg5 = volume_verified ? mean(aligned, "volume", 5) : null;
      const avg20 = volume_verified ? mean(aligned, "volume", 20) : null;
      const required_count = Math.max(period + 1, 20);
      const required_window = aligned.slice(-required_count);
      const missing_dates = dates.slice(-required_count).filter(day => !bar_map.get(day));
      const complete_window = required_window.length === required_count && required_window.every(bar =>
        bar && ["open", "high", "low", "close"].every(field => numeric(bar[field]) && bar[field] > 0));
      const factors = {ma5: mean(aligned, "close", 5), ma10: mean(aligned, "close", 10), ma20: mean(aligned, "close", 20),
        return_n: change, relative_market_n: layer !== "market" && change !== null && market_change !== null ? change - market_change : null,
        relative_sector_n: layer === "stock" && change !== null && sector_change !== null ? change - sector_change : null,
        max_drawdown_20: max_drawdown(aligned), volume_ratio_5_20: avg5 !== null && avg20 !== null && avg20 > 0 ? avg5 / avg20 : null,
        period, from_date, to_date: date, actual_from_date: from_date && exact_at(bars, from_date) ? from_date : null,
        actual_to_date: bar_map.has(date) ? date : null, available_bars: bars.length};
      return [layer, {layer, code, as_of_date: date, name: item.name || code, kind: item.kind || layer,
        source_id: item.source_id || null, source_url: item.source_url || null,
        price_basis: item.price_basis || "未说明", volume_unit: item.volume_unit || null, volume_verified,
        period, latest: latest ? copy(latest) : null, stale: !bar_map.has(date),
        complete_window, missing_dates,
        bars: copy(bars), window_bars: copy(aligned.slice(-Math.max(period + 1, 40))), factors,
        factor_series: dates.map((day, index) => ({trade_date: day,
          ma5: mean(aligned.slice(0, index + 1), "close", 5),
          ma10: mean(aligned.slice(0, index + 1), "close", 10),
          ma20: mean(aligned.slice(0, index + 1), "close", 20)}))}];
    }));
    const necessary_information = layer_keys.map(layer => ({key: `${layer}_bars`, label: `${layer_names[layer]}真实日线和预热`,
      layer, required: true, status: !layers[layer].stale && layers[layer].complete_window ? "provided" : "missing",
      reason: layers[layer].stale ? "研究时点当天行情未知，不以较早价格替代。" : !layers[layer].complete_window
        ? `本轮窗口存在未知缺口或预热不足${layers[layer].missing_dates.length ? `：${layers[layer].missing_dates.join("、")}` : ""}；不跳过缺口计算。`
        : `截至${date}完整可得；只展示研究时点及之前，均线使用按真实交易日对齐的历史预热。`}));
    necessary_information.push(
      {key: "corporate_actions", label: "历史公司行动与除权事件", layer: "stock", required: false, status: "unknown", reason: "未核实；不复权价格变化不等同于纯收益。"},
      {key: "share_capital", label: "历史股本与换手率口径", layer: "stock", required: false, status: "unknown", reason: "股本历史未核实，未自行推算换手率。"},
      {key: "sector_membership", label: "历史板块归属与成员参与", layer: "sector", required: false, status: "unknown", reason: "仅使用路线图给定参照；成员归属、广度和参与情况未知。"},
      {key: "fundamentals_events", label: "当时可知的基本面、公告与事件", layer: "stock", required: false, status: "unknown", reason: "未完整提供；默认问题收窄为价格结构，若本轮依赖这类信息应补充并设为必要。"},
      {key: "volume_unit", label: "三层成交量来源单位", layer: "all", required: false,
        status: layer_keys.every(key => layers[key].volume_verified) ? "provided" : "unknown",
        reason: "仅计算单位已核实的来源量比；未核实则保留空值。"},
      {key: "historical_publication", label: "历史发布与修订时点", layer: "all", required: false, status: "unknown", reason: "使用当前下载快照，未证实数据在当时的发布与修订版本。"}
    );
    if (state.simulate_missing) necessary_information.push({key: "simulated_missing", label: "模拟：本轮必要资料不足", layer: "all", required: true,
      status: "missing", reason: state.missing_reason || "明确的资料不足模拟；真实行情未被修改。"});
    if (state.extra.required || state.extra.note || state.extra.source) necessary_information.push({key: "extra", label: "本轮补充资料", layer: "all",
      required: state.extra.required, status: state.extra.status, reason: state.extra.note || "本轮指定的补充资料尚未提供。",
      source: state.extra.source || null, available_date: state.extra.available_date || null});
    return {as_of_date: date, layers, necessary_information,
      context: {scope: state.input.scope, limitations: limitations.slice(), simulated_missing: state.simulate_missing,
        metadata: copy(dataset.metadata || {}), has_required_missing: necessary_information.some(item => item.required && item.status !== "provided")},
      methods: copy(state.methods)};
  };
  const log_action = (state, type, description) => state.log.push({id: state.log.length + 1, as_of_date: state.as_of_date, action: type, description});
  const reduce = (state, action, dataset) => {
    if (!action || typeof action.type !== "string") return error(state, "操作缺少类型。");
    const next = copy(state);
    const clear_decision = () => { next.decision = null; };
    switch (action.type) {
      case "save_layer": {
        const layer = action.layer;
        if (!layer_keys.includes(layer)) return error(state, "研究层需为大盘、板块或个股。");
        const earlier = layer_keys.slice(0, layer_keys.indexOf(layer));
        if (earlier.some(key => !next.layers[key])) return error(state, "本次顺序试验先提交大盘，再板块，最后个股；上层结论不自动否决下层。");
        if (!["support", "oppose", "unknown"].includes(action.conclusion)) return error(state, "请选择支持、反对或未知的结论。");
        const support = clean(action.support), against = clean(action.against), unknown = clean(action.unknown);
        if (action.conclusion === "support" && !support) return error(state, "支持结论需要填写支持依据。");
        if (action.conclusion === "oppose" && !against) return error(state, "反对结论需要填写反对依据。");
        if (action.conclusion === "unknown" && !unknown) return error(state, "未知结论需要解释缺少什么、为什么尚不能判断。");
        if (!clean(action.context)) return error(state, "请解释当前情境，而后检查本层方法是否适用。");
        if (!["fit", "uncertain", "unfit"].includes(action.applicability) || !clean(action.applicability_reason)) return error(state, "请留下方法适用性及原因；不确定也需要解释。");
        const visible = derive(next, dataset).layers[layer];
        if (!visible.latest) return error(state, "此时点缺少真实行情，请更换研究时点。");
        next.layers[layer] = {layer, as_of_date: next.as_of_date, conclusion: action.conclusion,
          support, against, unknown, context: clean(action.context), applicability: action.applicability,
          applicability_reason: clean(action.applicability_reason), scope: next.input.scope,
          method_refs: {[layer]: next.methods[layer].id, context: next.methods.context.id},
          method_snapshot: {research: copy(next.methods[layer]), context: copy(next.methods.context)},
          upstream: Object.fromEntries(earlier.map(key => [key, copy(next.layers[key])])), evidence: copy(visible.factors)};
        layer_keys.slice(layer_keys.indexOf(layer) + 1).forEach(key => { next.layers[key] = null; });
        clear_decision();
        log_action(next, action.type, `${layer_names[layer]}已提交${action.conclusion}；保存当时方法版本与人工解释。`);
        next.notice = {kind: "success", text: `${layer_names[layer]}研究已保存。更新上层时，下层需重新解释引用的依据。`};
        break;
      }
      case "save_decision": {
        if (layer_keys.some(key => !next.layers[key])) return error(state, "观察选择前需分别提交本时点的大盘、板块与个股研究。");
        if (!["observe", "continue", "end", "defer"].includes(action.choice)) return error(state, "请选择观察、继续观察、结束观察或暂缓判断。");
        const last_observation = next.records.filter(record => ["observe", "continue", "end"].includes(record.decision.choice)).at(-1);
        if (action.choice === "continue" && (!last_observation || last_observation.decision.choice === "end")) return error(state, "尚未开始观察或此前已结束；请先选择观察，再接续继续观察。");
        if (!clean(action.reason) || !clean(action.focus)) return error(state, "请填写本次选择理由与后续关注点。");
        if (!["object", "method", "evidence", "unchanged"].includes(action.review_cause)) return error(state, "请说明本轮是在复核对象、方法、证据还是维持原判断。");
        const visible = derive(next, dataset);
        if (visible.context.has_required_missing && action.choice !== "defer" && !clean(action.context_note)) return error(state, "本轮有必要资料不足。可暂缓并解释原因，或填写情境备注，明确怎样收窄本次判断范围。");
        const id = `research-${next.records.length + 1}`;
        const decision = {choice: action.choice, reason: clean(action.reason), focus: clean(action.focus),
          review_cause: action.review_cause, context_note: clean(action.context_note), as_of_date: next.as_of_date,
          record_id: id, method_refs: Object.fromEntries(method_keys.map(key => [key, next.methods[key].id]))};
        const record = {id, sequence: next.records.length + 1, prototype: true, user_id: "admin", as_of_date: next.as_of_date,
          input: copy(next.input), visible: copy(visible), layers: copy(next.layers), decision: copy(decision),
          methods: copy(next.methods), question: next.input.question,
          open_questions: layer_keys.map(key => ({layer: key, unknown: next.layers[key].unknown})),
          extra: copy(next.extra), simulated_missing: next.simulate_missing, missing_reason: next.missing_reason,
          data_scope: limitations.slice(), feedback_from_previous: copy(next.last_feedback)};
        next.records.push(record);
        next.decision = decision;
        next.observation_status = {observe: "observing", continue: "observing", end: "ended", defer: "deferred"}[action.choice];
        log_action(next, action.type, `已记录${action.choice}，关联三层证据和全部六项方法版本；不由单层自动决定选择。`);
        next.notice = {kind: "success", text: "本次选择与完整快照已记录。可推进真实交易日，再分别研究三层。"};
        break;
      }
      case "advance": {
        if (![1, 5, 10, 20].includes(action.steps)) return error(state, "可推进1、5、10或20个真实交易日。");
        const prior = next.records.at(-1);
        if (!prior || prior.as_of_date !== next.as_of_date || next.decision?.record_id !== prior.id) return error(state, "先保存本时点的完整观察选择，再推进时间；依据或方法修改后需重新提交。");
        const dates = calendar(dataset).filter(date => date.startsWith("2025-"));
        const index = dates.indexOf(next.as_of_date);
        if (index < 0 || index >= dates.length - 1) return error(state, "已到真实历史样本末尾，没有后续交易日。");
        const next_index = Math.min(index + action.steps, dates.length - 1);
        const old_date = next.as_of_date;
        next.as_of_date = dates[next_index];
        next.layers = {market: null, sector: null, stock: null};
        clear_decision();
        const after = derive(next, dataset);
        next.last_feedback = {previous_record_id: prior.id, from_date: old_date, to_date: next.as_of_date,
          requested_steps: action.steps, actual_steps: next_index - index, prior_choice: prior.decision.choice,
          prior_reason: prior.decision.reason, prior_focus: prior.decision.focus,
          stock_price_change: prior.visible.layers.stock.stale || after.layers.stock.stale ? null : price_change(prior.visible.layers.stock.latest, after.layers.stock.latest),
          layer_changes: Object.fromEntries(layer_keys.map(key => [key, {before: copy(prior.visible.layers[key].factors), after: copy(after.layers[key].factors),
            previous_conclusion: prior.layers[key].conclusion, previous_applicability: prior.layers[key].applicability,
            previous_unknown: prior.layers[key].unknown, price_change: prior.visible.layers[key].stale || after.layers[key].stale ? null : price_change(prior.visible.layers[key].latest, after.layers[key].latest)}])),
          note: "这里是可见价格结构变化，尚待逐层复核；不复权价差不代表纯收益，单次反馈不证明方法有效。"};
        log_action(next, action.type, `从${old_date}推进${next_index - index}个真实交易日至${next.as_of_date}；清空本轮三层判断，保留旧记录。`);
        next.notice = {kind: "success", text: `已推进至${next.as_of_date}。对照原理由，重新解释三层及方法适用性。`};
        break;
      }
      case "revise_method": {
        const key = action.key;
        if (!method_keys.includes(key)) return error(state, "请选择六项方法之一。");
        if (!clean(action.explanation)) return error(state, "方法修订需要说明为什么变更及新的解释。");
        const old = next.methods[key];
        const updated = {...old, version: old.version + 1, id: `${key}:v${old.version + 1}`,
          previous_id: old.id, explanation: clean(action.explanation), created_as_of_date: next.as_of_date};
        next.methods[key] = updated;
        next.method_history.push(copy(updated));
        const affected = key === "context" ? layer_keys : layer_keys.includes(key) ? layer_keys.slice(layer_keys.indexOf(key)) : [];
        affected.forEach(layer => { next.layers[layer] = null; });
        clear_decision();
        log_action(next, action.type, `${old.id}→${updated.id}：${updated.explanation}；历史记录继续关联原版本。`);
        next.notice = {kind: "success", text: `${updated.name}已另存v${updated.version}。${affected.length ? "关联研究需重新提交。" : "观察选择需重新提交。"}旧记录保留原版本；本阶段不比较两套方案。`};
        break;
      }
      case "set_missing": {
        if (typeof action.enabled !== "boolean") return error(state, "资料不足模拟需明确开启或关闭。");
        if (action.enabled && !clean(action.reason)) return error(state, "开启资料不足模拟时需说明缺少什么和为何影响本轮问题。");
        next.simulate_missing = action.enabled;
        next.missing_reason = action.enabled ? clean(action.reason) : "";
        next.layers = {market: null, sector: null, stock: null};
        clear_decision();
        log_action(next, action.type, action.enabled ? `开启明确模拟资料不足：${next.missing_reason}` : "关闭资料不足模拟，真实行情保持原始下载快照。");
        next.notice = {kind: "success", text: "必要资料状态已更新，真实行情未被修改；请重新解释三层并记录判断范围。"};
        break;
      }
      case "set_extra": {
        if (!["provided", "missing"].includes(action.status)) return error(state, "补充资料状态需为已提供或缺失。");
        if (action.available_date && (!valid_date(action.available_date) || action.available_date > next.as_of_date)) return error(state, "资料可得日期必须是真实日期且不晚于研究时点；未来资料不可加入本轮。");
        if (action.status === "provided" && (!clean(action.note) || !clean(action.source) || !clean(action.available_date))) return error(state, "已提供的资料需填写内容、来源和当时可得日期。");
        if (action.required && action.status === "missing" && !clean(action.note)) return error(state, "必要资料缺失时需说明缺少什么。");
        next.extra = {note: clean(action.note), available_date: clean(action.available_date), source: clean(action.source), required: Boolean(action.required), status: action.status};
        next.layers = {market: null, sector: null, stock: null};
        clear_decision();
        log_action(next, action.type, `本轮补充资料更新为${action.status}，${next.extra.required ? "视为必要" : "作为可选输入"}，需重新解释研究依据。`);
        next.notice = {kind: "success", text: "补充资料已保存，需重新提交三层研究；历史记录保持当时的资料快照。"};
        break;
      }
      default: return error(state, "未识别的原型操作。");
    }
    return finish(next);
  };
  return {create_state, derive, reduce, calendar, layer_keys, method_keys, limitations};
})();
