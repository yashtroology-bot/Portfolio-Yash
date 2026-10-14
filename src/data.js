// ─────────────────────────────────────────────────────────────
//  Portfolio content — edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
    name: 'Yash Shukla',
    firstName: 'Yash',
    roles: ['Full Stack Engineer', 'Gen AI Engineer', 'AI Engineer'],
    tagline:
        'I design and ship production-grade web platforms and LLM-powered products — from scalable MERN backends to intelligent, AI-native user experiences.',
    location: 'Gonda, Uttar Pradesh, India',
    email: 'yashshukla0160@gmail.com',
    phone: '+91 9838576734',
    github: 'https://github.com/yashshuklaaa',
    linkedin: 'https://www.linkedin.com/in/yash-shukla-b92553212/',
    resume: '/Yash_Shukla_Resume.pdf',
    currentCompany: 'Troology',
}

export const stats = [
    { value: 3.9, decimals: 1, suffix: '', label: 'Years of experience' },
    { value: 3, suffix: '', label: 'Companies, on-site' },
    { value: 1000, suffix: '+', label: 'DSA problems solved' },
    { value: 831, suffix: '', label: 'Day LeetCode streak' },
]

export const pillars = [
    {
        key: 'fullstack',
        eyebrow: '01 — Engineering',
        title: 'Full Stack Engineer',
        description:
            'End-to-end ownership of web platforms: system architecture, secure APIs, data modelling, polished frontends and deployment — built to serve thousands of real users.',
        points: [
            'MERN, TypeScript, Remix & GraphQL',
            'Government & enterprise-grade platforms',
            'API latency & DB query optimisation',
            'Auth, push notifications & integrations',
        ],
    },
    {
        key: 'ai',
        eyebrow: '02 — Intelligence',
        title: 'Gen AI / AI Engineer',
        description:
            'Turning large language models into reliable product features: GPT-powered assistants, retrieval pipelines and data-driven automation wired straight into real applications.',
        points: [
            'LLM apps with OpenAI / GPT APIs',
            'RAG, embeddings & vector search',
            'Prompt engineering & AI agents',
            'Building PartIQ — an AI-native product',
        ],
    },
]

export const expertise = [
    {
        icon: 'brain',
        title: 'LLM-Powered Products',
        text: 'GPT-based chat, copilots and smart assistants integrated into real products with streaming UX and guardrails.',
        tag: 'Gen AI',
        size: 'wide',
    },
    {
        icon: 'layers',
        title: 'RAG & Vector Search',
        text: 'Embedding pipelines, semantic retrieval and context-grounded answers over private data.',
        tag: 'Gen AI',
    },
    {
        icon: 'cpu',
        title: 'AI Agents & Automation',
        text: 'Tool-calling agents, webhooks and workflow automation that remove manual effort.',
        tag: 'AI',
    },
    {
        icon: 'server',
        title: 'Scalable Backends',
        text: 'REST & GraphQL APIs on Node.js / Express with PostgreSQL and MongoDB — engineered for concurrency.',
        tag: 'Full Stack',
    },
    {
        icon: 'layout',
        title: 'Modern Frontends',
        text: 'Accessible, component-driven React & TypeScript interfaces with Tailwind and Material UI.',
        tag: 'Full Stack',
    },
    {
        icon: 'zap',
        title: 'Performance & Reliability',
        text: 'Lower latency, faster queries and resilient architecture for high-traffic, high-availability apps.',
        tag: 'Engineering',
        size: 'wide',
    },
]

export const experiences = [
    {
        company: 'Troology',
        role: 'Full Stack Developer',
        period: 'Sept 2025 — Present',
        location: 'On-site',
        current: true,
        summary:
            'Building large-scale government and enterprise platforms, plus an AI-based product, with secure architecture and state-level compliance.',
        points: [
            'Contributed to UPSDMA (UP State Disaster Management Authority) — an NCC training & disaster-preparedness platform for SDRF personnel and Aapda Mitra volunteers.',
            'Built and enhanced core features of the Rahat Sewa App, actively used by thousands of users for training, coordination and disaster response.',
            'Independently developed a full-scale Ed-Tech MOOC platform from concept to production — architecture, APIs, frontend, auth, database and deployment.',
            'Working on PartIQ, an AI-based product — owning frontend & backend, scalable APIs and intelligent data-driven features.',
            'Reduced API latency and improved query efficiency for high availability across large user bases.',
        ],
        tags: ['MERN', 'TypeScript', 'AI Product', 'Gov-Tech', 'Tailwind'],
    },
    {
        company: 'Cognitivo',
        role: 'Full Stack Developer',
        period: 'Apr 2025 — Aug 2025',
        location: 'On-site',
        summary:
            'Shipped AI chat, real-time notifications and high-throughput APIs for a fast-moving product team.',
        points: [
            'Integrated AI-powered GPT-based chat for intelligent interactions and automated responses.',
            'Designed REST & GraphQL APIs on Node.js / Express with PostgreSQL and MongoDB — handled a 50% increase in concurrent traffic with no degradation.',
            'Implemented Web Push Notifications with Service Workers & VAPID keys, boosting engagement and retention.',
            'Built Monday.com integrations via custom API connectors, webhooks and automation scripts.',
            'Led UI/UX refactors improving responsiveness, accessibility and visual consistency.',
        ],
        tags: ['OpenAI GPT', 'GraphQL', 'PostgreSQL', 'Service Workers', 'React'],
    },
    {
        company: 'Singularies Pvt Ltd',
        role: 'Software Engineer',
        period: 'Mar 2024 — Mar 2025',
        location: 'On-site, Mumbai',
        summary:
            'Built features and reusable component systems for a key product using Remix, TypeScript and Go.',
        points: [
            'Integrated APIs and shipped new features and components for a flagship product.',
            'Leveraged TypeScript and the Remix framework to build robust, maintainable, scalable apps.',
            'Worked across React, TypeScript, Remix, Go and Tailwind CSS.',
            'Designed reusable, accessible, high-performance UI components.',
        ],
        tags: ['Remix', 'TypeScript', 'Go', 'React', 'Tailwind'],
    },
]

