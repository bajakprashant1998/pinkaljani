import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  PenTool, 
  Lightbulb, 
  Zap, 
  Calculator,
  Wrench,
  Star,
  Users,
  CheckCircle
} from "lucide-react";
import { freeToolsCategories } from "@/data/menuData";

const iconMap: Record<string, any> = {
  website: Globe,
  content: PenTool,
  strategy: Lightbulb,
  productivity: Zap,
  calculators: Calculator,
};

const FreeToolsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
            <Wrench className="w-5 h-5" />
            <span className="text-sm font-medium">Free Marketing Tools</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Powerful <span className="text-primary">Free Tools</span> to Boost Your Marketing
          </h1>
          
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Over 40 free marketing tools to analyze, optimize, and grow your digital presence. No signup required.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Globe, label: "Website Tools" },
              { icon: PenTool, label: "Content Tools" },
              { icon: Calculator, label: "Calculators" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-secondary-foreground/70">
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      {freeToolsCategories.map((category) => {
        const CategoryIcon = iconMap[category.id] || Wrench;
        return (
          <section key={category.id} className="section-padding bg-background border-b border-border" id={category.id}>
            <div className="container-wide">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CategoryIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tools/${category.id}/${tool.id}`}
                    className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Use Our <span className="text-gradient">Free Tools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "100% Free",
                description: "All tools are completely free with no hidden costs or signup required.",
              },
              {
                icon: Zap,
                title: "Instant Results",
                description: "Get actionable insights and data in seconds, not hours.",
              },
              {
                icon: Star,
                title: "Professional Grade",
                description: "Same tools used by our agency for enterprise clients.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need Professional Help?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can help you implement strategies and achieve your marketing goals.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FreeToolsPage;
