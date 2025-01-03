import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { slugToTitle } from "@/lib/utils";

const BreadcrumbComponent = () => {
  const router = useRouterState();
  const [currRoutes, setCurrRoutes] = useState<string[]>();

  useMemo(() => {
    const routerArr = router.location.pathname.split("/");
    routerArr.shift();
    setCurrRoutes(routerArr);
  }, [router]);

  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {currRoutes?.map((currRoute, i) => {
          const titleRoute = slugToTitle(currRoute);
          {
            if (i === currRoutes.length - 1) {
              return (
                <div
                  className="flex flex-row justify-center content-center"
                  key={i}
                >
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>{titleRoute}</BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              );
            } else {
              return (
                <div
                  className="flex flex-row justify-center content-center"
                  key={i}
                >
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/${currRoute}`}>{titleRoute}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              );
            }
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
