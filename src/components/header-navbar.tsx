import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { SidebarTrigger } from "./ui/sidebar";

const HeaderNavBar = () => {
  const location = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {location.pathname !== "/" && <SidebarTrigger />}
        <NavigationMenuItem className="p-2 flex justify-center align-middle">
          {NAVIGATION_LINKS.map((n, i) => (
            <Button variant={"link"} key={i} asChild>
              <Link to={n.href} activeProps={{ className: "font-bold" }}>
                {n.name}
              </Link>
            </Button>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavBar;
