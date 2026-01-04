import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle,
  Zap,
  Target,
  Users,
  Award,
  BarChart3,
  Shield,
  Clock,
  Headphones,
  TrendingUp,
  Brain,
  Globe,
  Lightbulb,
  type LucideIcon
} from "lucide-react";

interface BenefitData {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  color: string;
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
  process: string[];
}

const benefitsData: Record<string, BenefitData> = {
  "ai-powered": {
    title: "AI-Powered Campaign Optimization",
    description: "Leverage artificial intelligence for smarter marketing decisions",
    longDescription: "Our proprietary AI technology analyzes millions of data points in real-time to optimize your campaigns for maximum performance. From bid management to audience targeting, AI powers every decision for better results.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    stats: [
      { value: "3.5x", label: "Average ROAS Improvement" },
      { value: "45%", label: "Cost Reduction" },
      { value: "67%", label: "Faster Optimization" },
      { value: "24/7", label: "Automated Monitoring" },
    ],
    features: [
      { title: "Predictive Bidding", description: "AI adjusts bids in real-time based on conversion probability" },
      { title: "Audience Intelligence", description: "Machine learning identifies your best-performing audience segments" },
      { title: "Creative Optimization", description: "AI tests and optimizes ad creatives automatically" },
      { title: "Anomaly Detection", description: "Instant alerts when campaign performance deviates from norms" },
    ],
    process: ["AI analyzes your historical data", "Creates predictive models", "Implements automated optimizations", "Continuously learns and improves"],
  },
  "data-driven": {
    title: "Real-Time Performance Dashboards",
    description: "Complete visibility into your marketing performance",
    longDescription: "Access beautiful, intuitive dashboards that show exactly how your marketing is performing across all channels. Real-time data means you can make informed decisions faster and optimize for better results.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    stats: [
      { value: "100+", label: "Metrics Tracked" },
      { value: "Real-time", label: "Data Updates" },
      { value: "15+", label: "Integrations" },
      { value: "Custom", label: "Report Builder" },
    ],
    features: [
      { title: "Unified Dashboard", description: "All your marketing data in one beautiful interface" },
      { title: "Custom Reports", description: "Build reports tailored to your business needs" },
      { title: "Automated Alerts", description: "Get notified when metrics hit your thresholds" },
      { title: "Executive Summaries", description: "Easy-to-understand reports for stakeholders" },
    ],
    process: ["Connect all marketing channels", "Define KPIs and goals", "Access real-time dashboards", "Receive automated insights"],
  },
  "multi-channel": {
    title: "Multi-Channel Attribution",
    description: "Understand the true value of every marketing touchpoint",
    longDescription: "Our advanced attribution models show you exactly how each channel contributes to your conversions. Stop guessing where to invest your budget and make data-driven decisions.",
    icon: Target,
    color: "from-orange-500 to-red-500",
    stats: [
      { value: "360°", label: "Customer View" },
      { value: "8+", label: "Attribution Models" },
      { value: "95%", label: "Data Accuracy" },
      { value: "50%", label: "Better Budget Allocation" },
    ],
    features: [
      { title: "Multi-Touch Attribution", description: "Credit every touchpoint in the customer journey" },
      { title: "Cross-Device Tracking", description: "Follow users across devices and platforms" },
      { title: "Offline Integration", description: "Connect online and offline conversions" },
      { title: "ROI Calculation", description: "True return on investment for each channel" },
    ],
    process: ["Implement tracking across channels", "Collect cross-channel data", "Apply attribution models", "Optimize budget allocation"],
  },
  "dedicated-support": {
    title: "Dedicated Success Manager",
    description: "A strategic partner focused on your growth",
    longDescription: "Every client gets a dedicated success manager who understands your business, goals, and challenges. They're your single point of contact for strategy, support, and optimization.",
    icon: Headphones,
    color: "from-green-500 to-emerald-500",
    stats: [
      { value: "24hr", label: "Response Time" },
      { value: "Weekly", label: "Strategy Calls" },
      { value: "97%", label: "Client Satisfaction" },
      { value: "Direct", label: "Access" },
    ],
    features: [
      { title: "Strategic Planning", description: "Quarterly business reviews and strategy sessions" },
      { title: "Proactive Optimization", description: "Your manager identifies opportunities before you ask" },
      { title: "Cross-Team Coordination", description: "Seamless communication with all specialists" },
      { title: "Business Understanding", description: "Deep knowledge of your industry and goals" },
    ],
    process: ["Onboarding and discovery", "Goal alignment", "Regular strategy sessions", "Continuous optimization"],
  },
  "transparent-reporting": {
    title: "Transparent Reporting & Communication",
    description: "No hidden metrics, no surprises",
    longDescription: "We believe in complete transparency. You'll always know exactly what we're doing, how your campaigns are performing, and where your budget is being spent.",
    icon: Shield,
    color: "from-slate-500 to-gray-600",
    stats: [
      { value: "100%", label: "Data Transparency" },
      { value: "Weekly", label: "Performance Reports" },
      { value: "Monthly", label: "Strategy Reviews" },
      { value: "Open", label: "Access Policy" },
    ],
    features: [
      { title: "Regular Reporting", description: "Weekly and monthly performance summaries" },
      { title: "Full Data Access", description: "Access to all your campaign data anytime" },
      { title: "Clear Explanations", description: "We explain what we're doing and why" },
      { title: "Honest Recommendations", description: "We tell you what works, even if it's uncomfortable" },
    ],
    process: ["Set reporting preferences", "Receive regular updates", "Access real-time dashboards", "Review monthly summaries"],
  },
  "proven-results": {
    title: "Proven Track Record of Results",
    description: "500+ successful campaigns across industries",
    longDescription: "We've helped businesses of all sizes achieve remarkable growth. Our case studies and client testimonials speak to our ability to deliver measurable, sustainable results.",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    stats: [
      { value: "500+", label: "Successful Campaigns" },
      { value: "97%", label: "Client Retention" },
      { value: "₹500Cr+", label: "Revenue Generated" },
      { value: "15+", label: "Industries Served" },
    ],
    features: [
      { title: "Diverse Experience", description: "Success across ecommerce, SaaS, healthcare, and more" },
      { title: "Documented Results", description: "Detailed case studies with real metrics" },
      { title: "Client References", description: "Talk to our clients about their experience" },
      { title: "Industry Recognition", description: "Awards and certifications from leading platforms" },
    ],
    process: ["Review case studies", "Speak with references", "Start with a pilot", "Scale successful strategies"],
  },
};

const WhyChooseDetailPage = () => {
  const { benefit } = useParams<{ benefit: string }>();
  const data = benefitsData[benefit || ""] || benefitsData["ai-powered"];
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
      <section className="bg-muted pb-16">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} items-center justify-center mb-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {data.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key <span className="text-gradient">Features</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            {data.process.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{step}</span>
                </div>
                {index < data.process.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-primary hidden md:block" />
                )}
              </div>
            ))}
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
            Let's discuss how our approach can help your business grow.
          </p>
          <Button variant="accent" size="xl">
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseDetailPage;
