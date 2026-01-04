import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Settings } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import NotFound from "@/pages/NotFound";

const SubcategoryPage = () => {
    const { category, subcategory } = useParams();

    const categoryData = category ? servicesData[category] : null;
    const serviceData = (categoryData && subcategory) ? categoryData.subServices[subcategory] : null;

    if (!serviceData) {
        return <NotFound />;
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="container-wide relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                {categoryData?.title}
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                                {serviceData.title}
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-lg">
                                {serviceData.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="xl" asChild>
                                    <Link to="/contact">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="xl" className="text-white border-white/20 hover:bg-white/10">
                                    View Case Studies
                                </Button>
                            </div>
                        </div>
                        {/* Visual element/graphic could go here */}
                        <div className="hidden lg:block relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 backdrop-blur-3xl flex items-center justify-center">
                                <Zap className="w-32 h-32 text-primary/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our {serviceData.title}?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Drive measurable results with our comprehensive approach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {serviceData.benefits.map((benefit, index) => (
                            <div k={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <BarChart3 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-lg mb-2">{benefit}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features List */}
            <section className="section-padding bg-muted/30">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                Comprehensive Features
                            </h2>
                            <div className="space-y-4">
                                {serviceData.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{feature}</h4>
                                            <p className="text-muted-foreground">Detailed execution ensuring top-tier quality.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl bg-gradient-to-tr from-secondary to-secondary/80 flex items-center justify-center text-white/20">
                                <Settings className="w-24 h-24 animate-spin-slow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Our Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A proven methodology to deliver success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceData.process.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-6xl font-display font-bold text-muted/20 absolute -top-8 -left-2">
                                    0{index + 1}
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-secondary text-secondary-foreground">
                <div className="container-wide rounded-3xl bg-primary relative overflow-hidden px-8 py-16 text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                            Ready to elevate your {serviceData.title}?
                        </h2>
                        <Button variant="secondary" size="xl" className="text-primary hover:text-primary-foreground" asChild>
                            <Link to="/contact">
                                Speak to an Expert
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SubcategoryPage;
