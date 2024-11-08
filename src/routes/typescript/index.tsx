import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /typescript/!";
}
