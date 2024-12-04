import { createFileRoute } from "@tanstack/react-router";
import MarkdownComp from "@/components/markdown";
import awaited from "@/markdown/ts/awaited.md";
import seo from "@/lib/seo";

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

export const Route = createFileRoute("/typescript/_layout/awaited")({
  head: () => ({
    meta: seo({
      title: "Monte's Vault | Awaited",
      description: "Awaited page for Typescript section.",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MarkdownComp content={awaited as string} />
    </>
  );
}
