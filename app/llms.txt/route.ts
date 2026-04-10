import { topicPageList } from "@/content/topics";
import { siteConfig } from "@/lib/site";

const topicRoutes = topicPageList
  .map((page) => `- /${page.slug} : ${page.title.toLowerCase()} guide`)
  .join("\n");

const body = `# ${siteConfig.name}

Turnweave is a server-rendered website for voice-native product experiences.

## Core routes
- / : homepage and product framing
- /product : product overview
- /pricing : plan structure
- /docs : public docs shell
- /scenarios/website-agents : website agent use case
- /scenarios/roleplay-training : roleplay and training use case
- /seeduplex : independent model explainer
${topicRoutes}

## Summary
Turnweave focuses on website agents, training scenes, and platform-ready workflow surfaces for voice experiences.

## Contact
- ${siteConfig.supportEmail}
`;

export function GET() {
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
