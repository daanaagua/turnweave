import { TopicPage } from "@/components/marketing/topic-page";
import { topicPages } from "@/content/topics";
import { buildPageMetadata } from "@/lib/seo";

const page = topicPages["seeduplex-vs-gemini-live"];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function SeeduplexVsGeminiLivePage() {
  return <TopicPage page={page} />;
}
