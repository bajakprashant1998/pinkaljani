import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Digital Bull transformed our online presence. Our organic traffic increased by 340% in just 6 months, and leads have never been higher quality.",
    author: "Priya Sharma",
    role: "CMO, TechVentures India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    quote: "Their AI-powered approach to PPC management cut our cost per acquisition by 45% while doubling our conversion rate. Remarkable results.",
    author: "Rahul Patel",
    role: "Founder, ScaleUp SaaS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    quote: "The Revenue Acceleration Platform gave us visibility we never had before. We can now predict revenue with 95% accuracy.",
    author: "Anita Desai",
    role: "Head of Growth, RetailMax",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
];

const logos = [
  "Microsoft", "Google Partner", "Meta Business", "HubSpot", "Salesforce", "AWS"
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Trusted by{" "}
            <span className="text-gradient">Growth-Focused</span> Brands
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our clients have to say about working with Digital Bull Technology.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border card-hover"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground text-sm mb-8">
            Certified Partner & Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-muted-foreground/40 font-display font-bold text-lg hover:text-primary transition-colors cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
