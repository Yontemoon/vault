import Heading from "@/components/heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Heading>Javascript</Heading>
      <p>Ahhh... Vanilla Javascript. Don't think I forgot about you!</p>
    </div>
  );
}
