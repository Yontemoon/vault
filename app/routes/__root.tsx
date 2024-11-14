import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import HeaderNavBar from "../components/header-navbar";
import { SidebarProvider } from "../components/ui/sidebar";
import AppSidebar from "../components/app-sidebar";
import Error from "../components/error";
import useIsParent from "../hooks/use-is-parent";
import Footer from "@/components/footer";

import styles from "@/index.css?url";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import React from "react";

export const Route = createRootRoute({
  meta: () => [
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
  links: () => [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ],
  scripts: () =>
    import.meta.env.DEV
      ? [
          {
            type: "module",
            children: `import RefreshRuntime from "/_build/@react-refresh";
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type`,
          },
        ]
      : [],

  component: RootComponent,
  errorComponent: Error,

  notFoundComponent: () => {
    return <Error />;
  },
});

function RootComponent() {
  const isParent = useIsParent();
  return (
    <RootDocument>
      <div className="mx-auto w-ful max-w-6xl">
        <HeaderNavBar />
        <SidebarProvider>
          {isParent && <AppSidebar />}
          <main className="text-left">
            <Outlet />
          </main>
        </SidebarProvider>
        <Footer />
        {import.meta.env.DEV && <TanStackRouterDevtools />}
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <Body>
        <React.Suspense>{children}</React.Suspense>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
