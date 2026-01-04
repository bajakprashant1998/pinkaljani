import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Search, 
  Zap, 
  FileText, 
  Image, 
  BarChart3, 
  Globe, 
  Link2, 
  Hash, 
  PenTool,
  Sparkles,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const tools = [
  {
    id: "seo-checker",
    title: "Free SEO Checker",
    description: "Analyze your website's SEO health and get actionable recommendations to improve rankings.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
    features: ["On-page SEO analysis", "Meta tags review", "Content optimization tips", "Mobile-friendliness check"],
    popular: true,
  },
  {
    id: "speed-test",
    title: "Website Speed Test",
    description: "Test your website's loading speed and get performance optimization suggestions.",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    features: ["Core Web Vitals", "Mobile & desktop scores", "Optimization tips", "Performance metrics"],
    popular: true,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "Generate high-quality blog posts, social media content, and marketing copy with AI.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    features: ["Blog post generation", "Social media captions", "Product descriptions", "Email templates"],
    popular: true,
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Create stunning images for your marketing campaigns using artificial intelligence.",
    icon: Image,
    color: "from-purple-500 to-pink-500",
    features: ["Marketing visuals", "Social media graphics", "Product mockups", "Custom illustrations"],
    popular: false,
  },
  {
    id: "keyword-research",
    title: "Keyword Research Tool",
    description: "Discover high-traffic, low-competition keywords for your SEO and PPC campaigns.",
    icon: Hash,
    color: "from-indigo-500 to-blue-500",
    features: ["Search volume data", "Keyword difficulty", "Related keywords", "Long-tail suggestions"],
    popular: true,
  },
  {
    id: "backlink-checker",
    title: "Backlink Checker",
    description: "Analyze your backlink profile and discover link building opportunities.",
    icon: Link2,
    color: "from-teal-500 to-green-500",
    features: ["Backlink analysis", "Domain authority", "Toxic link detection", "Competitor comparison"],
    popular: false,
  },
  {
    id: "competitor-analyzer",
    title: "Competitor Analyzer",
    description: "Analyze your competitors' digital strategies and find gaps to exploit.",
    icon: BarChart3,
    color: "from-slate-500 to-gray-600",
    features: ["Traffic analysis", "Keyword gaps", "Content comparison", "Ad insights"],
    popular: false,
  },
  {
    id: "meta-tag-generator",
    title: "Meta Tag Generator",
    description: "Generate optimized meta titles and descriptions for better CTR in search results.",
    icon: Globe,
    color: "from-rose-500 to-pink-500",
    features: ["Title optimization", "Description generator", "Character count", "Preview tool"],
    popular: false,
  },
  {
    id: "headline-analyzer",
    title: "Headline Analyzer",
    description: "Create compelling headlines that drive clicks and engagement.",
    icon: PenTool,
    color: "from-amber-500 to-orange-500",
    features: ["Emotional score", "Power words", "Character analysis", "CTR prediction"],
    popular: false,
  },
  {
    id: "schema-generator",
    title: "Schema Markup Generator",
    description: "Generate structured data markup for rich snippets in search results.",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    features: ["FAQ schema", "Product schema", "Article schema", "Local business schema"],
    popular: false,
  },
];

const FreeToolsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">100% Free to Use</span>
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Free Digital Marketing <span className="text-primary">Tools</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Powerful tools to analyze, optimize, and grow your online presence. 
              No signup required for most tools.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">10+</div>
              <div className="text-primary-foreground/70 text-sm">Free Tools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">50K+</div>
              <div className="text-primary-foreground/70 text-sm">Monthly Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">1M+</div>
              <div className="text-primary-foreground/70 text-sm">Reports Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">4.9★</div>
              <div className="text-primary-foreground/70 text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-card rounded-2xl p-6 shadow-sm border border-border card-hover relative overflow-hidden"
              >
                {tool.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Use Tool Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our <span className="text-gradient">Free Tools</span> Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Get instant insights in just a few simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Enter Your URL</h3>
              <p className="text-muted-foreground text-sm">
                Simply paste your website URL or enter the required information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Get Instant Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Our AI-powered tools analyze your data in seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Take Action</h3>
              <p className="text-muted-foreground text-sm">
                Get actionable recommendations and start improving immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need More Powerful Features?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get access to premium tools, unlimited reports, and expert support with our professional plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl">
              View Premium Plans
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeToolsPage;
