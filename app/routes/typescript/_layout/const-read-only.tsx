import { createFileRoute } from "@tanstack/react-router";
import constReadOnly from "@/markdown/ts/constReadOnly.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/const-read-only")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Const Read Only",
      description: "Const Read Only page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={constReadOnly} />;
}
