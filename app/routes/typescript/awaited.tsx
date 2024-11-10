import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { createHighlighter } from "shiki";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
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
  const [highlight, setHighlight] = React.useState<string>();
  React.useEffect(() => {
    const getFetch = async () => {
      const highlighter = await createHighlighter({
        themes: ["vitesse-dark"],
        langs: ["typescript"],
      });

      const html = highlighter.codeToHtml(code, {
        lang: "typescript",
        theme: "vitesse-dark",
      });
      console.log(html);
      setHighlight(html);
    };
    getFetch();
  }, []);

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
