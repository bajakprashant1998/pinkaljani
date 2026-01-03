import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Wrench, 
  Headphones,
  BarChart3,
  Shield,
  Zap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BarChart3,
    title: "Strategy & Planning",
    description: "Custom strategy development based on your business goals, market analysis, and competitive landscape. We build roadmaps that drive results.",
    href: "/whats-included/strategy-planning",
  },
  {
    icon: Wrench,
    title: "Campaign Setup",
    description: "Expert campaign structure, targeting, creative development, and tracking implementation. Everything configured for maximum performance.",
    href: "/whats-included/campaign-setup",
  },
  {
    icon: Target,
    title: "Continuous Optimization",
    description: "Ongoing A/B testing, bid management, audience refinement, and creative iteration. We never set and forget—we optimize relentlessly.",
    href: "/whats-included/optimization",
  },
  {
    icon: Shield,
    title: "Tracking & Attribution",
    description: "Advanced tracking setup with multi-touch attribution modeling. Understand exactly which efforts are driving your revenue.",
    href: "/whats-included/tracking-attribution",
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    description: "Regular performance reports with actionable insights and strategic recommendations. Real-time dashboard access to your data.",
    href: "/whats-included/reporting-insights",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct access to your account manager and specialist team. Quick response times and proactive communication.",
    href: "/whats-included/dedicated-support",
  },
];

export const WhatsIncludedSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            What's Included
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Every engagement includes our full suite of services, tools, and support. 
            No hidden fees, no surprise costs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.href}
              className="group bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/pricing">
              View Pricing Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
