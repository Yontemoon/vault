import HeaderNavBar from "@/components/HeaderNavBar";
import { Card } from "@/components/ui/card";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeaderNavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
