import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Zap, Rocket, Brain, Code, ShoppingCart } from "lucide-react";

const serviceCards = [
  {
    icon: Rocket,
    title: "Growth & Marketing",
    description: "SEO, PPC, Social Media & CRO solutions to drive measurable growth",
    href: "/services/growth-marketing-performance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "AI-powered marketing, automation & intelligent systems",
    href: "/services/ai-automation-intelligent-systems",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Technology & SaaS",
    description: "Web development, custom solutions & cloud-based software",
    href: "/services/technology-web-saas",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShoppingCart,
    title: "Commerce & CX",
    description: "E-commerce marketing, Amazon & customer experience",
    href: "/services/commerce-marketplaces-cx",
    color: "from-orange-500 to-red-500",
  },
];

const trustedBy = [
  "TechCorp", "InnovateLabs", "GrowthFirst", "ScaleUp", "NextGen", "FutureTech"
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        {/* Content */}
        <div className="text-center text-secondary-foreground max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Digital Growth Agency</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Transform Your Business With
            <span className="text-primary"> Digital Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Full-service digital marketing, AI consulting, and technology solutions that drive measurable ROI for ambitious businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Free Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/resources/case-studies">
                <Play className="w-5 h-5" />
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-secondary-foreground/70">
              Rated 4.9/5 from 200+ reviews
            </span>
          </div>
        </div>

        {/* 4 Equal Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-500">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-20 pt-10 border-t border-secondary-foreground/10 animate-fade-in-up animation-delay-600">
          <p className="text-secondary-foreground/50 text-sm text-center mb-6">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustedBy.map((brand) => (
              <div
                key={brand}
                className="text-secondary-foreground/30 font-display font-bold text-xl hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
