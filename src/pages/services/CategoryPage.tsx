import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Users,
  Clock,
  Award,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import { serviceCategories } from "@/data/menuData";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const service = serviceCategories.find(s => s.id === category) || serviceCategories[0];
  const Icon = service.icon;

  const stats = [
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "97%", label: "Client Retention", icon: Award },
    { value: "3.5x", label: "Average ROI", icon: TrendingUp },
    { value: "24hr", label: "Response Time", icon: Clock },
  ];

  const benefits = [
    "Data-driven strategies backed by analytics",
    "Dedicated account manager for your business",
    "AI-powered optimization and automation",
    "Transparent reporting and communication",
    "Proven track record with 500+ clients",
    "Industry-specific expertise and best practices",
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We analyze your business, goals, and competitive landscape to understand your needs." },
    { step: "02", title: "Strategy", description: "Develop a custom strategy with clear KPIs and actionable roadmap." },
    { step: "03", title: "Execution", description: "Implement solutions with continuous monitoring and optimization." },
    { step: "04", title: "Scale", description: "Analyze results, optimize performance, and scale what works." },
  ];

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
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white mb-6`}>
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">Digital Bull Services</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl">
              {service.description}. We deliver measurable results with proven strategies and cutting-edge technology.
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">{service.title}</span> Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions tailored to drive your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subcategories.map((sub) => {
              const SubIcon = sub.icon;
              return (
                <Link
                  key={sub.title}
                  to={sub.href}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SubIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {sub.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
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
                <span className="text-gradient">{service.title}</span>
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

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
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

export default CategoryPage;
