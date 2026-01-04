import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Brain, BarChart3, Target, Headphones, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { 
    title: "AI-powered campaign optimization", 
    href: "/why-choose/ai-powered",
    icon: Brain 
  },
  { 
    title: "Real-time performance dashboards", 
    href: "/why-choose/data-driven",
    icon: BarChart3 
  },
  { 
    title: "Multi-channel attribution", 
    href: "/why-choose/multi-channel",
    icon: Target 
  },
  { 
    title: "Dedicated success manager", 
    href: "/why-choose/dedicated-support",
    icon: Headphones 
  },
  { 
    title: "Transparent reporting & insights", 
    href: "/why-choose/transparent-reporting",
    icon: Shield 
  },
  { 
    title: "Proven track record of results", 
    href: "/why-choose/proven-results",
    icon: Award 
  },
];

const metrics = [
  { value: "3x", label: "Average ROI Improvement" },
  { value: "40%", label: "Cost Per Acquisition Reduction" },
  { value: "2.5x", label: "Lead Quality Improvement" },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Digital Bull
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              One Partner. Complete{" "}
              <span className="text-gradient">Growth Stack.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stop juggling multiple agencies. We combine AI, data, and creative expertise 
              into a unified growth engine that delivers measurable results.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.title}>
                  <Link 
                    to={feature.href}
                    className="flex items-center gap-3 group hover:bg-card p-2 -ml-2 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">{feature.title}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/company/approach">
                See How We Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Metrics Cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card rounded-2xl shadow-lg p-8 border border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Average Client Results
              </h3>
              <div className="space-y-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center gap-4">
                    <div className="text-4xl font-display font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-foreground font-medium">{metric.label}</div>
                      <div className="h-2 bg-muted rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-4/5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  *Based on average performance across 500+ client campaigns over 12 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
