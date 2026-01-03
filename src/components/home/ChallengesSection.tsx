import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  AlertCircle, 
  TrendingDown, 
  XCircle, 
  EyeOff, 
  RefreshCw,
  DollarSign 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    icon: AlertCircle,
    title: "My Website Doesn't Drive Leads",
    description: "High traffic but no conversions? We'll identify the gaps and turn visitors into qualified leads.",
    result: "340% more leads",
    href: "/solutions/website-leads",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: TrendingDown,
    title: "My Traffic Is Declining",
    description: "Losing rankings and organic traffic? Our SEO recovery program restores and grows visibility.",
    result: "280% traffic recovery",
    href: "/solutions/traffic-declining",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: XCircle,
    title: "My Website Doesn't Convert",
    description: "Visitors browse but don't buy? Data-driven CRO to systematically improve conversion rates.",
    result: "+127% conversion rate",
    href: "/solutions/website-conversion",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: EyeOff,
    title: "Not Showing on Google",
    description: "Invisible in search results? Technical SEO and content strategy to boost visibility.",
    result: "+450% visibility",
    href: "/solutions/google-visibility",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: RefreshCw,
    title: "My Agency Isn't Delivering",
    description: "Frustrated with your current agency? Transparent reporting and measurable results guaranteed.",
    result: "97% satisfaction",
    href: "/solutions/agency-switch",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: DollarSign,
    title: "Not Getting ROI",
    description: "Marketing spend not translating to revenue? Clear attribution and optimization for profitability.",
    result: "3.2x ROI",
    href: "/solutions/roi-improvement",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export const ChallengesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
            <AlertCircle className="w-4 h-4" />
            Business Challenges
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sound <span className="text-primary">Familiar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us your challenge. We've solved these problems hundreds of times 
            and we have the case studies to prove it.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge) => (
            <Link
              key={challenge.title}
              to={challenge.href}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${challenge.bgColor} flex items-center justify-center mb-4`}>
                <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {challenge.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {challenge.result}
                </span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
