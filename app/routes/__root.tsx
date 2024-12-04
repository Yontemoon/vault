import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import HeaderNavBar from "../components/header-navbar";
import Error from "../components/error";
import Footer from "@/components/footer";
import styles from "@/index.css?url";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import React from "react";
import { ThemeProvider } from "@/context/theme-provider";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Monte's Vault",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
      },
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),

  component: RootComponent,
  errorComponent: Error,

  notFoundComponent: () => {
    return <Error />;
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider>
        <HeaderNavBar />
        <div className="mx-auto w-full max-w-5xl min-h-[79vh]">
          <main className=" mx-5">
            <div className="w-full">
              <Outlet />
            </div>
          </main>
          {import.meta.env.DEV && <TanStackRouterDevtools />}
        </div>
        <Footer />
      </ThemeProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
        {import.meta.env.DEV && (
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `import RefreshRuntime from "/_build/@react-refresh";
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type`,
            }}
          />
        )}
      </head>
      <body>
        <React.Suspense>{children}</React.Suspense>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
