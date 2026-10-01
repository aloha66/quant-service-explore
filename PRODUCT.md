# A 股趋势研究原型

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

本轮按用户调用的 prototype 技能 Logic 分支，使用可直接打开的单文件 HTML/CSS/JavaScript；不是正式前端技术选型。

## Users

个人 A 股研究者，先看历史时点及此前的信息，写下理解和不确定性，再揭晓后续并回看。首次体验者自述为新手，对支撑压力、突破和量能比较存在概念与应用上的困惑。

## Product Purpose

验证极少信息能否支持明确、可追溯的研究判断，以及回看能否暴露下一轮应验证的问题。不是验证投资方法是否有效。

## Capabilities and Constraints

- 个股原型沿用 docs/2026-09-22-stock-research-first-prototype-brief.md，保留为已看过后续的讲解与交互比较。阶段取舍见 docs/prototypes/stock-research-first/stage-gate-2026-09-26.md。
- 板块独立、比较及双向联动已有实际体验；10/1 的反向接续补上阶段三直接缺口，足以开始手动路线图阶段四的一个最小用途探索，仍属于研究总纲阶段一。当前 docs/prototypes/sector-research-first/index.html（research-purpose-v5）接续全部原文，体验“值得继续研究／准备等待买入机会／暂时分不清”，保存后推进既有后续并另存用途重判。板块理解与跟踪独立选填，候选不代表成交或持仓。两者后续已知，成员身份与量额仍缺失。具体改变、判断质量及用途区别未验证；范围与证据见该目录 README.md 和 stage-gate-2026-10-01-round-7.md。第三轮判断及页面按旧版本留档。
- 固定历史时点与日线快照；优先寻找 2025 年案例，无合适案例才看 2024 年。数据口径未核实的字段保留缺失。
- 原判断主动保存后不可覆盖；一次揭晓后续；案例回看与原型发现分别记录。
- 内存运行，明确标识可丢弃原型；具体样本、窗口、跨度和交互仍是试验假设。
- 已生效的图表数值、单位与行情明细规范继续适用于本轮范围。术语遵循 CONTEXT.md。

## Evidence on Hand

最新实际证据为 [2026-10-01 反向接续正文及本次授权原文](docs/prototypes/sector-research-first/experience-2026-10-01-round-7.md)：保存了个股与板块接续理解、后来事实和关联参照用途。正文与 round-5/6 相同，不重复计数。具体影响及判断质量仍未说清；[阶段评审](docs/prototypes/sector-research-first/stage-gate-2026-10-01-round-7.md)只支持开始用途试验，不是方法验证。以下为早期证据留档。

已确认简报、研究大纲、CONTEXT.md、真实历史行情快照，以及 [2026-09-23 首次体验原始记录](docs/prototypes/stock-research-first/experience-2026-09-23.md)、[追加分析](docs/prototypes/stock-research-first/findings-2026-09-23.md)和[2026-09-26 第二轮原文](docs/prototypes/stock-research-first/experience-2026-09-26.md)。第二轮明确说明区间高低、观察位、改变条件与量能基准有帮助，同时仍暴露概念、条件口径和判断质量回看的缺口；不能由单个已知后续案例证明方法有效。

## Open Decisions

2026-10-01 本次研究正文与已有 round-5/6 相同，只新增 subagents/Jev 外发授权，两份重复留档不增加实际体验次数。两位只读子代理评审及主代理原文核对支持开始上述用途试验；本次取得 Jev 去标识摘要建议，非阶段完成证明。完整原文、实际请求返回和 [本轮阶段评审](docs/prototypes/sector-research-first/stage-gate-2026-10-01-round-7.md)分开保存。仍待实际反馈：用途是否有清楚区别、前后理由能否接续、板块独立记录与回读是否增加负担；关联影响具体改了哪里、量额缺失、条件口径和回看质量继续保留。AI 联动分析只是待探索方向。本轮浏览器打开本地文件受 URL 策略拒绝，未绕过；[工程验证范围](docs/prototypes/sector-research-first/verification-2026-10-01-round-7.md)与用户体验分开。以下段落保留历轮当时的取舍，旧“反向仍缺”不是当前状态。

2026-09-27 本次受理的反馈与第三轮逐字节相同，不新增体验证据。现有 `stock-sector-v4` 保持不变，下一步直接体验反向路径；本次未按阶段三完成推进阶段四。[最新本地评审](docs/prototypes/sector-research-first/stage-gate-2026-09-27-round-4.md)与[实际核查范围](docs/prototypes/sector-research-first/verification-2026-09-27-round-4.md)另存。本次 Jev 最小摘要调用也被自动批准审查拒绝，无模型返回；具体请求待明确批准，未绕过或重试。以下保留第三轮取舍与未决问题。

最新反馈与取舍见 [第三轮原文](docs/prototypes/sector-research-first/experience-2026-09-27-round-3.md)及[阶段评审](docs/prototypes/sector-research-first/stage-gate-2026-09-27-round-3.md)。使用者能描述联动中相似、幅度不同与个股自身行情，并提出缺少走势不同案例、差异会否只持续一段时间的疑问；此预期未经验证。下一轮只体验反向接续，按需手选一段对照，不自动标分歧或预测收敛。复用已知后续案例，没有新增独立分歧样本。自身/相对表现/成员参与、条件口径、判断质量与填写负担继续待体验；不追加方法掌握门槛。Jev 实际调用被自动批准审查拒绝，无模型返回；阶段判断来自本地原文，不以概率作证明。
