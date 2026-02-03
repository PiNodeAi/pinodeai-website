import {
  Service,
  CaseStudy,
  TeamMember,
  BlogPost,
  Testimonial,
  FAQ,
  CompanyStats,
} from "@/types";

export const companyName = "PiNodeAI";
export const companyTagline = "Transforming Ideas into Intelligent Solutions";

export const contactInfo = {
  email: "hello@pinodeai.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 12345",
  officeHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/company/pinodeai",
  twitter: "https://twitter.com/pinodeai",
  github: "https://github.com/pinodeai",
  facebook: "https://facebook.com/pinodeai",
};

export const services: Service[] = [
  {
    id: "1",
    title: "AI & Machine Learning Solutions",
    slug: "ai-machine-learning",
    description:
      "We develop cutting-edge AI and ML solutions that help businesses automate processes, gain insights from data, and create intelligent applications.",
    shortDescription:
      "Cutting-edge AI and ML solutions for business automation and intelligence.",
    icon: "Brain",
    benefits: [
      "Custom AI model development",
      "Data analytics and insights",
      "Process automation",
      "Predictive analytics",
      "Natural language processing",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Analysis",
        description:
          "We analyze your business needs and data to identify AI opportunities.",
      },
      {
        step: 2,
        title: "Model Development",
        description:
          "Our team develops custom AI models tailored to your specific requirements.",
      },
      {
        step: 3,
        title: "Integration & Testing",
        description:
          "We integrate the solution into your existing systems and thoroughly test it.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "We deploy the solution and provide ongoing support and optimization.",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Cloud Infrastructure & DevOps",
    slug: "cloud-devops",
    description:
      "We design and implement scalable cloud infrastructure solutions with modern DevOps practices to ensure reliability and performance.",
    shortDescription:
      "Scalable cloud infrastructure with modern DevOps practices.",
    icon: "Cloud",
    benefits: [
      "Cloud architecture design",
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code",
      "24/7 monitoring and support",
    ],
    process: [
      {
        step: 1,
        title: "Architecture Planning",
        description:
          "We design a cloud architecture that meets your scalability and performance needs.",
      },
      {
        step: 2,
        title: "Infrastructure Setup",
        description:
          "We provision and configure your cloud infrastructure using best practices.",
      },
      {
        step: 3,
        title: "DevOps Implementation",
        description:
          "We set up CI/CD pipelines and automation for seamless deployments.",
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description:
          "We implement monitoring and continuously optimize your infrastructure.",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Web & Mobile Development",
    slug: "web-mobile-development",
    description:
      "We build modern, responsive web and mobile applications that deliver exceptional user experiences across all devices.",
    shortDescription:
      "Modern web and mobile applications with exceptional user experiences.",
    icon: "Smartphone",
    benefits: [
      "Responsive web design",
      "Native and cross-platform mobile apps",
      "Progressive Web Apps (PWA)",
      "Performance optimization",
      "User experience design",
    ],
    process: [
      {
        step: 1,
        title: "Design & Planning",
        description:
          "We create wireframes and designs based on your requirements and user research.",
      },
      {
        step: 2,
        title: "Development",
        description:
          "Our team builds your application using modern frameworks and best practices.",
      },
      {
        step: 3,
        title: "Testing & QA",
        description:
          "We thoroughly test your application across devices and browsers.",
      },
      {
        step: 4,
        title: "Launch & Maintenance",
        description:
          "We launch your application and provide ongoing maintenance and updates.",
      },
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Data Engineering & Analytics",
    slug: "data-engineering-analytics",
    description:
      "We help you collect, process, and analyze data to make informed business decisions and drive growth.",
    shortDescription:
      "Data pipelines and analytics solutions for informed decision-making.",
    icon: "Database",
    benefits: [
      "Data pipeline development",
      "ETL/ELT processes",
      "Data warehousing",
      "Business intelligence dashboards",
      "Real-time analytics",
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description:
          "We analyze your data sources and identify integration opportunities.",
      },
      {
        step: 2,
        title: "Pipeline Development",
        description:
          "We build robust data pipelines to collect and process your data.",
      },
      {
        step: 3,
        title: "Analytics Setup",
        description:
          "We create dashboards and analytics tools for data visualization.",
      },
      {
        step: 4,
        title: "Optimization & Insights",
        description:
          "We continuously optimize pipelines and provide actionable insights.",
      },
    ],
  },
  {
    id: "5",
    title: "Cybersecurity Solutions",
    slug: "cybersecurity",
    description:
      "We provide comprehensive cybersecurity services to protect your digital assets and ensure compliance with industry standards.",
    shortDescription:
      "Comprehensive cybersecurity to protect your digital assets.",
    icon: "Shield",
    benefits: [
      "Security audits and assessments",
      "Threat detection and response",
      "Compliance management",
      "Security training",
      "Incident response planning",
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description:
          "We conduct a comprehensive security audit of your systems.",
      },
      {
        step: 2,
        title: "Vulnerability Remediation",
        description:
          "We identify and fix security vulnerabilities in your infrastructure.",
      },
      {
        step: 3,
        title: "Security Implementation",
        description:
          "We implement security measures and monitoring systems.",
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description:
          "We provide continuous monitoring and security updates.",
      },
    ],
  },
  {
    id: "6",
    title: "Digital Transformation Consulting",
    slug: "digital-transformation",
    description:
      "We guide organizations through digital transformation journeys, helping them modernize processes and leverage technology for competitive advantage.",
    shortDescription:
      "Strategic guidance for digital transformation and modernization.",
    icon: "TrendingUp",
    benefits: [
      "Digital strategy development",
      "Process modernization",
      "Technology roadmap planning",
      "Change management",
      "ROI optimization",
    ],
    process: [
      {
        step: 1,
        title: "Current State Analysis",
        description:
          "We assess your current processes and technology landscape.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description:
          "We create a comprehensive digital transformation strategy.",
      },
      {
        step: 3,
        title: "Implementation Planning",
        description:
          "We develop detailed implementation plans and roadmaps.",
      },
      {
        step: 4,
        title: "Execution & Support",
        description:
          "We support you through execution and measure success metrics.",
      },
    ],
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
        "PiNodeAI transformed our customer service operations. The AI platform handles most inquiries seamlessly, allowing our team to focus on complex issues.",
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
    bio: "Alex has over 15 years of experience in technology and entrepreneurship. He founded PiNodeAI with a vision to make AI accessible to businesses of all sizes.",
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
    name: "Sarah Johnson",
    role: "VP of Customer Experience",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    quote:
      "PiNodeAI transformed our customer service operations. The AI platform handles most inquiries seamlessly, allowing our team to focus on complex issues.",
    rating: 5,
  },
  {
    id: "2",
    name: "Robert Williams",
    role: "CTO",
    company: "Global Finance Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    quote:
      "The cloud migration was executed flawlessly with zero downtime. PiNodeAI's expertise in cloud infrastructure is unmatched.",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer Lee",
    role: "CEO",
    company: "Fashion Retail Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    quote:
      "Our mobile app has been a game-changer. The team at PiNodeAI understood our vision and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: "4",
    name: "Mark Thompson",
    role: "Director of Operations",
    company: "DataSaaS Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    quote:
      "The real-time analytics platform has revolutionized how we serve our customers. The performance is outstanding.",
    rating: 5,
  },
  {
    id: "5",
    name: "Amanda White",
    role: "IT Director",
    company: "HealthCare Plus",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    quote:
      "PiNodeAI helped us achieve 100% HIPAA compliance while improving our system performance. Their security expertise is top-notch.",
    rating: 5,
  },
  {
    id: "6",
    name: "James Brown",
    role: "VP of Technology",
    company: "Manufacturing Solutions Ltd.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    quote:
      "The digital transformation initiative has modernized our operations. We've seen significant improvements in efficiency and cost savings.",
    rating: 5,
  },
  {
    id: "7",
    name: "Rachel Green",
    role: "Founder",
    company: "PayTech Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200",
    quote:
      "PiNodeAI built us a payment platform that's secure, scalable, and fast. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: "8",
    name: "Thomas Wilson",
    role: "Operations Manager",
    company: "Logistics Pro",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    quote:
      "The AI-powered supply chain system has reduced our costs significantly while improving delivery times. Excellent work!",
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
    question: "What services does PiNodeAI offer?",
    answer:
      "PiNodeAI offers a comprehensive range of technology services including AI & Machine Learning Solutions, Cloud Infrastructure & DevOps, Web & Mobile Development, Data Engineering & Analytics, Cybersecurity Solutions, and Digital Transformation Consulting.",
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
      "We specialize in modern technologies including React, Next.js, Node.js, Python, AWS, Kubernetes, Docker, TensorFlow, and various AI/ML frameworks. We stay current with the latest technology trends.",
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
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];

