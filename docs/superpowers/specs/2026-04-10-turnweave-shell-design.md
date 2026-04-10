# Turnweave 壳站设计稿

日期：`2026-04-10`  
状态：`draft-for-review`

## 一、所为何站

`Turnweave`，实时语音产品母站也。首版以产品站、应用壳、平台伏笔并举。  
首发不作新闻/情报/对比站；以产品站、应用壳、平台伏笔三者合一。

其主叙事三层：

1. `Website Agents`
用于官网导购、FAQ、留资、预约、转人工。

2. `Roleplay & Training`
用于 sales / support / interview / language practice。

3. `Platform (Future)`
用于 API、keys、usage、webhooks、SDK、playground。今先露其门，不伪称已开。

一句定位：

> `Turnweave builds real-time voice experiences for websites, teams, and interactive scenes.`

## 二、首版目标

首版务求四事：

1. 可上线，可讲清产品。
2. 可注册，可入 dashboard 壳。
3. 可承接 demo booking、waitlist、future billing。
4. 架构不锁死；日后可接豆包一类 duplex / realtime voice API，亦可长成 API 平台。

非目标：

1. 不做真实时语音能力。
2. 不做真 API keys / usage metering / webhooks。
3. 不做真 Creem 收费闭环。
4. 不在首页把品牌绑死于任一上游模型名。

## 三、用户与转化

首版双主客：

1. B2B 站长 / SaaS / 服务商  
意在网站语音代理、导购、留资、预约。

2. 团队负责人 / 个人进阶用户  
意在 sales/support/interview/language roleplay。

主转化：

1. `Create workspace`
2. `Book demo`

次转化：

1. `Join waitlist`
2. `Request early access`

## 四、信息架构

### 4.1 公开站

1. `/`
首页。讲清三柱：`Website Agents`、`Roleplay`、`Future API`。

2. `/product`
产品总览。

3. `/scenarios/website-agents`
网站语音代理场景页。

4. `/scenarios/roleplay-training`
角色扮演/训练场景页。

5. `/pricing`
价格壳。

6. `/docs`
文档首页壳。

7. `/book-demo`
预约页。

8. `/waitlist`
候补页。

9. `/legal/privacy`
10. `/legal/terms`

### 4.2 应用壳

1. `/login`
2. `/signup`
3. `/app`
4. `/app/workspace`
5. `/app/agents`
6. `/app/scenes`
7. `/app/conversations`
8. `/app/billing`
9. `/app/settings`
10. `/app/docs-preview`

### 4.3 平台伏笔

今不实作，然须预留：

1. `/docs/platform`
2. `/docs/platform/api-reference`
3. `/app/settings/api`
4. `/app/usage`
5. `/app/webhooks`
6. `/app/logs`

## 五、首页骨法

首页次第如下：

1. Hero  
主标题直言结果，不卖空词。  
双 CTA：`Create workspace`、`Book demo`

2. Why now  
点明语音交互入口、场景化工作流、与平台化演进之利。  
措辞须克制，避免任何会被解读为“某特定实时语音能力已正式开放”的表述。

3. Product pillars  
三卡并列：Website Agents / Roleplay / Future API

4. Product preview  
展示 dashboard 壳：workspace、agent、scene、conversation、billing、docs。

5. Scenario strip  
导向 website agents、sales roleplay、support training、interview simulator。

6. Pricing teaser  
给 plan 与计费想象，导入 `/pricing`。

7. Docs teaser  
显示平台化方向与扩展空间，措辞保持克制，不作具体开放承诺。

8. Footer  
含 legal、contact、status、security、book demo。

## 六、视觉方向

总气质：`dark premium motion` 为体，`warm editorial-tech` 为色。

取法：

1. 结构与转化清晰度，可参 Callora / Dialora 一类商业语音站。
2. 但不可做成 call-center 模板站。
3. 必显“voice-native / scenario-native / platform-ready”。

视觉准则：

1. 深底为主，配暖灰、沙金、雾青，不走俗紫。
2. Hero 可有波形/会话画布意象，但不过度噱头。
3. 卡片、仪表、台账皆偏产品化而非宣传图。
4. 移动端与桌面端皆须稳。

## 七、功能壳边界

### 7.1 首版做真

1. signup / login 基本流转
2. dashboard 导航
3. workspace 基础信息存储
4. demo booking 表单提交
5. waitlist 提交
6. settings 基础保存
7. docs / pricing / legal 真页面

### 7.2 首版只作壳

1. realtime voice session
2. live waveform / duplex transport
3. Creem 真 checkout
4. API keys
5. usage metering
6. webhook delivery
7. SDK playground
8. live conversation analytics

壳亦须真像，故字段、导航、台账、空状态皆先备。

## 八、SEO / GEO 方略

SEO / GEO 须为产品服务，不反使产品为内容奴。

核心原则：

1. 每一 SEO 页皆导向某一产品动作。
2. 每一场景页皆须对应 dashboard 内某一路径或未来能力。
3. 不做泛资讯农场。
4. 对外内容避免使用“先壳后接”“等待某模型开放”等直白过渡话术。

首版内容层：

