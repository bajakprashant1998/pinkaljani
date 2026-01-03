import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  ChevronRight,
  Search,
  FileSearch,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Clock,
  BarChart3,
  type LucideIcon
} from "lucide-react";

interface ProcessData {
  title: string;
  icon: LucideIcon;
  heroDescription: string;
  overview: string;
  activities: { title: string; description: string }[];
  deliverables: string[];
  duration: string;
  nextStep: { title: string; href: string };
}

const processData: Record<string, ProcessData> = {
  "discovery": {
    title: "Discovery & Audit",
    icon: Search,
    heroDescription: "Every successful engagement starts with understanding. We dive deep into your business, goals, audience, and competitive landscape to build a foundation for success.",
    overview: "The Discovery phase is where we get to know your business inside and out. We conduct comprehensive audits of your current digital presence, analyze your competitors, research your target audience, and align on your business goals. This phase typically takes 1-2 weeks and results in a detailed findings report that informs our strategy.",
    activities: [
      { title: "Stakeholder Interviews", description: "Meet with key team members to understand business goals, challenges, and expectations." },
      { title: "Technical Website Audit", description: "Comprehensive analysis of site structure, speed, mobile experience, and SEO health." },
      { title: "Analytics Deep Dive", description: "Review of current performance data, conversion funnels, and user behavior patterns." },
      { title: "Competitive Analysis", description: "Research competitors' digital strategies, keywords, content, and market positioning." },
      { title: "Audience Research", description: "Develop detailed buyer personas and map the customer journey." },
      { title: "Content Audit", description: "Evaluate existing content for quality, relevance, and optimization opportunities." },
    ],
    deliverables: [
      "Comprehensive Audit Report",
      "Competitive Analysis Document",
      "Buyer Persona Profiles",
      "Opportunity Prioritization Matrix",
      "Baseline Performance Metrics",
      "Quick Win Recommendations",
    ],
    duration: "1-2 Weeks",
    nextStep: { title: "Strategy Development", href: "/process/strategy" },
  },
  "strategy": {
    title: "Strategy Development",
    icon: Lightbulb,
    heroDescription: "With insights from Discovery, we craft a comprehensive, data-driven strategy tailored to your unique goals, audience, and competitive landscape.",
    overview: "The Strategy phase transforms our Discovery insights into an actionable roadmap. We define clear objectives, select the right channels, develop messaging frameworks, and create a detailed execution plan with timelines and KPIs. This ensures every action is purposeful and measurable.",
    activities: [
      { title: "Objective Setting", description: "Define SMART goals aligned with your business objectives and budget." },
      { title: "Channel Strategy", description: "Identify the optimal mix of channels based on audience behavior and ROI potential." },
      { title: "Messaging Framework", description: "Develop key messages, value propositions, and content themes." },
      { title: "Budget Allocation", description: "Strategic distribution of resources across channels and campaigns." },
      { title: "KPI Framework", description: "Establish measurable success metrics and reporting cadence." },
      { title: "Roadmap Creation", description: "Build a 90-day action plan with milestones and deliverables." },
    ],
    deliverables: [
      "Strategic Roadmap Document",
      "Channel Strategy Matrix",
      "Messaging & Content Framework",
      "Budget Allocation Plan",
      "KPI Dashboard Setup",
      "90-Day Action Plan",
    ],
    duration: "1 Week",
    nextStep: { title: "Execution & Launch", href: "/process/execution" },
  },
  "execution": {
    title: "Execution & Launch",
    icon: Rocket,
    heroDescription: "With strategy approved, our expert team brings everything to life. We set up, configure, create, and launch with precision and attention to detail.",
    overview: "The Execution phase is where strategy becomes reality. Our specialist teams work in parallel to set up campaigns, create content, implement technical changes, and configure tracking. We follow rigorous QA processes to ensure everything launches flawlessly.",
    activities: [
      { title: "Campaign Setup", description: "Configure ad accounts, build campaign structures, and set targeting parameters." },
      { title: "Content Creation", description: "Develop copy, creatives, landing pages, and other content assets." },
      { title: "Technical Implementation", description: "Execute website changes, tracking setup, and tool integrations." },
      { title: "Quality Assurance", description: "Rigorous testing of all elements before launch." },
      { title: "Tracking Verification", description: "Ensure all conversion tracking and attribution is working correctly." },
      { title: "Launch & Monitor", description: "Staged rollout with close monitoring of initial performance." },
    ],
    deliverables: [
      "Live Campaigns",
      "Published Content",
      "Implemented Technical Changes",
      "Configured Tracking",
      "Launch Report",
      "Initial Performance Data",
    ],
    duration: "2-4 Weeks",
    nextStep: { title: "Optimize & Scale", href: "/process/optimization" },
  },
  "optimization": {
    title: "Optimize & Scale",
    icon: FileSearch,
    heroDescription: "Launch is just the beginning. We continuously monitor, test, and optimize to improve results, then scale what works for maximum impact.",
    overview: "The Optimization phase is ongoing and never-ending. We analyze performance data, run A/B tests, refine targeting, optimize creative, and continuously improve results. As we identify winning strategies, we scale them for greater impact while maintaining efficiency.",
    activities: [
      { title: "Performance Analysis", description: "Regular review of all metrics to identify trends and opportunities." },
      { title: "A/B Testing", description: "Systematic testing of headlines, creatives, landing pages, and more." },
      { title: "Bid & Budget Optimization", description: "Continuous adjustment to maximize ROI and efficiency." },
      { title: "Audience Refinement", description: "Expand successful audiences and cut underperformers." },
      { title: "Creative Iteration", description: "Refresh and improve creative based on performance data." },
      { title: "Scaling Winners", description: "Increase investment in proven strategies and campaigns." },
    ],
    deliverables: [
      "Weekly Performance Reports",
      "Monthly Strategy Reviews",
      "A/B Test Results & Learnings",
      "Optimization Changelog",
      "Quarterly Business Reviews",
      "Continuous Improvement",
    ],
    duration: "Ongoing",
    nextStep: { title: "Start Your Journey", href: "/contact" },
  },
};

const ProcessDetailPage = () => {
  const { step } = useParams<{ step: string }>();
  const data = processData[step || ""] || processData["discovery"];
  const Icon = data.icon;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/company/approach" className="hover:text-primary transition-colors">Our Process</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-muted pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Phase Overview
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-bold text-foreground">{data.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Key Activities</div>
                    <div className="font-bold text-foreground">{data.activities.length} Activities</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Deliverables</div>
                    <div className="font-bold text-foreground">{data.deliverables.length} Deliverables</div>
                  </div>
                </div>
              </div>
              <Link 
                to={data.nextStep.href}
                className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <div>
                  <div className="text-xs text-muted-foreground">Next Step</div>
                  <div className="font-semibold text-foreground group-hover:text-primary">{data.nextStep.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              About This Phase
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key <span className="text-primary">Activities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.activities.map((activity, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You'll <span className="text-primary">Receive</span>
              </h2>
              <ul className="space-y-4">
                {data.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our proven process can help your business grow.
              </p>
              <Button variant="accent" size="lg" className="w-full">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready for the Next Step?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Continue exploring our process or start your project today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to={data.nextStep.href}>
                {data.nextStep.title}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessDetailPage;
