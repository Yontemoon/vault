import { useLocation } from "@tanstack/react-router";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { getParentUrl } from "@/lib/utils";

// TODO: RENAME SOMETHING MORE DESCRIPTIVE!
function useIsParent() {
  const location = useLocation();
  const parentRoute = getParentUrl(location.pathname);
  return NAVIGATION_LINKS.some((element) => {
    if (location.pathname === "/") return false;
    return element.href === parentRoute;
  });
}

export default useIsParent;
