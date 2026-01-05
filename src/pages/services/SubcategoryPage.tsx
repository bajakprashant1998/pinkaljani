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
  Headphones,
  Lightbulb,
  LineChart,
  Settings,
  Star,
  FileCheck,
  MessageSquare,
  PieChart,
  Search,
  Globe
} from "lucide-react";
import { serviceCategories } from "@/data/menuData";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  
  // Find category and subcategory data
  const categoryData = serviceCategories.find(c => c.id === category);
  const subcategoryData = categoryData?.subcategories.find(s => s.href.endsWith(subcategory || ""));
  
  // Generate readable title from slug if not found
  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = subcategoryData?.title || formatTitle(subcategory || "service");
  const categoryTitle = categoryData?.title || formatTitle(category || "services");
  const description = subcategoryData?.description || "Drive measurable results with our expert services.";

  const whatsIncluded = [
    { icon: BarChart3, title: "Strategy & Planning", description: "Custom strategy development based on your goals, audience, and market analysis" },
    { icon: Target, title: "Campaign Setup & Launch", description: "Expert campaign structure, targeting, creative development and implementation" },
    { icon: TrendingUp, title: "Continuous Optimization", description: "A/B testing, performance analysis, and ongoing improvements" },
    { icon: Shield, title: "Tracking & Attribution", description: "Advanced tracking setup and multi-touch attribution modeling" },
    { icon: LineChart, title: "Reporting & Insights", description: "Regular performance reports with actionable recommendations" },
    { icon: Headphones, title: "Dedicated Support", description: "Direct access to your account manager and expert team" },
    { icon: Settings, title: "Tool Integration", description: "Seamless integration with your existing marketing stack" },
    { icon: FileCheck, title: "Quality Assurance", description: "Rigorous testing and quality checks before launch" },
    { icon: MessageSquare, title: "Regular Communication", description: "Weekly updates, monthly reviews, and strategy calls" },
  ];

  const process = [
    { step: "01", title: "Discovery & Audit", description: "Comprehensive analysis of your current situation, competitors, and opportunities" },
    { step: "02", title: "Strategy Development", description: "Custom roadmap with clear goals, KPIs, and tactical approach" },
    { step: "03", title: "Implementation", description: "Launch campaigns, optimize assets, and integrate tracking" },
    { step: "04", title: "Monitor & Optimize", description: "Real-time monitoring with continuous performance optimization" },
    { step: "05", title: "Report & Scale", description: "Detailed reporting with insights and scaling recommendations" },
  ];

  const benefits = [
    "Proven track record with 500+ successful projects",
    "AI-powered optimization for maximum ROI",
    "Dedicated account manager and expert team",
    "Transparent reporting and communication",
    "Flexible engagement models to fit your needs",
    "Industry-specific expertise and best practices",
    "24/7 support and quick response times",
    "No long-term contracts - results-based relationships",
  ];

  const stats = [
    { value: "340%", label: "Average Traffic Increase", icon: TrendingUp },
    { value: "3.5x", label: "Average ROAS", icon: Target },
    { value: "97%", label: "Client Satisfaction", icon: Star },
    { value: "500+", label: "Projects Delivered", icon: Users },
  ];

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
                {description}. We combine data-driven strategy, creative excellence, and AI-powered optimization 
                to deliver exceptional ROI for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
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
            {whatsIncluded.map((item) => (
              <div key={item.title} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
            <p className="text-muted-foreground text-lg">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
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
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
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

      {/* Related Services */}
      {categoryData && (
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.subcategories.filter(s => !s.href.endsWith(subcategory || "")).slice(0, 3).map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ServiceIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom proposal tailored to your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Get Free Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubcategoryPage;
