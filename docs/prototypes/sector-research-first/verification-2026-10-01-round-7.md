# 用途试验的工程检查与证据边界

日期：2026-10-01。阶段结论见 [本轮评审](stage-gate-2026-10-01-round-7.md)，本文件只记录实际执行的工程核查，不是用户体验或方法验证。

## 原文、去重及工作区

- 本轮开始先执行 `git status --short`；保留 Makefile、PRODUCT、个股简报和体验文件、全部未跟踪板块目录及 Impeccable 文件，不提交、不推送。
- 排他创建 [request-2026-10-01-round-7.txt](request-2026-10-01-round-7.txt)，完整附件字节未改；体验标记后的原文逐字节保存于 [experience-2026-10-01-round-7.md](experience-2026-10-01-round-7.md)，包括末尾新增的执行授权，分析另写。
- request 为 24542 字节，SHA-256 `024f4a34823d3848165e86c039fdc56659cacba8ee2acfc722bd6aba1edceb51`；experience 为 17711 字节，SHA-256 `bbb6327394078b99d5b5d732b70e9b6afa7aefb07dd1d6ce71ccb0bb29468e9d`。
- 本次 experience 的前 17448 字节与 round-5/6 完全一致，额外 263 字节仅是新增 subagents/Jev 及外发授权。正文的 10/1 三段记录相对 9/27 新增，但多份受理不增加体验次数；round-3 全文逐字符包含于本次正文。
- 开始时 `index.html` 与 `index-v4.html` 完全相同，仍为 `stock-sector-v4`。DESIGN 已声称 v5 且引用缺失 round-5 文件，README/PRODUCT 则停在旧阶段状态。前者不是本次代码或检查证据；保留旧说明并在最新入口注明实际差异。

## 子代理与外部评审

两位只读子代理分别核对完整原文与阶段依据、已有实现及最小延伸必要性，均返回后才写原型代码。阶段质疑始终只读；实现核查子代理随后受派实现本轮最小延伸。

主代理在本次新增明确外发授权后执行 Jev。两次工具调用分别是输入参数校验失败、修正参数后的一个语义结果；没有为了改变排序重复调用。最小摘要没有身份、对象、日期、行情、路径或完整原文。实际 request、response 及概率的范围见 [Jev 记录](jev-stage-review-2026-10-01-round-7.json)。前次拒绝仍属于旧轮次，本次没有被拒绝的语义调用。

## 浏览器操作受阻

本轮用 CUA 读取可用浏览器后，尝试一次在 in-app browser 打开 `file:///Users/aloha66/code/quant-service-explore/docs/prototypes/sector-research-first/index.html`。返回：

> Browser Use rejected this action due to browser security policy. Reason: The browser URL policy blocks this action. Browser use cannot visit the requested page. The requested URL protocol is not allowed. Allowed protocols: "http:", "https:". The agent must not attempt to achieve the same outcome via workaround, indirect execution, raw CDP or browser commands, alternate browser surfaces, or policy circumvention. Proceed only with a materially safer alternative that does not require this blocked browser action; if none exists, stop and request user input.

未更换协议、localhost、浏览器表面、原始浏览器命令或间接执行。`make -n prototype-sector-research` 只核对打开文件的命令，没有实际执行 `make` 来绕过拒绝。

本轮没有页面加载、桌面/手机操作闭环、截图、浏览器脚本异常或实际溢出检查。只查看既有 v4 桌面截图作为沿用视觉的参考，核对它与现有 CSS 及布局相符；旧截图不作为本轮验收。触屏长按、键盘操作、下载/复制、保存后滚动聚焦和窄屏实际表现均待手动检查。

## 本轮实现与静态核查

- 当前实现为 `research-purpose-v5`，新增 [research-purpose-case.json](research-purpose-case.json)。主代理逐值核对：内嵌案例等于该文件；原 `reverse-case.json` 的每一个原字段及其值完全保留，只新增 `purpose_case` 元数据。两条仍各 80 日、前 60 日截至 8/8，后 20 日至 9/5；没有新增采集。
- HTML 内嵌研究正文逐字符等于 round-6 的 17448 字节正文，本轮请求末尾的执行/外发授权不进入研究记录。内嵌正文 SHA-256 等于 `purpose_case.original_record_sha256`；旧原判断、反向原话、全部时间与依据未润色。
- CSS 与 `index-v4.html` 逐字符一致；图表函数沿用数据驱动实现。8/26 的收盘减开盘，指数为正、个股为负，与此页蜡烛红绿定义一致；这一单日核对不说明长期联动规律、成员整体参与或价格回报优劣。
- 本轮一次运行 `.agents/skills/impeccable/scripts/impeccable detect --json docs/prototypes/sector-research-first/index.html`，exit 2：一个 `cramped-padding` warning（section 贴 border-top/left，无具体行）及 14 项颜色/字阶 advisory。来源为继承 CSS 和图表字面颜色；不将它称为检测全通过，不据此修复无关元数据或重构界面。交给独立 finish review 结合本轮范围评估。
- 实现子代理实际通过当前 HTML 脚本 `node --check` 及临时纯 `Session` smoke。Smoke 覆盖首次保存前拒绝推进、锁定后拒绝覆盖、推进后重判、用途保持或分不清、追加、重做及依据快照独立性；静态断言覆盖 HTML DOM 引用、原文/JSON/CSS 一致性。没有新建测试套件或执行无关后端测试；这些检查不能证明 DOM 事件、下载、浏览器布局或用户体验。
- 实现子代理核对四份所用来源快照哈希匹配原记录；`index-v4.html` 保留原 SHA-256 `56a33d896912efe41a458b5630b4bdca349ee75d9280a5a0fbde8483701388f6`。
- 新上下文独立 `impeccable_finish_reviewer` 返回完整五个审查章节，disposition 为 `ship`，明确只限静态代码与产品契约，未发现实质阻断项；浏览器和视觉仍未验证。[实际审查记录](../../../.impeccable/review/research-purpose-v5-round-7/static-review.md)单独留档，不能将它称为完整界面验收。
- 独立 documenter 仅前置本轮实际 [DESIGN 记录](DESIGN.md)，把旧 v5 声明标为历史未核实留档并保留原文；没有修复旧 round-5 缺失引用或全局元数据。新增设计段链接均存在，证据仅来自源码及本轮交接。
- 主代理最终按开始时 59 份文件的哈希清单核对：55 份字节不变，只修改当前 index、README、DESIGN、PRODUCT；无旧文件被删除。旧页面、来源快照、体验原文及其他工作区改动保持。完整 request 仍与附件逐字节相同；本轮当前文档的本地链接均存在，`git diff --check` 通过。没有提交或推送。
- 最终 `index.html` SHA-256 为 `28690b427fffc4f660a29261563dbe2a8315a35c4fec966327c831510345dace`。本次检查范围如上，未将静态结果升级为浏览器或视觉通过。

## 需要实际反馈的范围

用户尚未体验阶段四：用途区别、保持或改变用途的理由、是否能找回原研究及记录负担仍待实际反馈。阶段三具体影响、原判断质量、量额和成员关系缺失、不同走势持续时间继续开放。本轮工程检查不能替这些问题作结论。
