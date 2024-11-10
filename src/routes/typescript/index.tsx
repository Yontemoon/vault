import Heading from "@/components/heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Heading>Typescript</Heading>
      <p>
        I love Typescript. There is so much to learn, its practically endless.
        This section, like all my sections, is not a comprehensive guide on said
        topic. It's just a bunch of cool snippets that I either just learned,
        coded myself (rare), or found online that I thought was very cool. Think
        of this as a big brain dump that i want to add into a single web
        application so i can look at it later before I forget.
      </p>
      <br />
      <p>Testing 123</p>
    </div>
  );
}
