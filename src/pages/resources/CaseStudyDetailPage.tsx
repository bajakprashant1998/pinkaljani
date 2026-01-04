import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  BarChart3,
  Users,
  Clock,
  Award,
  Quote
} from "lucide-react";

const caseStudyData: Record<string, {
  title: string;
  industry: string;
  client: string;
  duration: string;
  services: string[];
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  results: { metric: string; label: string; description: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
}> = {
  "ecommerce-revenue-growth": {
    title: "340% Revenue Growth for Fashion Ecommerce Brand",
    industry: "Ecommerce & Retail",
    client: "FashionFirst India",
    duration: "12 months",
    services: ["SEO", "PPC", "CRO", "Social Media"],
    challenge: {
      title: "The Challenge",
      description: "FashionFirst was struggling with low organic visibility, poor conversion rates, and high cart abandonment rates that were limiting their growth potential.",
      points: [
        "Only 2% website conversion rate",
        "78% cart abandonment rate",
        "Low organic traffic from search engines",
        "High customer acquisition costs",
        "Limited brand awareness in target market",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive digital strategy combining SEO, conversion optimization, and targeted advertising.",
      steps: [
        { title: "Technical SEO Overhaul", description: "Fixed site speed issues, implemented structured data, and optimized product pages for search" },
        { title: "Conversion Rate Optimization", description: "Redesigned checkout flow, added trust signals, and implemented cart recovery emails" },
        { title: "Targeted PPC Campaigns", description: "Created highly segmented Google Shopping and social media campaigns" },
        { title: "Content Marketing", description: "Developed fashion guides and lookbooks to drive organic traffic" },
      ],
    },
    results: [
      { metric: "340%", label: "Revenue Increase", description: "Year-over-year revenue growth" },
      { metric: "67%", label: "Conversion Rate Up", description: "From 2% to 3.34% conversion" },
      { metric: "45%", label: "Lower CAC", description: "Reduced customer acquisition cost" },
      { metric: "156%", label: "Organic Traffic", description: "Increase in organic search visits" },
    ],
    testimonial: {
      quote: "Digital Bull completely transformed our online business. Their data-driven approach and dedication to results exceeded all our expectations. We've never seen such consistent growth.",
      author: "Priya Sharma",
      role: "CEO, FashionFirst India",
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
  },
  "saas-lead-generation": {
    title: "5x Lead Generation for B2B SaaS Platform",
    industry: "SaaS & Technology",
    client: "CloudMetrics Pro",
    duration: "9 months",
    services: ["Content Marketing", "ABM", "LinkedIn Ads", "Email Marketing"],
    challenge: {
      title: "The Challenge",
      description: "CloudMetrics Pro was a growing SaaS company struggling to generate qualified leads in a competitive market with limited brand recognition.",
      points: [
        "Low volume of qualified leads",
        "Long and unpredictable sales cycles",
        "High competition from established players",
        "Limited content library for nurturing",
        "Poor LinkedIn presence despite B2B focus",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We developed an integrated ABM and content marketing strategy to reach and convert high-value accounts.",
      steps: [
        { title: "ICP Development", description: "Created detailed ideal customer profiles and target account lists" },
        { title: "Content Engine", description: "Produced whitepapers, case studies, and thought leadership content" },
        { title: "ABM Campaigns", description: "Launched personalized campaigns targeting key accounts" },
        { title: "Lead Nurturing", description: "Implemented automated email sequences for lead qualification" },
      ],
    },
    results: [
      { metric: "5x", label: "Lead Generation", description: "Qualified leads per month" },
      { metric: "280%", label: "Traffic Growth", description: "Increase in website visitors" },
      { metric: "3.2x", label: "ROAS", description: "Return on advertising spend" },
      { metric: "42%", label: "Shorter Cycle", description: "Reduction in sales cycle length" },
    ],
    testimonial: {
      quote: "The ABM strategy Digital Bull implemented was exactly what we needed. We're now consistently hitting our MQL targets and the quality of leads has improved dramatically.",
      author: "Rahul Verma",
      role: "VP Marketing, CloudMetrics Pro",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  },
  "healthcare-patient-acquisition": {
    title: "Healthcare Network Doubles Patient Appointments",
    industry: "Healthcare",
    client: "MedCare Hospital Group",
    duration: "8 months",
    services: ["Local SEO", "Reputation Management", "Content Strategy", "PPC"],
    challenge: {
      title: "The Challenge",
      description: "MedCare Hospital Group needed to increase patient appointments while building trust and improving their online reputation.",
      points: [
        "Low visibility in local search results",
        "Mixed online reviews affecting trust",
        "Competitors dominating local keywords",
        "Limited online appointment bookings",
        "No content strategy for patient education",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive local SEO and reputation management strategy to build trust and visibility.",
      steps: [
        { title: "Local SEO Optimization", description: "Optimized Google Business profiles and local citations" },
        { title: "Reputation Management", description: "Implemented review generation and response strategies" },
        { title: "Content Development", description: "Created health guides and doctor profiles" },
        { title: "Targeted Advertising", description: "Launched location-based Google and Facebook campaigns" },
      ],
    },
    results: [
      { metric: "2x", label: "Appointments", description: "Increase in monthly appointments" },
      { metric: "156%", label: "Organic Traffic", description: "Growth in website visits" },
      { metric: "4.8★", label: "Google Rating", description: "Average review rating" },
      { metric: "89%", label: "Online Bookings", description: "Increase in online appointments" },
    ],
    testimonial: {
      quote: "Digital Bull helped us become the top-rated healthcare provider in our region. The increase in patient trust and appointments has been remarkable.",
      author: "Dr. Anita Desai",
      role: "Chief Medical Officer, MedCare",
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
  },
  "real-estate-leads": {
    title: "Real Estate Developer Gets 400% More Qualified Leads",
    industry: "Real Estate",
    client: "Prime Properties",
    duration: "6 months",
    services: ["Landing Pages", "Google Ads", "Facebook Ads", "Lead Scoring"],
    challenge: {
      title: "The Challenge",
      description: "Prime Properties was spending heavily on advertising but receiving mostly unqualified leads that rarely converted to site visits.",
      points: [
        "Low-quality leads from current campaigns",
        "High cost per lead with poor ROI",
        "No lead qualification process",
        "Generic landing pages with low conversion",
        "Lack of tracking and attribution",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We redesigned their entire lead generation funnel with qualification mechanisms and targeted advertising.",
      steps: [
        { title: "Landing Page Redesign", description: "Created high-converting, property-specific landing pages" },
        { title: "Lead Qualification", description: "Implemented multi-step forms with scoring logic" },
        { title: "Targeted Campaigns", description: "Launched geo-targeted and interest-based ad campaigns" },
        { title: "CRM Integration", description: "Set up automated lead routing and follow-up sequences" },
      ],
    },
    results: [
      { metric: "400%", label: "Lead Increase", description: "More qualified leads per month" },
      { metric: "52%", label: "Cost Reduction", description: "Lower cost per qualified lead" },
      { metric: "89%", label: "Lead Quality", description: "Improvement in lead score" },
      { metric: "₹12Cr", label: "Revenue", description: "Attributed to digital campaigns" },
    ],
    testimonial: {
      quote: "The transformation in lead quality was immediate. We're now spending less but getting leads that actually convert to site visits and sales.",
      author: "Vikram Patel",
      role: "Director of Sales, Prime Properties",
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
  },
  "edtech-enrollment": {
    title: "EdTech Startup Achieves 250% Enrollment Growth",
    industry: "Education & EdTech",
    client: "SkillUp Academy",
    duration: "10 months",
    services: ["Social Media", "Influencer Marketing", "Email Automation", "Content"],
    challenge: {
      title: "The Challenge",
      description: "SkillUp Academy was a new EdTech startup struggling to build brand awareness and drive course enrollments in a crowded market.",
      points: [
        "Low brand recognition in target market",
        "High competition from established platforms",
        "Low social media engagement",
        "Poor email open and conversion rates",
        "Limited marketing budget",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We developed a multi-channel strategy leveraging social media, influencers, and email marketing to drive enrollments.",
      steps: [
        { title: "Social Strategy", description: "Created engaging content calendar and community management" },
        { title: "Influencer Partnerships", description: "Collaborated with education and career influencers" },
        { title: "Email Automation", description: "Built nurturing sequences for course promotion" },
        { title: "Retargeting", description: "Implemented pixel-based retargeting campaigns" },
      ],
    },
    results: [
      { metric: "250%", label: "Enrollment Growth", description: "Increase in course enrollments" },
      { metric: "180%", label: "Social Engagement", description: "Growth in engagement rate" },
      { metric: "45%", label: "Email Open Rate", description: "Above industry average" },
      { metric: "₹8Cr", label: "Revenue", description: "Annual course revenue" },
    ],
    testimonial: {
      quote: "Digital Bull understood the EdTech space and helped us compete with much larger players. Our brand is now recognized across our target audience.",
      author: "Neha Gupta",
      role: "Founder, SkillUp Academy",
    },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
  },
  "manufacturing-b2b": {
    title: "Manufacturing Company Generates ₹50Cr Pipeline",
    industry: "B2B & Manufacturing",
    client: "TechManu Industries",
    duration: "12 months",
    services: ["ABM", "LinkedIn Outreach", "Thought Leadership", "Trade Marketing"],
    challenge: {
      title: "The Challenge",
      description: "TechManu Industries faced long sales cycles and difficulty reaching decision-makers in their target industries.",
      points: [
        "Average 18-month sales cycles",
        "Difficulty reaching C-level executives",
        "Limited digital presence in B2B space",
        "Heavy reliance on trade shows",
        "No content for nurturing prospects",
      ],
    },
    solution: {
      title: "Our Solution",
      description: "We implemented an account-based marketing strategy combined with thought leadership content to accelerate the sales cycle.",
      steps: [
        { title: "Target Account Selection", description: "Identified high-value accounts using firmographic data" },
        { title: "Thought Leadership", description: "Created industry reports and executive content" },
        { title: "LinkedIn Strategy", description: "Built executive presence and outreach campaigns" },
        { title: "Integrated Campaigns", description: "Combined digital with trade show follow-up" },
      ],
    },
    results: [
      { metric: "₹50Cr", label: "Pipeline Value", description: "Qualified opportunities generated" },
      { metric: "67%", label: "Shorter Cycle", description: "Reduction in sales cycle" },
      { metric: "12x", label: "Marketing ROI", description: "Return on marketing investment" },
      { metric: "23", label: "Enterprise Deals", description: "Closed within 12 months" },
    ],
    testimonial: {
      quote: "The ABM approach changed how we think about marketing. We're now having conversations with exactly the right people at exactly the right time.",
      author: "Suresh Kumar",
      role: "CEO, TechManu Industries",
    },
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=600&fit=crop",
  },
};

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudyData[slug || ""] || caseStudyData["ecommerce-revenue-growth"];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/resources/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{study.client}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-muted pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {study.industry}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-3 mb-6">
                {study.title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{study.client}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{study.duration}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span key={service} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={study.image} alt={study.title} className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-primary py-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {result.metric}
                </div>
                <div className="text-primary-foreground/90 font-medium">{result.label}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">{study.challenge.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">{study.challenge.description}</p>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-semibold text-foreground mb-4">Key Challenges:</h3>
              <ul className="space-y-3">
                {study.challenge.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">{study.solution.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">{study.solution.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {study.solution.steps.map((step, index) => (
                <div key={step.title} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "{study.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-secondary-foreground">{study.testimonial.author}</div>
                <div className="text-secondary-foreground/70">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with a customized digital strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/resources/case-studies">
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetailPage;
