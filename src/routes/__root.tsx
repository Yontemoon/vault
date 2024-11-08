import HeaderNavBar from "@/components/HeaderNavBar";
import { Card } from "@/components/ui/card";
import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export const Route = createRootRoute({
  component: Root,
});


function Root () {
  const router = useRouterState()
  console.log(router);
  const paths = router.location.pathname.split("/")
  console.log(paths);

  return (
    <>
    <SidebarProvider>
      <HeaderNavBar />
      <main>
      {paths.length - 1 > 1 && <SidebarTrigger/>}
          <Outlet />

      </main>
      <TanStackRouterDevtools />
    </SidebarProvider>
      
    </>
  )
}
