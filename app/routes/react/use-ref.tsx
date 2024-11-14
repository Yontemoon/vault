import { createFileRoute } from "@tanstack/react-router";
import useRef from "@/markdown/react/use-ref.md";
import MarkdownComp from "@/components/markdown";

export const Route = createFileRoute("/react/use-ref")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MarkdownComp content={useRef} />;
}
