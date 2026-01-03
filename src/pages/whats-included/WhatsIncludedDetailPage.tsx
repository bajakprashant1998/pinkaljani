import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  ChevronRight,
  BarChart3,
  Wrench,
  Target,
  Shield,
  Headphones,
  type LucideIcon
} from "lucide-react";

interface IncludedData {
  title: string;
  icon: LucideIcon;
  heroDescription: string;
  overview: string;
  features: { title: string; description: string }[];
  benefits: string[];
}

const includedData: Record<string, IncludedData> = {
  "strategy-planning": {
    title: "Strategy & Planning",
    icon: BarChart3,
    heroDescription: "Every successful campaign starts with a rock-solid strategy. We develop custom roadmaps based on your business goals, market analysis, and competitive landscape.",
    overview: "Our strategy and planning services go beyond generic playbooks. We take the time to understand your unique business, audience, and competitive environment to create a tailored approach that maximizes your investment and drives real results.",
    features: [
      { title: "Business Analysis", description: "Deep dive into your business model, value proposition, and revenue drivers." },
      { title: "Market Research", description: "Comprehensive analysis of your market, trends, and opportunities." },
      { title: "Competitive Intelligence", description: "Detailed research on competitor strategies, positioning, and gaps." },
      { title: "Audience Insights", description: "Data-driven buyer personas and customer journey mapping." },
      { title: "Channel Strategy", description: "Optimal mix of channels based on audience behavior and ROI potential." },
      { title: "Roadmap Development", description: "90-day action plans with clear milestones and KPIs." },
    ],
    benefits: [
      "Data-driven decision making",
      "Clear prioritization of efforts",
      "Aligned team and stakeholders",
      "Measurable success criteria",
      "Competitive advantage",
      "Faster time to results",
    ],
  },
  "campaign-setup": {
    title: "Campaign Setup",
    icon: Wrench,
    heroDescription: "Our expert team configures every campaign for success. From account structure to targeting to creative, we sweat the details so you don't have to.",
    overview: "Campaign setup is where strategy becomes reality. Our specialists have years of experience building high-performing campaigns across every major platform. We follow proven structures and best practices while customizing for your specific goals.",
    features: [
      { title: "Account Structure", description: "Optimized campaign architecture for performance and scalability." },
      { title: "Audience Targeting", description: "Precise targeting based on demographics, interests, and behaviors." },
      { title: "Creative Development", description: "Compelling ad copy, visuals, and landing pages." },
      { title: "Tracking Implementation", description: "Conversion tracking, pixels, and attribution setup." },
      { title: "Bid Strategy", description: "Optimal bidding approach for your goals and budget." },
      { title: "Quality Assurance", description: "Rigorous testing before launch to ensure everything works." },
    ],
    benefits: [
      "Faster launch times",
      "Reduced wasted spend",
      "Proper tracking from day one",
      "Scalable account structure",
      "Best practice compliance",
      "Platform expertise",
    ],
  },
  "optimization": {
    title: "Continuous Optimization",
    icon: Target,
    heroDescription: "We never set and forget. Our team continuously monitors, tests, and optimizes your campaigns to improve performance and maximize ROI.",
    overview: "Optimization is an ongoing process, not a one-time event. We use data and testing to continuously improve every aspect of your campaigns, from targeting to creative to landing pages. Our goal is to achieve consistent, compounding improvements over time.",
    features: [
      { title: "Performance Monitoring", description: "Real-time tracking of all key metrics and KPIs." },
      { title: "A/B Testing", description: "Systematic testing of headlines, creative, audiences, and more." },
      { title: "Bid Optimization", description: "Continuous adjustment to maximize efficiency and results." },
      { title: "Audience Refinement", description: "Expanding winners and cutting underperformers." },
      { title: "Creative Iteration", description: "Regular refresh and improvement of creative assets." },
      { title: "Landing Page Optimization", description: "Conversion rate optimization for better results." },
    ],
    benefits: [
      "Improving results over time",
      "Lower cost per acquisition",
      "Higher conversion rates",
      "Data-driven decisions",
      "Competitive advantage",
      "Maximum ROI",
    ],
  },
  "tracking-attribution": {
    title: "Tracking & Attribution",
    icon: Shield,
    heroDescription: "Understand exactly what's driving results with advanced tracking and multi-touch attribution. Know the true value of every marketing dollar.",
    overview: "Proper tracking and attribution are essential for understanding what's working and making informed decisions. We implement comprehensive tracking across all channels and use sophisticated attribution models to give you a complete picture of your marketing performance.",
    features: [
      { title: "Conversion Tracking", description: "Pixel implementation and event tracking across all platforms." },
      { title: "Cross-Device Tracking", description: "Follow the customer journey across devices and sessions." },
      { title: "Attribution Modeling", description: "Multi-touch models that show the true impact of each channel." },
      { title: "Revenue Attribution", description: "Connect marketing efforts directly to revenue." },
      { title: "Custom Events", description: "Track the specific actions that matter to your business." },
      { title: "Data Integration", description: "Connect marketing data with CRM and business systems." },
    ],
    benefits: [
      "Accurate performance measurement",
      "Better budget allocation",
      "Understand customer journey",
      "Prove marketing ROI",
      "Data-driven optimization",
      "Executive-ready reporting",
    ],
  },
  "reporting-insights": {
    title: "Reporting & Insights",
    icon: BarChart3,
    heroDescription: "Regular performance reports with actionable insights and strategic recommendations. Real-time dashboard access to your data whenever you need it.",
    overview: "We believe in complete transparency and data-driven decision making. You'll receive regular reports that go beyond vanity metrics to show real business impact, plus access to real-time dashboards so you can check performance anytime.",
    features: [
      { title: "Real-Time Dashboards", description: "24/7 access to live performance data and metrics." },
      { title: "Weekly Performance Reports", description: "Regular updates on key metrics and progress." },
      { title: "Monthly Deep Dives", description: "Comprehensive analysis with strategic insights." },
      { title: "Quarterly Business Reviews", description: "Executive presentations on results and strategy." },
      { title: "Custom Reporting", description: "Reports tailored to your specific needs and stakeholders." },
      { title: "Actionable Recommendations", description: "Clear next steps based on data and insights." },
    ],
    benefits: [
      "Complete transparency",
      "Data at your fingertips",
      "Strategic guidance",
      "Stakeholder communication",
      "Continuous improvement",
      "Informed decisions",
    ],
  },
  "dedicated-support": {
    title: "Dedicated Support",
    icon: Headphones,
    heroDescription: "Direct access to your account manager and specialist team. Quick response times and proactive communication keep your projects on track.",
    overview: "You're not just a number to us. Every client gets a dedicated account manager who knows your business inside and out, plus access to our specialist teams across every discipline. We're responsive, proactive, and invested in your success.",
    features: [
      { title: "Dedicated Account Manager", description: "Your single point of contact who knows your business." },
      { title: "Specialist Team Access", description: "Direct access to experts in SEO, PPC, creative, and more." },
      { title: "Quick Response Times", description: "Same-day responses to questions and requests." },
      { title: "Regular Strategy Calls", description: "Scheduled calls to review performance and plan ahead." },
      { title: "Proactive Communication", description: "We surface opportunities and issues before you ask." },
      { title: "Slack/Teams Integration", description: "Real-time communication through your preferred channels." },
    ],
    benefits: [
      "Expert guidance always available",
      "Issues resolved quickly",
      "Proactive recommendations",
      "Seamless communication",
      "Trusted partnership",
      "Peace of mind",
    ],
  },
};

const WhatsIncludedDetailPage = () => {
  const { feature } = useParams<{ feature: string }>();
  const data = includedData[feature || ""] || includedData["strategy-planning"];
  const Icon = data.icon;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-muted pb-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {data.heroDescription}
            </p>
            <Button variant="accent" size="lg">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's <span className="text-primary">Included</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Key <span className="text-primary">Benefits</span>
              </h2>
              <ul className="space-y-4">
                {data.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help your business grow.
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
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and see how our {data.title.toLowerCase()} can help your business.
          </p>
          <Button variant="accent" size="xl">
            Get Free Proposal
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhatsIncludedDetailPage;
