import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  XCircle,
  Eye,
  RefreshCw
} from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    title: "My Website Doesn't Drive Leads",
    description: "Turn your website into a lead generation machine with conversion-focused design and optimization.",
    href: "/solutions/website-leads",
    solution: "We audit your site, fix conversion blockers, and implement proven lead capture strategies.",
  },
  {
    icon: TrendingUp,
    title: "My Website Traffic Is Declining",
    description: "Recover and grow your organic traffic with our comprehensive SEO recovery program.",
    href: "/solutions/traffic-declining",
    solution: "Technical SEO fixes, content optimization, and authority building to restore rankings.",
  },
  {
    icon: XCircle,
    title: "My Website Doesn't Convert",
    description: "Improve conversion rates with data-driven CRO and user experience optimization.",
    href: "/solutions/website-conversion",
    solution: "Heatmap analysis, A/B testing, and funnel optimization to maximize conversions.",
  },
  {
    icon: Eye,
    title: "My Website Isn't Showing on Google",
    description: "Get found in search results with targeted SEO strategies.",
    href: "/solutions/google-visibility",
    solution: "Technical fixes, content strategy, and link building to improve visibility.",
  },
  {
    icon: RefreshCw,
    title: "My Agency Isn't Delivering Results",
    description: "Switch to a partner that actually drives measurable ROI.",
    href: "/solutions/agency-switch",
    solution: "Transparent reporting, proven methodologies, and dedicated support.",
  },
];

const SolutionsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Business Challenges{" "}
              <span className="text-primary">We Solve</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Tell us your challenge. We'll provide a tailored solution with proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <challenge.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {challenge.description}
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Our Solution:</strong> {challenge.solution}
                  </p>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link to={challenge.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Challenge?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Tell us about your specific situation and we'll create a custom solution.
          </p>
          <Button variant="accent" size="xl">
            Describe Your Challenge
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;
