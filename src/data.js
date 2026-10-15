// ─────────────────────────────────────────────────────────────
//  Portfolio content — synchronized with yash_updated_resume.pdf
// ─────────────────────────────────────────────────────────────

export const profile = {
    name: 'Yash Shukla',
    firstName: 'Yash',
    roles: [
        'Full Stack AI Engineer',
        'Generative AI Developer',
        'Backend & RAG Specialist',
    ],
    tagline:
        'Full Stack AI Engineer with 3.8 years of experience architecting high-performance web platforms and production-ready Generative AI solutions — from advanced RAG pipelines and autonomous agents to event-driven distributed backends (Node.js, FastAPI, Redis, BullMQ).',
    location: 'Gonda, Uttar Pradesh, India',
    email: 'shuklayash457@gmail.com',
    phone: '+91 9838576734',
    github: 'https://github.com/yashshuklaaa',
    linkedin: 'https://www.linkedin.com/in/yash-shukla-b92553212/',
    resume: '/yash_updated_resume.pdf',
    currentCompany: 'Troology',
}

export const stats = [
    { value: 3.8, decimals: 1, suffix: '', label: 'Years of experience' },
    { value: 3, suffix: '', label: 'Tech companies' },
    { value: 1000, suffix: '+', label: 'DSA problems solved' },
    { value: 831, suffix: '', label: 'Day LeetCode streak' },
]

export const pillars = [
    {
        key: 'ai',
        eyebrow: '01 — Intelligence',
        title: 'Gen AI & RAG Architectures',
        description:
            'Engineering production-grade AI solutions: end-to-end RAG pipelines (ChromaDB, Cross-Encoder Reranking), autonomous Text-to-MQL agents, multimodal LLM workflows, and intelligent caching on GCP & Vertex AI.',
        points: [
            'Advanced RAG: ChromaDB, Cross-Encoder Reranking & Hybrid Search',
            'Autonomous Text-to-MQL Agent translating prompts to Mongo aggregations',
            'AI document extraction from complex PDFs with confidence scoring',
            'Real-time token streaming via SSE using Groq-accelerated Llama-3.1',
        ],
    },
    {
        key: 'fullstack',
        eyebrow: '02 — Engineering',
        title: 'Full Stack & Distributed Systems',
        description:
            'End-to-end architecture of scalable, event-driven web platforms: high-throughput REST & GraphQL APIs, asynchronous worker queues with BullMQ & Redis, WebSockets, and modern responsive frontends.',
        points: [
            'Event-driven backends: Node.js, Express, FastAPI, Redis & BullMQ',
            'Modern frontends: React.js, Next.js, Remix, TypeScript & Tailwind CSS',
            'Scalable database design: MongoDB schemas, PostgreSQL & vector stores',
            'Production & Gov-Tech platforms (ScalePart, Jalshaala, UPSDMA)',
        ],
    },
]

export const expertise = [
    {
        icon: 'brain',
        title: 'Advanced RAG & Vector Intelligence',
        text: 'Production RAG architectures with ChromaDB, Cross-Encoder Reranking, agentic web search fallbacks (DuckDuckGo), and hybrid retrieval for high accuracy.',
        tag: 'Gen AI',
        size: 'wide',
    },
    {
        icon: 'terminal',
        title: 'Autonomous DB Agents (Text-to-MQL)',
        text: 'Autonomous agents translating natural language prompts into MongoDB aggregation pipelines to query and summarize live database records.',
        tag: 'AI Agents',
    },
    {
        icon: 'zap',
        title: 'LLM Caching & Low-Latency Streaming',
        text: 'Real-time token streaming via SSE using Groq-accelerated Llama-3.1, paired with intelligent caching layers cutting latency and external LLM costs.',
        tag: 'AI Optimization',
    },
    {
        icon: 'server',
        title: 'Distributed Backends & Queues',
        text: 'Asynchronous document ingestion engines with BullMQ & Redis, event loops decoupled with WebSockets, and high-throughput REST/GraphQL APIs.',
        tag: 'Backend',
    },
    {
        icon: 'layout',
        title: 'Modern Frontends (React / Next.js)',
        text: 'Responsive, accessible user interfaces crafted with React.js, Next.js, Remix, TypeScript, Tailwind CSS, and Material UI.',
        tag: 'Frontend',
    },
    {
        icon: 'layers',
        title: 'AI Document Extraction Pipelines',
        text: 'Automated pipelines leveraging LLMs to parse complex PDF manuals and unstructured text, extracting precise models and technical specs into MongoDB.',
        tag: 'Gen AI',
        size: 'wide',
    },
]

