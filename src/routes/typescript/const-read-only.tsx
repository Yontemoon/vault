import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/const-read-only")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /typescript/const-read-only!";
}
