import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/menuData";

interface MegaMenuProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

export const MegaMenu = ({ activeMenu, setActiveMenu }: MegaMenuProps) => {
  const currentMenu = menuData.find((m) => m.title === activeMenu);

  if (!currentMenu) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-card border-t border-border shadow-xl z-50"
      onMouseEnter={() => setActiveMenu(currentMenu.title)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container-wide py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Menu Items */}
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4">
              {currentMenu.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted group"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              {currentMenu.cta.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {currentMenu.cta.description}
            </p>
            <Button variant="accent" size="sm" className="w-full">
              {currentMenu.cta.buttonText}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="mt-4 pt-4 border-t border-border/50">
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Free consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Custom strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> ROI guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
