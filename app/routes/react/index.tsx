import { createFileRoute, Link } from "@tanstack/react-router";
import Heading from "@/components/heading";
import useAllPaths from "@/hooks/use-all-paths";

export const Route = createFileRoute("/react/")({
  component: RouteComponent,
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
      {routes.map((route) => {
        return (
          <Link key={route.key} to={route.key}>
            <div>{route.key}</div>
          </Link>
        );
      })}
    </div>
  );
}
