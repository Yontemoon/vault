import HeaderNavBar from "@/components/header-navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Error from "@/components/error";
import useIsParent from "@/hooks/use-is-parent";
import { cn } from "@/lib/utils";

export const Route = createRootRoute({
  component: Root,
  errorComponent: Error,
  notFoundComponent: Error,
});

function Root() {
  const isParent = useIsParent();

  return (
    <div className={cn("mx-auto w-full", isParent ? "max-w-6xl" : "max-w-4xl")}>
      <SidebarProvider>
        {isParent && <AppSidebar />}
        <main className="text-left">
          <HeaderNavBar />
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </SidebarProvider>
    </div>
  );
}
