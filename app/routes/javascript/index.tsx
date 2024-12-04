import Heading from "@/components/heading";
import useAllPaths from "@/hooks/use-all-paths";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript/")({
  component: RouteComponent,
});

function RouteComponent() {
  const routes = useAllPaths();
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
      <br />
      <br />
      {routes.map((route) => {
        return (
          <div key={route.key} className="border border-black">
            <Link to={route.key}>
              <div>{route.key}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
