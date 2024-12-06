import { createFileRoute, Link } from "@tanstack/react-router";
import useAllPaths from "@/hooks/use-all-paths";
import Heading from "@/components/heading";
import seo from "@/lib/seo";
import { TYPESCRIPT_ROUTES } from "@/lib/constants";

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
      {TYPESCRIPT_ROUTES.map((route) => {
        return (
          <div
            key={route.title}
            className="border border-black mb-3 sm:w-[500px] w-full bg-backgroundTs hover:bg-backgroundTs/90 transition-all duration-300"
          >
            <Link to={`${route.href}`}>
              <div className="flex flex-col w-full p-4">
                <div className="flex flex-row gap-5 w-full justify-between">
                  <Heading size="md">{route.title}</Heading>
                  <p>{route.date}</p>
                </div>
                <div>{route.description}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
