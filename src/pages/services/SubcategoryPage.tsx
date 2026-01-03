import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Target,
  TrendingUp,
  Users,
  Award,
  Clock,
  Zap,
  BarChart3,
  Shield,
  Headphones
} from "lucide-react";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  
  // Generate readable title from slug
  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = formatTitle(subcategory || "ppc");
  const categoryTitle = formatTitle(category || "digital-advertising");

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/services/${category}`} className="hover:text-primary transition-colors">
              {categoryTitle}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-muted pb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {categoryTitle}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3 mb-6">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Drive measurable results with our expert {title.toLowerCase()} services. 
                We combine data-driven strategy, creative excellence, and AI-powered optimization 
                to deliver exceptional ROI for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg">
                  Get Free Proposal
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">340%</div>
                      <div className="text-sm text-muted-foreground">Average Traffic Increase</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">3.5x</div>
                      <div className="text-sm text-muted-foreground">Average ROAS</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive {title.toLowerCase()} services tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Strategy & Planning", description: "Custom strategy development based on your goals and market analysis" },
              { icon: Target, title: "Campaign Setup", description: "Expert campaign structure, targeting, and creative development" },
              { icon: TrendingUp, title: "Optimization", description: "Continuous A/B testing and performance optimization" },
              { icon: Shield, title: "Tracking & Attribution", description: "Advanced tracking setup and multi-touch attribution" },
              { icon: BarChart3, title: "Reporting & Insights", description: "Regular performance reports with actionable insights" },
              { icon: Headphones, title: "Dedicated Support", description: "Direct access to your account manager and team" },
            ].map((item) => (
              <div key={item.title} className="service-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
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
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "We start by understanding your business, goals, audience, and competitive landscape." },
              { step: "02", title: "Strategy", description: "Develop a custom strategy with clear KPIs, targeting, and messaging approach." },
              { step: "03", title: "Execution", description: "Launch and manage campaigns with continuous monitoring and optimization." },
              { step: "04", title: "Optimization", description: "A/B test, refine, and scale what works to maximize your ROI." },
              { step: "05", title: "Reporting", description: "Regular reports with insights and recommendations for continued growth." },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Digital Bull for{" "}
                <span className="text-gradient">{title}</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Proven track record with 500+ successful campaigns",
                  "AI-powered optimization for maximum ROI",
                  "Dedicated account manager and support team",
                  "Transparent reporting and communication",
                  "Flexible engagement models to fit your needs",
                  "Industry-specific expertise and best practices",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" className="mt-8">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">97%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">3x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
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

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom proposal for your business.
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

export default SubcategoryPage;
