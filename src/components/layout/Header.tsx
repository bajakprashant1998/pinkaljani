import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { menuData } from "@/data/menuData";
import { contactInfo } from "@/data/contactInfo";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-secondary py-4"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-display font-bold text-xl">D</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-white">
                  Digital Bull
                </span>
                <span className="block text-xs -mt-1 text-white/70">
                  Technology Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuData.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      activeMenu === item.title
                        ? "text-primary bg-white/20"
                        : "text-white hover:text-primary hover:bg-white/10"
                    }`}
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`} />
                  </button>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <Button variant="accent" size="default">
                Get Free Proposal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu - Now inside header for proper hover */}
        <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-card shadow-xl animate-slide-in-right overflow-y-auto">
            <div className="p-6 pt-20">
              {menuData.map((item) => (
                <div key={item.title} className="mb-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <div className="space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Button variant="accent" className="w-full mt-6">
                Get Free Proposal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
