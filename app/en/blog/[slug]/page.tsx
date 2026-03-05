import PlaceholderPage from "@/components/PlaceholderPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PlaceholderPage lang="en" pageKey="blogPost" slug={slug} />;
}
