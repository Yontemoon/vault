import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { getFile } from "@/server/file";
import { getShiki } from "@/server/shiki";
import Shiki from "@/components/shiki";

export const Route = createFileRoute("/typescript/check-types")({
  component: RouteComponent,
  loader: async () => {
    const content = await getFile("/ts/checkTypes.ts");
    return getShiki(content);
  },
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
