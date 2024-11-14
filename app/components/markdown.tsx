import Markdown from "react-markdown";
import Heading from "./heading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { CodeProps } from "react-markdown/lib/ast-to-react";
type PropTypes = {
  content: string;
};

const MarkdownComp = ({ content }: PropTypes) => {
  console.log(content);
  return (
    <article className="m-5">
      <Markdown
        unwrapDisallowed={true}
        components={{
          h1: ({ node, children, ...props }) => (
            <Heading as="h1" size="xl">
              {children}
            </Heading>
          ),
          h2: ({ node, children, ...props }) => (
            <Heading as="h2" size="lg">
              {children}
            </Heading>
          ),
          h3: ({ node, children, ...props }) => (
            <Heading as="h3" size="md">
              {children}
            </Heading>
          ),
          hr: () => {
            return <div className="h-3 border-2 border-black my-2" />;
          },

          p: ({ node, children, ...props }) => (
            <p className="text-lg">{children}</p>
          ),
          code: ({ className, children, style, ref, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                style={xonokai}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-100 text-red-500 px-1 py-0.5 rounded">
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
