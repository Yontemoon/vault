import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/react/generic-components")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /react/generic-components!";
}
