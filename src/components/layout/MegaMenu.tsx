import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/menuData";

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export const MegaMenu = ({ activeMenu, onClose }: MegaMenuProps) => {
  const currentMenu = menuData.find((m) => m.title === activeMenu);

  if (!currentMenu) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg animate-fade-in-up"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="container-wide py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Menu Items */}
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
              {currentMenu.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="mega-menu-item group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-muted rounded-xl p-6">
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
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                ✓ Free consultation<br />
                ✓ Custom strategy<br />
                ✓ ROI guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
