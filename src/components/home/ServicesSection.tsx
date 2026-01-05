import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Rocket,
  Brain,
  Code,
  ShoppingCart,
  Database,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Search,
  Target,
  Megaphone,
  PenTool,
  Mail,
  MousePointer,
  Bot,
  Cpu,
  BarChart3,
  MessageSquare,
  Shield,
  Globe,
  Store,
  Smile,
  Lock,
  Palette,
  GraduationCap,
  Video,
} from "lucide-react";
import { serviceCategories } from "@/data/menuData";

const highlights = [
  { icon: TrendingUp, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "97%", label: "Client Retention" },
  { icon: DollarSign, value: "₹50Cr+", label: "Revenue Generated" },
  { icon: Award, value: "15+", label: "Industry Awards" },
];

const categoryStats: Record<string, string> = {
  "growth-marketing-performance": "340% Traffic Growth",
  "ai-automation-intelligent-systems": "AI-First Approach",
  "technology-web-saas": "99.9% Uptime",
  "commerce-marketplaces-cx": "₹2Cr+ Sales",
  "enterprise-data-enablement": "3.2x ROI",
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Rocket className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Full-Stack Digital Growth{" "}
            <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to grow your business online, from strategy to execution, 
            powered by AI and data-driven insights. One partner, complete results.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item) => (
            <div key={item.label} className="text-center p-4 rounded-xl bg-muted">
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Main Service Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/services/${category.id}`}
                className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {categoryStats[category.id]}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span key={sub.title} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {sub.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center text-primary font-medium text-sm">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* All Services Quick Links */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">
            All Services at a Glance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <Link 
                  to={`/services/${category.id}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 mb-3"
                >
                  <category.icon className="w-4 h-4" />
                  {category.title.split(',')[0]}
                </Link>
                <ul className="space-y-2">
                  {category.subcategories.slice(0, 4).map((sub) => (
                    <li key={sub.title}>
                      <Link 
                        to={sub.href}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                  {category.subcategories.length > 4 && (
                    <li>
                      <Link 
                        to={`/services/${category.id}`}
                        className="text-xs text-primary hover:underline"
                      >
                        View all →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
