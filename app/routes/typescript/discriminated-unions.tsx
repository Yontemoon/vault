import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/discriminated-unions")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /typescript/discriminated-unions!";
}