export const experiences = [
    {
        company: 'Troology',
        role: 'Full Stack AI Developer',
        period: 'Sept 2025 — Present',
        location: 'On-site',
        current: true,
        summary:
            'Spearheading the eVehicle platform (ScalePart), developing frontend architectures and backend AI integrations to handle unstructured catalog data, and contributing to government disaster management platforms.',
        points: [
            'Currently spearheading the eVehicle platform (ScalePart), developing both frontend architectures and backend AI integrations to handle unstructured catalog data.',
            'Engineered an AI-driven document extraction pipeline utilizing external LLM endpoints to automatically parse complex PDF manuals and unstructured text, extracting precise product model numbers, series names, and technical specifications.',
            'Built an intelligent caching and confidence scoring layer for AI responses, significantly reducing external API latency and costs while ensuring highly accurate data mapping to MongoDB schemas.',
            'Contributed to the UPSDMA (Uttar Pradesh State Disaster Management Authority) platform (Rahat Sewa App) for SDRF personnel, building features ensuring highly concurrent usage and operational reliability.',
            'Actively exploring and upskilling in Google Cloud Platform (GCP) and its suite of ML services to architect scalable AI infrastructures and predictive data models.',
            'Developing and optimizing RESTful architectures with Node.js, Express.js, TypeScript, and ensuring seamless state integration in React.js applications.',
        ],
        tags: ['ScalePart', 'AI Extraction', 'MERN', 'TypeScript', 'Gov-Tech', 'GCP'],
    },
    {
        company: 'Cognitivo',
        role: 'Full Stack Developer',
        period: 'Jun 2024 — Aug 2025',
        location: 'Hybrid',
        summary:
            'Integrated AI-powered conversational features (OpenAI GPT), built real-time event-driven alerts, and architected APIs handling a 50% increase in concurrent traffic.',
        points: [
            'Integrated AI-powered conversational features (OpenAI GPT-based) directly into applications, providing intelligent user assistance, automating responses, and increasing user retention.',
            'Architected and optimized end-to-end RESTful and GraphQL APIs using Node.js and PostgreSQL/MongoDB, improving query efficiency and supporting a 50% increase in concurrent user traffic.',
            'Built Web Push Notifications using Service Workers and VAPID keys to implement real-time event-driven alert systems.',
            'Integrated complex third-party platforms including Monday.com via custom webhooks and automation scripts, accelerating cross-team operational efficiency.',
            'Refactored legacy UI components using React.js, TypeScript, Material UI, and Tailwind CSS, drastically improving frontend performance, responsiveness, and web accessibility.',
        ],
        tags: ['OpenAI GPT', 'GraphQL', 'PostgreSQL', 'Service Workers', 'React', 'TypeScript'],
    },
    {
        company: 'Singularies Pvt Ltd',
        role: 'Software Engineer',
        period: 'Jan 2023 — May 2024',
        location: 'Remote',
        summary:
            'Engineered scalable microservices in Go (Golang) and built reusable, accessible component systems using TypeScript, React.js, and Remix.',
        points: [
            'Designed and implemented robust features for a key product, writing maintainable logic utilizing TypeScript, React.js, and Remix frameworks.',
            'Developed scalable backend microservices using Go (Golang) and integrated critical third-party APIs ensuring high reliability and fault tolerance.',
            'Created high-performance, reusable UI components with Tailwind CSS, focusing on an inclusive, accessible user experience across all devices.',
        ],
        tags: ['Remix', 'TypeScript', 'Go', 'React', 'Tailwind CSS'],
    },
]

