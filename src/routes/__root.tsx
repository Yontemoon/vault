import HeaderNavBar from "@/components/HeaderNavBar";
import { Card } from "@/components/ui/card";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div> */}
      <HeaderNavBar />
      <Card>Hello world</Card>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
