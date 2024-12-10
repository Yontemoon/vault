import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { backgroundLangStyle } from "@/lib/utils";
import type { TAbbreviations } from "@/lib/constants";

import { cn } from "@/lib/utils";

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  language?: TAbbreviations;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      language = "home",
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        backgroundLangStyle(language),
        "shrink-0 border border-solid border-foreground box-border",
        orientation === "horizontal" ? "h-[10px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
