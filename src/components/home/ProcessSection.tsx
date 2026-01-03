import { Link } from "react-router-dom";
import { ArrowRight, Search, FileSearch, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Audit",
    description: "We start by deeply understanding your business, goals, audience, and competitive landscape. Our comprehensive audit reveals opportunities and quick wins.",
    details: [
      "Business & goal alignment workshop",
      "Technical website audit",
      "Competitive analysis",
      "Audience research & personas",
      "Current performance baseline",
    ],
    href: "/process/discovery",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Based on our findings, we develop a comprehensive, data-driven strategy with clear KPIs, timelines, and expected outcomes.",
    details: [
      "Custom strategy roadmap",
      "Channel prioritization",
      "Budget allocation",
      "KPI framework",
      "90-day action plan",
    ],
    href: "/process/strategy",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Execution & Launch",
    description: "Our expert team executes the strategy with precision, launching campaigns and implementing changes across all channels.",
    details: [
      "Campaign setup & launch",
      "Content creation",
      "Technical implementation",
      "Tracking setup",
      "Quality assurance",
    ],
    href: "/process/execution",
    color: "from-orange-500 to-red-500",
  },
  {
    step: "04",
    icon: FileSearch,
    title: "Optimize & Scale",
    description: "We continuously monitor, test, and optimize to improve results. As we learn what works, we scale successful initiatives.",
    details: [
      "A/B testing",
      "Performance optimization",
      "Scaling winning campaigns",
      "Regular reporting",
      "Strategy refinement",
    ],
    href: "/process/optimization",
    color: "from-green-500 to-emerald-500",
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
            A Proven <span className="text-primary">4-Step</span> Methodology
          </h2>
          <p className="text-muted-foreground text-lg">
            Our systematic approach has delivered results for 500+ clients across 15+ industries. 
            Every engagement follows this battle-tested framework.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.step}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-display font-bold text-primary/20">{step.step}</span>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={step.href}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Learn more about this step
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
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
