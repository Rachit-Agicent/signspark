import { notFound } from "next/navigation";
import Blog1Page from "@/app/blog1/page";
import Blog2Page from "@/app/blog2/page";
import Blog3Page from "@/app/blog3/page";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

const BLOG_BY_SLUG: Record<string, React.ComponentType> = {
  "dirty-dozen-hidden-fees": Blog1Page,
  "ai-scripts-saved-2400": Blog2Page,
  "msrp-myth": Blog3Page,
};

export default async function BlogSlugPage({ params }: Props) {
  const resolved =
    typeof (params as any)?.then === "function" ? await (params as any) : params;
  const raw = resolved?.slug;
  const slug = Array.isArray(raw) ? raw.join("/") : String(raw ?? "");
  const Comp = BLOG_BY_SLUG[slug];
  if (!Comp) notFound();
  return <Comp />;
}

