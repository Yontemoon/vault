import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { codeToHtml, createHighlighter } from "shiki";
import { Card } from "@/components/ui/card";
import { createServerFn } from "@tanstack/start";

const serverFunctionTest = createServerFn("GET", async () => {
  const html = await codeToHtml(code, {
    lang: "typescript",
    theme: "vitesse-dark",
  });
  return html;
});

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
  loader: async () => serverFunctionTest(),
});

const code = `async function doSomething() {

  return {
    name: "Monte",
    age: 26,
  };
}
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
  console.log(personInfo);
}"`;

function RouteComponent() {
  const highlight = Route.useLoaderData();

  return (
    <div>
      <Heading>Awaited</Heading>

      <Card>
        <div
          dangerouslySetInnerHTML={{ __html: highlight! }}
          className="rounded "
        />
      </Card>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        voluptatem blanditiis hic quod officiis voluptate aliquid facere,
        necessitatibus iusto sed, maxime quia quo rem ducimus dolor tempora vero
        placeat possimus. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Recusandae incidunt repellendus, neque maxime officia, in ut
        expedita perspiciatis numquam adipisci, nesciunt itaque qui. Officia
        maiores aliquam, dolore inventore quasi magnam.
      </div>
    </div>
  );
}
