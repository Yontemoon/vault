import HeaderNavBar from "@/components/header-navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Error from "@/components/error";
import useIsParent from "@/hooks/use-is-parent";

export const Route = createRootRoute({
  component: Root,
  errorComponent: Error,
  notFoundComponent: Error,
});

function Root() {
  const isParent = useIsParent();

  return (
    <>
      <SidebarProvider>
        {isParent && <AppSidebar />}
        <main>
          <HeaderNavBar />
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </SidebarProvider>
    </>
  );
}
