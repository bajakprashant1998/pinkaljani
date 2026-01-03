import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Target,
  Lightbulb,
  Heart,
  Globe
} from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every action we take is focused on delivering measurable business outcomes." },
  { icon: Lightbulb, title: "Innovation", description: "We stay ahead of trends and leverage cutting-edge technology and AI." },
  { icon: Users, title: "Partnership", description: "We work as an extension of your team, invested in your success." },
  { icon: Heart, title: "Integrity", description: "Transparent communication and honest recommendations, always." },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Digital Bull Technology was founded with a vision to democratize digital growth." },
  { year: "2019", title: "100 Clients", description: "Reached our first 100 client milestone with 95% retention rate." },
  { year: "2021", title: "AI Integration", description: "Launched AI-powered marketing solutions and Revenue Platform." },
  { year: "2023", title: "500+ Clients", description: "Expanded globally with 500+ clients across 15+ industries." },
  { year: "2024", title: "150+ Team", description: "Grew to 150+ team members with offices in multiple cities." },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6">
                Your Partner in{" "}
                <span className="text-primary">Digital Growth</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Digital Bull Technology Pvt. Ltd. is a full-service digital growth, AI, and 
                technology solutions company. We help ambitious businesses transform their 
                online presence and accelerate revenue through data-driven strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Join Our Team
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="hero-outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-primary">500+</div>
                <div className="text-sm text-secondary-foreground/70">Clients Served</div>
              </div>
              <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-primary">150+</div>
                <div className="text-sm text-secondary-foreground/70">Team Members</div>
              </div>
              <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-primary">97%</div>
                <div className="text-sm text-secondary-foreground/70">Client Retention</div>
              </div>
              <div className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-display font-bold text-primary">₹50Cr+</div>
                <div className="text-sm text-secondary-foreground/70">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="service-card text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help grow your business.
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

export default AboutPage;
