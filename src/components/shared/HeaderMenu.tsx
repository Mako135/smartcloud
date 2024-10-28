import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { headerData } from "@/lib/data/headerData";
import { cn } from "@/lib/utils";

export default function HeaderMenu() {
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        {headerData.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger className="bg-transparent">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <nav className="grid grid-cols-2 p-4 gap-2 w-[500px] 2xl:w-[600px]">
                {item.links.map((link) => (
                  <NavigationMenuLink
                    href={link.href}
                    key={link.label}
                    className={cn(
                      "flex flex-col p-2 hover:text-red-500 hover:bg-slate-100 rounded-sm ",
                      link.href === "/security/support"
                        ? "col-span-2 text-left"
                        : ""
                    )}
                  >
                    <h3 className="font-bold">{link.label}</h3>
                    <p className="text-sm">{link.desc}</p>
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
