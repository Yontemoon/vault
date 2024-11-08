import React, { useState } from "react";

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
import { Link } from "@tanstack/react-router";
import { NAVIGATION_LINKS } from "@/lib/constants";

const HeaderNavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="p-2">
          {NAVIGATION_LINKS.map((n, i) => (
            <Link key={i} to={n.href}>
              <Button variant={"link"}>{n.name}</Button>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavBar;
