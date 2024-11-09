import { useLocation } from "@tanstack/react-router";

import { NAVIGATION_LINKS } from "@/lib/constants";

// TODO: RENAME SOMETHING MORE DESCRIPTIVE!
function useIsParent() {
  const location = useLocation();

  return NAVIGATION_LINKS.some((element) => {
    if (location.pathname === "/") return false;
    return element.href === location.pathname;
  });
}

export default useIsParent;
