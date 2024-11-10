import Heading from "@/components/heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Heading>Hello World</Heading>
    </div>
  );
}
