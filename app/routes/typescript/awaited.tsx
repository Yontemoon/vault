import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { getShiki } from "@/server/shiki";
import Shiki from "@/components/shiki";

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

const code = `async function doSomething() {
return {
  name: "Monte",
  age: 26,
};
}
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
console.log(personInfo);
}`;

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
  loader: async () => getShiki(code),
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
