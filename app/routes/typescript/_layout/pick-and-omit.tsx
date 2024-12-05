import { createFileRoute } from "@tanstack/react-router";
import pickAndOmit from "@/markdown/ts/pickAndOmit.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/pick-and-omit")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Pick & Omit",
      description: "Pick and omit page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={pickAndOmit} />;
}
