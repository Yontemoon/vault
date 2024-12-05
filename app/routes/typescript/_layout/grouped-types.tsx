import { createFileRoute } from "@tanstack/react-router";
import groupedTypes from "@/markdown/ts/groupedTypes.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/grouped-types")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Grouped Types",
      description: "Grouped types page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={groupedTypes} />;
}
