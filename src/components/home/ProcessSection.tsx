import { Link } from "react-router-dom";
import { ArrowRight, Search, FileSearch, Lightbulb, Rocket, Target, Users, BarChart3, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Research",
    description: "Deep dive into your business, market, and audience to uncover opportunities.",
    href: "/process/discovery",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Technical Audit",
    description: "Comprehensive analysis of your website, SEO, and digital presence.",
    href: "/process/audit",
    color: "from-indigo-500 to-blue-500",
  },
  {
    step: "03",
    icon: Target,
    title: "Competitive Analysis",
    description: "Identify competitor strategies and market gaps to exploit.",
    href: "/process/competitive-analysis",
    color: "from-purple-500 to-indigo-500",
  },
  {
    step: "04",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Create a custom, data-driven roadmap aligned with your goals.",
    href: "/process/strategy",
    color: "from-pink-500 to-purple-500",
  },
  {
    step: "05",
    icon: Users,
    title: "Audience Targeting",
    description: "Define and segment your ideal customers for precision targeting.",
    href: "/process/audience-targeting",
    color: "from-rose-500 to-pink-500",
  },
  {
    step: "06",
    icon: Rocket,
    title: "Campaign Launch",
    description: "Deploy campaigns across channels with rigorous quality assurance.",
    href: "/process/execution",
    color: "from-orange-500 to-rose-500",
  },
  {
    step: "07",
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor real-time metrics and KPIs across all touchpoints.",
    href: "/process/tracking",
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "08",
    icon: Zap,
    title: "A/B Testing & Optimization",
    description: "Continuous testing and refinement to maximize performance.",
    href: "/process/optimization",
    color: "from-yellow-500 to-amber-500",
  },
  {
    step: "09",
    icon: TrendingUp,
    title: "Scaling & Growth",
    description: "Scale winning strategies and expand into new opportunities.",
    href: "/process/scaling",
    color: "from-green-500 to-yellow-500",
  },
  {
    step: "10",
    icon: Shield,
    title: "Reporting & Insights",
    description: "Transparent reporting with actionable insights and recommendations.",
    href: "/process/reporting",
    color: "from-teal-500 to-green-500",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Rocket className="w-4 h-4" />
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Proven <span className="text-primary">10-Step</span> Methodology
          </h2>
          <p className="text-muted-foreground text-lg">
            Our systematic approach has delivered results for 500+ clients across 15+ industries. 
            Every engagement follows this battle-tested framework.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {processSteps.map((step) => (
            <Link 
              key={step.step}
              to={step.href}
              className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-display font-bold text-primary/30">{step.step}</span>
                <h3 className="font-display font-bold text-sm text-foreground line-clamp-1">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs line-clamp-2">
                {step.description}
              </p>
              <div className="flex items-center text-primary font-medium text-xs mt-3">
                Learn more
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/company/approach">
              See Our Full Methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
