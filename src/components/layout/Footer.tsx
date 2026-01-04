import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contactInfo";

const footerLinks = {
  services: [
    { title: "Digital Advertising", href: "/services/digital-advertising" },
    { title: "SEO & Content Marketing", href: "/services/seo-content-marketing" },
    { title: "AI Services", href: "/services/ai-services" },
    { title: "Web Development", href: "/services/development" },
    { title: "Conversion Optimization", href: "/services/conversion-optimization" },
  ],
  company: [
    { title: "About Us", href: "/company/about" },
    { title: "Our Approach", href: "/company/approach" },
    { title: "Careers", href: "/company/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Reviews", href: "/reviews" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Case Studies", href: "/resources/case-studies" },
    { title: "Free Tools", href: "/resources/tools" },
    { title: "Pricing Guides", href: "/pricing" },
    { title: "FAQs", href: "/faqs" },
  ],
  industries: [
    { title: "Ecommerce", href: "/industries/ecommerce" },
    { title: "SaaS", href: "/industries/saas" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Education", href: "/industries/education" },
    { title: "Real Estate", href: "/industries/real-estate" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container-wide py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-2">
                Get Growth Insights Weekly
              </h3>
              <p className="text-secondary-foreground/70">
                Join 50,000+ marketers receiving actionable strategies.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-primary"
              />
              <Button variant="accent">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-2xl">D</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Digital Bull</span>
                <span className="block text-xs text-secondary-foreground/70">Technology Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              AI-powered digital growth, marketing, and technology solutions for ambitious businesses worldwide.
            </p>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-secondary-foreground/50 text-center md:text-right">
              <p>© {new Date().getFullYear()} Digital Bull Technology Pvt. Ltd. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
