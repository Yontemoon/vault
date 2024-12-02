import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";

const BreadcrumbComponent = () => {
  const router = useRouterState();
  const [currRoutes, setCurrRoutes] = useState<string[]>();

  useMemo(() => {
    const routerArr = router.location.pathname.split("/");
    routerArr.shift();
    setCurrRoutes(routerArr);
    console.log(routerArr);
  }, [router]);
  console.log(router);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {currRoutes?.map((currRoute, i) => (
          <div className="flex flex-row justify-center content-center" key={i}>
            <BreadcrumbSeparator className="flex justify-center align-middle content-center" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${currRoute}`}>{currRoute}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
