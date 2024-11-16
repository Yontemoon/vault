import Heading from "@/components/heading";
import useChildRoutes from "@/hooks/use-child-routes";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript/")({
  component: RouteComponent,
});

function RouteComponent() {
  const routes = useChildRoutes();
  return (
    <div>
      <Heading>Javascript</Heading>
      <p>Ahhh... Vanilla Javascript. Don't think I forgot about you!</p>
      <br />
      <p>
        Writing Javascript without type safety now feels like walking outside
        naked. I just feel exposed. While i rarely use Vanilla JS, this section
        will be focused on the finer details of JS. There is so much to learn,
        and I accepted that I won't ever learn everything to learn. But I'll
        give it a try with this website.
      </p>
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
