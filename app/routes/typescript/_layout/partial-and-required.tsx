import { createFileRoute } from "@tanstack/react-router";
import partialAndRequired from "@/markdown/ts/partialAndRequired.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute(
  "/typescript/_layout/partial-and-required"
)({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Partial and Required ",
      description: "Partial / required page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={partialAndRequired} />;
}
