import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "₹50Cr+", label: "Revenue Generated" },
  { value: "97%", label: "Client Retention" },
  { value: "150+", label: "Team Members" },
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
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-secondary-foreground">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Growth Solutions</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Transform Your Digital 
              <span className="text-primary"> Growth </span>
              With AI & Data
            </h1>

            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl animate-fade-in-up animation-delay-200">
              Full-service digital marketing, AI consulting, and technology solutions that drive measurable ROI for ambitious businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
              <Button variant="hero" size="xl">
                Get Free Proposal
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up animation-delay-400">
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

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 animate-fade-in-up ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-20 pt-10 border-t border-secondary-foreground/10 animate-fade-in-up animation-delay-500">
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
