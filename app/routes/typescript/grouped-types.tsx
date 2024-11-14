import { createFileRoute } from "@tanstack/react-router";
import groupedTypes from "@/markdown/ts/groupedTypes.md";
import MarkdownComp from "@/components/markdown";

export const Route = createFileRoute("/typescript/grouped-types")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MarkdownComp content={groupedTypes} />;
}
