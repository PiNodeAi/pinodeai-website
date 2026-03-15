import {
    Service,
    CaseStudy,
    TeamMember,
    BlogPost,
    Testimonial,
    FAQ,
    CompanyStats,
    Platform,
    SolutionOffering,
} from "@/types";

export const companyName = "PieNodeAi";
export const companyTagline = "Accelerating eCommerce, Digital Transformation, and Product Engineering";
export const companyDescription = "We are a global digital consulting organization focused on accelerating eCommerce, digital transformation, and product engineering initiatives. By combining leading platforms such as Shopify Plus, Adobe, and WordPress with advanced technologies including AI, Node.js, Java, and Python, we engineer scalable, enterprise-grade digital solutions that drive measurable business outcomes.";

/** Canonical site URL for SEO (no trailing slash). */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pinodeai.com";
/** Default OG/Twitter image (absolute URL). Use 1200x630 for best results. */
export const defaultOgImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://pinodeai.com"}/og-default.png`;

export const contactInfo = {
    email: "info@pienodeai.com",
    phone: "+91 8299273710",
    address: "U-44 Phase-3 Gurugram, Haryana, India",
    officeHours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
};

export const socialLinks = {
    linkedin: "https://linkedin.com/company/pinodeai",
    twitter: "https://twitter.com/pinodeai",
    github: "https://github.com/pinodeai",
    facebook: "https://facebook.com/pinodeai",
};

export const platforms: Platform[] = [
    { id: "1", title: "Enterprise Solution", icon: "Layers" },
    { id: "2", title: "Artificial Intelligence", icon: "Brain" },
    { id: "3", title: "Mobile Development", icon: "Smartphone" },
    { id: "4", title: "Website Development", icon: "Globe" },
];

export const solutionOfferings: SolutionOffering[] = [
    { id: "1", title: "AI/ML Powered Analytics", icon: "BarChart3" },
    { id: "2", title: "Digital Transformation", icon: "RefreshCw" },
    { id: "3", title: "Data Migration & Automation", icon: "Database" },
    { id: "4", title: "Data Engineering", icon: "Cpu" },
    { id: "5", title: "Point Of Sale", icon: "CreditCard" },
    { id: "6", title: "Blockchain", icon: "Link2" },
    { id: "7", title: "ERP & ECM", icon: "FileStack" },
    { id: "8", title: "Quality Assurance", icon: "CheckCircle" },
    { id: "9", title: "3D/AR/VR", icon: "Box" },
    { id: "10", title: "DEVOPS & Cloud Consulting", icon: "Cloud" },
];

