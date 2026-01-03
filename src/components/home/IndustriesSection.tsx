import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "Ecommerce & Retail",
    description: "Drive online sales with optimized product pages, marketplace strategy, and conversion-focused campaigns.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    href: "/industries/ecommerce",
    stats: "250% avg. ROAS",
  },
  {
    title: "SaaS & Technology",
    description: "Scale user acquisition with targeted demand generation and product-led growth strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    href: "/industries/saas",
    stats: "45% lower CAC",
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant marketing that builds trust and drives patient acquisition.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    href: "/industries/healthcare",
    stats: "3x lead quality",
  },
  {
    title: "Education & EdTech",
    description: "Increase enrollment and engagement with targeted content and personalized journeys.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    href: "/industries/education",
    stats: "60% more enrollments",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Industries
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Expertise Across{" "}
              <span className="text-gradient">Key Sectors</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/industries">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="group relative rounded-2xl overflow-hidden h-80"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-secondary-foreground">
                <span className="text-primary text-sm font-semibold mb-2">
                  {industry.stats}
                </span>
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-secondary-foreground/80 text-sm line-clamp-2">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
