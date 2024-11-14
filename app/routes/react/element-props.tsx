import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import elementProps from "@/markdown/react/element-props.md";
import MarkdownComp from "@/components/markdown";

export const Route = createFileRoute("/react/element-props")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MarkdownComp content={elementProps} />
    </>
  );
}
