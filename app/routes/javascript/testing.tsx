import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import Shiki from "@/components/shiki";
import { getShiki } from "@/server/shiki";

export const Route = createFileRoute("/javascript/testing")({
  component: RouteComponent,
  loader: async () => getShiki("/js/testing.js"),
});

function RouteComponent() {
  const highlight = Route.useLoaderData();
  return (
    <>
      <Heading>Awaited</Heading>
      <Shiki stringContent={highlight} />
    </>
  );
}
