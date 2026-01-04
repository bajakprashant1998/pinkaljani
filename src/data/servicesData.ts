import { LucideIcon } from "lucide-react";
import { menuData } from "./menuData";

export interface SubService {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    process: {
        title: string;
        description: string;
    }[];
}

export interface ServiceCategory {
    title: string;
    description: string;
    subServices: Record<string, SubService>;
}

export const servicesData: Record<string, ServiceCategory> = {};

// Helper to populate servicesData based on menuData structure
// This ensures we have a valid object for every path, even if content is generic for now.

const generateGenericContent = (title: string): SubService => ({
    title,
    description: `Comprehensive ${title} to help your business specific goals. We provide end-to-end solutions tailored to your needs.`,
    features: [
        "Custom Strategy Development",
        "Expert Implementation",
        "Data-Driven Insights",
        "Continuous Optimization",
        "Dedicated Support Team"
    ],
    benefits: [
        "Increased Efficiency",
        "Higher ROI",
        "Scalable Growth",
        "Competitive Advantage",
        "Better Customer Experience"
    ],
    process: [
        {
            title: "Discovery & Audit",
            description: "We start by analyzing your current situation and identifying opportunities."
        },
        {
            title: "Strategy & Planning",
            description: "Developing a roadmap tailored to your specific objectives."
        },
        {
            title: "Execution",
            description: "Implementing the strategy with best practices and expert tools."
        },
        {
            title: "Optimization",
            description: "Continuous monitoring and refining to ensure maximum performance."
        }
    ]
});

menuData.forEach(category => {
    const categorySlug = category.href.split('/').pop() || '';

    // Initialize category
    servicesData[categorySlug] = {
        title: category.title,
        description: `Leading ${category.title} solutions for modern businesses.`,
        subServices: {}
    };

    // Initialize sub-services
    category.items.forEach(item => {
        const subServiceSlug = item.href.split('/').pop() || '';
        servicesData[categorySlug].subServices[subServiceSlug] = generateGenericContent(item.title);
    });
});
