import { createFileRoute, Link } from "@tanstack/react-router";
import useAllPaths from "@/hooks/use-all-paths";
import Heading from "@/components/heading";
import seo from "@/lib/seo";

export const Route = createFileRoute("/typescript/")({
  head: () => {
    return {
      meta: seo({
        title: "Monte's Vault | Typescript",
        description: "Main page for Monte's Vault Typescript section.",
      }),
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const routes = useAllPaths();
  console.log(routes);
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
      <div className="flex flex-col items-center w-full">
        {routes.map((route) => {
          return (
            <div
              key={route.key}
              className="border-black border text-center mb-2 sm:w-[600px] w-full mx-4 sm:mx-0"
            >
              <Link to={route.key}>
                <div>{route.key}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
