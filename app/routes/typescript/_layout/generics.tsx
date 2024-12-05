import { createFileRoute } from "@tanstack/react-router";
import generics from "@/markdown/ts/generics.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/generics")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Generics",
      description: "Generics page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={generics} />;
}
