import {
  BarChart3,
  Target,
  TrendingUp,
  Search,
  Users,
  Megaphone,
  PenTool,
  FileText,
  Share2,
  Video,
  Lightbulb,
  LineChart,
  MousePointer,
  Smile,
  Layout,
  Star,
  Workflow,
  Mail,
  Settings,
  Briefcase,
  Building,
  ShoppingCart,
  Store,
  Tag,
  Truck,
  Palette,
  Brush,
  Layers,
  Image,
  Sparkles,
  Bot,
  Brain,
  Cpu,
  MessageSquare,
  Zap,
  Code,
  Globe,
  Server,
  Shield,
  Database,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  DollarSign,
  Rocket,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface MenuItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const menuData: MenuCategory[] = [
  {
    title: "Services",
    cta: {
      title: "Need Help Choosing?",
      description: "Our experts will recommend the right services for your business goals.",
      buttonText: "Get Free Consultation",
    },
    items: [
      {
        title: "Digital Intelligence & RevOps",
        description: "Data-driven insights and revenue operations",
        href: "/services/digital-intelligence",
        icon: BarChart3,
      },
      {
        title: "Digital Advertising",
        description: "PPC, social ads, and programmatic",
        href: "/services/digital-advertising",
        icon: Target,
      },
      {
        title: "SEO & Content Marketing",
        description: "Organic growth and authority building",
        href: "/services/seo-content-marketing",
        icon: Search,
      },
      {
        title: "Conversion Optimization",
        description: "CRO, UX testing, and landing pages",
        href: "/services/conversion-optimization",
        icon: MousePointer,
      },
      {
        title: "Marketing Automation",
        description: "CRM, ABM, and email marketing",
        href: "/services/marketing-automation",
        icon: Workflow,
      },
      {
        title: "Ecommerce & Marketplaces",
        description: "Amazon, Shopify, and marketplace growth",
        href: "/services/ecommerce-marketplaces",
        icon: ShoppingCart,
      },
      {
        title: "Design & Creative",
        description: "Website design and visual identity",
        href: "/services/design-creative",
        icon: Palette,
      },
      {
        title: "AI Services",
        description: "AI consulting and automation",
        href: "/services/ai-services",
        icon: Brain,
      },
      {
        title: "Development",
        description: "Web development and platforms",
        href: "/services/development",
        icon: Code,
      },
    ],
  },
  {
    title: "Solutions",
    cta: {
      title: "Not Sure What You Need?",
      description: "Tell us your challenge and we'll find the solution.",
      buttonText: "Describe Your Challenge",
    },
    items: [
      {
        title: "Website Doesn't Drive Leads",
        description: "Turn visitors into qualified leads",
        href: "/solutions/website-leads",
        icon: AlertCircle,
      },
      {
        title: "Traffic Is Declining",
        description: "Recover and grow organic traffic",
        href: "/solutions/traffic-declining",
        icon: TrendingUp,
      },
      {
        title: "Website Doesn't Convert",
        description: "Improve conversion rates",
        href: "/solutions/website-conversion",
        icon: XCircle,
      },
      {
        title: "Not Showing on Google",
        description: "Get found in search results",
        href: "/solutions/google-visibility",
        icon: Eye,
      },
      {
        title: "Agency Not Delivering",
        description: "Get real results from marketing",
        href: "/solutions/agency-switch",
        icon: CheckCircle,
      },
      {
        title: "Revenue Acceleration Platform",
        description: "AI-powered growth technology",
        href: "/platform",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Industries",
    cta: {
      title: "Industry-Specific Expertise",
      description: "We understand your market and audience.",
      buttonText: "See Case Studies",
    },
    items: [
      {
        title: "Ecommerce & Retail",
        description: "Drive online sales and growth",
        href: "/industries/ecommerce",
        icon: ShoppingCart,
      },
      {
        title: "SaaS & Technology",
        description: "Scale your software business",
        href: "/industries/saas",
        icon: Cpu,
      },
      {
        title: "Healthcare",
        description: "HIPAA-compliant marketing",
        href: "/industries/healthcare",
        icon: Shield,
      },
      {
        title: "Education & EdTech",
        description: "Enrollment and engagement",
        href: "/industries/education",
        icon: Lightbulb,
      },
      {
        title: "Real Estate",
        description: "Lead generation for properties",
        href: "/industries/real-estate",
        icon: Building,
      },
      {
        title: "B2B & Manufacturing",
        description: "Industrial marketing solutions",
        href: "/industries/b2b-manufacturing",
        icon: Briefcase,
      },
    ],
  },
  {
    title: "Resources",
    cta: {
      title: "Free Growth Tools",
      description: "Analyze your website and competitors.",
      buttonText: "Try Free Tools",
    },
    items: [
      {
        title: "Blog & Articles",
        description: "Latest marketing insights",
        href: "/resources/blog",
        icon: FileText,
      },
      {
        title: "Case Studies",
        description: "Real client success stories",
        href: "/resources/case-studies",
        icon: LineChart,
      },
      {
        title: "Marketing Guides",
        description: "In-depth strategy guides",
        href: "/resources/guides",
        icon: Lightbulb,
      },
      {
        title: "Free Tools",
        description: "SEO checker, keyword tools",
        href: "/resources/tools",
        icon: Sparkles,
      },
      {
        title: "Pricing Guides",
        description: "Transparent cost breakdowns",
        href: "/pricing",
        icon: DollarSign,
      },
      {
        title: "FAQs",
        description: "Common questions answered",
        href: "/faqs",
        icon: MessageSquare,
      },
    ],
  },
  {
    title: "Company",
    cta: {
      title: "Join Our Team",
      description: "We're hiring talented marketers and developers.",
      buttonText: "View Open Positions",
    },
    items: [
      {
        title: "About Us",
        description: "Our story and mission",
        href: "/company/about",
        icon: Users,
      },
      {
        title: "Our Approach",
        description: "How we deliver results",
        href: "/company/approach",
        icon: Zap,
      },
      {
        title: "Careers",
        description: "Join our growing team",
        href: "/company/careers",
        icon: Briefcase,
      },
      {
        title: "Reviews & Awards",
        description: "What clients say about us",
        href: "/reviews",
        icon: Star,
      },
      {
        title: "Community Impact",
        description: "Giving back to society",
        href: "/company/community",
        icon: Globe,
      },
      {
        title: "Contact Us",
        description: "Get in touch with our team",
        href: "/contact",
        icon: Mail,
      },
    ],
  },
];
