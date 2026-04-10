import { TopicPage } from "@/components/marketing/topic-page";
import { topicPages } from "@/content/topics";
import { buildPageMetadata } from "@/lib/seo";

const page = topicPages["seeduplex-vs-gpt-4o-voice"];

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function SeeduplexVsGpt4oVoicePage() {
  return <TopicPage page={page} />;
}
