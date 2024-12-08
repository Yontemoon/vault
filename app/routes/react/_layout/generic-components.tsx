import { createFileRoute } from "@tanstack/react-router";
import genericComponents from "@/markdown/react/generic-components.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/react/_layout/generic-components")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Generic Components",
      description: "Generic components page for React section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={genericComponents} />;
}
