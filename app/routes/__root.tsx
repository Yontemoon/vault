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

import styles from "@/index.css?url";

import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";

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
      href: styles,
    },
    //   {
    //     rel: "preconnect",
    //     href: "https://fonts.googleapis.com",
    //   },
    //   {
    //     ref: "preconnect",
    //     href: "https://fonts.gstatic.com",
    //     // ! DO I NEED THIS?
    //     // crossOrigin,
    //   },
    //   {
    //     rel: "stylesheet",
    //     href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
    //   },
  ],
  component: RootComponent,
  // errorComponent: Error,
  // notFoundComponent: Error,
});

// function Root() {
//   const isParent = useIsParent();

//   return (
//     <div className="mx-auto w-ful max-w-6xl ">
//       <SidebarProvider>
//         {isParent && <AppSidebar />}
//         <main className="text-left">
//           <HeaderNavBar />
//           <Outlet />
//         </main>
//         <TanStackRouterDevtools />
//       </SidebarProvider>
//     </div>
//   );
// }

function RootComponent() {
  const isParent = useIsParent();
  return (
    <RootDocument>
      <div className="mx-auto w-ful max-w-6xl ">
        <SidebarProvider>
          {isParent && <AppSidebar />}
          <main className="text-left">
            <HeaderNavBar />
            <Outlet />
          </main>
          <TanStackRouterDevtools />
        </SidebarProvider>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
