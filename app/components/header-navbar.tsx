import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Link, useLocation } from "@tanstack/react-router";

import ThemeToggle from "./theme-toggle";

const HeaderNavBar = () => {
  const location = useLocation();
  if (location.pathname !== "/") {
    return (
      <NavigationMenu className="w-full min-h-20 border-b-2 border-solid border-foreground mb-5 sticky top-0 bg-background">
        <div className="flex justify-between mx-5 w-full">
          <Button variant={"link"} asChild className="text-lg">
            <Link to={"/"} activeProps={{ className: "font-bold" }}>
              Monte's Vault
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </NavigationMenu>
    );
  }
};

export default HeaderNavBar;
