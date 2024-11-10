import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/return-types")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /typescript/return-types!";
}