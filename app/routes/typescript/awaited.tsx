import { createFileRoute } from "@tanstack/react-router";
import MarkdownComp from "@/components/markdown";
import awaited from "@/markdown/ts/awaited.md";

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

export const Route = createFileRoute("/typescript/awaited")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MarkdownComp content={awaited as string} />
    </>
  );
}
