import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import Shiki from "@/components/shiki";
// import { getTesting } from "@/server/testing";
import { getShiki } from "@/server/shiki";

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
  loader: async () => getShiki("testing123"),
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
