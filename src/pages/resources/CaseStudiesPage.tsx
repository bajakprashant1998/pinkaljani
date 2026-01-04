import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, BarChart3, ShoppingCart, Cpu, Building, Lightbulb } from "lucide-react";

const caseStudies = [
  {
    slug: "ecommerce-revenue-growth",
    title: "340% Revenue Growth for Fashion Ecommerce Brand",
    industry: "Ecommerce & Retail",
    icon: ShoppingCart,
    challenge: "Low conversion rates and high cart abandonment",
    solution: "SEO optimization, CRO, and targeted remarketing campaigns",
    results: [
      { metric: "340%", label: "Revenue Increase" },
      { metric: "67%", label: "Conversion Rate Up" },
      { metric: "45%", label: "Lower CAC" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    slug: "saas-lead-generation",
    title: "5x Lead Generation for B2B SaaS Platform",
    industry: "SaaS & Technology",
    icon: Cpu,
    challenge: "High competition and low brand awareness",
    solution: "Content marketing, ABM, and LinkedIn advertising",
    results: [
      { metric: "5x", label: "More Qualified Leads" },
      { metric: "280%", label: "Traffic Growth" },
      { metric: "3.2x", label: "ROAS" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "healthcare-patient-acquisition",
    title: "Healthcare Network Doubles Patient Appointments",
    industry: "Healthcare",
    icon: Users,
    challenge: "Limited online visibility and patient trust",
    solution: "Local SEO, reputation management, and content strategy",
    results: [
      { metric: "2x", label: "Patient Appointments" },
      { metric: "156%", label: "Organic Traffic" },
      { metric: "4.8★", label: "Google Rating" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "real-estate-leads",
    title: "Real Estate Developer Gets 400% More Qualified Leads",
    industry: "Real Estate",
    icon: Building,
    challenge: "Low-quality leads and high advertising costs",
    solution: "Landing page optimization, Google Ads, and lead scoring",
    results: [
      { metric: "400%", label: "Lead Increase" },
      { metric: "52%", label: "Cost Reduction" },
      { metric: "89%", label: "Lead Quality Score" },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "edtech-enrollment",
    title: "EdTech Startup Achieves 250% Enrollment Growth",
    industry: "Education & EdTech",
    icon: Lightbulb,
    challenge: "Low course enrollments and brand recognition",
    solution: "Social media marketing, influencer partnerships, and email automation",
    results: [
      { metric: "250%", label: "Enrollment Growth" },
      { metric: "180%", label: "Social Engagement" },
      { metric: "45%", label: "Email Open Rate" },
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    color: "from-indigo-500 to-blue-500",
  },
  {
    slug: "manufacturing-b2b",
    title: "Manufacturing Company Generates ₹50Cr Pipeline",
    industry: "B2B & Manufacturing",
    icon: BarChart3,
    challenge: "Long sales cycles and difficulty reaching decision-makers",
    solution: "ABM strategy, LinkedIn outreach, and thought leadership content",
    results: [
      { metric: "₹50Cr", label: "Pipeline Generated" },
      { metric: "67%", label: "Shorter Sales Cycle" },
      { metric: "12x", label: "ROI on Marketing" },
    ],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    color: "from-slate-500 to-gray-600",
  },
];

const CaseStudiesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Real Results, Real Impact</span>
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable growth 
              through data-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/70 text-sm">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">₹500Cr+</div>
              <div className="text-primary-foreground/70 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">97%</div>
              <div className="text-primary-foreground/70 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">3.5x</div>
              <div className="text-primary-foreground/70 text-sm">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/resources/case-studies/${study.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${study.color} text-white text-xs font-medium`}>
                      <study.icon className="w-3 h-3" />
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center bg-muted rounded-lg p-2">
                        <div className="text-lg font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results.
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

export default CaseStudiesPage;
