import clsx from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
  size?: "xl" | "lg" | "md" | "sm";
};

const Heading = ({
  as: Elem = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) => {
  return (
    <Elem
      className={clsx(
        "font-display font-bold leading-tight tracking-tight ",
        size === "xl" && "text-4xl md:text-5xl",
        size === "lg" && "text-3xl md:text-4xl",
        size === "md" && "text-2xl md:text-2xl",
        size === "sm" && "text-1xl md:text-2xl",
        className
      )}
    >
      {children}
    </Elem>
  );
};

export default Heading;
