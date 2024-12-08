import React from "react";
import Markdown from "react-markdown";
import Heading from "./heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Separator } from "@/components/ui/separator";
import { Link, useLocation } from "@tanstack/react-router";
import { cn, getParentUrl } from "@/lib/utils";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { backgroundLangStyle } from "@/lib/utils";
import { useTheme } from "@/context/theme-provider";

type PropTypes = {
  content: string;
};

const MarkdownComp = ({ content }: PropTypes) => {
  const location = useLocation();
  const { theme } = useTheme();
  const currentNav = React.useMemo(() => {
    const parent = getParentUrl(location.pathname);
    const current = NAVIGATION_LINKS.find((n) => n.href === parent);
    return current?.abbreviation || "js";
  }, [location]);
  return (
    <article>
      <Markdown
        unwrapDisallowed={true}
        components={{
          h1: ({ children }) => (
            <Heading as="h1" size="xl" className="mb-5">
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading as="h2" size="lg" className="my-5">
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" size="md" className="mb-3">
              {children}
            </Heading>
          ),
          hr: () => {
            return (
              <Separator
                className={cn("my-4", backgroundLangStyle(currentNav))}
              />
            );
          },
          a: ({ children }) => {
            return <Link to="/">{children}</Link>;
          },
          p: ({ children }) => <p>{children}</p>,
          code: ({ className, children, style, ref, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={theme === "dark" ? oneDark : oneLight}
                className="my-5 border border-foreground box-border"
                customStyle={{
                  borderRadius: 0,
                }}
                codeTagProps={{
                  className: "font-sans  rounded-none",
                }}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className={cn(
                  "text-foreground px-2 py-[2px] text-center",
                  backgroundLangStyle(currentNav)
                )}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default MarkdownComp;
