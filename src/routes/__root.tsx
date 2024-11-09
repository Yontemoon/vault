import HeaderNavBar from "@/components/HeaderNavBar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <HeaderNavBar />
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </SidebarProvider>
    </>
  );
}
