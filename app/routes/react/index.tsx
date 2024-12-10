import { createFileRoute, Link } from "@tanstack/react-router";
import Heading from "@/components/heading";
import { REACT_ROUTES } from "@/lib/constants";
import seo from "@/lib/seo";
import RouteCard from "@/components/route-card";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/react/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: seo({
        title: "Monte's Vault | React",
        description: "Main page for Monte's Vault React section.",
      }),
    };
  },
});

function RouteComponent() {
  return (
    <div>
      <Heading as="h1" size="xl" className="mb-5 tracking-wide">
        React
      </Heading>
      <Separator className={"my-4"} language="react" />
      <p>
        React has become my main frontend package for every project I am a part
        of. My main role in my current job is a frontend developer, so I need to
        be up to date with all the latest and greatest regarding React. Some of
        these topics are obvious to some, and new to others. Everything in here
        is for my own benefit and to make creating complex projects as simple as
        possible.
      </p>
      {REACT_ROUTES.map((route) => {
        return (
          <Link to={`${route.href}`}>
            <RouteCard key={route.title} slug="react">
              <div className="flex flex-col w-full p-4">
                <div className="flex flex-row gap-5 w-full justify-between">
                  <Heading size="md">{route.title}</Heading>
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
