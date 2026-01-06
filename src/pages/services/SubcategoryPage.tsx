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
  Globe,
  ChevronDown,
  Play,
  Sparkles,
  Brain,
  Rocket
} from "lucide-react";
import { serviceCategories } from "@/data/menuData";
import { getSubcategoryData, seoServicesData, ppcServicesData, webServicesData } from "@/data/serviceData";
import ServicePointSection from "./ServicePointSection";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  
  // Find category and subcategory data
  const categoryData = serviceCategories.find(c => c.id === category);
  const subcategoryData = categoryData?.subcategories.find(s => s.href.endsWith(subcategory || ""));
  
  // Get detailed service data
  const detailedData = getSubcategoryData(category || "", subcategory || "");
  
  // Generate readable title from slug if not found
  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = detailedData?.title || subcategoryData?.title || formatTitle(subcategory || "service");
  const categoryTitle = categoryData?.title || formatTitle(category || "services");
  const description = detailedData?.longDescription || subcategoryData?.description || "Drive measurable results with our expert services.";
  const color = detailedData?.color || categoryData?.color || "from-blue-500 to-cyan-500";

  const defaultWhatsIncluded = [
    { icon: BarChart3, title: "Strategy & Planning", description: "Custom strategy development based on your goals, audience, and market analysis" },
    { icon: Target, title: "Campaign Setup & Launch", description: "Expert campaign structure, targeting, creative development and implementation" },
    { icon: TrendingUp, title: "Continuous Optimization", description: "A/B testing, performance analysis, and ongoing improvements" },
    { icon: Shield, title: "Tracking & Attribution", description: "Advanced tracking setup and multi-touch attribution modeling" },
    { icon: LineChart, title: "Reporting & Insights", description: "Regular performance reports with actionable recommendations" },
    { icon: Headphones, title: "Dedicated Support", description: "Direct access to your account manager and expert team" },
  ];

  const benefits = detailedData?.benefits || [
    "Proven track record with 500+ successful projects",
    "AI-powered optimization for maximum ROI",
    "Dedicated account manager and expert team",
    "Transparent reporting and communication",
    "Flexible engagement models to fit your needs",
    "Industry-specific expertise and best practices",
    "24/7 support and quick response times",
    "No long-term contracts - results-based relationships",
  ];

  const stats = detailedData?.stats || [
    { value: "340%", label: "Average Traffic Increase" },
    { value: "3.5x", label: "Average ROAS" },
    { value: "97%", label: "Client Satisfaction" },
  ];

  const servicePoints = detailedData?.servicePoints || [];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-secondary-foreground/70">
            <Link to="/" className="hover:text-secondary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/services/${category}`} className="hover:text-secondary-foreground transition-colors">
              {categoryTitle}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary-foreground">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-10 w-96 h-96 bg-gradient-to-br ${color} rounded-full blur-3xl opacity-20`} />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white mb-6`}>
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">{categoryTitle}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
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
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-secondary-foreground/10">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm">Award-Winning Agency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm">500+ Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-3xl opacity-30`} />
              <div className="relative bg-card text-card-foreground rounded-2xl shadow-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">AI-Powered Results</h3>
                    <p className="text-sm text-muted-foreground">Proven performance metrics</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                          {index === 0 ? <TrendingUp className="w-5 h-5 text-white" /> : 
                           index === 1 ? <Target className="w-5 h-5 text-white" /> :
                           <Star className="w-5 h-5 text-white" />}
                        </div>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="default" className="w-full" asChild>
                  <Link to="/contact">
                    Schedule a Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-secondary-foreground/50" />
        </div>
      </section>

      {/* Service Overview */}
      {servicePoints.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Comprehensive Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's Included in <span className="text-gradient">{title}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our {title.toLowerCase()} services cover every aspect needed for success. Each element is designed to work together for maximum impact.
              </p>
            </div>

            {/* Service Points Grid Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
              {servicePoints.slice(0, 10).map((point, index) => {
                const Icon = point.icon;
                return (
                  <a
                    key={point.id}
                    href={`#${point.id}`}
                    className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-primary mb-1">Step {String(index + 1).padStart(2, "0")}</div>
                    <h4 className="font-display font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                      {point.title}
                    </h4>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Service Points */}
      {servicePoints.length > 0 && (
        <div className="relative">
          {servicePoints.map((point, index) => (
            <div key={point.id} id={point.id}>
              <ServicePointSection point={point} index={index} color={color} />
            </div>
          ))}
        </div>
      )}

      {/* If no detailed service points, show default What's Included */}
      {servicePoints.length === 0 && (
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
              {defaultWhatsIncluded.map((item) => (
                <div key={item.title} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
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
      )}

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology for delivering exceptional {title.toLowerCase()} results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery & Audit", description: "Comprehensive analysis of your current situation" },
              { step: "02", title: "Strategy Development", description: "Custom roadmap with clear KPIs" },
              { step: "03", title: "Implementation", description: "Expert execution of the strategy" },
              { step: "04", title: "Monitor & Optimize", description: "Continuous improvement based on data" },
              { step: "05", title: "Report & Scale", description: "Detailed reporting and scaling" },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} text-white flex items-center justify-center font-bold text-lg mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
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
                {benefits.slice(0, 8).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <CheckCircle className="w-4 h-4 text-white" />
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <ServiceIcon className="w-6 h-6 text-white" />
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
