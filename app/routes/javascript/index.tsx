import Heading from "@/components/heading";
import { createFileRoute, Link } from "@tanstack/react-router";
import { JAVASCRIPT_ROUTES } from "@/lib/constants";
import seo from "@/lib/seo";

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
      <div className="flex justify-center flex-col items-center">
        {JAVASCRIPT_ROUTES.map((route) => {
          return (
            <div
              key={route.title}
              className="border border-black mb-3 sm:w-[500px] w-full bg-backgroundJs hover:bg-backgroundJs/90 transition-all duration-300"
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
    </div>
  );
}
