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
  Zap,
  Shield,
  TrendingUp,
  type LucideIcon
} from "lucide-react";

interface ProcessData {
  title: string;
  icon: LucideIcon;
  color: string;
  heroDescription: string;
  overview: string;
  activities: { title: string; description: string }[];
  deliverables: string[];
  duration: string;
  nextStep: { title: string; href: string };
}

const processData: Record<string, ProcessData> = {
  "discovery": {
    title: "Discovery & Research",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    heroDescription: "Every successful engagement starts with understanding. We dive deep into your business, goals, audience, and competitive landscape to build a foundation for success.",
    overview: "The Discovery phase is where we get to know your business inside and out. We conduct comprehensive research to understand your market position, target audience, and growth opportunities. This foundational work ensures all subsequent strategies are built on solid insights.",
    activities: [
      { title: "Stakeholder Interviews", description: "Meet with key team members to understand business goals, challenges, and expectations." },
      { title: "Market Research", description: "Analyze industry trends, market size, and growth opportunities." },
      { title: "Customer Journey Mapping", description: "Document how customers discover, evaluate, and purchase from you." },
      { title: "Goal Alignment Workshop", description: "Define SMART objectives and success metrics together." },
      { title: "Technology Stack Review", description: "Evaluate current tools and identify integration opportunities." },
      { title: "Data Collection Setup", description: "Ensure proper analytics and tracking are in place." },
    ],
    deliverables: ["Discovery Report", "Market Research Summary", "Goal Framework Document", "Customer Journey Map", "Technology Assessment", "Quick Wins List"],
    duration: "1-2 Weeks",
    nextStep: { title: "Technical Audit", href: "/process/audit" },
  },
  "audit": {
    title: "Technical Audit",
    icon: FileSearch,
    color: "from-indigo-500 to-blue-500",
    heroDescription: "A comprehensive analysis of your website, SEO health, and digital presence to uncover issues and opportunities that impact performance.",
    overview: "Our technical audit examines every aspect of your digital presence. From website speed and mobile experience to SEO health and conversion paths, we identify what's working, what's broken, and what can be optimized for better results.",
    activities: [
      { title: "Website Speed Analysis", description: "Measure Core Web Vitals and identify performance bottlenecks." },
      { title: "Mobile Experience Review", description: "Test usability and functionality across devices." },
      { title: "SEO Health Check", description: "Analyze on-page, technical, and off-page SEO factors." },
      { title: "Conversion Path Analysis", description: "Review funnels and identify friction points." },
      { title: "Content Quality Audit", description: "Evaluate existing content for relevance and optimization." },
      { title: "Security Assessment", description: "Check SSL, security headers, and vulnerability exposure." },
    ],
    deliverables: ["Technical Audit Report", "SEO Health Score", "Speed Optimization Plan", "Mobile UX Report", "Content Gap Analysis", "Priority Fix List"],
    duration: "1 Week",
    nextStep: { title: "Competitive Analysis", href: "/process/competitive-analysis" },
  },
  "competitive-analysis": {
    title: "Competitive Analysis",
    icon: Target,
    color: "from-purple-500 to-indigo-500",
    heroDescription: "Understand your competitive landscape, identify market gaps, and discover strategies that give you an edge over competitors.",
    overview: "We analyze your top competitors to understand their digital strategies, strengths, and weaknesses. This intelligence helps us identify opportunities to differentiate your brand and capture market share they're missing.",
    activities: [
      { title: "Competitor Identification", description: "Map direct, indirect, and aspirational competitors." },
      { title: "SEO Competitive Analysis", description: "Analyze keyword rankings, backlinks, and content strategies." },
      { title: "PPC Intelligence", description: "Research competitor ad copy, keywords, and landing pages." },
      { title: "Social Media Analysis", description: "Review content, engagement, and follower growth strategies." },
      { title: "Positioning Assessment", description: "Compare value propositions and messaging approaches." },
      { title: "Gap Identification", description: "Find opportunities competitors are missing." },
    ],
    deliverables: ["Competitive Analysis Report", "Keyword Gap Analysis", "Content Opportunity Map", "Positioning Matrix", "Strategy Recommendations", "Competitive Benchmark Dashboard"],
    duration: "1 Week",
    nextStep: { title: "Strategy Development", href: "/process/strategy" },
  },
  "strategy": {
    title: "Strategy Development",
    icon: Lightbulb,
    color: "from-pink-500 to-purple-500",
    heroDescription: "Transform insights into action with a comprehensive, data-driven strategy tailored to your unique goals and market position.",
    overview: "The Strategy phase synthesizes all our research into an actionable roadmap. We define clear objectives, select optimal channels, develop messaging frameworks, and create detailed execution plans with timelines and KPIs.",
    activities: [
      { title: "Objective Setting", description: "Define SMART goals aligned with business objectives." },
      { title: "Channel Strategy", description: "Select optimal channels based on audience and ROI potential." },
      { title: "Messaging Framework", description: "Develop key messages and value propositions." },
      { title: "Budget Planning", description: "Allocate resources strategically across initiatives." },
      { title: "KPI Definition", description: "Establish measurable success metrics." },
      { title: "Roadmap Creation", description: "Build a detailed 90-day action plan." },
    ],
    deliverables: ["Strategic Roadmap", "Channel Strategy Matrix", "Messaging Guide", "Budget Allocation Plan", "KPI Framework", "90-Day Action Plan"],
    duration: "1 Week",
    nextStep: { title: "Audience Targeting", href: "/process/audience-targeting" },
  },
  "audience-targeting": {
    title: "Audience Targeting",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    heroDescription: "Define and segment your ideal customers with precision targeting that ensures your message reaches the right people at the right time.",
    overview: "We develop detailed buyer personas and audience segments based on demographics, behaviors, interests, and intent signals. This ensures your marketing investments reach people most likely to convert.",
    activities: [
      { title: "Persona Development", description: "Create detailed profiles of ideal customers." },
      { title: "Audience Segmentation", description: "Group audiences by characteristics and behaviors." },
      { title: "Intent Signal Mapping", description: "Identify behaviors that indicate purchase readiness." },
      { title: "Channel Preference Analysis", description: "Understand where audiences spend time." },
      { title: "Lookalike Modeling", description: "Build similar audiences from best customers." },
      { title: "Retargeting Strategy", description: "Plan how to re-engage interested visitors." },
    ],
    deliverables: ["Buyer Persona Documents", "Audience Segment Guide", "Targeting Parameters", "Lookalike Audience Lists", "Retargeting Plan", "Customer Data Platform Setup"],
    duration: "1 Week",
    nextStep: { title: "Campaign Launch", href: "/process/execution" },
  },
  "execution": {
    title: "Campaign Launch",
    icon: Rocket,
    color: "from-orange-500 to-rose-500",
    heroDescription: "With strategy approved, our expert team brings everything to life with precision, attention to detail, and rigorous quality assurance.",
    overview: "The Execution phase is where strategy becomes reality. Our specialist teams work in parallel to set up campaigns, create content, implement technical changes, and configure tracking. We follow rigorous QA processes to ensure flawless launches.",
    activities: [
      { title: "Campaign Setup", description: "Configure accounts, structures, and targeting." },
      { title: "Content Creation", description: "Develop copy, creatives, and landing pages." },
      { title: "Technical Implementation", description: "Execute website and tracking changes." },
      { title: "Quality Assurance", description: "Rigorous testing before launch." },
      { title: "Tracking Verification", description: "Ensure conversion tracking is accurate." },
      { title: "Staged Rollout", description: "Phased launch with monitoring." },
    ],
    deliverables: ["Live Campaigns", "Published Content", "Technical Changes", "Tracking Setup", "Launch Report", "Initial Performance Data"],
    duration: "2-4 Weeks",
    nextStep: { title: "Performance Tracking", href: "/process/tracking" },
  },
  "tracking": {
    title: "Performance Tracking",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
    heroDescription: "Monitor real-time metrics and KPIs across all touchpoints with comprehensive dashboards and automated reporting.",
    overview: "We set up comprehensive tracking and monitoring to ensure full visibility into campaign performance. Real-time dashboards and automated alerts keep you informed and enable quick decision-making.",
    activities: [
      { title: "Dashboard Setup", description: "Build custom dashboards for key metrics." },
      { title: "Conversion Tracking", description: "Implement accurate conversion measurement." },
      { title: "Attribution Modeling", description: "Set up multi-touch attribution." },
      { title: "Alert Configuration", description: "Create automated performance alerts." },
      { title: "Report Automation", description: "Schedule regular performance reports." },
      { title: "Data Integration", description: "Connect all data sources for unified view." },
    ],
    deliverables: ["Custom Dashboards", "Tracking Documentation", "Attribution Reports", "Automated Alerts", "Weekly Reports", "Data Integration"],
    duration: "Ongoing",
    nextStep: { title: "A/B Testing & Optimization", href: "/process/optimization" },
  },
  "optimization": {
    title: "A/B Testing & Optimization",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    heroDescription: "Continuous testing and refinement to maximize performance through data-driven optimization and experimentation.",
    overview: "We run systematic A/B tests across all campaign elements to identify winning variations. Every aspect—headlines, images, targeting, landing pages—is tested and optimized based on real performance data.",
    activities: [
      { title: "Hypothesis Development", description: "Identify high-impact test opportunities." },
      { title: "Test Design", description: "Create proper A/B and multivariate tests." },
      { title: "Landing Page Testing", description: "Optimize pages for conversion." },
      { title: "Ad Creative Testing", description: "Test headlines, images, and copy." },
      { title: "Audience Testing", description: "Refine targeting based on results." },
      { title: "Bid Optimization", description: "Optimize bids for efficiency." },
    ],
    deliverables: ["Test Roadmap", "A/B Test Results", "Optimization Log", "Performance Improvements", "Best Practice Guide", "Learnings Documentation"],
    duration: "Ongoing",
    nextStep: { title: "Scaling & Growth", href: "/process/scaling" },
  },
  "scaling": {
    title: "Scaling & Growth",
    icon: TrendingUp,
    color: "from-green-500 to-yellow-500",
    heroDescription: "Scale winning strategies and expand into new opportunities while maintaining efficiency and performance.",
    overview: "Once we identify winning strategies, we scale them strategically. This includes increasing budgets, expanding to new channels, and entering new markets—all while maintaining the efficiency and performance that made them successful.",
    activities: [
      { title: "Winner Identification", description: "Identify top-performing campaigns and tactics." },
      { title: "Budget Scaling", description: "Strategically increase investment in winners." },
      { title: "Channel Expansion", description: "Extend successful strategies to new channels." },
      { title: "Market Expansion", description: "Enter new geographic or demographic markets." },
      { title: "Efficiency Maintenance", description: "Monitor and maintain performance at scale." },
      { title: "New Opportunity Testing", description: "Continuously test new growth opportunities." },
    ],
    deliverables: ["Scaling Plan", "Budget Recommendations", "Expansion Strategy", "Performance Forecasts", "Growth Reports", "New Opportunity Pipeline"],
    duration: "Ongoing",
    nextStep: { title: "Reporting & Insights", href: "/process/reporting" },
  },
  "reporting": {
    title: "Reporting & Insights",
    icon: Shield,
    color: "from-teal-500 to-green-500",
    heroDescription: "Transparent reporting with actionable insights and strategic recommendations to drive continuous improvement.",
    overview: "We believe in complete transparency. Regular reports keep you informed of progress, and strategic reviews ensure we're always aligned on goals. Our insights go beyond numbers to provide actionable recommendations.",
    activities: [
      { title: "Weekly Updates", description: "Regular performance summaries and highlights." },
      { title: "Monthly Deep Dives", description: "Comprehensive analysis with insights." },
      { title: "Quarterly Reviews", description: "Strategic reviews and planning sessions." },
      { title: "Executive Summaries", description: "C-level reports for stakeholders." },
      { title: "Insights Generation", description: "Data analysis for actionable recommendations." },
      { title: "Strategy Refinement", description: "Adjust strategy based on learnings." },
    ],
    deliverables: ["Weekly Reports", "Monthly Analysis", "Quarterly Reviews", "Executive Dashboards", "Strategic Recommendations", "Continuous Improvement Plan"],
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
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
