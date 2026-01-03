import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to Accelerate Your{" "}
            <span className="text-accent">Digital Growth?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a free consultation and custom growth strategy from our experts. 
            No commitments, just actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
              Get Free Proposal
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 123 456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>hello@digitalbull.tech</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Response within 24hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
