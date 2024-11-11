import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { codeToHtml } from "shiki";

import { createServerFn } from "@tanstack/start";

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

const serverFunctionTest = createServerFn("GET", async () => {
  try {
    const html = await codeToHtml(code, {
      lang: "typescript",
      theme: "vitesse-dark",
    });
    return html;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
});

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
  loader: async () => serverFunctionTest(),
});

function RouteComponent() {
  const highlight = Route.useLoaderData();
  return (
    <>
      <Heading>Awaited</Heading>

      <React.Suspense>
        <div dangerouslySetInnerHTML={{ __html: highlight }} />
      </React.Suspense>
    </>
  );
}
