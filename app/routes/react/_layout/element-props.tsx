import { createFileRoute } from "@tanstack/react-router";
import elementProps from "@/markdown/react/element-props.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/react/_layout/element-props")({
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Element Props",
      description: "Element prop page for React section.",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MarkdownComp content={elementProps} />
    </>
  );
}