1. `/scenarios/website-agents`
2. `/scenarios/roleplay-training`
3. 后续可扩：
   - `/scenarios/ai-sales-roleplay`
   - `/scenarios/ai-support-training`
   - `/scenarios/ai-interview-simulator`
   - `/scenarios/ai-language-roleplay`

内容写法：

1. 讲问题、流程、可见结果。
2. 嵌真实 UI 截图/壳图。
3. CTA 直入 signup 或 book demo。
4. schema、metadata、open graph、FAQ structured data 皆配。

GEO 方略：

1. 首页与场景页用清晰实体表达：what it is / who it is for / what it does。
2. docs 与 product 页形成可引用事实层。
3. pricing、security、legal、contact 完整，以增可信。
4. 产品文案保持可升级：今可作产品总述，后若真能力上线，可直接替换为上线版叙事，无须重写站点结构。

## 九、渲染与前端策略

用户新指示：`网页渲染要在后端`。故首版以 SSR / server-first 为准。

实施原则：

1. 首页、产品页、场景页、pricing、docs、legal 皆服务端渲染。
2. 动态 metadata 由服务端产出。
3. dashboard 可混合：壳态页面仍优先 server-render，再以少量 client interactivity 补交互。
4. 不做重前端首屏依赖。
5. 页面必须在无 JS 或弱 JS 条件下仍能表达核心内容。

## 十、技术栈

推荐：

1. `Next.js + TypeScript`
2. `Tailwind CSS + shadcn/ui`
3. `Cloudflare Pages` 部署前台
4. `Cloudflare Workers` 预留后续 webhook / API proxy / realtime relay
5. `Supabase` 承 auth + users + workspace + form submissions
6. `MDX / local content files` 承 docs 与场景内容

取此之故：

1. 起站速。
2. SSR 友。
3. 营销页、dashboard、docs 可共栈。
4. 后续接 billing / API / realtime 能平滑演进。

## 十一、数据模型初稿

首版至少有下列实体：

1. `users`
2. `workspaces`
3. `agents`
4. `scenes`
5. `conversations`
6. `demo_requests`
7. `waitlist_entries`
8. `plans`

未来预留：

1. `api_keys`
2. `usage_events`
3. `webhook_endpoints`
4. `billing_customers`
5. `billing_invoices`
6. `conversation_sessions`

## 十二、Billing 与 Creem

今轮只作壳，不作真收费。

须预留之界面：

1. plan cards
2. upgrade CTA
3. billing center
4. invoices list placeholder
5. payment method placeholder

须预留之代码边界：

1. `lib/billing/creem.ts`
2. `createCheckoutSession()` mock
3. `handleBillingWebhook()` shell
4. plan / credits / invoice types

后日可参考 `scanlume.com` 既有 Creem 接法复用。

## 十三、邮箱与客服收件

目标地址：`suporte@turnweave.com`

首选：

1. Zoho 中增 alias 或 mailbox

次选：

1. Cloudflare Email Routing forward 至 `suporte@scanlume.com`

本轮设计结论：

1. 以 `alias or forward` 即足。
2. 可由后续实施阶段用 web access 直接操作 Zoho / DNS。

## 十四、部署

首发部署于 `Cloudflare`。

建议步骤：

1. GitHub 仓库：`https://github.com/daanaagua/turnweave.git`
2. Cloudflare Pages 连接仓库
3. 绑定 `turnweave.com`
4. 配环境变量
5. 预览分支 + 生产分支
6. 后续按需增 Workers / D1 / KV / Email Routing

## 十五、错误处理

首版须显式处理：

1. auth 失败
2. 表单提交失败
3. empty workspace
4. no agents / no scenes / no conversations
5. billing unavailable
6. docs not yet available

策略：

1. 空态可解释
2. coming soon 须诚实
3. 错误提示不泄内部实现

## 十六、验证

首版验收以四类：

1. 叙事验收  
陌生访客于 10 秒内知其为何物，且知可做 website agents 与 roleplay。

2. 转化验收  
可完成 signup、book demo、waitlist。

3. 结构验收  
dashboard、billing、docs 之壳皆可走通，不现断路。

4. SEO / SSR 验收  
页面源代码中可见核心内容、metadata、structured data；首屏可由服务端完整输出。

## 十七、实施次序

1. 起 Next.js 项目与基础设计系统
2. 做公开站：首页 / product / scenarios / pricing / docs / legal
3. 做 auth 与 dashboard 壳
4. 做 forms 与 basic persistence
5. 做 Cloudflare 部署
6. 做 Creem 接口壳
7. 做 Zoho alias 或 Cloudflare forward
8. 补 SEO / GEO / schema / OG / sitemap

## 十八、待后续实施时再确认

1. Supabase 区域与项目名
2. Cloudflare 账户 / Pages 项目名
3. Creem 复用 `scanlume.com` 之何部分
4. Zoho 当前账户是否支持跨域 alias
5. `suporte@turnweave.com` 取 alias、mailbox、抑或 forward

---

此稿所定者，为 `B 型产品壳 + C 型平台伏笔`。  
若无大改，下一步当据此写 implementation plan，并开工搭站。
