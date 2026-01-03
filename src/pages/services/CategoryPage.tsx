import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Target, 
  Search, 
  MousePointer, 
  Workflow,
  ShoppingCart,
  Palette,
  Brain,
  Code,
  Zap,
  Users,
  Clock,
  Award,
  type LucideIcon
} from "lucide-react";

interface ServiceData {
  title: string;
  description: string;
  heroDescription: string;
  icon: LucideIcon;
  color: string;
  subcategories: {
    title: string;
    description: string;
    href: string;
  }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "digital-intelligence": {
    title: "Digital Intelligence & Revenue Operations",
    description: "Data-driven insights and revenue operations",
    heroDescription: "Transform raw data into actionable insights. Our digital intelligence solutions combine advanced analytics, AI-powered forecasting, and revenue operations to give you complete visibility into your business performance.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    subcategories: [
      { title: "Web Channel Call Tracking", description: "Track and attribute phone calls to digital channels", href: "/services/digital-intelligence/call-tracking" },
      { title: "SEO Reporting & Forecasting", description: "Predictive SEO analytics and performance tracking", href: "/services/digital-intelligence/seo-reporting" },
      { title: "Channel Attribution & Forecasting", description: "Multi-touch attribution and revenue forecasting", href: "/services/digital-intelligence/attribution" },
      { title: "Digital Marketing Competitor Analysis", description: "Competitive intelligence and benchmarking", href: "/services/digital-intelligence/competitor-analysis" },
      { title: "Private Equity Due Diligence", description: "Digital asset valuation and risk assessment", href: "/services/digital-intelligence/due-diligence" },
      { title: "Revenue Operations (RevOps)", description: "Unified revenue strategy and operations", href: "/services/digital-intelligence/revops" },
    ],
    benefits: [
      "360° visibility into marketing performance",
      "AI-powered revenue forecasting",
      "Unified data across all channels",
      "Real-time dashboards and alerts",
      "Custom attribution modeling",
      "Automated reporting and insights",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Audit your current data infrastructure and identify gaps" },
      { step: "02", title: "Strategy", description: "Design a unified measurement framework" },
      { step: "03", title: "Implementation", description: "Deploy tracking, integrations, and dashboards" },
      { step: "04", title: "Optimization", description: "Continuous refinement based on insights" },
    ],
  },
  "digital-advertising": {
    title: "Digital Advertising Services",
    description: "ROI-focused paid media campaigns",
    heroDescription: "Maximize your advertising ROI with data-driven campaigns across search, social, and programmatic channels. Our AI-powered optimization ensures every rupee works harder.",
    icon: Target,
    color: "from-orange-500 to-red-500",
    subcategories: [
      { title: "PPC Management Services", description: "Google Ads, Microsoft Ads management", href: "/services/digital-advertising/ppc" },
      { title: "Enterprise PPC Management", description: "Large-scale paid search campaigns", href: "/services/digital-advertising/enterprise-ppc" },
      { title: "Google Local Services Ads", description: "Local lead generation advertising", href: "/services/digital-advertising/local-services" },
      { title: "Social Media Advertising", description: "Facebook, Instagram, LinkedIn ads", href: "/services/digital-advertising/social-ads" },
      { title: "Enterprise Social Advertising", description: "Scaled social campaigns for enterprises", href: "/services/digital-advertising/enterprise-social" },
      { title: "Programmatic Advertising", description: "AI-driven display and video advertising", href: "/services/digital-advertising/programmatic" },
    ],
    benefits: [
      "Average 3.5x ROAS improvement",
      "AI-powered bid optimization",
      "Cross-channel campaign management",
      "Real-time performance tracking",
      "Creative A/B testing",
      "Audience segmentation and targeting",
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyze current campaigns and identify opportunities" },
      { step: "02", title: "Strategy", description: "Develop targeting, messaging, and budget allocation" },
      { step: "03", title: "Launch", description: "Deploy optimized campaigns across channels" },
      { step: "04", title: "Scale", description: "Continuous optimization and scaling winners" },
    ],
  },
  "seo-content-marketing": {
    title: "Content Marketing & OmniSEO®",
    description: "Organic growth and authority building",
    heroDescription: "Dominate search results with our proprietary OmniSEO® methodology. We combine technical excellence, content strategy, and AI-powered optimization to drive sustainable organic growth.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    subcategories: [
      { title: "Content Marketing Services", description: "Strategic content creation and distribution", href: "/services/seo-content-marketing/content-marketing" },
      { title: "Content Marketing Strategy", description: "Data-driven content planning", href: "/services/seo-content-marketing/content-strategy" },
      { title: "Website Copywriting", description: "Conversion-focused web copy", href: "/services/seo-content-marketing/copywriting" },
      { title: "Social Media Management", description: "Organic social media growth", href: "/services/seo-content-marketing/social-media" },
      { title: "SEO Thought Leadership", description: "Authority building and PR", href: "/services/seo-content-marketing/thought-leadership" },
      { title: "AI Overviews Research", description: "AI search optimization research", href: "/services/seo-content-marketing/ai-research" },
    ],
    benefits: [
      "Proprietary OmniSEO® methodology",
      "340% average traffic increase",
      "AI-powered content optimization",
      "Technical SEO excellence",
      "Authority building at scale",
      "Conversational search readiness",
    ],
    process: [
      { step: "01", title: "Audit", description: "Technical, content, and competitive analysis" },
      { step: "02", title: "Strategy", description: "Keyword research and content roadmap" },
      { step: "03", title: "Execute", description: "Technical fixes, content creation, link building" },
      { step: "04", title: "Grow", description: "Ongoing optimization and scaling" },
    ],
  },
  "conversion-optimization": {
    title: "Conversion & Experience Optimisation",
    description: "Turn traffic into revenue",
    heroDescription: "Stop leaving money on the table. Our CRO and UX optimization services use data, psychology, and AI to dramatically improve your conversion rates.",
    icon: MousePointer,
    color: "from-purple-500 to-pink-500",
    subcategories: [
      { title: "Conversion Rate Optimisation (CRO)", description: "Data-driven conversion improvements", href: "/services/conversion-optimization/cro" },
      { title: "User Experience (UX) Testing", description: "Usability research and testing", href: "/services/conversion-optimization/ux-testing" },
      { title: "Landing Pages & Funnels", description: "High-converting landing page design", href: "/services/conversion-optimization/landing-pages" },
      { title: "Online Review Acceleration", description: "Reputation and review management", href: "/services/conversion-optimization/reviews" },
      { title: "Website Personalisation", description: "Dynamic content personalization", href: "/services/conversion-optimization/personalization" },
    ],
    benefits: [
      "Average 45% conversion lift",
      "Data-driven hypothesis testing",
      "AI-powered personalization",
      "Continuous A/B testing",
      "User behavior analytics",
      "Revenue impact tracking",
    ],
    process: [
      { step: "01", title: "Analyze", description: "Heatmaps, recordings, and funnel analysis" },
      { step: "02", title: "Hypothesize", description: "Prioritized test roadmap" },
      { step: "03", title: "Test", description: "A/B and multivariate testing" },
      { step: "04", title: "Optimize", description: "Implement winners, iterate" },
    ],
  },
  "marketing-automation": {
    title: "Marketing Automation & CRM Enablement",
    description: "Automated lead nurturing and workflows",
    heroDescription: "Scale your marketing with intelligent automation. We help you implement and optimize marketing automation platforms that nurture leads and accelerate sales.",
    icon: Workflow,
    color: "from-indigo-500 to-blue-500",
    subcategories: [
      { title: "Account-Based Marketing (ABM)", description: "Targeted enterprise marketing", href: "/services/marketing-automation/abm" },
      { title: "Lead Nurture Email Marketing", description: "Automated lead nurturing sequences", href: "/services/marketing-automation/lead-nurture" },
      { title: "Email Marketing Management", description: "Full-service email campaigns", href: "/services/marketing-automation/email-marketing" },
      { title: "Salesforce Marketing Automation", description: "Pardot and Marketing Cloud", href: "/services/marketing-automation/salesforce" },
      { title: "Microsoft Dynamics Automation", description: "Dynamics 365 marketing", href: "/services/marketing-automation/dynamics" },
    ],
    benefits: [
      "67% faster lead qualification",
      "Seamless CRM integration",
      "Personalized journeys at scale",
      "Lead scoring and routing",
      "Automated workflows",
      "Revenue attribution",
    ],
    process: [
      { step: "01", title: "Assess", description: "Audit current systems and processes" },
      { step: "02", title: "Design", description: "Map customer journeys and workflows" },
      { step: "03", title: "Implement", description: "Build and integrate automation" },
      { step: "04", title: "Optimize", description: "Refine based on performance" },
    ],
  },
  "ecommerce-marketplaces": {
    title: "Commerce Platforms & Marketplace Marketing",
    description: "Ecommerce and marketplace growth",
    heroDescription: "Dominate online marketplaces and grow your ecommerce revenue. From Amazon to Shopify, we provide end-to-end commerce optimization.",
    icon: ShoppingCart,
    color: "from-teal-500 to-green-500",
    subcategories: [
      { title: "SEO for Amazon", description: "Amazon listing optimization", href: "/services/ecommerce-marketplaces/amazon-seo" },
      { title: "Amazon Advertising Management", description: "Sponsored Products, Brands, Display", href: "/services/ecommerce-marketplaces/amazon-ads" },
      { title: "Shopify Optimisation Services", description: "Shopify store optimization", href: "/services/ecommerce-marketplaces/shopify-optimization" },
      { title: "Shopify Ecommerce Development", description: "Custom Shopify development", href: "/services/ecommerce-marketplaces/shopify-development" },
      { title: "Influencer Marketing Services", description: "Influencer partnerships", href: "/services/ecommerce-marketplaces/influencer" },
      { title: "Walmart Marketplace Advertising", description: "Walmart advertising management", href: "/services/ecommerce-marketplaces/walmart" },
    ],
    benefits: [
      "250% average ROAS on Amazon",
      "Full marketplace management",
      "Product listing optimization",
      "Review and rating strategy",
      "Inventory forecasting",
      "Multi-channel commerce",
    ],
    process: [
      { step: "01", title: "Audit", description: "Catalog, listings, and competitive analysis" },
      { step: "02", title: "Optimize", description: "Listing optimization and SEO" },
      { step: "03", title: "Advertise", description: "Launch and manage ad campaigns" },
      { step: "04", title: "Scale", description: "Expand products and channels" },
    ],
  },
  "design-creative": {
    title: "Design & Creative Services",
    description: "Visual identity and conversion-focused design",
    heroDescription: "Beautiful design that converts. Our creative team delivers stunning websites, graphics, and visual experiences that engage audiences and drive results.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    subcategories: [
      { title: "Website Design", description: "Custom website design", href: "/services/design-creative/website-design" },
      { title: "Website Redesign", description: "Website refresh and modernization", href: "/services/design-creative/website-redesign" },
      { title: "Rapid Web Design", description: "Fast-turnaround website design", href: "/services/design-creative/rapid-design" },
      { title: "Ecommerce Website Design", description: "Online store design", href: "/services/design-creative/ecommerce-design" },
      { title: "Social Media Design", description: "Social graphics and templates", href: "/services/design-creative/social-design" },
      { title: "Email Marketing Design", description: "Email templates and design", href: "/services/design-creative/email-design" },
    ],
    benefits: [
      "Conversion-focused design",
      "Brand consistency across channels",
      "Responsive and accessible",
      "Fast turnaround times",
      "Unlimited revisions",
      "Design system creation",
    ],
    process: [
      { step: "01", title: "Discover", description: "Brand, audience, and goals research" },
      { step: "02", title: "Design", description: "Concepts, wireframes, and mockups" },
      { step: "03", title: "Refine", description: "Feedback and iterations" },
      { step: "04", title: "Deliver", description: "Final assets and handoff" },
    ],
  },
  "ai-services": {
    title: "AI Services & Generative Intelligence",
    description: "AI-powered marketing and automation",
    heroDescription: "Harness the power of AI to transform your marketing. From AI consulting to implementation, we help you leverage cutting-edge technology for competitive advantage.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    subcategories: [
      { title: "AI Consulting", description: "AI strategy and roadmap", href: "/services/ai-services/consulting" },
      { title: "AI Digital Marketing Services", description: "AI-powered marketing", href: "/services/ai-services/ai-marketing" },
      { title: "ChatGPT Optimisation (GEO/AEO)", description: "Generative engine optimization", href: "/services/ai-services/geo" },
      { title: "AI Agent Development", description: "Custom AI agent creation", href: "/services/ai-services/agents" },
      { title: "AI & GPT Integrations", description: "AI tool integrations", href: "/services/ai-services/integrations" },
      { title: "Enterprise GEO", description: "Enterprise-scale AI optimization", href: "/services/ai-services/enterprise-geo" },
    ],
    benefits: [
      "AI strategy and roadmap",
      "Custom AI agent development",
      "Generative engine optimization",
      "AI-powered content creation",
      "Automation and efficiency",
      "Competitive advantage",
    ],
    process: [
      { step: "01", title: "Assess", description: "AI readiness and opportunity analysis" },
      { step: "02", title: "Design", description: "AI strategy and use case prioritization" },
      { step: "03", title: "Build", description: "Develop and integrate AI solutions" },
      { step: "04", title: "Scale", description: "Expand and optimize AI capabilities" },
    ],
  },
  "development": {
    title: "Development & Technology Services",
    description: "Platforms, performance, and compliance",
    heroDescription: "Build robust digital experiences with our development team. From WordPress to custom platforms, we deliver fast, secure, and scalable solutions.",
    icon: Code,
    color: "from-slate-500 to-gray-600",
    subcategories: [
      { title: "Digital Experience Development", description: "Custom web applications", href: "/services/development/digital-experience" },
      { title: "WordPress Development", description: "WordPress design and development", href: "/services/development/wordpress" },
      { title: "Shopify Ecommerce Development", description: "Shopify store development", href: "/services/development/shopify" },
      { title: "Web Infrastructure & Maintenance", description: "Hosting and maintenance", href: "/services/development/infrastructure" },
      { title: "Content Management Systems", description: "CMS implementation", href: "/services/development/cms" },
      { title: "ADA Compliance Services", description: "Accessibility compliance", href: "/services/development/ada-compliance" },
    ],
    benefits: [
      "Fast, secure, scalable",
      "Modern tech stack",
      "SEO-friendly architecture",
      "Accessibility compliance",
      "Ongoing maintenance",
      "Performance optimization",
    ],
    process: [
      { step: "01", title: "Plan", description: "Requirements and architecture" },
      { step: "02", title: "Design", description: "UX/UI design and prototyping" },
      { step: "03", title: "Develop", description: "Build and test" },
      { step: "04", title: "Launch", description: "Deploy and optimize" },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const service = servicesData[category || ""] || servicesData["digital-advertising"];
  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 max-w-3xl">
              {service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">{service.title.split(" ")[0]}</span> Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subcategories.map((sub) => (
              <Link
                key={sub.title}
                to={sub.href}
                className="group service-card"
              >
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sub.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {sub.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Proven Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach that delivers consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Digital Bull for{" "}
                <span className="text-gradient">{service.title.split(" ")[0]}</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">97%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">3x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your {service.title.split(" ")[0]}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom strategy from our experts.
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

export default CategoryPage;
