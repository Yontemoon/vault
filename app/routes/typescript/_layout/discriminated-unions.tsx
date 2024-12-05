import { createFileRoute } from "@tanstack/react-router";
import MarkdownComp from "@/components/markdown";
import discriminatedUnions from "@/markdown/ts/discriminatedUnions.md";
import seo from "@/lib/seo";

export const Route = createFileRoute(
  "/typescript/_layout/discriminated-unions"
)({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Discrimination unions ",
      description: "Discrimination unions page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={discriminatedUnions} />;
}
