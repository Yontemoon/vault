import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import elementProps from "@/markdown/react/element-props.md";

export const Route = createFileRoute("/react/element-props")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /react/element-props!";
}
