import { useLocation } from "@tanstack/react-router";

// TODO: RENAME SOMETHING MORE DESCRIPTIVE!
function useIsParent() {
  const location = useLocation();
  const parentRoute = location.pathname.split("/")[1];

  if (
    parentRoute === "react" ||
    parentRoute === "typescript" ||
    parentRoute === "javascript"
  )
    return true;
  return false;
}

export default useIsParent;
