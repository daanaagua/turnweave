export type TopicLink = {
  href: string;
  title: string;
  body: string;
};

export type TopicSourceLink = {
  label: string;
  href: string;
};

export type TopicFaq = {
  question: string;
  answer: string;
};

export type TopicPageContent = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  panelTitle: string;
  panelItems: string[];
  answerTitle: string;
  answerDescription: string;
  answerBody: string[];
  sourceTitle: string;
  sourceDescription: string;
  sourceLinks: TopicSourceLink[];
  fitTitle: string;
  fitDescription: string;
  fitLinks: TopicLink[];
  relatedTitle: string;
  relatedDescription: string;
  relatedLinks: TopicLink[];
  faqs: TopicFaq[];
};

export const topicPages = {
  "full-duplex-voice-ai": {
    slug: "full-duplex-voice-ai",
    title: "Full-Duplex Voice AI",
    description:
      "Understand full-duplex voice AI, why buyers search for it, and which product surfaces benefit most from more natural speech interaction.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    keywords: [
      "full duplex voice ai",
      "what is full duplex voice ai",
      "real time voice ai",
      "speech to speech ai",
    ],
    eyebrow: "Category guide",
    heroTitle: "Full-duplex voice AI matters when the interaction should feel like a conversation, not a button press.",
    heroDescription:
      "Searchers looking for full-duplex voice AI usually want the same three things: interruption handling, lower friction turn control, and a product surface that does not feel trapped inside push-to-talk logic.",
    panelTitle: "What buyers usually mean",
    panelItems: [
      "They want voice behavior that can listen, respond, and recover more naturally than rigid turn-taking flows.",
      "They care about latency, barge-in behavior, and whether the voice layer feels usable in public-facing workflows.",
      "They are often evaluating a website guide, a training scene, or a customer-facing assistant rather than the model in isolation.",
    ],
    answerTitle: "Full-duplex is a product-shaping capability, not just a model benchmark label.",
    answerDescription:
      "The term becomes commercially useful when it helps you choose the right interface, routing pattern, and handoff behavior.",
    answerBody: [
      "A full-duplex voice system can keep track of an ongoing conversation in a way that feels closer to a phone call. That affects how interruptions work, how quickly the system can respond, and how believable the pacing feels to users.",
      "For product teams, the real question is not whether a model claims full-duplex behavior. The more important question is whether that behavior improves a concrete workflow such as discovery on a website, support triage, or guided rehearsal.",
      "That is why most commercial demand around this category lands in voice agents, roleplay training, and operational surfaces that must stay understandable before the voice layer even starts speaking.",
    ],
    sourceTitle: "Source notes",
    sourceDescription:
      "These links help anchor the term in public model and API surfaces instead of vague marketing language.",
    sourceLinks: [
      {
        label: "ByteDance Seed on Seeduplex",
        href: "https://seed.bytedance.com/en/blog/introducing-seed-full-duplex-speech-llm-attentive-listening-robust-interference-suppression-enabling-more-natural-interaction",
      },
      {
        label: "OpenAI Realtime API overview",
        href: "https://developers.openai.com/api/docs/guides/realtime",
      },
      {
        label: "Google Gemini Live API overview",
        href: "https://ai.google.dev/api/multimodal-live",
      },
    ],
    fitTitle: "Where full-duplex interest turns into product demand",
    fitDescription:
      "These routes connect category-level search traffic to workflows that buyers can actually adopt.",
    fitLinks: [
      {
        href: "/ai-website-agents",
        title: "AI website agents",
        body: "For public sites that need guidance, qualification, and a calmer path into booking or follow-up.",
      },
      {
        href: "/voice-roleplay-training",
        title: "Voice roleplay training",
        body: "For coaching, rehearsal, and practice flows where pacing and interruption behavior affect realism.",
      },
      {
        href: "/seeduplex",
        title: "Seeduplex explainer",
        body: "For readers who entered the category through the model name rather than the product use case.",
      },
    ],
    relatedTitle: "Related comparison routes",
    relatedDescription:
      "These pages help the cluster answer vendor-specific searches without pretending every buyer wants a benchmark table.",
    relatedLinks: [
      {
        href: "/seeduplex-vs-gpt-4o-voice",
        title: "Seeduplex vs GPT-4o voice",
        body: "A buyer-oriented comparison between Seeduplex interest and the OpenAI realtime voice stack.",
      },
      {
        href: "/seeduplex-vs-gemini-live",
        title: "Seeduplex vs Gemini Live",
        body: "A practical comparison for teams choosing between model ecosystems and product surfaces.",
      },
      {
        href: "/docs",
        title: "Docs index",
        body: "The public docs route keeps these explainers discoverable for both search crawlers and AI systems.",
      },
    ],
    faqs: [
      {
        question: "What is full-duplex voice AI?",
        answer:
          "It refers to voice systems designed for more natural two-way interaction, where listening, interruption handling, and response timing feel less mechanical than strict turn-by-turn flows.",
      },
      {
        question: "Why does full-duplex matter for websites?",
        answer:
          "It can reduce friction in guided discovery, booking, qualification, and FAQ flows because visitors do not need to adapt as much to a rigid voice interface.",
      },
      {
        question: "Is full-duplex only useful for consumer chat?",
        answer:
          "No. It is often more valuable in guided commercial workflows such as support, onboarding, sales qualification, and training scenes.",
      },
    ],
  },
  "seeduplex-vs-gpt-4o-voice": {
    slug: "seeduplex-vs-gpt-4o-voice",
    title: "Seeduplex vs GPT-4o Voice",
    description:
      "A practical comparison for buyers searching Seeduplex vs GPT-4o voice, with a focus on product fit, routing, and public voice workflows.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    keywords: [
      "seeduplex vs gpt-4o voice",
      "seeduplex vs openai realtime",
      "gpt-4o voice comparison",
      "realtime voice ai comparison",
    ],
    eyebrow: "Comparison guide",
    heroTitle: "When people search Seeduplex vs GPT-4o voice, they are usually comparing product routes, not just model names.",
    heroDescription:
      "As of April 10, 2026, ByteDance frames Seeduplex around full-duplex speech behavior, while OpenAI's public developer surface centers on the Realtime API and the gpt-realtime model family. Buyers typically care about browser delivery, interruption handling, and whether a workflow belongs on a website, in a support flow, or inside a training scene.",
    panelTitle: "Safe framing on April 10, 2026",
    panelItems: [
      "Seeduplex is the model term buyers now search because ByteDance Seed publicly introduced it on April 9, 2026.",
      "OpenAI's current public API route for live voice is the Realtime API, with WebRTC, WebSocket, and SIP connection options documented in official docs.",
      "For commercial teams, the comparison is rarely abstract model quality. It is usually about where the voice layer lives and how much operational control the product needs.",
    ],
    answerTitle: "Use this comparison to choose an operating surface, not to force a universal winner.",
    answerDescription:
      "The better question is which stack best matches the workflow you need to ship and control.",
    answerBody: [
      "If the goal is a browser-based voice agent, the important questions are session control, moderation boundaries, business logic placement, and how the user enters or exits the conversation. Official OpenAI docs now make those operational layers explicit through the Realtime API and sideband control patterns.",
      "If the goal is to understand what made Seeduplex interesting in the first place, the ByteDance framing is about attentive listening, robustness under interference, and natural back-and-forth. That search intent often maps to a public voice experience or a guided rehearsal product.",
      "For most teams, the practical next step is to define the product shell first: public website agent, training scene, or platform workflow. Once that surface is clear, model choice becomes easier to evaluate without muddy benchmark claims.",
    ],
    sourceTitle: "Primary sources",
    sourceDescription:
      "The page stays grounded in official product or developer documents rather than secondary benchmark threads.",
    sourceLinks: [
      {
        label: "ByteDance Seed: introducing Seeduplex",
        href: "https://seed.bytedance.com/en/blog/introducing-seed-full-duplex-speech-llm-attentive-listening-robust-interference-suppression-enabling-more-natural-interaction",
      },
      {
        label: "OpenAI Realtime API overview",
        href: "https://developers.openai.com/api/docs/guides/realtime",
      },
      {
        label: "OpenAI gpt-realtime model page",
        href: "https://developers.openai.com/api/docs/models/gpt-realtime",
      },
    ],
    fitTitle: "Product routes that absorb this search intent well",
    fitDescription:
      "Instead of ending on a comparison page, visitors should land in a route that makes the trade-off concrete.",
    fitLinks: [
      {
        href: "/ai-website-agents",
        title: "AI website agents",
        body: "Useful when the buyer wants a public-facing guide, qualification layer, or booking surface.",
      },
      {
        href: "/voice-roleplay-training",
        title: "Voice roleplay training",
        body: "Useful when realism, timing, and interruption handling matter more than generic chatbot output.",
      },
      {
        href: "/full-duplex-voice-ai",
        title: "Full-duplex voice AI",
        body: "Useful when the visitor needs the category explained before they can compare vendors well.",
      },
    ],
    relatedTitle: "Continue the cluster",
    relatedDescription:
      "These adjacent routes keep the comparison page from becoming an isolated dead end.",
    relatedLinks: [
      {
        href: "/seeduplex",
        title: "What is Seeduplex?",
        body: "For users who searched the model name first and still need the category explained.",
      },
      {
        href: "/seeduplex-vs-gemini-live",
        title: "Seeduplex vs Gemini Live",
        body: "For teams also weighing Google's Live API route for bidirectional voice work.",
      },
      {
        href: "/product",
        title: "Product overview",
        body: "The broader shell shows where website agents and training scenes sit in the public product model.",
      },
    ],
    faqs: [
      {
        question: "Is GPT-4o voice the same as OpenAI Realtime API?",
        answer:
          "Not exactly. As of April 10, 2026, OpenAI's public developer documentation centers on the Realtime API and gpt-realtime for live voice sessions, even though many buyers still search using the older GPT-4o voice label.",
      },
      {
        question: "What should buyers compare first?",
        answer:
          "Start with workflow fit: website guidance, call-like support, training scenes, moderation needs, and whether your product should route through a browser, backend, or telephony layer.",
      },
      {
        question: "Does this page claim one model is better?",
        answer:
          "No. It is meant to help buyers frame the comparison in practical product terms and move toward the right workflow surface.",
      },
    ],
  },
  "seeduplex-vs-gemini-live": {
    slug: "seeduplex-vs-gemini-live",
    title: "Seeduplex vs Gemini Live",
    description:
      "A practical Seeduplex vs Gemini Live guide for teams comparing full-duplex voice AI, Live API routes, and real-time product surfaces.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    keywords: [
      "seeduplex vs gemini live",
      "gemini live api comparison",
      "seeduplex vs google live api",
      "full duplex voice ai comparison",
    ],
    eyebrow: "Comparison guide",
    heroTitle: "Seeduplex vs Gemini Live is usually a question about ecosystem fit, not a single benchmark chart.",
    heroDescription:
      "As of April 10, 2026, ByteDance has publicly introduced Seeduplex as a full-duplex speech model category, while Google documents the Gemini Live API as a preview WebSocket-based API for low-latency voice and video interaction. The practical choice depends on where the session lives, how much control you need, and what kind of product the voice layer serves.",
    panelTitle: "Public signals on April 10, 2026",
    panelItems: [
      "Seeduplex search interest is driven by ByteDance Seed's recent public launch language around natural, interruption-aware speech interaction.",
      "Google's developer-facing Live API is explicitly documented as a preview and uses a stateful WebSocket session model.",
      "The commercial comparison usually hinges on orchestration, integration style, and what the buyer wants the user to accomplish in the session.",
    ],
    answerTitle: "The most useful comparison asks what kind of session your product is trying to host.",
    answerDescription:
      "A website guide, a multimodal assistant, and a training simulator can all need different operational boundaries.",
    answerBody: [
      "Gemini Live often enters the conversation when teams want a broader multimodal session model, especially where audio, video, or assistant-like behavior are all part of the same flow. Google's Live API docs make the session structure and preview status explicit.",
      "Seeduplex enters the conversation when buyers care about natural back-and-forth voice behavior and want to understand what full-duplex interaction might unlock in practice. That curiosity often becomes a product decision around website agents or training experiences.",
      "A strong evaluation process starts with the product shell. Define the session entry point, handoff path, moderation needs, and telemetry you want. Only then does the model ecosystem comparison become durable enough to act on.",
    ],
    sourceTitle: "Primary sources",
    sourceDescription:
      "These official documents are the cleanest way to understand how both routes are described publicly.",
    sourceLinks: [
      {
        label: "ByteDance Seed: introducing Seeduplex",
        href: "https://seed.bytedance.com/en/blog/introducing-seed-full-duplex-speech-llm-attentive-listening-robust-interference-suppression-enabling-more-natural-interaction",
      },
      {
        label: "Google Gemini Live API overview",
        href: "https://ai.google.dev/api/multimodal-live",
      },
      {
        label: "Google Live API WebSockets reference",
        href: "https://ai.google.dev/api/live",
      },
    ],
    fitTitle: "Routes that keep the comparison actionable",
    fitDescription:
      "These pages give the visitor a clear next step after understanding the ecosystem difference.",
    fitLinks: [
      {
        href: "/ai-website-agents",
        title: "AI website agents",
        body: "Best for visitors who want public-facing discovery, qualification, and calmer next-step routing.",
      },
      {
        href: "/voice-roleplay-training",
        title: "Voice roleplay training",
        body: "Best for rehearsal workflows where response pacing and interruption behavior shape realism.",
      },
      {
        href: "/full-duplex-voice-ai",
        title: "Full-duplex voice AI",
        body: "Best for readers who still need the category terminology decoded before comparing platforms.",
      },
    ],
    relatedTitle: "Neighbor pages in this cluster",
    relatedDescription:
      "These routes reinforce topical authority and answer adjacent buyer questions without padding the page.",
    relatedLinks: [
      {
        href: "/seeduplex",
        title: "What is Seeduplex?",
        body: "A term explainer for readers who first encountered the model name and need context.",
      },
      {
        href: "/seeduplex-vs-gpt-4o-voice",
        title: "Seeduplex vs GPT-4o voice",
        body: "A parallel comparison page for teams weighing the OpenAI route against Seeduplex interest.",
      },
      {
        href: "/docs",
        title: "Docs index",
        body: "A clear index of product and model explainers that search crawlers can discover easily.",
      },
    ],
    faqs: [
      {
        question: "Is Gemini Live an API or just an app feature?",
        answer:
          "Both labels appear in the market, but as of April 10, 2026, Google publicly documents a Gemini Live API for low-latency interactions and marks it as preview in developer docs.",
      },
      {
        question: "Why would a buyer compare Seeduplex with Gemini Live?",
        answer:
          "They usually want to know which ecosystem better fits a real-time voice product, especially when session behavior, orchestration, and multimodal scope matter.",
      },
      {
        question: "Should this page be read as a benchmark result?",
        answer:
          "No. It is a practical framing page for product teams, not an official head-to-head benchmark report.",
      },
    ],
  },
  "ai-website-agents": {
    slug: "ai-website-agents",
    title: "AI Website Agents",
    description:
      "AI website agents for public pages, guided discovery, qualification, booking, and conversational routing.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    keywords: [
      "ai website agents",
      "website voice agent",
      "ai website assistant",
      "voice agent for websites",
    ],
    eyebrow: "Commercial route",
    heroTitle: "AI website agents work best when visitors need guidance before they are ready to submit a form.",
    heroDescription:
      "This route captures buyers who are not shopping for model trivia. They want a public-facing assistant that can explain, qualify, route, and keep the website experience calm instead of forcing visitors into static copy or a hard contact form.",
    panelTitle: "What the page should answer fast",
    panelItems: [
      "Where an AI website agent belongs in a modern funnel.",
      "Why conversational discovery can outperform a form-first dead end for high-intent visitors.",
      "How voice-native guidance connects to booking, handoff, and follow-up without making the site feel noisy.",
    ],
    answerTitle: "The real value of an AI website agent is not novelty. It is better guidance at the moment of intent.",
    answerDescription:
      "That is why this page should route naturally into product, booking, and scenario-specific flows.",
    answerBody: [
      "A strong website agent helps the visitor move. It answers the first serious question, reduces friction around the second, and then routes cleanly toward a booking, contact, or follow-up path.",
      "Voice matters when the website journey is too nuanced for static FAQ blocks. The visitor may want to ask a layered question, clarify uncertainty, or get help narrowing the next step without leaving the page.",
      "This is also one of the cleanest places to convert model-category interest into product demand. Visitors who search for Seeduplex or full-duplex voice AI often end up wanting a website surface that feels more conversational and less brittle.",
    ],
    sourceTitle: "Supporting context",
    sourceDescription:
      "These supporting pages help connect buyer language, model awareness, and the public website workflow.",
    sourceLinks: [
      { label: "Website agents scenario", href: "/scenarios/website-agents" },
      { label: "What is Seeduplex?", href: "/seeduplex" },
      { label: "Full-duplex voice AI", href: "/full-duplex-voice-ai" },
    ],
    fitTitle: "Best adjacent routes",
    fitDescription:
      "These links move the visitor from keyword intent into a fuller product understanding.",
    fitLinks: [
      {
        href: "/scenarios/website-agents",
        title: "Website agents scenario",
        body: "The product-shaped scenario page explains how guided discovery and handoff work in the shell.",
      },
      {
        href: "/product",
        title: "Product overview",
        body: "The overview places website agents alongside training scenes and the broader platform-ready frame.",
      },
      {
        href: "/book-demo",
        title: "Book a demo",
        body: "The commercial CTA is close enough to intent that it should remain part of the cluster.",
      },
    ],
    relatedTitle: "Related topic pages",
    relatedDescription:
      "These routes help searchers step sideways into the category or comparison pages when needed.",
    relatedLinks: [
      {
        href: "/voice-roleplay-training",
        title: "Voice roleplay training",
        body: "The sister commercial route for coaching, rehearsal, and practice surfaces.",
      },
      {
        href: "/seeduplex-vs-gpt-4o-voice",
        title: "Seeduplex vs GPT-4o voice",
        body: "Helpful when a buyer enters through a vendor comparison query rather than a product query.",
      },
      {
        href: "/seeduplex-vs-gemini-live",
        title: "Seeduplex vs Gemini Live",
        body: "A parallel comparison route for teams exploring the Google ecosystem.",
      },
    ],
    faqs: [
      {
        question: "What is an AI website agent?",
        answer:
          "An AI website agent is a conversational layer on a public site that helps visitors understand the offer, qualify intent, and move toward a clear next step.",
      },
      {
        question: "Why add voice to a website agent?",
        answer:
          "Voice can make high-intent questions feel easier to ask and answer, especially when the visitor needs clarification rather than a one-line FAQ.",
      },
      {
        question: "Is this page only for live voice deployments?",
        answer:
          "No. The route is useful at the product-planning layer too, because it frames the workflow before the exact voice stack is chosen.",
      },
    ],
  },
  "voice-roleplay-training": {
    slug: "voice-roleplay-training",
    title: "Voice Roleplay Training",
    description:
      "Voice roleplay training for sales, support, interview prep, coaching, and scenario-based conversational practice.",
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    keywords: [
      "voice roleplay training",
      "ai sales roleplay",
      "support training simulator",
      "voice interview practice",
    ],
    eyebrow: "Commercial route",
    heroTitle: "Voice roleplay training shines when realism, pacing, and interruption handling shape the learning outcome.",
    heroDescription:
      "This route is for teams and individuals who want a training surface, not just a chatbot demo. The goal is a rehearsal environment where speech timing, objection handling, and conversational flow feel believable enough to practice against.",
    panelTitle: "Why this page converts",
    panelItems: [
      "It answers a concrete job to be done: practice a difficult conversation before the real one.",
      "It ties voice quality to training realism, not just novelty or entertainment.",
      "It links model-category interest to a repeatable workflow that can support teams, individuals, and future platform controls.",
    ],
    answerTitle: "Training is often the clearest commercial use case for richer real-time voice behavior.",
    answerDescription:
      "What matters is not only response speed. It is whether the trainee can rehearse in a flow that feels credible enough to build judgment.",
    answerBody: [
      "Sales, support, interview, and language-practice scenarios all benefit when the conversation does not feel frozen between turns. More natural timing makes the pressure of the exercise feel closer to a live conversation.",
      "That does not mean every training product needs the same stack. Some teams care most about repeatable scoring and analytics, while others care more about immersion and role fidelity. The product shell should make that trade-off clear.",
      "Search traffic from Seeduplex, full-duplex voice AI, or comparison queries often lands here because the visitor is really looking for a believable practice environment, not a research note.",
    ],
    sourceTitle: "Supporting context",
    sourceDescription:
      "These routes help anchor the training page in both the product shell and the surrounding model-category cluster.",
    sourceLinks: [
      { label: "Roleplay and training scenario", href: "/scenarios/roleplay-training" },
      { label: "Full-duplex voice AI", href: "/full-duplex-voice-ai" },
      { label: "What is Seeduplex?", href: "/seeduplex" },
    ],
    fitTitle: "Best next routes",
    fitDescription:
      "These pages deepen the commercial story instead of leaving the visitor in abstract category language.",
    fitLinks: [
      {
        href: "/scenarios/roleplay-training",
        title: "Roleplay and training scenario",
        body: "The scenario page translates the category into a specific product flow for practice and coaching.",
      },
      {
        href: "/product",
        title: "Product overview",
        body: "Useful when the visitor wants to see how training scenes fit into the broader Turnweave shell.",
      },
      {
        href: "/waitlist",
        title: "Join the waitlist",
        body: "A softer CTA for visitors who understand the use case but are not ready to book a demo yet.",
      },
    ],
    relatedTitle: "Related topic pages",
    relatedDescription:
      "These links keep the training route connected to adjacent commercial and comparison intent.",
    relatedLinks: [
      {
        href: "/ai-website-agents",
        title: "AI website agents",
        body: "The adjacent commercial route for guided discovery and public-site qualification.",
      },
      {
        href: "/seeduplex-vs-gpt-4o-voice",
        title: "Seeduplex vs GPT-4o voice",
        body: "Helpful when the visitor is still deciding how to frame the vendor comparison.",
      },
      {
        href: "/seeduplex-vs-gemini-live",
        title: "Seeduplex vs Gemini Live",
        body: "A second comparison route for teams exploring Google's live voice stack.",
      },
    ],
    faqs: [
      {
        question: "What is voice roleplay training?",
        answer:
          "It is a training surface where people practice conversations such as sales calls, support interactions, interviews, or language exercises through a guided voice experience.",
      },
      {
        question: "Why does voice quality matter in training?",
        answer:
          "Because pacing, interruption handling, and conversational pressure affect whether the exercise feels realistic enough to improve judgment.",
      },
      {
        question: "Who is this route for?",
        answer:
          "It fits sales teams, support managers, coaches, job seekers, and product teams designing a repeatable rehearsal workflow.",
      },
    ],
  },
} satisfies Record<string, TopicPageContent>;

export const topicPageList = Object.values(topicPages);
