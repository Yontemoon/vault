import { createFileRoute } from "@tanstack/react-router";
import returnTypes from "@/markdown/ts/returnTypes.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/return-types")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Return Types",
      description: "Return Types for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={returnTypes} />;
}
