import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { menuData } from "@/data/menuData";
import NotFound from "@/pages/NotFound";

const CategoryPage = () => {
    const { category } = useParams();
    const data = category ? servicesData[category] : null;

    if (!data) {
        return <NotFound />;
    }

    // Find the menu item to get icons for sub-services
    const menuItem = menuData.find(item => item.href.endsWith(category || ''));

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container-wide relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            {data.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(data.subServices).map(([slug, service]) => {
                            // Find icon from menuData
                            const subItem = menuItem?.items.find(item => item.href.endsWith(slug));
                            const Icon = subItem?.icon || ArrowRight;

                            return (
                                <Link
                                    key={slug}
                                    to={`/services/${category}/${slug}`}
                                    className="group block h-full"
                                >
                                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                            <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-primary font-semibold text-sm">
                                            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-wide text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                        Transform your business with our expert {data.title} services.
                    </p>
                    <Button variant="accent" size="xl" asChild>
                        <Link to="/contact">
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default CategoryPage;
