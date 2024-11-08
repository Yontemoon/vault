import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /javascript/!";
}
