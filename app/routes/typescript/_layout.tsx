import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import BreadcrumbComponent from "@/components/breadcrumb";

export const Route = createFileRoute("/typescript/_layout")({
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
