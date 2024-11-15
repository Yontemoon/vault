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
import ThemeToggle from "./theme-toggle";

const HeaderNavBar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <NavigationMenu className="w-full flex justify-center min-h-20">
        <NavigationMenuList>
          {location.pathname !== "/" && <SidebarTrigger />}
          <NavigationMenuItem className="p-2 flex justify-center align-middle">
            {NAVIGATION_LINKS.map((n, i) => (
              <Button variant={"link"} key={i} asChild className="text-lg">
                <Link to={n.href} activeProps={{ className: "font-bold" }}>
                  {n.name}
                </Link>
              </Button>
            ))}
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <NavigationMenu className="w-full min-h-20 flex justify-center items-center">
      <NavigationMenuList>
        <NavigationMenuItem className="p-2 flex justify-end align-middle w-full">
          <Button variant={"link"} asChild className="text-lg">
            <Link to={"/"} activeProps={{ className: "font-bold" }}>
              Home
            </Link>
          </Button>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavBar;
