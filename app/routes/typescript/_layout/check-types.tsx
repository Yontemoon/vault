import { createFileRoute } from "@tanstack/react-router";
import MarkdownComp from "@/components/markdown";
import checkTypes from "@/markdown/ts/checkTypes.md";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/check-types")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Check Types",
      description: "Check Types page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return (
    <div>
      <MarkdownComp content={checkTypes} />
    </div>
  );
}
