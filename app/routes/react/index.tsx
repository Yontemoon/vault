import { createFileRoute, Link } from "@tanstack/react-router";
import Heading from "@/components/heading";
import useAllPaths from "@/hooks/use-all-paths";
import { REACT_ROUTES } from "@/lib/constants";
import seo from "@/lib/seo";

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
  const routes = useAllPaths();
  return (
    <div>
      <Heading as="h1" size="xl">
        React
      </Heading>
      <Heading as="h2" size="sm">
        The library that feels like a framework.
      </Heading>
      {REACT_ROUTES.map((route) => {
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
