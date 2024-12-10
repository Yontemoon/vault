import React from "react";
import clsx from "clsx";
import { NAVIGATION_LINKS } from "@/lib/constants";

type TRouteCard = React.ComponentProps<"div"> & {
  className?: string;
  children: React.ReactNode;
  slug?: (typeof NAVIGATION_LINKS)[number]["slug"];
};

const RouteCard = ({
  className,
  children,
  slug = "home",
  ...props
}: TRouteCard) => {
  return (
    <div
      className={clsx(
        `
          border border-foreground relative mb-5 transitional-all duration-300 min-h-16
          after:bg-foreground after:-bottom-[5px] after:block after:absolute after:content-[''] after:transition-all after:duration-150 after:-z-10
          before:bg-foreground before:-bottom-[5px] before:block before:absolute before:content-[''] before:transition-all before:duration-150 before:-z-10
          after:h-[5px] after:left-0 after:right-[5px]
          before:-left-[5px] before:top-[5px] before:w-[5px]
        `,
        slug === "home" &&
          "after:hover:bg-foreground/70 before:hover:bg-foreground/70",
        slug === "javascript" &&
          "after:hover:bg-backgroundJs before:hover:bg-backgroundJs",
        slug === "typescript" &&
          "after:hover:bg-backgroundTs before:hover:bg-backgroundTs",
        slug === "react" &&
          "after:hover:bg-backgroundReact before:hover:bg-backgroundReact",
        slug === "css" &&
          "after:hover:bg-backgroundCss before:hover:bg-backgroundCss",
        slug === "html" &&
          "after:hover:bg-backgroundHtml before:hover:bg-backgroundHtml",

        className
      )}
      {...props}
    >
      <div className="flex flex-col w-full p-4">{children}</div>
    </div>
  );
};

export default RouteCard;
