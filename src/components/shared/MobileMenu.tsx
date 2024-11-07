import { useEffect, useState } from "react";
import { headerData } from "@/lib/data/headerData";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Блокировка прокрутки при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="relative block lg:hidden">
      <div className="fixed flex justify-between h-16 max-w-7xl p-4 px-8 items-center bg-slate-500 w-full bg-opacity-10 backdrop-blur-lg rounded-b-md hover:backdrop-blur z-20">
        <a href="/" className="font-bold tracking-wider text-2xl">
          SMART<span className="text-secondary">CLOUD</span>
        </a>
        <Button
          onClick={() => setMenuOpen(true)}
          className="p-2 h-8 w-8"
          variant="ghost"
        >
          <Menu strokeWidth={3} size={32} />
        </Button>
      </div>

      {/* Мобильное меню */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-slate-300/50 dark:bg-black/90 backdrop-blur-lg transition-all duration-500 ease-in-out",
          menuOpen ? "opacity-100 z-30" : "opacity-0 z-10"
        )}
      >
        <div className="relative h-full overflow-y-auto">
          <Button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-8 p-2"
            variant="ghost"
          >
            <X size={28} strokeWidth={3} />
          </Button>

          <nav className="p-8">
            <div className="flex gap-2 items-center mb-5">
              <h2>Выбрать тему</h2>
              {/* <ToggleTheme /> */}
            </div>
            {headerData.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-secondary">
                  {section.label}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block text-lg hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
