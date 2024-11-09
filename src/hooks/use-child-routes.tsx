import { useRouter, useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";
import type { FileRoutesByFullPath } from "@/routeTree.gen";

type Keys = keyof FileRoutesByFullPath;
type RouterValues = FileRoutesByFullPath[Keys];

function useChildRoutes(): {
  key: string;
  value: RouterValues;
}[] {
  const { routesByPath } = useRouter();

  const router = useRouterState();

  const getPaths = useMemo(() => {
    const route = router.location.pathname;

    const parentRoute = route.split("/")[1];

    return Object.entries(routesByPath)
      .filter(([key]) => {
        return key.startsWith(`/${parentRoute}`) && key !== `/${parentRoute}`;
      })
      .map(([key, value]) => ({ key, value }));
  }, [routesByPath, router.location.pathname]);

  return getPaths;
}

export default useChildRoutes;