export const projects = [
    {
        title: 'PartIQ',
        category: 'ai',
        label: 'AI Product · In Production',
        featured: true,
        description:
            'An AI-native product delivering intelligent, data-driven insights. I own the full stack — scalable APIs, LLM integration and the product frontend — turning model output into a fast, trustworthy user experience.',
        highlights: ['LLM integration', 'Scalable API layer', 'Data-driven intelligence'],
        tech: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'REST APIs'],
        links: {},
    },
    {
        title: 'AI Chat Assistant',
        category: 'ai',
        label: 'Gen AI · Cognitivo',
        description:
            'GPT-powered conversational assistant embedded into a production app — automated responses, contextual help and smoother user journeys.',
        tech: ['OpenAI GPT', 'Node.js', 'React', 'PostgreSQL'],
        links: {},
    },
    {
        title: 'Ed-Tech MOOC Platform',
        category: 'fullstack',
        label: 'Full Stack · Solo build',
        description:
            'A complete online-learning platform taken from concept to production single-handedly — architecture, APIs, auth, database design and deployment.',
        tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind'],
        links: {},
    },
    {
        title: 'Rahat Sewa App',
        category: 'fullstack',
        label: 'Gov-Tech · UPSDMA',
        description:
            'Disaster-preparedness and response platform for SDRF personnel and Aapda Mitra volunteers, used by thousands across Uttar Pradesh.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: {},
    },
    {
        title: 'Twitter Clone API',
        category: 'fullstack',
        label: 'Open Source',
        description:
            'Robust social-media backend with JWT auth, bcrypt hashing, tweets, timelines, follow/unfollow, likes and comments — fully tested via Postman.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
        links: { github: 'https://github.com/yashshuklaaa' },
    },
]

// icon keys map to react-icons in App.jsx
export const skillGroups = [
    {
        name: 'Gen AI & LLMs',
        skills: [
            { name: 'OpenAI / GPT', icon: 'openai' },
            { name: 'LangChain', icon: 'langchain' },
            { name: 'Hugging Face', icon: 'huggingface' },
            { name: 'Gemini', icon: 'gemini' },
            { name: 'RAG Pipelines', icon: 'layers' },
            { name: 'Embeddings', icon: 'grid' },
            { name: 'Vector DBs', icon: 'database' },
            { name: 'Prompt Engineering', icon: 'terminal' },
            { name: 'AI Agents', icon: 'cpu' },
            { name: 'Python', icon: 'python' },
        ],
    },
    {
        name: 'Frontend',
        skills: [
            { name: 'React.js', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Remix', icon: 'remix' },
            { name: 'Redux', icon: 'redux' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Material UI', icon: 'mui' },
        ],
    },
    {
        name: 'Backend',
        skills: [
            { name: 'Node.js', icon: 'node' },
            { name: 'Express.js', icon: 'express' },
            { name: 'GraphQL', icon: 'graphql' },
            { name: 'REST APIs', icon: 'server' },
            { name: 'Go', icon: 'go' },
            { name: 'Web Push / SW', icon: 'bell' },
        ],
    },
    {
        name: 'Data & DevOps',
        skills: [
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git & GitHub', icon: 'git' },
            { name: 'Postman', icon: 'postman' },
            { name: 'C++ / DSA', icon: 'cpp' },
        ],
    },
]

export const marquee = [
    'openai', 'react', 'node', 'typescript', 'langchain', 'mongodb', 'postgres',
    'graphql', 'python', 'huggingface', 'docker', 'tailwind', 'remix', 'gemini', 'go', 'express',
]

export const achievements = [
    { icon: 'gfg', value: '#1', title: 'College Rank', text: 'Top performer on GeeksforGeeks in college.' },
    { icon: 'leetcode', value: '1540', title: 'LeetCode Rating', text: '3★ coder — top 34% globally.' },
    { icon: 'code', value: '1000+', title: 'Problems Solved', text: 'Across LeetCode, GeeksforGeeks & CodeChef.' },
    { icon: 'flame', value: '831', title: 'Day Streak', text: 'Longest LeetCode streak — consistency first.' },
]

export const education = [
    {
        period: '2020 — 2024',
        school: 'Rajkiya Engineering College, Bijnor',
        degree: 'B.Tech, Electrical Engineering',
        grade: 'CGPA 7.56 / 10',
    },
    {
        period: '2019',
        school: 'Saraswati Vidya Mandir',
        degree: 'Class XII — PCM',
        grade: '79%',
    },
]
