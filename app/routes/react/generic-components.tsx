import { createFileRoute } from "@tanstack/react-router";
import genericComponents from "@/markdown/react/generic-components.md";
import MarkdownComp from "@/components/markdown";

export const Route = createFileRoute("/react/generic-components")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MarkdownComp content={genericComponents} />;
}
