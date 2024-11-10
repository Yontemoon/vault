import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Heading from "@/components/heading";

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
});

const string = `async function doSomething() {

  return {
    name: "Monte",
    age: 26,
  };
}
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
  console.log(personInfo);
}"`;

function RouteComponent() {
  return (
    <div>
      <Heading>Awaited</Heading>

      <pre>
        <code>{string}</code>
      </pre>
    </div>
  );
}
