import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import Shiki from "@/components/shiki";
import { createShiki } from "@/lib/server";

export const Route = createFileRoute("/typescript/check-types")({
  component: RouteComponent,
  loader: async () => createShiki("/ts/checkTypes.ts"),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div>
      <Heading>Check Types</Heading>
      <Shiki stringContent={data} />
    </div>
  );
}
