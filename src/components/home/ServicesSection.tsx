import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  BarChart3,
  Target,
  Search,
  MousePointer,
  Workflow,
  ShoppingCart,
  Palette,
  Brain,
  Code,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    title: "Digital Intelligence & RevOps",
    description: "Data analytics, forecasting, and revenue operations",
    icon: BarChart3,
    href: "/services/digital-intelligence",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Advertising",
    description: "PPC, social ads, and programmatic campaigns",
    icon: Target,
    href: "/services/digital-advertising",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "SEO & Content Marketing",
    description: "Organic growth and thought leadership",
    icon: Search,
    href: "/services/seo-content-marketing",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Conversion Optimization",
    description: "CRO, UX testing, and landing pages",
    icon: MousePointer,
    href: "/services/conversion-optimization",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Marketing Automation",
    description: "CRM, ABM, and email marketing",
    icon: Workflow,
    href: "/services/marketing-automation",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Ecommerce & Marketplaces",
    description: "Amazon, Shopify, and marketplace growth",
    icon: ShoppingCart,
    href: "/services/ecommerce-marketplaces",
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Design & Creative",
    description: "Website design and visual identity",
    icon: Palette,
    href: "/services/design-creative",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "AI Services",
    description: "AI consulting and intelligent automation",
    icon: Brain,
    href: "/services/ai-services",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Development",
    description: "Web development and digital platforms",
    icon: Code,
    href: "/services/development",
    color: "from-slate-500 to-gray-600",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Full-Stack Digital Growth{" "}
            <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to grow your business online, from strategy to execution, 
            powered by AI and data-driven insights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group service-card animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
