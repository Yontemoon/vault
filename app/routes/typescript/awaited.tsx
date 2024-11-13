import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import ReactMarkdown from "react-markdown";
import awaited from "@/markdown/ts/awaited.md";

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
  // loader: async () => getShiki("testing123"),
});

function RouteComponent() {
  // const highlight = Route.useLoaderData();
  console.log(awaited);
  return (
    <>
      <Heading>Awaited</Heading>
      <article className="prose">
        <ReactMarkdown>{awaited}</ReactMarkdown>
      </article>
    </>
  );
}
