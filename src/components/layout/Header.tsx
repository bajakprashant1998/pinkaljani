import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { menuData } from "@/data/menuData";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-display font-bold text-xl">D</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-foreground">Digital Bull</span>
                <span className="block text-xs text-muted-foreground -mt-1">Technology Pvt. Ltd.</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuData.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      activeMenu === item.title
                        ? "text-primary bg-muted"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
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
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </a>
              <Button variant="accent" size="default">
                Get Free Proposal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
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
                    {item.items.slice(0, 5).map((subItem) => (
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
