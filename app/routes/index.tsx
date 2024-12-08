import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { NAVIGATION_LINKS } from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mx-5 flex justify-center items-center text-center flex-col gap-8">
      <Heading size="xl">Vaults</Heading>
      <Heading>
        A website to brain dump all the cool snippet of code that I either just
        learned, coded myself (rare), or found online that I thought was very
        cool. More sections are coming such as CSS and HTML!
      </Heading>
      <Heading size="md" as="h3">
        Check out some cool snippets of code.
      </Heading>
      <div className="grid grid-cols-1 w-full gap-5">
        <Card language="js">Javascript</Card>
        <Card language="ts">Typescript</Card>
        <Card language="react">React</Card>
        {/* <Card language="css">CSS</Card>
        <Card language="html">HTML</Card> */}
      </div>
    </div>
  );
}

type CardType = {
  children: React.ReactNode;
  language: "ts" | "js" | "react" | "html" | "css";
} & React.ComponentProps<"button">;

const Card = ({ children, language, ...props }: CardType) => {
  const currentLang = NAVIGATION_LINKS.find((n) => n.abbreviation === language);
  return (
    <Link to={currentLang?.href}>
      <button
        className={cn(
          "text-lg min-h-16 m-auto border shadow-xl w-full rounded-md flex justify-center items-center  hover:cursor-pointer transition-all",
          language === "ts" && "bg-backgroundTs hover:bg-backgroundTs/90",
          language === "js" && "bg-backgroundJs hover:bg-backgroundJs/90",
          language === "react" &&
            "bg-backgroundReact hover:bg-backgroundReact/90",
          language === "css" && "bg-backgroundCss hover:bg-backgroundCss/90",
          language === "html" && "bg-backgroundHtml hover:bg-backgroundHtml/90"
        )}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};