export const projects = [
    {
        title: 'OmniRAG (Multimodal RAG & DB Agent)',
        category: 'ai',
        label: 'Gen AI & Agent · Flagship',
        featured: true,
        description:
            'Architected a scalable full-stack Generative AI platform integrating a FastAPI AI microservice, Node.js backend, and React client for real-time document intelligence. Features an advanced RAG pipeline with ChromaDB and Cross-Encoder Reranking, an autonomous Text-to-MQL Agent for live database querying, asynchronous document ingestion via BullMQ & Redis, and Groq-accelerated real-time token streaming.',
        highlights: [
            'Advanced RAG with ChromaDB, Cross-Encoder Reranking & Agentic Web Search (DuckDuckGo)',
            'Autonomous Text-to-MQL Agent translating prompts into MongoDB aggregation pipelines',
            'Asynchronous document ingestion engine using BullMQ and Redis with real-time WebSockets',
            'Real-time token streaming via SSE using Groq-accelerated Llama-3.1 (cut latency by 65%)',
        ],
        tech: ['FastAPI', 'React', 'LangChain', 'ChromaDB', 'Redis', 'BullMQ', 'Node.js'],
        links: { github: 'https://github.com/yashshuklaaa' },
    },
    {
        title: 'ScalePart (eVehicle Platform)',
        category: 'ai',
        label: 'eVehicle Platform · Live',
        featured: true,
        description:
            'Developed and architected an end-to-end intelligent eVehicle platform delivering robust backend APIs and a highly responsive React frontend. Features an AI-driven data extraction pipeline that parses complex PDF documents and unstructured text into structured database records with intelligent caching and confidence scoring.',
        highlights: [
            'Live eVehicle commercial platform at scalepart.com',
            'AI-driven PDF & unstructured catalog extraction pipeline',
            'Intelligent caching and confidence-scoring layer reducing external LLM latency & costs',
            'Scalable MongoDB schemas for rapid product catalog retrieval',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'TypeScript'],
        links: { live: 'https://scalepart.com/' },
    },
    {
        title: 'MOOC Ed-Tech Platform (Jalshaala)',
        category: 'fullstack',
        label: 'Ed-Tech · Live',
        featured: false,
        description:
            'A full-scale Ed-Tech platform developed from scratch, handling architecture, APIs, authentication, database design, interactive learning features, and cloud deployment.',
        highlights: [
            'Live platform in production at new.jalshaala.com',
            'Complete end-to-end solo development and deployment',
            'Authentication, role-based access & course flows',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
        links: { live: 'https://new.jalshaala.com/?showWebsite=true' },
    },
    {
        title: 'Rahat Sewa App (UPSDMA)',
        category: 'fullstack',
        label: 'Gov-Tech · Production',
        description:
            'Disaster-preparedness and coordination platform for SDRF personnel and Aapda Mitra volunteers under the Uttar Pradesh State Disaster Management Authority, engineered for high concurrency and field reliability.',
        highlights: [
            'Contributed to features for SDRF personnel & Aapda Mitra volunteers',
            'Engineered for high concurrency and field operational reliability',
        ],
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
        links: {},
    },
    {
        title: 'Twitter Clone Backend',
        category: 'fullstack',
        label: 'Backend Architecture · Open Source',
        description:
            'Developed a robust backend architecture using Node.js and Express.js, providing core functionalities for user authentication, tweet creation, dynamic timeline management, user associations (follow/unfollow), and interaction systems. Thoroughly tested with Postman.',
        highlights: [
            'Secure authentication flows utilizing JWT and bcrypt password hashing',
            'Relational user associations (follow/unfollow) & interaction systems in MongoDB',
            'Rigorously tested RESTful API with comprehensive Postman test suites',
        ],
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Postman'],
        links: { github: 'https://github.com/yashshuklaaa' },
    },
    {
        title: 'AI Conversational Assistant',
        category: 'ai',
        label: 'Gen AI · Cognitivo',
        description:
            'Integrated AI-powered conversational features (OpenAI GPT-based) directly into applications, providing intelligent user assistance, automating responses, and increasing user retention.',
        highlights: [
            'Integrated OpenAI GPT models for smart automated replies',
            'Increased user retention and reduced manual customer support overhead',
        ],
        tech: ['OpenAI GPT', 'Node.js', 'React', 'PostgreSQL'],
        links: {},
    },
]

// icon keys map to react-icons in App.jsx
export const skillGroups = [
    {
        name: 'Generative AI & ML',
        skills: [
            { name: 'RAG Architecture', icon: 'brain' },
            { name: 'LangChain', icon: 'langchain' },
            { name: 'Vector DB (ChromaDB)', icon: 'database' },
            { name: 'Hugging Face', icon: 'huggingface' },
            { name: 'Cross-Encoder Reranking', icon: 'layers' },
            { name: 'Prompt Engineering', icon: 'terminal' },
            { name: 'Autonomous Agents', icon: 'cpu' },
            { name: 'LLM APIs (Groq, OpenAI, Vertex AI)', icon: 'openai' },
            { name: 'Google Cloud (GCP)', icon: 'gcp' },
        ],
    },
    {
        name: 'Backend & Distributed',
        skills: [
            { name: 'Node.js', icon: 'node' },
            { name: 'Express.js', icon: 'express' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'BullMQ', icon: 'server' },
            { name: 'Redis', icon: 'redis' },
            { name: 'WebSockets (Socket.io)', icon: 'socketio' },
            { name: 'REST & GraphQL APIs', icon: 'graphql' },
            { name: 'Go (Golang)', icon: 'go' },
            { name: 'Python', icon: 'python' },
        ],
    },
    {
        name: 'Frontend',
        skills: [
            { name: 'React.js', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Remix', icon: 'remix' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Material UI', icon: 'mui' },
            { name: 'Redux Toolkit', icon: 'redux' },
        ],
    },
    {
        name: 'Databases & Cloud',
        skills: [
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'ChromaDB', icon: 'database' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git & GitHub', icon: 'git' },
            { name: 'Postman', icon: 'postman' },
            { name: 'SQL', icon: 'database' },
            { name: 'C++ / DSA', icon: 'cpp' },
        ],
    },
]

export const marquee = [
    'openai', 'fastapi', 'react', 'nextjs', 'langchain', 'node', 'redis', 'typescript',
    'gcp', 'mongodb', 'postgres', 'graphql', 'python', 'huggingface', 'docker', 'tailwind',
    'socketio', 'go', 'gemini', 'express',
]

export const achievements = [
    { icon: 'gfg', value: '#1', title: 'College Rank', text: 'Ranked 1st in College on GeeksforGeeks.' },
    { icon: 'leetcode', value: '1540', title: 'LeetCode Rating', text: '3 Star Coder on LeetCode (1540 rating, Top 34%).' },
    { icon: 'code', value: '1000+', title: 'Problems Solved', text: 'Solved 1000+ DSA problems across LeetCode, GFG, and CodeChef.' },
    { icon: 'flame', value: '831', title: 'Day Streak', text: 'Maintained an 831-day longest streak on LeetCode.' },
]

export const education = [
    {
        period: '2020 — 2024',
        school: 'Rajkiya Engineering College, Bijnor',
        degree: 'Bachelor of Technology in Electrical Engineering',
        grade: 'CGPA: 7.56 / 10 · Bijnor, India',
    },
]
