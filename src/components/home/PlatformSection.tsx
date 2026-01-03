import { ArrowRight, Sparkles, Database, Shield, Zap, TrendingUp, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const platformFeatures = [
  { icon: Database, title: "Customer Data Platform", description: "Unified view of all customer interactions" },
  { icon: Bot, title: "AI-Powered Insights", description: "Predictive analytics and recommendations" },
  { icon: Shield, title: "CRM Integrations", description: "Seamless sync with Salesforce, HubSpot" },
  { icon: TrendingUp, title: "Revenue Attribution", description: "Track ROI across every touchpoint" },
];

export const PlatformSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Revenue Acceleration Platform</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your AI-Powered{" "}
              <span className="text-primary">Growth Engine</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Our proprietary platform combines AI, automation, and analytics to give you 
              a complete view of your marketing performance and revenue pipeline.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {platformFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground">{feature.title}</h4>
                    <p className="text-sm text-secondary-foreground/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Explore Platform
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Platform Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard Preview */}
              <div className="bg-secondary/80 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-secondary-foreground">Revenue Dashboard</h4>
                  <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary-foreground/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">₹2.4Cr</div>
                    <div className="text-xs text-secondary-foreground/60">Monthly Revenue</div>
                  </div>
                  <div className="bg-secondary-foreground/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">847</div>
                    <div className="text-xs text-secondary-foreground/60">Active Leads</div>
                  </div>
                  <div className="bg-secondary-foreground/5 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">4.2x</div>
                    <div className="text-xs text-secondary-foreground/60">ROAS</div>
                  </div>
                </div>
              </div>
              {/* Chart Placeholder */}
              <div className="bg-secondary/80 rounded-xl p-4 h-40 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
