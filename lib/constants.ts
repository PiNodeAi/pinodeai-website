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
        title: "AI/ML Powered Analytics",
        slug: "ai-ml-analytics",
        description:
            "We design and deploy production-grade AI and machine learning systems that transform raw data into actionable intelligence. From predictive modeling and recommendation engines to LLM-powered applications and real-time inference pipelines, our solutions are built on modern MLOps practices for reliability, reproducibility, and scale.",
        shortDescription:
            "Production ML pipelines, predictive models, LLM integrations, and real-time inference at scale.",
        icon: "BrainCircuit",
        benefits: [
            "Custom ML model development: classification, regression, clustering, forecasting",
            "LLM integration & fine-tuning: OpenAI, Anthropic Claude, Mistral, Llama",
            "RAG (Retrieval-Augmented Generation) pipelines with vector databases (Pinecone, Weaviate, pgvector)",
            "Real-time & batch inference infrastructure on AWS SageMaker, Vertex AI, or Azure ML",
            "MLOps pipelines: MLflow, DVC, Weights & Biases, Kubeflow",
            "Data preprocessing, feature engineering & feature store design (Feast, Tecton)",
            "Model monitoring, drift detection & automated retraining workflows",
        ],
        process: [
            {
                step: 1,
                title: "Data Audit & Problem Framing",
                description:
                    "We assess data availability, quality, and labeling to define a feasible ML problem statement, success metrics, and baseline benchmarks before any model development begins.",
            },
            {
                step: 2,
                title: "Experimentation & Model Development",
                description:
                    "We run structured experiments and track runs via MLflow or W&B, iterating on feature engineering, model architectures, and hyperparameter tuning.",
            },
            {
                step: 3,
                title: "Pipeline Engineering & Deployment",
                description:
                    "We productionize models as REST or gRPC inference endpoints, build batch scoring pipelines, and containerize workloads with Docker for deployment on SageMaker, Vertex AI, or self-hosted Kubernetes.",
            },
            {
                step: 4,
                title: "Monitoring, Retraining & Iteration",
                description:
                    "We instrument prediction monitoring, configure data drift alerts, and establish automated retraining triggers — ensuring model performance holds as real-world distributions shift over time.",
            },
        ],
        featured: true,
    },
    {
        id: "2",
        title: "Digital Transformation",
        slug: "digital-transformation",
        description:
            "We help enterprises modernize legacy systems, re-platform core business processes, and build the digital operating model needed to compete in a software-driven economy. Our engagements span API-first re-architecture, cloud migration, process automation, and the organizational change management required to make transformation stick.",
        shortDescription:
            "Legacy modernization, API-first re-architecture, cloud migration, and process digitization.",
        icon: "Zap",
        benefits: [
            "Legacy system assessment & modernization roadmapping",
            "Monolith-to-microservices decomposition & strangler fig migrations",
            "API-first platform design: REST, GraphQL, AsyncAPI (Kafka, AMQP)",
            "Cloud-native re-architecture on AWS, GCP, or Azure",
            "Business process automation: Camunda, Temporal, AWS Step Functions",
            "Enterprise integration: MuleSoft, Boomi, Apache Camel, Azure Integration Services",
            "Developer enablement & platform engineering (Backstage, internal developer portals)",
        ],
        process: [
            {
                step: 1,
                title: "Current-State Assessment",
                description:
                    "We map your existing technology landscape, integration dependencies, and technical debt to produce a prioritized modernization backlog with effort-to-value scoring.",
            },
            {
                step: 2,
                title: "Target Architecture Design",
                description:
                    "We define the target-state architecture — domain boundaries, API contracts, data ownership, and cloud infrastructure topology — validated against your capacity, risk tolerance, and business timelines.",
            },
            {
                step: 3,
                title: "Phased Execution",
                description:
                    "We execute migration and re-platform work in value-delivering increments, applying strangler fig, parallel run, or big-bang patterns as appropriate to minimize business disruption.",
            },
            {
                step: 4,
                title: "Enablement & Governance",
                description:
                    "We establish platform engineering practices, internal developer portal tooling, and governance frameworks so your teams can sustain and extend the new architecture independently.",
            },
        ],
        featured: true,
    },
    {
        id: "3",
        title: "Data Migration & Automation",
        slug: "data-migration-automation",
        description:
            "We design and execute complex data migrations and build durable automation pipelines that eliminate manual data workflows. Whether migrating from on-premise databases to cloud data warehouses, consolidating post-acquisition data estates, or automating multi-system data synchronization, we ensure data integrity, auditability, and zero-downtime delivery.",
        shortDescription:
            "ETL/ELT pipelines, warehouse migrations, data quality frameworks, and workflow automation.",
        icon: "Database",
        benefits: [
            "ETL/ELT pipeline development: Apache Spark, dbt, Fivetran, Airbyte, AWS Glue",
            "Cloud data warehouse migration: Snowflake, BigQuery, Redshift, Databricks",
            "CDC (Change Data Capture) with Debezium, Kafka Connect, or AWS DMS",
            "Data quality frameworks: Great Expectations, Soda, Monte Carlo",
            "Workflow orchestration: Apache Airflow, Prefect, Dagster",
            "Post-migration validation, reconciliation reporting & rollback planning",
            "RPA & task automation: Python scripting, Power Automate, n8n",
        ],
        process: [
            {
                step: 1,
                title: "Source Profiling & Mapping",
                description:
                    "We profile source data for schema complexity, volume, data quality issues, and referential integrity to produce a field-level migration mapping and risk register.",
            },
            {
                step: 2,
                title: "Pipeline Architecture & Build",
                description:
                    "We architect and build ELT pipelines using dbt or Spark, configure CDC streams for live replication, and define idempotent transformation logic with full test coverage.",
            },
            {
                step: 3,
                title: "Validation & Cutover",
                description:
                    "We run parallel operation with automated reconciliation checks across source and target, then execute a staged cutover with defined rollback triggers and stakeholder sign-off gates.",
            },
            {
                step: 4,
                title: "Automation & Handover",
                description:
                    "We wrap recurring data workflows in orchestrated pipelines, configure alerting on SLA breaches and quality failures, and document runbooks for ongoing operations.",
            },
        ],
        featured: true,
    },
    {
        id: "4",
        title: "Data Engineering",
        slug: "data-engineering",
        description:
            "We build the data infrastructure that makes analytics, ML, and business intelligence reliable and scalable. From modern data lakehouse architectures and real-time streaming platforms to semantic layers and self-serve analytics tooling, our data engineering practice turns fragmented data estates into trusted, queryable assets.",
        shortDescription:
            "Lakehouse architecture, streaming pipelines, dbt modeling, and self-serve analytics infrastructure.",
        icon: "BarChart2",
        benefits: [
            "Modern data lakehouse design: Delta Lake, Apache Iceberg, Apache Hudi on S3/GCS",
            "Streaming data platforms: Apache Kafka, Apache Flink, Kinesis Data Streams, Pub/Sub",
            "dbt project architecture, semantic layer design & data contract enforcement",
            "Data catalog & lineage: Apache Atlas, OpenMetadata, DataHub, Collibra",
            "Cloud-native warehousing: Snowflake, BigQuery, Redshift & cost optimization",
            "Real-time OLAP: Apache Druid, ClickHouse, Tinybird",
            "Data mesh implementation: domain ownership, data product design & federated governance",
        ],
        process: [
            {
                step: 1,
                title: "Data Platform Assessment",
                description:
                    "We audit your current ingestion, storage, and consumption layers to identify reliability gaps, query performance bottlenecks, and ungoverned data flows.",
            },
            {
                step: 2,
                title: "Architecture Design",
                description:
                    "We design the target platform architecture — medallion lakehouse, streaming topology, or data mesh — selecting technologies to match your team's operational maturity and cost constraints.",
            },
            {
                step: 3,
                title: "Build & Model",
                description:
                    "We build ingestion pipelines, write layered dbt models (staging/intermediate/mart), enforce data contracts, and configure CI/CD for the data platform itself.",
            },
            {
                step: 4,
                title: "Governance, Documentation & Enablement",
                description:
                    "We populate data catalogs, define ownership and SLO agreements per data product, and train analytics and engineering teams to operate and extend the platform independently.",
            },
        ],
        featured: false,
    },
    {
        id: "5",
        title: "Point of Sale Solutions",
        slug: "point-of-sale",
        description:
            "We design and integrate modern POS ecosystems that unify in-store and digital commerce — connecting POS hardware, inventory systems, loyalty platforms, and back-office ERP into a single, real-time operational view. Whether building on Shopify POS, Square, or custom POS APIs, we engineer the integration layer that eliminates inventory discrepancies and enables omnichannel fulfillment.",
        shortDescription:
            "POS integration engineering connecting in-store hardware, inventory, loyalty, and ERP.",
        icon: "ShoppingCart",
        benefits: [
            "Shopify POS Pro configuration, hardware setup & custom POS UI extensions",
            "POS API integration: Square, Lightspeed, Toast, Stripe Terminal",
            "Real-time inventory sync across POS, WMS, and e-commerce channels",
            "Omnichannel order management: BOPIS, ship-from-store & inter-location transfers",
            "Loyalty & CRM integration: Yotpo, LoyaltyLion, Salesforce, HubSpot",
            "ERP synchronization: NetSuite, SAP, Microsoft Dynamics 365",
            "Custom receipt templating, reporting dashboards & store operations tooling",
        ],
        process: [
            {
                step: 1,
                title: "Operations & Integration Mapping",
                description:
                    "We map your in-store workflows, hardware estate, and existing system integrations to identify data ownership boundaries and define the target integration topology.",
            },
            {
                step: 2,
                title: "POS Configuration & Customization",
                description:
                    "We configure your POS platform, develop custom POS UI extensions for bespoke workflows, and integrate payment terminals, barcode scanners, and receipt printers.",
            },
            {
                step: 3,
                title: "Backend Integration",
                description:
                    "We build real-time or event-driven integration pipelines connecting POS to inventory, ERP, CRM, and loyalty systems — ensuring consistent product, pricing, and customer data across all touchpoints.",
            },
            {
                step: 4,
                title: "Rollout, Training & Support",
                description:
                    "We manage phased store rollouts with staff training, monitor integration health post-launch, and provide ongoing support for new locations, catalog changes, and platform upgrades.",
            },
        ],
        featured: false,
    },
    {
        id: "6",
        title: "Blockchain & Web3 Development",
        slug: "blockchain",
        description:
            "We design and build decentralized applications, smart contract systems, and tokenization infrastructure for enterprises and Web3 startups. From DeFi protocol development and NFT platforms to enterprise blockchain networks for supply chain provenance and digital asset management, our engineers bring production experience across EVM-compatible chains and permissioned ledger platforms.",
        shortDescription:
            "Smart contracts, dApps, tokenization infrastructure, and enterprise blockchain networks.",
        icon: "Link",
        benefits: [
            "Smart contract development & auditing: Solidity, Vyper (Ethereum, Polygon, Arbitrum, Base)",
            "DeFi protocol engineering: AMMs, lending protocols, yield aggregation strategies",
            "NFT platform development: ERC-721, ERC-1155, metadata pipelines & marketplace integrations",
            "Web3 frontend: ethers.js, viem, wagmi, RainbowKit, WalletConnect v2",
            "Enterprise blockchain: Hyperledger Fabric, Hyperledger Besu, Corda",
            "On-chain indexing: The Graph subgraphs, Ponder, Goldsky",
            "IPFS / Arweave decentralized storage & on-chain data architecture",
        ],
        process: [
            {
                step: 1,
                title: "Protocol Design & Threat Modeling",
                description:
                    "We define the on-chain data model, token economics, and access control model, then conduct threat modeling to identify reentrancy, oracle manipulation, and privilege escalation risks before writing any Solidity.",
            },
            {
                step: 2,
                title: "Smart Contract Development",
                description:
                    "We develop and unit-test smart contracts using Hardhat or Foundry, applying proxy upgrade patterns (OpenZeppelin UUPS/Transparent) where upgradability is required.",
            },
            {
                step: 3,
                title: "Audit & Testnet Deployment",
                description:
                    "We perform internal security reviews, coordinate third-party audits, deploy to testnet environments, and run integration tests against forked mainnet state before production deployment.",
            },
            {
                step: 4,
                title: "Frontend Integration & Mainnet Launch",
                description:
                    "We integrate contracts into the Web3 frontend, configure subgraph indexing, deploy to mainnet or target L2, and establish an on-call incident response protocol for post-launch monitoring.",
            },
        ],
        featured: false,
    },
    {
        id: "7",
        title: "ERP & ECM Implementations",
        slug: "erp-ecm",
        description:
            "We implement, configure, and extend enterprise resource planning and enterprise content management platforms to digitize core business operations. From NetSuite and SAP S/4HANA implementations to OpenText and SharePoint ECM deployments, we bridge the gap between out-of-the-box platform capabilities and the custom workflows your operations actually require.",
        shortDescription:
            "NetSuite, SAP, Microsoft Dynamics, OpenText, and SharePoint implementations and customizations.",
        icon: "Layers",
        benefits: [
            "ERP implementation & configuration: NetSuite, SAP S/4HANA, Microsoft Dynamics 365, Odoo",
            "Custom module development: SuiteScript (NetSuite), ABAP (SAP), Power Platform extensions",
            "ECM platforms: OpenText Content Suite, Microsoft SharePoint, Alfresco, M-Files",
            "Document management workflows, metadata taxonomy & retention policy configuration",
            "ERP-to-ecommerce real-time integration: inventory, order & financial data sync",
            "Data migration from legacy ERP with field-level reconciliation validation",
            "RBAC configuration, audit trail setup & compliance reporting (SOX, ISO 27001)",
        ],
        process: [
            {
                step: 1,
                title: "Requirements & Gap Analysis",
                description:
                    "We run structured workshops with finance, operations, and IT stakeholders to map current processes to platform capabilities, identifying configuration gaps requiring custom development.",
            },
            {
                step: 2,
                title: "Configuration & Customization",
                description:
                    "We configure the platform to match your chart of accounts, approval hierarchies, and workflows, then develop custom scripts and integrations for gaps the standard platform cannot address.",
            },
            {
                step: 3,
                title: "Data Migration & Integration",
                description:
                    "We migrate historical master data and transactional records with field-level mapping validation, and build real-time connectors to ecommerce, CRM, WMS, and banking platforms.",
            },
            {
                step: 4,
                title: "UAT, Training & Go-Live",
                description:
                    "We run user acceptance testing cycles, deliver role-specific training, and manage a phased go-live with hypercare support before handing steady-state operations to your team.",
            },
        ],
        featured: false,
    },
    {
        id: "8",
        title: "Quality Assurance & Testing",
        slug: "quality-assurance",
        description:
            "We embed quality engineering into the software delivery lifecycle — building automated test frameworks, performance testing infrastructure, and QA processes that catch regressions before they reach production. From end-to-end browser automation to API contract testing and mobile QA, our practice shifts quality left and accelerates release confidence.",
        shortDescription:
            "Automated test frameworks, API contract testing, performance engineering, and CI-integrated QA.",
        icon: "CheckCircle",
        benefits: [
            "Test automation frameworks: Playwright, Cypress, Selenium WebDriver, WebdriverIO",
            "API testing: REST Assured, Postman/Newman, Pact (contract testing)",
            "Mobile testing: Appium, Detox (React Native), XCUITest, Espresso",
            "Performance & load testing: k6, Gatling, JMeter, Locust",
            "Visual regression testing: Percy, Chromatic, Applitools Eyes",
            "CI/CD test integration: GitHub Actions, Jenkins, CircleCI parallel test execution",
            "Accessibility auditing: axe-core, Pa11y, WCAG 2.1/2.2 AA compliance testing",
        ],
        process: [
            {
                step: 1,
                title: "QA Strategy & Coverage Mapping",
                description:
                    "We audit your existing test coverage, identify critical paths with no automated validation, and define a testing pyramid strategy balancing unit, integration, and E2E test investment.",
            },
            {
                step: 2,
                title: "Framework Design & Setup",
                description:
                    "We scaffold test automation frameworks with page object models, fixtures, and shared utilities, integrated into your CI/CD pipeline with parallel execution and flake detection from day one.",
            },
            {
                step: 3,
                title: "Test Development & Backfill",
                description:
                    "We write automated tests for critical user journeys, API contracts, and regression scenarios — prioritizing coverage for high-risk business flows and areas with a history of production incidents.",
            },
            {
                step: 4,
                title: "Performance Baseline & Quality Gates",
                description:
                    "We establish performance baselines, configure synthetic monitoring, and implement test quality gates in CI so regressions block deployment automatically rather than reaching production.",
            },
        ],
        featured: false,
    },
    {
        id: "9",
        title: "3D, AR & VR Experiences",
        slug: "3d-ar-vr",
        description:
            "We design and build immersive 3D, augmented reality, and virtual reality experiences for commerce, training, real estate, and entertainment. From web-based 3D product configurators and WebXR experiences to native AR apps and enterprise VR training simulations, we bridge creative vision with production-grade real-time rendering pipelines.",
        shortDescription:
            "WebXR, Three.js, Unity, and Unreal Engine experiences for commerce, training, and immersive media.",
        icon: "Box",
        benefits: [
            "Web-based 3D: Three.js, Babylon.js, React Three Fiber, model-viewer, WebGL shaders",
            "WebXR AR/VR browser-native immersive experiences",
            "Native AR: ARKit (iOS), ARCore (Android), RealityKit, SceneKit",
            "Unity development: XR Interaction Toolkit, game mechanics, asset pipeline & profiling",
            "Unreal Engine: photorealistic visualization, Blueprint & C++ development, Nanite/Lumen",
            "3D product configurators for ecommerce: real-time material, color & geometry changes",
            "Asset optimization: Draco/Meshopt compression, KTX2 textures, LOD pipeline, glTF/USDZ",
        ],
        process: [
            {
                step: 1,
                title: "Experience Design & Technical Scoping",
                description:
                    "We define target platforms (web, iOS, Android, headset), interaction models, and performance budgets, then build a technical prototype to validate feasibility and frame-rate targets early.",
            },
            {
                step: 2,
                title: "Asset Pipeline & Scene Architecture",
                description:
                    "We build the 3D asset pipeline — modeling, rigging, texturing, and optimization for target polycount and texture budgets — and architect the scene graph, physics, and interaction systems.",
            },
            {
                step: 3,
                title: "Development & Integration",
                description:
                    "We develop the immersive experience in Three.js/R3F, Unity, or Unreal, integrate with CMS or commerce data sources for dynamic content, and optimize shaders and draw calls to hit frame-rate targets.",
            },
            {
                step: 4,
                title: "Testing, Optimization & Deployment",
                description:
                    "We test across target devices and headsets, profile GPU/CPU performance, apply LOD and occlusion culling optimizations, and deploy via CDN with progressive loading for web-based experiences.",
            },
        ],
        featured: false,
    },
    {
        id: "10",
        title: "DevOps & Cloud Consulting",
        slug: "devops-cloud-consulting",
        description:
            "We help engineering teams build the cloud infrastructure, delivery pipelines, and operational practices that enable fast, reliable software delivery. From greenfield cloud architecture and Kubernetes platform setup to legacy infrastructure modernization and FinOps programs, our engagements reduce deployment toil, improve system reliability, and bring infrastructure costs under control.",
        shortDescription:
            "Cloud architecture, Kubernetes, IaC, CI/CD pipelines, and FinOps across AWS, GCP, and Azure.",
        icon: "Server",
        benefits: [
            "Cloud architecture & migration: AWS, GCP, Azure — Well-Architected Framework reviews",
            "Infrastructure-as-code: Terraform, Pulumi, AWS CDK, Crossplane",
            "Kubernetes platform engineering: EKS, GKE, AKS — RBAC, network policies, autoscaling",
            "CI/CD pipeline design: GitHub Actions, GitLab CI, Tekton, ArgoCD (GitOps)",
            "Service mesh & networking: Istio, Linkerd, AWS App Mesh",
            "Secrets management: HashiCorp Vault, AWS Secrets Manager, External Secrets Operator",
            "FinOps & cost optimization: reserved capacity, rightsizing, Kubecost, CloudHealth",
            "Observability: Datadog, Grafana + Prometheus + Loki, OpenTelemetry instrumentation",
        ],
        process: [
            {
                step: 1,
                title: "Infrastructure & Delivery Audit",
                description:
                    "We assess your cloud architecture against the Well-Architected Framework, audit CI/CD pipeline reliability and deployment frequency, and benchmark infrastructure costs against workload profiles.",
            },
            {
                step: 2,
                title: "Platform Design & IaC",
                description:
                    "We design the target infrastructure topology, write Terraform or Pulumi modules for reproducible provisioning, and define environment promotion strategies with appropriate change governance.",
            },
            {
                step: 3,
                title: "Kubernetes & Pipeline Setup",
                description:
                    "We provision and harden Kubernetes clusters, configure GitOps delivery with ArgoCD or Flux, set up service mesh for mTLS and traffic management, and migrate workloads incrementally.",
            },
            {
                step: 4,
                title: "Observability, FinOps & Runbooks",
                description:
                    "We deploy a full observability stack with distributed tracing and alerting, establish cost allocation tagging and optimization cadences, and document operational runbooks for the platform your team inherits.",
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

