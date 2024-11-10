import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, srcery } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
});

const string = `
/**
 * ? November 2nd, 2024
 *
 * * Removes the promise from any promise type.
 * * From what I can see for use cases, great for helper functions that are
 * * used in async functions
 */

async function doSomething() {
  // Does something like await fetch(url)
  return {
    name: "Monte",
    age: 26,
  };
}

// Awaited removes the promise
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
  console.log(personInfo);
}`;

function RouteComponent() {
  return (
    <div>
      <Heading>Awaited</Heading>
      <SyntaxHighlighter
        language="typescript"
        style={srcery}
        codeTagProps={{ className: "rounded border-1 m-5" }}
        className="rounded border-1 m-5"
      >
        {string}
      </SyntaxHighlighter>
      <br />
      <Heading as="h3" size="md">
        Something else{" "}
      </Heading>
      <SyntaxHighlighter language="typescript" style={srcery}>
        {string}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="typescript" style={docco}>
        {string}
      </SyntaxHighlighter>
    </div>
  );
}
