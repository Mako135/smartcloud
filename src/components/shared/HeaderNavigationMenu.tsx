import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui";
import { headerData } from "@/lib/data/headerData";
import { cn } from "@/lib/utils";

export default function HeaderNavigationMenu() {
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        {headerData.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger className="bg-transparent text-white">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <nav className="grid grid-cols-2 p-4 gap-2 w-[500px] 2xl:w-[600px] ">
                {item.links.map((link) => (
                  <NavigationMenuLink
                    href={link.href}
                    key={link.label}
                    className="flex flex-col p-2 hover:text-secondary  rounded-sm"
                  >
                    <h3>{link.label}</h3>
                    <p className="text-sm">{link.desc || ""}</p>
                  </NavigationMenuLink>
                ))}
              </nav>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
