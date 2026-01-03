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
  TrendingUp,
  Users,
  DollarSign,
  Award,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  color: string;
  stats: string;
}

const services: ServiceItem[] = [
  {
    title: "Digital Intelligence & RevOps",
    description: "Transform data into decisions with AI-powered analytics and revenue operations.",
    features: ["Call Tracking", "Attribution Modeling", "Revenue Forecasting", "Competitive Analysis"],
    icon: BarChart3,
    href: "/services/digital-intelligence",
    color: "from-blue-500 to-cyan-500",
    stats: "3.2x ROI",
  },
  {
    title: "Digital Advertising",
    description: "Maximize ROAS with data-driven PPC, social, and programmatic campaigns.",
    features: ["Google Ads", "Social Media Ads", "Programmatic", "Retargeting"],
    icon: Target,
    href: "/services/digital-advertising",
    color: "from-orange-500 to-red-500",
    stats: "250% ROAS",
  },
  {
    title: "SEO & Content Marketing",
    description: "Dominate search results with our proprietary OmniSEO® methodology.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    icon: Search,
    href: "/services/seo-content-marketing",
    color: "from-green-500 to-emerald-500",
    stats: "340% Traffic",
  },
  {
    title: "Conversion Optimization",
    description: "Turn more visitors into customers with data-driven CRO and UX testing.",
    features: ["A/B Testing", "Heatmaps", "User Research", "Landing Pages"],
    icon: MousePointer,
    href: "/services/conversion-optimization",
    color: "from-purple-500 to-pink-500",
    stats: "+127% CVR",
  },
  {
    title: "Marketing Automation",
    description: "Scale personalized marketing with intelligent automation and CRM integration.",
    features: ["Email Automation", "Lead Scoring", "ABM", "CRM Integration"],
    icon: Workflow,
    href: "/services/marketing-automation",
    color: "from-indigo-500 to-blue-500",
    stats: "67% Faster",
  },
  {
    title: "Ecommerce & Marketplaces",
    description: "Dominate Amazon, Shopify, and online marketplaces with proven strategies.",
    features: ["Amazon SEO", "Marketplace Ads", "Shopify Optimization", "Influencer Marketing"],
    icon: ShoppingCart,
    href: "/services/ecommerce-marketplaces",
    color: "from-teal-500 to-green-500",
    stats: "₹2Cr+ Sales",
  },
  {
    title: "Design & Creative",
    description: "Beautiful, conversion-focused design that elevates your brand.",
    features: ["Website Design", "UI/UX", "Brand Identity", "Creative Assets"],
    icon: Palette,
    href: "/services/design-creative",
    color: "from-pink-500 to-rose-500",
    stats: "50+ Sites",
  },
  {
    title: "AI Services",
    description: "Harness AI to automate, personalize, and scale your marketing efforts.",
    features: ["AI Consulting", "ChatGPT Optimization", "AI Agents", "GEO/AEO"],
    icon: Brain,
    href: "/services/ai-services",
    color: "from-violet-500 to-purple-500",
    stats: "AI-First",
  },
  {
    title: "Development",
    description: "Fast, secure, scalable web development and platform solutions.",
    features: ["WordPress", "Shopify", "Custom Development", "Maintenance"],
    icon: Code,
    href: "/services/development",
    color: "from-slate-500 to-gray-600",
    stats: "99.9% Uptime",
  },
];

const highlights = [
  { icon: TrendingUp, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "97%", label: "Client Retention" },
  { icon: DollarSign, value: "₹50Cr+", label: "Revenue Generated" },
  { icon: Award, value: "15+", label: "Industry Awards" },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <BarChart3 className="w-4 h-4" />
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {service.stats}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-primary font-medium text-sm">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
