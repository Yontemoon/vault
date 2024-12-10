import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { NAVIGATION_LINKS } from "@/lib/constants";
import RouteCard from "@/components/route-card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mx-5 flex justify-center items-center text-center flex-col gap-8 mt-20">
      <Heading size="xl">Vaults</Heading>
      <Heading>
        A website to brain dump all the cool snippet of code that I either just
        learned, coded myself (rare), or found online that I thought was very
        cool. More sections are coming such as CSS and HTML!
      </Heading>
      <Heading size="md" as="h3">
        Check out some cool snippets of code:
      </Heading>
      <div className="grid grid-cols-1 w-full gap-5">
        <Link to="/javascript">
          <RouteCard slug="javascript">
            <Heading size="md">Javascript</Heading>
          </RouteCard>
        </Link>
        <Link to="/typescript">
          <RouteCard slug="typescript">
            <Heading size="md">Typescript</Heading>
          </RouteCard>
        </Link>
        <Link to="/react">
          <RouteCard slug="react">
            <Heading size="md">React</Heading>
          </RouteCard>
        </Link>
        {/* // TODO: Add once I am ready */}
        {/* <Card language="css">CSS</Card> */}
        {/* <Card language="html">HTML</Card> */}
      </div>
    </div>
  );
}
