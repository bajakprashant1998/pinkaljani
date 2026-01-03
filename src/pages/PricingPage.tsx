import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Check,
  X,
  Star,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart3,
  Rocket
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started",
    price: "₹25,000",
    period: "/month",
    popular: false,
    features: [
      { text: "SEO Audit & Strategy", included: true },
      { text: "5 Keywords Optimization", included: true },
      { text: "Monthly Performance Report", included: true },
      { text: "Google My Business Setup", included: true },
      { text: "Basic Social Media Management", included: true },
      { text: "Email Support", included: true },
      { text: "PPC Campaign Management", included: false },
      { text: "Dedicated Account Manager", included: false },
      { text: "Custom AI Solutions", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Get Started",
    icon: Zap,
  },
  {
    name: "Growth",
    description: "For growing businesses ready to scale",
    price: "₹75,000",
    period: "/month",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "25 Keywords Optimization", included: true },
      { text: "Weekly Performance Reports", included: true },
      { text: "PPC Campaign Management", included: true },
      { text: "Content Marketing (4 articles/month)", included: true },
      { text: "Social Media Advertising", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "CRO & A/B Testing", included: true },
      { text: "Custom AI Solutions", included: false },
      { text: "24/7 Priority Support", included: false },
    ],
    cta: "Start Growing",
    icon: TrendingUp,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Unlimited Keywords", included: true },
      { text: "Real-time Dashboard Access", included: true },
      { text: "Full Marketing Automation", included: true },
      { text: "Custom AI Solutions & Integration", included: true },
      { text: "Multi-channel Campaign Management", included: true },
      { text: "Dedicated Team (3+ specialists)", included: true },
      { text: "Revenue Acceleration Platform", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Quarterly Strategy Reviews", included: true },
    ],
    cta: "Contact Sales",
    icon: Rocket,
  },
];

const addons = [
  { name: "Additional Keywords (per 10)", price: "₹5,000/mo" },
  { name: "Extra Blog Posts (per article)", price: "₹3,000/post" },
  { name: "Video Content Creation", price: "₹15,000/video" },
  { name: "Landing Page Design", price: "₹20,000/page" },
  { name: "Email Marketing Campaign", price: "₹10,000/campaign" },
  { name: "Influencer Outreach", price: "₹25,000/campaign" },
];

const faqs = [
  {
    question: "What's included in the monthly fee?",
    answer: "All plans include strategy development, execution, optimization, and regular reporting. The specific services vary by plan level as detailed above."
  },
  {
    question: "Are there any setup fees?",
    answer: "We charge a one-time setup fee equal to one month's subscription for new clients. This covers initial audits, strategy development, and account setup."
  },
  {
    question: "What's the minimum contract period?",
    answer: "We recommend a minimum 6-month commitment for best results, but we offer month-to-month options for Starter plans. Enterprise contracts are typically 12 months."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can upgrade at any time, and the change takes effect immediately. Downgrades take effect at the start of the next billing cycle."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, our Enterprise tier is fully customizable. We also offer à la carte services that can be added to any plan."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and UPI payments. Enterprise clients can also opt for invoice-based billing with NET 30 terms."
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Transparent Pricing</span>
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simple, Scalable{" "}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include our proven methodology, 
              dedicated support, and commitment to driving measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background -mt-10">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <Button 
                    variant={plan.popular ? "accent" : "outline"} 
                    className="w-full mb-8"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enhance Your Plan with <span className="text-primary">Add-ons</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Boost your results with additional services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-card rounded-xl p-6 shadow-sm border border-border flex items-center justify-between">
                <span className="font-medium text-foreground">{addon.name}</span>
                <span className="text-primary font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why <span className="text-primary">500+ Businesses</span> Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "No Lock-in Contracts", description: "Flexible terms that work for you" },
              { icon: Headphones, title: "Dedicated Support", description: "Your success is our priority" },
              { icon: BarChart3, title: "Transparent Reporting", description: "Real-time access to your data" },
              { icon: Award, title: "ROI Guarantee", description: "We're invested in your results" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss which plan is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Compare All Features
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
