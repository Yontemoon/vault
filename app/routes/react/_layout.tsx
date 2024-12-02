import { createFileRoute, Outlet } from "@tanstack/react-router";
import BreadcrumbComponent from "@/components/breadcrumb";

export const Route = createFileRoute("/react/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <>
      <BreadcrumbComponent />
      <Outlet />
    </>
  );
}