export const services: Service[] = [
    {
        id: "1",
        title: "Shopify & Shopify Plus Services",
        slug: "shopify-services",
        description:
            "We design and develop scalable Shopify and Shopify Plus commerce solutions for growing and enterprise brands. Our Shopify solutions are built to convert, scale, and support long-term business growth.",
        shortDescription:
            "Scalable Shopify and Shopify Plus commerce solutions for growing and enterprise brands.",
        icon: "ShoppingCart",
        benefits: [
            "Shopify & Shopify Plus store development",
            "Custom themes & storefronts",
            "Headless Shopify implementations",
            "App integrations & custom development",
            "Performance optimization & CRO",
        ],
        process: [
            {
                step: 1,
                title: "Strategy & Planning",
                description:
                    "We analyze your commerce goals and design a Shopify strategy that drives growth and conversions.",
            },
            {
                step: 2,
                title: "Development & Customization",
                description:
                    "Our team develops custom Shopify stores, themes, storefronts, and headless implementations.",
            },
            {
                step: 3,
                title: "Integration & Optimization",
                description:
                    "We integrate apps, develop custom solutions, and optimize performance and conversion rates.",
            },
            {
                step: 4,
                title: "Launch & Growth",
                description:
                    "We launch your Shopify store and provide ongoing support to ensure long-term business growth.",
            },
        ],
        featured: true,
    },
    {
        id: "2",
        title: "Adobe Experience Manager (AEM) Services",
        slug: "adobe-experience-manager",
        description:
            "We help enterprises deliver personalized, content-driven digital experiences using Adobe Experience Manager. Our AEM solutions enable faster content delivery, improved personalization, and seamless omnichannel experiences.",
        shortDescription:
            "Personalized, content-driven digital experiences with Adobe Experience Manager.",
        icon: "Layers",
        benefits: [
            "AEM Sites & Assets implementation",
            "Custom component and template development",
            "AEM Cloud Service migration",
            "Headless AEM integrations",
            "Performance, security & scalability optimization",
        ],
        process: [
            {
                step: 1,
                title: "Discovery & Assessment",
                description:
                    "We analyze your content requirements and digital experience goals to design the optimal AEM solution.",
            },
            {
                step: 2,
                title: "Implementation & Development",
                description:
                    "Our team implements AEM Sites & Assets, develops custom components and templates tailored to your needs.",
            },
            {
                step: 3,
                title: "Migration & Integration",
                description:
                    "We migrate to AEM Cloud Service and integrate headless architectures for modern digital experiences.",
            },
            {
                step: 4,
                title: "Optimization & Support",
                description:
                    "We optimize performance, security, and scalability while providing ongoing support and enhancements.",
            },
        ],
        featured: true,
    },
    {
        id: "3",
        title: "WordPress Services",
        slug: "wordpress-services",
        description:
            "We build flexible, secure, and high-performing WordPress solutions tailored to your business goals. From marketing websites to content-rich platforms, our WordPress services ensure scalability and ease of management.",
        shortDescription:
            "Flexible, secure, and high-performing WordPress solutions for your business.",
        icon: "Globe",
        benefits: [
            "Custom WordPress development",
            "Headless WordPress architectures",
            "WooCommerce development",
            "Performance, SEO & security optimization",
            "Content migration & platform upgrades",
        ],
        process: [
            {
                step: 1,
                title: "Planning & Design",
                description:
                    "We assess your requirements and design a WordPress solution that aligns with your business objectives.",
            },
            {
                step: 2,
                title: "Development & Customization",
                description:
                    "Our team builds custom WordPress sites, headless architectures, and WooCommerce stores tailored to your needs.",
            },
            {
                step: 3,
                title: "Optimization & Migration",
                description:
                    "We optimize performance, SEO, and security, and handle content migration and platform upgrades seamlessly.",
            },
            {
                step: 4,
                title: "Launch & Maintenance",
                description:
                    "We launch your WordPress solution and provide ongoing maintenance, updates, and support.",
            },
        ],
        featured: true,
    },

];

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        title: "AI-Powered Customer Service Platform",
        slug: "ai-customer-service-platform",
        description:
            "Developed an intelligent customer service platform using AI and NLP to automate support and improve response times.",
        challenge:
            "The client needed to handle 10,000+ customer inquiries daily with limited support staff, leading to long wait times and customer dissatisfaction.",
        solution:
            "We developed a custom AI chatbot integrated with their CRM system, capable of handling 80% of common inquiries automatically. The system uses NLP to understand context and provides human-like responses.",
        results: [
            "80% reduction in response time",
            "60% cost savings on support operations",
            "95% customer satisfaction rate",
            "24/7 availability for customers",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        client: "TechCorp Inc.",
        clientTestimonial: {
            name: "Sarah Johnson",
            role: "VP of Customer Experience",
            quote:
                "PieNodeAi transformed our customer service operations. The AI platform handles most inquiries seamlessly, allowing our team to focus on complex issues.",
        },
        technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
        services: ["AI & Machine Learning Solutions", "Web & Mobile Development"],
        category: "AI/ML",
        featured: true,
    },
    {
        id: "2",
        title: "Cloud Migration for Enterprise",
        slug: "enterprise-cloud-migration",
        description:
            "Migrated a legacy enterprise system to AWS with zero downtime and improved performance.",
        challenge:
            "A large enterprise was running critical applications on outdated on-premise infrastructure, facing scalability and reliability issues.",
        solution:
            "We designed and executed a comprehensive cloud migration strategy, moving applications to AWS with containerization, implementing CI/CD pipelines, and setting up monitoring and disaster recovery.",
        results: [
            "Zero downtime during migration",
            "50% reduction in infrastructure costs",
            "3x improvement in application performance",
            "99.9% uptime achieved",
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        client: "Global Finance Corp",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
        services: ["Cloud Infrastructure & DevOps"],
        category: "Cloud/DevOps",
        featured: true,
    },
    {
        id: "3",
        title: "E-Commerce Mobile App",
        slug: "ecommerce-mobile-app",
        description:
            "Built a native mobile e-commerce application with real-time inventory and payment integration.",
        challenge:
            "A retail company needed a mobile app to compete in the digital marketplace and provide a seamless shopping experience.",
        solution:
            "We developed a native iOS and Android app with features like product search, real-time inventory, secure payments, order tracking, and push notifications.",
        results: [
            "40% increase in mobile sales",
            "4.8-star app store rating",
            "30% improvement in conversion rate",
            "500K+ downloads in first 6 months",
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        client: "Fashion Retail Co.",
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe API"],
        services: ["Web & Mobile Development"],
        category: "Mobile",
        featured: true,
    },
    {
        id: "4",
        title: "Real-Time Analytics Dashboard",
        slug: "realtime-analytics-dashboard",
        description:
            "Created a real-time analytics platform for processing and visualizing millions of data points.",
        challenge:
            "A SaaS company needed to process and visualize millions of events in real-time to provide insights to their customers.",
        solution:
            "We built a data pipeline using Apache Kafka and Apache Flink, with a React-based dashboard for real-time visualization and custom analytics.",
        results: [
            "Real-time processing of 1M+ events/second",
            "Sub-second dashboard load times",
            "50% reduction in data processing costs",
            "Improved customer insights and retention",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e71?w=800",
        client: "DataSaaS Inc.",
        technologies: ["Kafka", "Flink", "React", "PostgreSQL", "Redis"],
        services: ["Data Engineering & Analytics"],
        category: "Data",
    },
    {
        id: "5",
        title: "Healthcare Data Security Platform",
        slug: "healthcare-data-security",
        description:
            "Implemented comprehensive cybersecurity solutions for a healthcare provider to ensure HIPAA compliance.",
        challenge:
            "A healthcare provider needed to secure patient data and ensure HIPAA compliance while maintaining system performance.",
        solution:
            "We conducted a security audit, implemented encryption, access controls, monitoring systems, and provided staff training on security best practices.",
        results: [
            "100% HIPAA compliance achieved",
            "Zero security incidents",
            "Automated threat detection",
            "Improved patient data protection",
        ],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
        client: "HealthCare Plus",
        technologies: ["AWS Security", "SIEM", "Encryption", "IAM"],
        services: ["Cybersecurity Solutions"],
        category: "Security",
    },
    {
        id: "6",
        title: "Digital Transformation for Manufacturing",
        slug: "manufacturing-digital-transformation",
        description:
            "Led a comprehensive digital transformation initiative for a manufacturing company.",
        challenge:
            "A traditional manufacturing company needed to modernize operations, improve efficiency, and integrate IoT devices.",
        solution:
            "We developed a digital strategy, implemented IoT sensors, created a centralized management platform, and trained staff on new systems.",
        results: [
            "25% increase in operational efficiency",
            "30% reduction in waste",
            "Real-time production monitoring",
            "Data-driven decision making",
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        client: "Manufacturing Solutions Ltd.",
        technologies: ["IoT", "Cloud Platform", "Analytics", "Mobile Apps"],
        services: ["Digital Transformation Consulting"],
        category: "Consulting",
    },
    {
        id: "7",
        title: "FinTech Payment Gateway",
        slug: "fintech-payment-gateway",
        description:
            "Built a secure, scalable payment processing platform for a financial technology startup.",
        challenge:
            "A FinTech startup needed a secure, PCI-compliant payment gateway that could scale with their growing user base.",
        solution:
            "We developed a microservices-based payment platform with end-to-end encryption, fraud detection, and seamless API integration.",
        results: [
            "PCI DSS Level 1 compliance",
            "99.99% uptime",
            "Processes $100M+ monthly",
            "Sub-100ms transaction processing",
        ],
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
        client: "PayTech Solutions",
        technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        services: ["Web & Mobile Development", "Cloud Infrastructure & DevOps"],
        category: "FinTech",
    },
    {
        id: "8",
        title: "Supply Chain Optimization System",
        slug: "supply-chain-optimization",
        description:
            "Developed an AI-powered supply chain optimization system for a logistics company.",
        challenge:
            "A logistics company struggled with route optimization, inventory management, and demand forecasting.",
        solution:
            "We built an AI system that uses machine learning for demand forecasting, route optimization, and inventory management, integrated with their existing systems.",
        results: [
            "20% reduction in logistics costs",
            "15% improvement in delivery times",
            "Accurate demand forecasting",
            "Real-time supply chain visibility",
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
        client: "Logistics Pro",
        technologies: ["Python", "ML Models", "React", "APIs"],
        services: ["AI & Machine Learning Solutions", "Data Engineering & Analytics"],
        category: "AI/ML",
    },
];

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Alex Chen",
        role: "CEO & Founder",
        bio: "Alex has over 15 years of experience in technology and entrepreneurship. He founded PieNodeAi with a vision to make AI accessible to businesses of all sizes.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        social: {
            linkedin: "https://linkedin.com/in/alexchen",
            twitter: "https://twitter.com/alexchen",
        },
    },
    {
        id: "2",
        name: "Sarah Martinez",
        role: "CTO",
        bio: "Sarah is a technology leader with expertise in cloud architecture and AI systems. She has led engineering teams at top tech companies.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        social: {
            linkedin: "https://linkedin.com/in/sarahmartinez",
            github: "https://github.com/sarahmartinez",
        },
    },
    {
        id: "3",
        name: "Michael Johnson",
        role: "Head of AI/ML",
        bio: "Michael is a machine learning expert with a PhD in Computer Science. He has published numerous papers on AI and deep learning.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        social: {
            linkedin: "https://linkedin.com/in/michaeljohnson",
            github: "https://github.com/michaeljohnson",
        },
    },
    {
        id: "4",
        name: "Emily Davis",
        role: "Head of Product",
        bio: "Emily brings a user-centric approach to product development. She has a track record of building products that users love.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        social: {
            linkedin: "https://linkedin.com/in/emilydavis",
            twitter: "https://twitter.com/emilydavis",
        },
    },
    {
        id: "5",
        name: "David Kim",
        role: "Lead DevOps Engineer",
        bio: "David specializes in cloud infrastructure and DevOps practices. He ensures our systems are scalable, reliable, and secure.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        social: {
            linkedin: "https://linkedin.com/in/davidkim",
            github: "https://github.com/davidkim",
        },
    },
    {
        id: "6",
        name: "Lisa Anderson",
        role: "Head of Design",
        bio: "Lisa is a creative leader who designs beautiful, intuitive user experiences. She has won multiple design awards.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        social: {
            linkedin: "https://linkedin.com/in/lisaanderson",
        },
    },
];

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Bhuwanesh Mishra",
        role: "Operations Manager",
        company: "Cradleman",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        quote:
            "At Cradleman we focus on design, supply, installation and maintenance of building equipment—all under one roof. PieNodeAi helped us bring that same clarity to our digital presence: from facade access and glass facade cleaning to temporary suspended platforms, our teams and clients now have a single place to track projects and service requests. Responsive team, smooth handover.",
        rating: 5,
    },
    {
        id: "2",
        name: "Priya Sharma",
        role: "Founder",
        company: "Feeable Street",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        quote:
            "Our Shopify Plus store by PieNodeAi has been a game-changer. From checkout to inventory, everything is built to scale. We've seen a real lift in conversions and our team can focus on growth, not tech fires.",
        rating: 5,
    },
    {
        id: "3",
        name: "Amit Desai",
        role: "Project Director",
        company: "Rokmex / Site Guru",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        quote:
            "As a tech partner, we needed a platform that could keep up with our clients. PieNodeAi delivered a robust, scalable solution with clear APIs and support. Integration and handover were seamless.",
        rating: 5,
    },

];

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of AI in Business: Trends to Watch in 2024",
        slug: "future-of-ai-in-business-2024",
        excerpt:
            "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
        content: "Full blog post content here...",
        author: {
            name: "Michael Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        },
        publishedAt: "2024-01-15",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        category: "AI/ML",
        tags: ["AI", "Business", "Technology", "Trends"],
        readingTime: 8,
        featured: true,
    },
    {
        id: "2",
        title: "Cloud Migration Best Practices: A Complete Guide",
        slug: "cloud-migration-best-practices",
        excerpt:
            "Learn the essential strategies and best practices for successfully migrating your infrastructure to the cloud.",
        content: "Full blog post content here...",
        author: {
            name: "David Kim",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        },
        publishedAt: "2024-01-10",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        category: "Cloud/DevOps",
        tags: ["Cloud", "DevOps", "Migration", "AWS"],
        readingTime: 12,
        featured: true,
    },
    {
        id: "3",
        title: "Building Scalable Mobile Apps: React Native vs Native",
        slug: "react-native-vs-native-mobile-apps",
        excerpt:
            "Compare React Native and native development approaches to choose the right solution for your mobile app project.",
        content: "Full blog post content here...",
        author: {
            name: "Sarah Martinez",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        },
        publishedAt: "2024-01-05",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        category: "Mobile",
        tags: ["Mobile", "React Native", "Development"],
        readingTime: 10,
        featured: true,
    },
    {
        id: "4",
        title: "Data Engineering: Building Robust Data Pipelines",
        slug: "building-robust-data-pipelines",
        excerpt:
            "Discover how to design and implement data pipelines that are reliable, scalable, and maintainable.",
        content: "Full blog post content here...",
        author: {
            name: "Michael Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        },
        publishedAt: "2023-12-28",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        category: "Data",
        tags: ["Data Engineering", "Pipelines", "Analytics"],
        readingTime: 15,
    },
    {
        id: "5",
        title: "Cybersecurity Essentials for Modern Businesses",
        slug: "cybersecurity-essentials-modern-businesses",
        excerpt:
            "Learn the fundamental cybersecurity practices every business should implement to protect their digital assets.",
        content: "Full blog post content here...",
        author: {
            name: "David Kim",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        },
        publishedAt: "2023-12-20",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
        category: "Security",
        tags: ["Cybersecurity", "Security", "Best Practices"],
        readingTime: 11,
    },
    {
        id: "6",
        title: "Digital Transformation: Where to Start",
        slug: "digital-transformation-where-to-start",
        excerpt:
            "A practical guide to beginning your digital transformation journey and avoiding common pitfalls.",
        content: "Full blog post content here...",
        author: {
            name: "Emily Davis",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        },
        publishedAt: "2023-12-15",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        category: "Consulting",
        tags: ["Digital Transformation", "Strategy", "Business"],
        readingTime: 9,
    },
    {
        id: "7",
        title: "The Power of Real-Time Analytics",
        slug: "power-of-realtime-analytics",
        excerpt:
            "Discover how real-time analytics can transform your business decision-making process.",
        content: "Full blog post content here...",
        author: {
            name: "Michael Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        },
        publishedAt: "2023-12-10",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e71?w=800",
        category: "Data",
        tags: ["Analytics", "Real-Time", "Business Intelligence"],
        readingTime: 7,
    },
    {
        id: "8",
        title: "API Design Best Practices",
        slug: "api-design-best-practices",
        excerpt:
            "Learn how to design APIs that are intuitive, scalable, and developer-friendly.",
        content: "Full blog post content here...",
        author: {
            name: "Sarah Martinez",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        },
        publishedAt: "2023-12-05",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        category: "Development",
        tags: ["API", "Development", "Best Practices"],
        readingTime: 10,
    },
    {
        id: "9",
        title: "Machine Learning Model Deployment Strategies",
        slug: "ml-model-deployment-strategies",
        excerpt:
            "Explore different approaches to deploying machine learning models in production environments.",
        content: "Full blog post content here...",
        author: {
            name: "Michael Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        },
        publishedAt: "2023-11-28",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        category: "AI/ML",
        tags: ["Machine Learning", "Deployment", "MLOps"],
        readingTime: 13,
    },
    {
        id: "10",
        title: "Container Orchestration: Kubernetes Explained",
        slug: "kubernetes-explained",
        excerpt:
            "A comprehensive guide to understanding Kubernetes and container orchestration.",
        content: "Full blog post content here...",
        author: {
            name: "David Kim",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        },
        publishedAt: "2023-11-20",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        category: "Cloud/DevOps",
        tags: ["Kubernetes", "DevOps", "Containers"],
        readingTime: 14,
    },
    {
        id: "11",
        title: "User Experience Design Principles",
        slug: "ux-design-principles",
        excerpt:
            "Essential UX design principles that will help you create products users love.",
        content: "Full blog post content here...",
        author: {
            name: "Lisa Anderson",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
        },
        publishedAt: "2023-11-15",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
        category: "Design",
        tags: ["UX", "Design", "User Experience"],
        readingTime: 8,
    },
    {
        id: "12",
        title: "Building a Modern Tech Stack",
        slug: "building-modern-tech-stack",
        excerpt:
            "How to choose and integrate the right technologies for your project in 2024.",
        content: "Full blog post content here...",
        author: {
            name: "Alex Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        },
        publishedAt: "2023-11-10",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        category: "Technology",
        tags: ["Tech Stack", "Technology", "Development"],
        readingTime: 11,
    },
];

export const faqs: FAQ[] = [
    {
        id: "1",
        question: "What services does PieNodeAi offer?",
        answer:
            "PieNodeAi offers comprehensive digital consulting services including Adobe Experience Manager (AEM) Services, WordPress Services, and Shopify & Shopify Plus Services. We combine leading platforms with advanced technologies to engineer scalable, enterprise-grade digital solutions.",
        category: "general",
    },
    {
        id: "2",
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary based on scope and complexity. A typical web application project takes 8-12 weeks, while AI/ML projects can take 12-24 weeks. We provide detailed timelines during the initial consultation.",
        category: "process",
    },
    {
        id: "3",
        question: "What is your pricing model?",
        answer:
            "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and requirements. Contact us for a customized quote.",
        category: "pricing",
    },
    {
        id: "4",
        question: "Do you work with startups?",
        answer:
            "Yes, we work with businesses of all sizes, from startups to enterprises. We offer flexible engagement models to accommodate different budgets and needs.",
        category: "general",
    },
    {
        id: "5",
        question: "What technologies do you specialize in?",
        answer:
            "We specialize in leading platforms including Shopify Plus, Adobe Experience Manager, and WordPress, combined with advanced technologies such as AI, Node.js, Java, and Python. We engineer scalable, enterprise-grade digital solutions that drive measurable business outcomes.",
        category: "services",
    },
    {
        id: "6",
        question: "How do you ensure project quality?",
        answer:
            "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions. We maintain high code quality standards and comprehensive documentation.",
        category: "process",
    },
    {
        id: "7",
        question: "Can you help with existing projects?",
        answer:
            "Yes, we provide support for existing projects including maintenance, updates, refactoring, and feature additions. We can also help modernize legacy systems.",
        category: "services",
    },
    {
        id: "8",
        question: "What is your development process?",
        answer:
            "We follow an agile development process with regular sprints, daily standups, and client demos. We emphasize communication, transparency, and iterative delivery to ensure alignment with client goals.",
        category: "process",
    },
    {
        id: "9",
        question: "Do you provide ongoing support?",
        answer:
            "Yes, we offer ongoing support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. Support packages are customizable based on your needs.",
        category: "services",
    },
    {
        id: "10",
        question: "How do you handle data security?",
        answer:
            "Security is a top priority. We implement industry-standard security practices including encryption, access controls, regular security audits, and compliance with relevant regulations (GDPR, HIPAA, etc.).",
        category: "general",
    },
    {
        id: "11",
        question: "What is the typical team size for a project?",
        answer:
            "Team size depends on project requirements. Small projects typically have 2-3 team members, while larger projects may have 5-10 members. We ensure the right mix of skills for each project.",
        category: "process",
    },
    {
        id: "12",
        question: "How do you communicate with clients?",
        answer:
            "We use multiple communication channels including email, Slack, video calls, and project management tools. We provide regular status updates and are always available to address questions or concerns.",
        category: "process",
    },
    {
        id: "13",
        question: "Do you offer training?",
        answer:
            "Yes, we provide training sessions for your team on the technologies and systems we build. This ensures your team can effectively use and maintain the solutions we deliver.",
        category: "services",
    },
    {
        id: "14",
        question: "What industries do you serve?",
        answer:
            "We serve clients across various industries including healthcare, finance, retail, manufacturing, logistics, and technology. Our solutions are adaptable to different industry requirements.",
        category: "general",
    },
    {
        id: "15",
        question: "How do you handle project scope changes?",
        answer:
            "We understand that requirements can evolve. We have a flexible change management process that allows for scope adjustments while maintaining project timelines and budgets. All changes are discussed and approved before implementation.",
        category: "process",
    },
];

export const companyStats: CompanyStats[] = [
    { label: "Projects Completed", value: 30, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "+" },
    { label: "Team Members", value: 30, suffix: "+", },
    { label: "Years of Experience", value: 3.5, suffix: "+" },
];

