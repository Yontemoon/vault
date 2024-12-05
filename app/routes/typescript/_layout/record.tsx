import { createFileRoute } from "@tanstack/react-router";
import record from "@/markdown/ts/record.md";
import MarkdownComp from "@/components/markdown";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/_layout/record")({
  component: RouteComponent,
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Record",
      description: "Record page for Typescript section.",
    }),
  }),
});

function RouteComponent() {
  return <MarkdownComp content={record} />;
}
