import { createFileRoute } from "@tanstack/react-router";
import constReadOnly from "@/markdown/ts/constReadOnly.md";
import MarkdownComp from "@/components/markdown";

export const Route = createFileRoute("/typescript/const-read-only")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MarkdownComp content={constReadOnly} />;
}
