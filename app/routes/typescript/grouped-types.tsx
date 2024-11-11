import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/grouped-types")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /typescript/grouped-types!";
}
