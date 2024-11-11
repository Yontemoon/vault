import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";

export const Route = createFileRoute("/react/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Heading as="h1" size="xl">React</Heading>
      <Heading as="h2" size="sm">The library that feels like a framework.</Heading>
    </div>
  )
}
