import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  XCircle,
  Eye,
  RefreshCw,
  Target,
  BarChart3,
  Users,
  Zap,
  Clock,
  Award,
  LineChart,
  Search,
  MousePointer,
  Lightbulb,
  Shield,
  type LucideIcon
} from "lucide-react";

interface ChallengeData {
  title: string;
  icon: LucideIcon;
  heroDescription: string;
  symptoms: string[];
  causes: string[];
  solutions: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  results: { metric: string; value: string }[];
}

const challengesData: Record<string, ChallengeData> = {
  "website-leads": {
    title: "My Website Doesn't Drive Leads",
    icon: AlertCircle,
    heroDescription: "Transform your website from a digital brochure into a lead-generating machine. We'll identify exactly why visitors aren't converting and implement proven strategies to capture and nurture leads.",
    symptoms: [
      "High traffic but low contact form submissions",
      "Visitors leave without taking action",
      "No visibility into visitor behavior",
      "Unclear value proposition",
      "Poor mobile experience",
      "Slow page load times",
    ],
    causes: [
      "Weak or missing calls-to-action",
      "No lead capture mechanisms",
      "Poor user experience design",
      "Targeting the wrong audience",
      "Content doesn't address pain points",
      "Trust signals missing",
    ],
    solutions: [
      { title: "Conversion Audit", description: "Comprehensive analysis of your website's conversion funnel to identify exactly where leads are dropping off." },
      { title: "UX Optimization", description: "Redesign key pages with conversion-focused layouts, clear CTAs, and intuitive navigation." },
      { title: "Lead Magnets", description: "Create valuable content offers that incentivize visitors to share their contact information." },
      { title: "Landing Pages", description: "Build high-converting landing pages for campaigns with A/B testing to maximize results." },
      { title: "Marketing Automation", description: "Set up lead nurturing workflows to automatically follow up and qualify leads." },
      { title: "Analytics Setup", description: "Implement proper tracking to understand visitor behavior and optimize continuously." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Deep dive into your current website, analytics, and conversion funnel" },
      { step: "02", title: "Strategy", description: "Develop a prioritized roadmap of improvements based on impact" },
      { step: "03", title: "Implement", description: "Execute changes with proper tracking and testing" },
      { step: "04", title: "Optimize", description: "Continuously refine based on data and A/B testing" },
    ],
    results: [
      { metric: "Lead Increase", value: "340%" },
      { metric: "Conversion Rate", value: "4.5%" },
      { metric: "Cost per Lead", value: "-52%" },
    ],
  },
  "traffic-declining": {
    title: "My Website Traffic Is Declining",
    icon: TrendingUp,
    heroDescription: "Reverse declining traffic and build sustainable organic growth. We'll diagnose the root causes of your traffic drop and implement a recovery strategy that delivers lasting results.",
    symptoms: [
      "Gradual or sudden drop in organic traffic",
      "Losing rankings for important keywords",
      "Competitors overtaking your positions",
      "Google algorithm updates affecting visibility",
      "Decreasing brand searches",
      "High bounce rates from search",
    ],
    causes: [
      "Technical SEO issues (crawlability, indexing)",
      "Content becoming outdated or thin",
      "Lost backlinks or negative SEO",
      "Algorithm penalty or update impact",
      "Competitor improvement",
      "Site migration issues",
    ],
    solutions: [
      { title: "SEO Audit", description: "Comprehensive technical, content, and backlink analysis to identify all issues." },
      { title: "Technical Fixes", description: "Resolve crawling, indexing, speed, and mobile issues affecting rankings." },
      { title: "Content Revival", description: "Update and expand existing content to meet current search intent and quality standards." },
      { title: "Link Recovery", description: "Reclaim lost backlinks and build new high-quality links to restore authority." },
      { title: "Fresh Content", description: "Create new, search-optimized content targeting high-opportunity keywords." },
      { title: "Monitoring", description: "Set up rank tracking and alerts to catch issues early and track recovery." },
    ],
    process: [
      { step: "01", title: "Diagnose", description: "Identify exactly when and why traffic started declining" },
      { step: "02", title: "Prioritize", description: "Focus on quick wins first, then systematic improvements" },
      { step: "03", title: "Execute", description: "Fix technical issues, update content, build links" },
      { step: "04", title: "Monitor", description: "Track recovery and adjust strategy as needed" },
    ],
    results: [
      { metric: "Traffic Recovery", value: "280%" },
      { metric: "Keyword Rankings", value: "+156" },
      { metric: "Organic Leads", value: "3.2x" },
    ],
  },
  "website-conversion": {
    title: "My Website Doesn't Convert",
    icon: XCircle,
    heroDescription: "Turn more visitors into customers with data-driven conversion rate optimization. We'll uncover exactly why visitors aren't converting and systematically improve your conversion rates.",
    symptoms: [
      "Low conversion rates across the funnel",
      "High cart abandonment rates",
      "Visitors viewing pages but not acting",
      "Poor performance vs. industry benchmarks",
      "Marketing spend not translating to sales",
      "No clear path to conversion",
    ],
    causes: [
      "Confusing user experience",
      "Lack of trust signals",
      "Poor value proposition communication",
      "Too much friction in the process",
      "Not addressing objections",
      "Slow or unreliable website",
    ],
    solutions: [
      { title: "Conversion Audit", description: "Analyze user behavior with heatmaps, recordings, and funnel analysis." },
      { title: "UX Research", description: "Conduct user testing and surveys to understand barriers and motivations." },
      { title: "A/B Testing", description: "Test hypotheses with rigorous A/B and multivariate tests." },
      { title: "Page Optimization", description: "Optimize key pages for clarity, trust, and conversion." },
      { title: "Personalization", description: "Deliver tailored experiences based on user segments and behavior." },
      { title: "Speed Optimization", description: "Improve page load times for better user experience and conversions." },
    ],
    process: [
      { step: "01", title: "Research", description: "Understand current performance and user behavior" },
      { step: "02", title: "Hypothesize", description: "Develop data-backed hypotheses for improvement" },
      { step: "03", title: "Test", description: "Run rigorous A/B tests to validate changes" },
      { step: "04", title: "Scale", description: "Implement winners and continue optimization" },
    ],
    results: [
      { metric: "Conversion Rate", value: "+127%" },
      { metric: "Revenue per Visitor", value: "+89%" },
      { metric: "Cart Abandonment", value: "-34%" },
    ],
  },
  "google-visibility": {
    title: "My Website Isn't Showing on Google",
    icon: Eye,
    heroDescription: "Get found by your target customers on Google. Whether you're invisible in search results or struggling to rank, we'll diagnose the issues and implement a strategy to improve your visibility.",
    symptoms: [
      "Not appearing for brand searches",
      "Competitors ranking above you",
      "Pages not indexed by Google",
      "No visibility for target keywords",
      "Poor local search presence",
      "Recent drop in search visibility",
    ],
    causes: [
      "Technical barriers preventing indexing",
      "Poor site structure and internal linking",
      "Thin or duplicate content",
      "Lack of backlinks and authority",
      "Not targeting right keywords",
      "Local SEO not optimized",
    ],
    solutions: [
      { title: "Technical SEO Audit", description: "Identify and fix all technical issues preventing Google from crawling and indexing your site." },
      { title: "Keyword Strategy", description: "Research and target the right keywords that your customers are actually searching for." },
      { title: "Content Creation", description: "Develop comprehensive, search-optimized content that establishes topical authority." },
      { title: "Link Building", description: "Build high-quality backlinks to increase your domain authority and rankings." },
      { title: "Local SEO", description: "Optimize Google Business Profile and local citations for geographic visibility." },
      { title: "Schema Markup", description: "Implement structured data to help Google understand and feature your content." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive analysis of your current search visibility" },
      { step: "02", title: "Fix", description: "Resolve technical issues blocking visibility" },
      { step: "03", title: "Build", description: "Create content and earn links to boost authority" },
      { step: "04", title: "Grow", description: "Expand keyword coverage and maintain rankings" },
    ],
    results: [
      { metric: "Search Visibility", value: "+450%" },
      { metric: "Indexed Pages", value: "100%" },
      { metric: "First Page Rankings", value: "+87" },
    ],
  },
  "agency-switch": {
    title: "My Agency Isn't Delivering Results",
    icon: RefreshCw,
    heroDescription: "Frustrated with your current agency? You deserve a partner that delivers measurable results, transparent reporting, and genuine accountability. Let us show you what's possible.",
    symptoms: [
      "No clear ROI from marketing spend",
      "Vague or confusing reports",
      "Slow response times",
      "Same strategy for months without improvement",
      "Not understanding your business",
      "Hidden fees or unclear costs",
    ],
    causes: [
      "One-size-fits-all approach",
      "Lack of strategic thinking",
      "Poor communication and transparency",
      "Not measuring what matters",
      "Using outdated tactics",
      "Over-promising, under-delivering",
    ],
    solutions: [
      { title: "Transparent Reporting", description: "Real-time dashboards and clear reports that show exactly what we're doing and why." },
      { title: "Dedicated Team", description: "A dedicated account manager and specialist team who truly understand your business." },
      { title: "Data-Driven Strategy", description: "Every decision backed by data, not guesswork. Continuous testing and optimization." },
      { title: "Clear ROI Tracking", description: "Revenue attribution that shows the true impact of every marketing dollar." },
      { title: "Proactive Communication", description: "Regular strategy calls, quick responses, and proactive recommendations." },
      { title: "Flexible Partnership", description: "Month-to-month options available. We earn your business every month." },
    ],
    process: [
      { step: "01", title: "Transition", description: "Seamless handover with full audit of current state" },
      { step: "02", title: "Quick Wins", description: "Identify and implement immediate improvements" },
      { step: "03", title: "Strategy", description: "Develop comprehensive roadmap aligned with goals" },
      { step: "04", title: "Growth", description: "Execute, measure, optimize, scale" },
    ],
    results: [
      { metric: "Client Satisfaction", value: "97%" },
      { metric: "Avg. ROI Improvement", value: "3.2x" },
      { metric: "Response Time", value: "<4hrs" },
    ],
  },
};

const ChallengeDetailPage = () => {
  const { challenge } = useParams<{ challenge: string }>();
  const data = challengesData[challenge || ""] || challengesData["website-leads"];
  const Icon = data.icon;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
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
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg">
                  Get Free Diagnosis
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Results Preview */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Typical Results We Achieve
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {data.results.map((result) => (
                  <div key={result.metric} className="text-center">
                    <div className="text-3xl font-display font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-destructive" />
                Common Symptoms
              </h2>
              <ul className="space-y-3">
                {data.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3 bg-destructive/5 rounded-lg p-4">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-accent" />
                Root Causes
              </h2>
              <ul className="space-y-3">
                {data.causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-3 bg-accent/5 rounded-lg p-4">
                    <Target className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We <span className="text-primary">Solve This</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive approach tailored to your specific situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.solutions.map((solution, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {data.process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < data.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
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
            Ready to Fix This Issue?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free diagnosis and custom solution plan from our experts.
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

export default ChallengeDetailPage;
