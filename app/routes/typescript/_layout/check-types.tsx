import { createFileRoute } from "@tanstack/react-router";
import MarkdownComp from "@/components/markdown";
import checkTypes from "@/markdown/ts/checkTypes.md";

export const Route = createFileRoute("/typescript/_layout/check-types")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <MarkdownComp content={checkTypes} />
    </div>
  );
}
