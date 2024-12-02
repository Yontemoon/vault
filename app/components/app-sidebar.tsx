import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, useLocation } from "@tanstack/react-router";
import useAllPaths from "@/hooks/use-all-paths";
import { getParentUrl, urlToTitle } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";

function AppSidebar() {
  const routes = useAllPaths();
  const location = useLocation();

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="uppercase">
                  {urlToTitle(getParentUrl(location.pathname))}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuLabel className="uppercase">
                  Section
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {NAVIGATION_LINKS.map((navLink, i) => {
                  if (navLink.href === "/") return;
                  return (
                    <DropdownMenuItem key={i} asChild>
                      <Link href={navLink.href}>
                        <span className="uppercase">{navLink.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map(({ key, value }) => {
                const title = urlToTitle(value.id);
                const titleArr = title.split(" ");
                titleArr.shift();
                return (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={value.fullPath}
                        activeProps={{ className: "font-bold" }}
                      >
                        <span className="uppercase">{titleArr.join("")}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
