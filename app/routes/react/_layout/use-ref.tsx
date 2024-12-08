import { createFileRoute } from "@tanstack/react-router";
import useRef from "@/markdown/react/use-ref.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/react/_layout/use-ref")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | useRef",
      description: "useRef page for React section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={useRef} />;
}
