import Heading from "@/components/heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Heading>Welcome Home!</Heading>
    </div>
  );
}
