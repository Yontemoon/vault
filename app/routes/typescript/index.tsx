import { createFileRoute, Link } from "@tanstack/react-router";
import Heading from "@/components/heading";
import seo from "@/lib/seo";
import { TYPESCRIPT_ROUTES } from "@/lib/constants";
import RouteCard from "@/components/route-card";
import { Separator } from "@/components/ui/separator";

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
  return (
    <div>
      <Heading className="tracking-wide mb-5">Typescript</Heading>
      <Separator className="bg-backgroundTs border-black border my-5" />
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
          <Link to={`${route.href}`}>
            <RouteCard key={route.title} slug="typescript">
              <div className="flex flex-col w-full p-4">
                <div className="flex flex-row gap-5 w-full justify-between">
                  <Heading size="md" className="tracking-wider">
                    {route.title}
                  </Heading>
                  <p>{route.date}</p>
                </div>
                <div>{route.description}</div>
              </div>
            </RouteCard>
          </Link>
        );
      })}
    </div>
  );
}
