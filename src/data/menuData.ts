import {
  Search,
  Target,
  Megaphone,
  PenTool,
  Mail,
  MousePointer,
  Rocket,
  Bot,
  Brain,
  Cpu,
  MessageSquare,
  Zap,
  Code,
  Globe,
  Shield,
  ShoppingCart,
  Store,
  Smile,
  Users,
  Database,
  Lock,
  BarChart3,
  Palette,
  GraduationCap,
  Video,
  LineChart,
  FileText,
  Lightbulb,
  DollarSign,
  Star,
  Briefcase,
  Calculator,
  Wrench,
  Link2,
  Building2,
  Layout,
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
        title: "Growth, Marketing & Performance",
        description: "SEO, PPC, Social Media & CRO",
        href: "/services/growth-marketing-performance",
        icon: Rocket,
      },
      {
        title: "AI, Automation & Intelligent Systems",
        description: "AI-powered marketing & automation",
        href: "/services/ai-automation-intelligent-systems",
        icon: Brain,
      },
      {
        title: "Technology, Web & SaaS Solutions",
        description: "Web development & SaaS products",
        href: "/services/technology-web-saas",
        icon: Code,
      },
      {
        title: "Commerce, Marketplaces & CX",
        description: "E-commerce & customer experience",
        href: "/services/commerce-marketplaces-cx",
        icon: ShoppingCart,
      },
      {
        title: "Enterprise, Data & Enablement",
        description: "B2B, ABM & data solutions",
        href: "/services/enterprise-data-enablement",
        icon: Database,
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
        icon: Target,
      },
      {
        title: "Traffic Is Declining",
        description: "Recover and grow organic traffic",
        href: "/solutions/traffic-declining",
        icon: LineChart,
      },
      {
        title: "Website Doesn't Convert",
        description: "Improve conversion rates",
        href: "/solutions/website-conversion",
        icon: MousePointer,
      },
      {
        title: "Not Showing on Google",
        description: "Get found in search results",
        href: "/solutions/google-visibility",
        icon: Search,
      },
      {
        title: "Agency Not Delivering",
        description: "Get real results from marketing",
        href: "/solutions/agency-switch",
        icon: Zap,
      },
    ],
  },
  {
    title: "Free Tools",
    cta: {
      title: "Free Marketing Tools",
      description: "Powerful tools to analyze and improve your marketing.",
      buttonText: "View All Tools",
    },
    items: [
      {
        title: "Improve Your Website",
        description: "SEO checker, SERP tools & more",
        href: "/tools/website",
        icon: Globe,
      },
      {
        title: "Elevate Content Game",
        description: "Keyword tools & content generators",
        href: "/tools/content",
        icon: PenTool,
      },
      {
        title: "Plan Marketing Strategy",
        description: "Strategy builders & toolkits",
        href: "/tools/strategy",
        icon: Lightbulb,
      },
      {
        title: "Boost Productivity",
        description: "Team AI, generators & utilities",
        href: "/tools/productivity",
        icon: Zap,
      },
      {
        title: "Marketing Calculators",
        description: "ROAS, CTR, CPC & more",
        href: "/tools/calculators",
        icon: Calculator,
      },
    ],
  },
  {
    title: "Resources",
    cta: {
      title: "Learn & Grow",
      description: "Expert insights and success stories.",
      buttonText: "Browse Resources",
    },
    items: [
      {
        title: "Case Studies",
        description: "Real client success stories",
        href: "/resources/case-studies",
        icon: LineChart,
      },
      {
        title: "Blog & Articles",
        description: "Latest marketing insights",
        href: "/resources/blog",
        icon: FileText,
      },
      {
        title: "Marketing Guides",
        description: "In-depth strategy guides",
        href: "/resources/guides",
        icon: Lightbulb,
      },
      {
        title: "Pricing",
        description: "Transparent cost breakdowns",
        href: "/pricing",
        icon: DollarSign,
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
        title: "Reviews & Awards",
        description: "What clients say about us",
        href: "/reviews",
        icon: Star,
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

// Service categories with subcategories
export interface ServiceSubcategory {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  subcategories: ServiceSubcategory[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "growth-marketing-performance",
    title: "Growth, Marketing & Performance",
    description: "Drive measurable growth with data-driven marketing strategies",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    subcategories: [
      { title: "On-Page SEO", description: "Optimize every page element for search visibility", href: "/services/growth-marketing-performance/on-page-seo", icon: Search },
      { title: "Technical SEO", description: "Build a solid technical foundation for SEO", href: "/services/growth-marketing-performance/technical-seo", icon: Wrench },
      { title: "Content SEO & Topical Authority", description: "Build unassailable topical authority", href: "/services/growth-marketing-performance/content-seo", icon: FileText },
      { title: "Off-Page SEO & Digital Authority", description: "Build powerful backlink profiles", href: "/services/growth-marketing-performance/off-page-seo", icon: Link2 },
      { title: "Local SEO & Maps Optimisation", description: "Dominate local search and Google Maps", href: "/services/growth-marketing-performance/local-seo", icon: Megaphone },
      { title: "Ecommerce SEO", description: "Drive organic revenue for online stores", href: "/services/growth-marketing-performance/ecommerce-seo", icon: ShoppingCart },
      { title: "Enterprise & International SEO", description: "Scale SEO across enterprise sites", href: "/services/growth-marketing-performance/enterprise-international-seo", icon: Building2 },
      { title: "SEO Analytics & Reporting", description: "Measure and optimize SEO performance", href: "/services/growth-marketing-performance/seo-analytics-reporting", icon: LineChart },
      { title: "Search Advertising", description: "Capture high-intent traffic with PPC", href: "/services/growth-marketing-performance/search-advertising", icon: Target },
      { title: "Display & Native Advertising", description: "Build brand awareness across the web", href: "/services/growth-marketing-performance/display-native", icon: Layout },
      { title: "Remarketing & Retargeting", description: "Re-engage visitors and convert them", href: "/services/growth-marketing-performance/remarketing-retargeting", icon: MousePointer },
      { title: "Shopping & Ecommerce Ads", description: "Drive product sales with shopping ads", href: "/services/growth-marketing-performance/shopping-ecommerce-ads", icon: ShoppingCart },
      { title: "Video & YouTube Advertising", description: "Engage audiences with video ads", href: "/services/growth-marketing-performance/video-youtube-ads", icon: Video },
      { title: "Social & Paid Media Advertising", description: "Reach audiences on social platforms", href: "/services/growth-marketing-performance/social-paid-media", icon: Megaphone },
      { title: "Programmatic & AI Media Buying", description: "Scale reach with AI programmatic", href: "/services/growth-marketing-performance/programmatic-ai-media", icon: Bot },
      { title: "PPC Analytics & Attribution", description: "Measure and optimize PPC performance", href: "/services/growth-marketing-performance/ppc-analytics-optimization", icon: BarChart3 },
      // Social Media Marketing
      { title: "Organic Social Media Marketing", description: "Build authentic community connections", href: "/services/growth-marketing-performance/organic-social-media", icon: Megaphone },
      { title: "Paid Social Media Advertising", description: "Drive targeted results with paid social", href: "/services/growth-marketing-performance/paid-social-advertising", icon: Target },
      { title: "Social Media Content Creation", description: "Create scroll-stopping content", href: "/services/growth-marketing-performance/social-content-creation", icon: PenTool },
      { title: "Community Management", description: "Build and nurture engaged communities", href: "/services/growth-marketing-performance/community-management", icon: Users },
      { title: "Influencer Marketing", description: "Partner with authentic voices", href: "/services/growth-marketing-performance/influencer-marketing", icon: Star },
      { title: "Social Media Strategy", description: "Comprehensive social strategies", href: "/services/growth-marketing-performance/social-strategy", icon: Lightbulb },
      { title: "Social Media Analytics", description: "Turn data into actionable insights", href: "/services/growth-marketing-performance/social-analytics", icon: BarChart3 },
      { title: "Social Media Automation", description: "Scale with intelligent automation", href: "/services/growth-marketing-performance/social-automation", icon: Bot },
      // Content Marketing
      { title: "Content Strategy", description: "Strategic content planning", href: "/services/growth-marketing-performance/content-strategy", icon: Lightbulb },
      { title: "Blog & Article Writing", description: "Expert content that educates", href: "/services/growth-marketing-performance/blog-article-writing", icon: PenTool },
      { title: "Website Copywriting", description: "Conversion-focused web copy", href: "/services/growth-marketing-performance/website-copywriting", icon: Globe },
      { title: "Long-Form Content", description: "In-depth guides and whitepapers", href: "/services/growth-marketing-performance/long-form-content", icon: FileText },
      { title: "Visual & Interactive Content", description: "Engaging visual content creation", href: "/services/growth-marketing-performance/visual-interactive-content", icon: Megaphone },
      { title: "Content Distribution", description: "Multi-channel content distribution", href: "/services/growth-marketing-performance/content-distribution", icon: Megaphone },
      { title: "Content SEO Optimization", description: "Optimize content for search", href: "/services/growth-marketing-performance/content-seo-optimization", icon: Search },
      { title: "Content Performance Analytics", description: "Measure content ROI", href: "/services/growth-marketing-performance/content-analytics", icon: LineChart },
      // Email Marketing
      { title: "Email Campaign Strategy", description: "Strategic email campaigns", href: "/services/growth-marketing-performance/campaign-strategy", icon: Mail },
      { title: "Email Automation & Workflows", description: "Automated nurture sequences", href: "/services/growth-marketing-performance/email-automation", icon: Zap },
      { title: "Email Design & Development", description: "Beautiful responsive emails", href: "/services/growth-marketing-performance/email-design", icon: Layout },
      { title: "List Management & Segmentation", description: "Build quality email lists", href: "/services/growth-marketing-performance/list-management", icon: Users },
      { title: "Email Personalization", description: "Personalized email experiences", href: "/services/growth-marketing-performance/personalization", icon: Target },
      { title: "Email Deliverability", description: "Ensure inbox placement", href: "/services/growth-marketing-performance/deliverability", icon: Mail },
      { title: "Email Testing & Optimization", description: "Data-driven email optimization", href: "/services/growth-marketing-performance/email-testing", icon: Zap },
      { title: "Email Analytics & Reporting", description: "Comprehensive email analytics", href: "/services/growth-marketing-performance/email-analytics", icon: BarChart3 },
    ],
  },
  {
    id: "ai-automation-intelligent-systems",
    title: "AI, Automation & Intelligent Systems",
    description: "Harness AI to transform your marketing and operations",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    subcategories: [
      { title: "AI-Powered Marketing & Automation Services", description: "Automate and optimize at scale", href: "/services/ai-automation-intelligent-systems/ai-marketing-automation", icon: Bot },
      { title: "AI Tools Development & Intelligent Systems", description: "Custom AI solutions", href: "/services/ai-automation-intelligent-systems/ai-tools-development", icon: Cpu },
      { title: "Analytics, AI & Marketing Technology", description: "Data-driven intelligence", href: "/services/ai-automation-intelligent-systems/analytics-martech", icon: BarChart3 },
      { title: "Voice, Conversational & AI Search Optimisation", description: "Optimize for AI search", href: "/services/ai-automation-intelligent-systems/voice-ai-search", icon: MessageSquare },
      { title: "AI Governance, Ethics & Risk Management", description: "Responsible AI implementation", href: "/services/ai-automation-intelligent-systems/ai-governance", icon: Shield },
    ],
  },
  {
    id: "technology-web-saas",
    title: "Technology, Web & SaaS Solutions",
    description: "Build robust digital platforms and products",
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    subcategories: [
      { title: "Website Design", description: "Stunning, user-centered website design", href: "/services/technology-web-saas/website-design", icon: Globe },
      { title: "Website Development", description: "High-performance website development", href: "/services/technology-web-saas/website-development", icon: Code },
      { title: "Website Redesign", description: "Transform your outdated website", href: "/services/technology-web-saas/website-redesign", icon: Globe },
      { title: "Landing Page Development", description: "High-converting landing pages", href: "/services/technology-web-saas/landing-page-development", icon: Target },
      { title: "UI/UX Design", description: "User-centered design that converts", href: "/services/technology-web-saas/ui-ux-design", icon: Globe },
      { title: "CMS Development", description: "Custom CMS solutions", href: "/services/technology-web-saas/cms-development", icon: Code },
      { title: "Performance Optimisation", description: "Lightning-fast website performance", href: "/services/technology-web-saas/performance-optimization", icon: Zap },
      { title: "Website Maintenance & Support", description: "Keep your website secure and updated", href: "/services/technology-web-saas/website-maintenance", icon: Shield },
    ],
  },
  {
    id: "commerce-marketplaces-cx",
    title: "Commerce, Marketplaces & CX",
    description: "Maximize e-commerce revenue and customer experience",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    subcategories: [
      { title: "E-commerce Marketing Services", description: "Drive online sales growth", href: "/services/commerce-marketplaces-cx/ecommerce-marketing", icon: ShoppingCart },
      { title: "Amazon Marketing Services", description: "Dominate Amazon marketplace", href: "/services/commerce-marketplaces-cx/amazon-marketing", icon: Store },
      { title: "Customer Experience (CX) & Journey Orchestration", description: "Delight customers at every touchpoint", href: "/services/commerce-marketplaces-cx/customer-experience", icon: Smile },
    ],
  },
  {
    id: "enterprise-data-enablement",
    title: "Enterprise, Data & Enablement",
    description: "Enterprise solutions for data-driven organizations",
    icon: Database,
    color: "from-slate-500 to-gray-600",
    subcategories: [
      { title: "B2B & Account-Based Marketing (ABM)", description: "Target high-value accounts", href: "/services/enterprise-data-enablement/b2b-abm", icon: Target },
      { title: "First-Party Data, CDP & Identity Resolution", description: "Unify customer data", href: "/services/enterprise-data-enablement/first-party-data-cdp", icon: Database },
      { title: "Data Privacy, Compliance & Trust Marketing", description: "Build trust through compliance", href: "/services/enterprise-data-enablement/data-privacy-compliance", icon: Lock },
      { title: "Programmatic & Advanced Advertising", description: "AI-driven media buying", href: "/services/enterprise-data-enablement/programmatic-advertising", icon: BarChart3 },
      { title: "Branding, Creative & Graphic Design", description: "Visual identity that stands out", href: "/services/enterprise-data-enablement/branding-creative-design", icon: Palette },
      { title: "Professional Training & Internship Programs", description: "Develop your team", href: "/services/enterprise-data-enablement/training-internship", icon: GraduationCap },
      { title: "Video Marketing Services", description: "Engage with powerful video", href: "/services/enterprise-data-enablement/video-marketing", icon: Video },
    ],
  },
];

// Free tools data
export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const freeToolsCategories = [
  {
    id: "website",
    title: "Improve Your Website",
    description: "Analyze and optimize your website performance",
    icon: Globe,
    tools: [
      { id: "seo-checker", title: "SEO Checker", description: "Analyze on-page SEO factors" },
      { id: "serp-racer", title: "SERP Racer", description: "Compare SERP positions" },
      { id: "http-status", title: "HTTP Status Tool", description: "Check HTTP status codes" },
      { id: "domain-age", title: "Domain Age Checker", description: "Check domain registration age" },
      { id: "links-counter", title: "Links Counter", description: "Count internal & external links" },
      { id: "google-preview", title: "Google Preview Tool", description: "Preview SERP appearance" },
      { id: "browser-size", title: "What's My Browser Size", description: "Check browser dimensions" },
      { id: "redirect-checker", title: "Redirect Checker", description: "Trace redirect chains" },
    ],
  },
  {
    id: "content",
    title: "Elevate Your Content Game",
    description: "Create better content with smart tools",
    icon: PenTool,
    tools: [
      { id: "keywords-fx", title: "KeywordsFX", description: "Generate keyword ideas" },
      { id: "faqfox", title: "FAQFox", description: "Find questions people ask" },
      { id: "social-generator", title: "Social Status Generator", description: "Create social posts" },
      { id: "blog-ideas", title: "Blog Post Idea Generator", description: "Never run out of ideas" },
      { id: "readability", title: "Readability Test Tool", description: "Check content readability" },
    ],
  },
  {
    id: "strategy",
    title: "Plan Your Marketing Strategy",
    description: "Strategic planning tools for marketers",
    icon: Lightbulb,
    tools: [
      { id: "strategy-builder", title: "StrategyBuilderFX", description: "Build marketing strategies" },
      { id: "data-maturity", title: "Data Maturity Tool", description: "Assess data capabilities" },
      { id: "marketing-toolkit", title: "Digital Marketing Tool Kit", description: "Essential marketing resources" },
      { id: "funnel-fix", title: "Fix Your Marketing Funnel", description: "Optimize conversion funnels" },
      { id: "seo-toolkit", title: "SEO Tool Kit", description: "Complete SEO resource bundle" },
      { id: "ppc-toolkit", title: "PPC Tool Kit", description: "PPC management resources" },
    ],
  },
  {
    id: "productivity",
    title: "Boost Your Productivity",
    description: "Tools to work smarter and faster",
    icon: Zap,
    tools: [
      { id: "team-ai", title: "TeamAI", description: "AI-powered team collaboration" },
      { id: "password-generator", title: "New Password Generator", description: "Generate secure passwords" },
      { id: "emoji-cheat", title: "Emoji Cheat Sheet", description: "Quick emoji reference" },
      { id: "wiki-grabber", title: "WikiGrabber", description: "Extract Wikipedia info" },
      { id: "internet-realtime", title: "The Internet in Real Time", description: "Live internet statistics" },
      { id: "flickr-id", title: "Flickr ID Getter", description: "Get Flickr user IDs" },
      { id: "lorem-ipsum", title: "Lorem Ipsum Generator", description: "Generate placeholder text" },
      { id: "url-opener", title: "URL Opener", description: "Open multiple URLs at once" },
    ],
  },
  {
    id: "calculators",
    title: "Marketing Calculators",
    description: "Calculate key marketing metrics",
    icon: Calculator,
    tools: [
      { id: "roas-calculator", title: "ROAS Calculator", description: "Return on Ad Spend" },
      { id: "ctr-calculator", title: "CTR Calculator", description: "Click-Through Rate" },
      { id: "cpc-calculator", title: "CPC Calculator", description: "Cost Per Click" },
      { id: "conversion-rate", title: "Conversion Rate Calculator", description: "Conversion percentage" },
      { id: "cpm-calculator", title: "CPM Calculator", description: "Cost Per Mille" },
      { id: "churn-rate", title: "Churn Rate Calculator", description: "Customer churn rate" },
      { id: "clv-calculator", title: "CLV Calculator", description: "Customer Lifetime Value" },
      { id: "cpa-calculator", title: "CPA Calculator", description: "Cost Per Action" },
      { id: "cpa-cpm-calculator", title: "CPA (Using CPM) Calculator", description: "CPA from CPM" },
      { id: "keyword-density", title: "Keyword Density Calculator", description: "Keyword frequency" },
      { id: "amazon-margin", title: "Amazon Sales Margin Calculator", description: "Amazon profit margins" },
      { id: "nps-calculator", title: "NPS Calculator", description: "Net Promoter Score" },
    ],
  },
];
