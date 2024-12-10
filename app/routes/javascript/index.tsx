import Heading from "@/components/heading";
import { createFileRoute, Link } from "@tanstack/react-router";
import { JAVASCRIPT_ROUTES } from "@/lib/constants";
import seo from "@/lib/seo";
import RouteCard from "@/components/route-card";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/javascript/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: seo({
        title: "Monte's Vault | Javascript",
        description: "Main page for Monte's Vault Javascript section.",
      }),
    };
  },
});

function RouteComponent() {
  return (
    <div>
      <Heading>Javascript</Heading>
      <Separator className="my-5" language="js" />
      <p>Ahhh... Vanilla Javascript. Don't think I forgot about you!</p>
      <p>
        Writing Javascript without type safety now feels like walking outside
        naked. I just feel exposed. While i rarely use Vanilla JS, this section
        will be focused on the finer details of JS. There is so much to learn,
        and I accepted that I won't ever learn everything to learn. But I'll
        give it a try with this website.
      </p>
      {JAVASCRIPT_ROUTES.map((route) => {
        return (
          <Link to={`${route.href}`}>
            <RouteCard key={route.title} slug="javascript">
              <div className="flex flex-row gap-5 w-full justify-between">
                <Heading size="md">{route.title}</Heading>
                <p>{route.date}</p>
              </div>
              <div>{route.description}</div>
            </RouteCard>
          </Link>
        );
      })}
    </div>
  );
}
