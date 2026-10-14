// ─────────────────────────────────────────────────────────────
//  Portfolio content — edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
    name: 'Yash Shukla',
    firstName: 'Yash',
    roles: ['Full Stack & AI Developer', 'Gen AI Engineer', 'Backend Specialist'],
    tagline:
        'Full Stack & AI Developer with 3.8+ years of experience engineering high-performance web platforms and AI-driven solutions — from scalable MERN backends to intelligent LLM data extraction pipelines.',
    location: 'Gonda, Uttar Pradesh, India',
    email: 'shuklayash457@gmail.com',
    phone: '+91 9838576734',
    github: 'https://github.com/yashshuklaaa',
    linkedin: 'https://www.linkedin.com/in/yash-shukla-b92553212/',
    resume: '/Yash_Shukla_Resume.pdf',
    currentCompany: 'Troology',
}

export const stats = [
    { value: 3.8, decimals: 1, suffix: '+', label: 'Years of experience' },
    { value: 3, suffix: '', label: 'Tech companies' },
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
            'MERN Stack, TypeScript, Remix & GraphQL',
            'Government & enterprise-grade platforms (UPSDMA)',
            'API latency & DB query optimisation (50% traffic boost)',
            'Web Push Notifications, auth & integrations',
        ],
    },
    {
        key: 'ai',
        eyebrow: '02 — Intelligence',
        title: 'Gen AI & Cloud',
        description:
            'Engineering production-grade AI solutions: LLM endpoints, intelligent caching, automated PDF & catalog data extraction pipelines, and cloud-native ML exploration on GCP & Vertex AI.',
        points: [
            'AI-driven document extraction from complex PDFs',
            'Confidence scoring & response caching layers',
            'OpenAI GPT conversational features & prompts',
            'Exploring GCP & Vertex AI infrastructure',
        ],
    },
]

export const expertise = [
    {
        icon: 'brain',
        title: 'AI Data Extraction Pipelines',
        text: 'Automated extraction pipelines leveraging LLMs to parse complex PDF manuals and unstructured text into structured database schemas.',
        tag: 'Gen AI',
        size: 'wide',
    },
    {
        icon: 'zap',
        title: 'LLM Caching & Confidence Scoring',
        text: 'Intelligent response caching and validation layers that cut external LLM API latency and operational costs while maintaining high accuracy.',
        tag: 'AI Optimization',
    },
    {
        icon: 'cpu',
        title: 'Conversational AI & Assistants',
        text: 'OpenAI GPT-based conversational features embedded into products to automate responses and increase user retention.',
        tag: 'Gen AI',
    },
    {
        icon: 'server',
        title: 'Scalable REST & GraphQL APIs',
        text: 'High-throughput APIs built with Node.js, Express, Go, PostgreSQL & MongoDB — architected for high concurrency and zero degradation.',
        tag: 'Backend',
    },
    {
        icon: 'layout',
        title: 'Modern Frontends & Micro-interactions',
        text: 'Responsive, accessible UIs crafted with React.js, Remix, TypeScript, Tailwind CSS, and Material UI.',
        tag: 'Frontend',
    },
    {
        icon: 'layers',
        title: 'Cloud & DevOps (GCP / Vertex AI)',
        text: 'Exploring Google Cloud Platform and Vertex AI to architect scalable AI infrastructures and predictive data models.',
        tag: 'Cloud & AI',
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
            'Spearheading the eVehicle platform (ScalePart), building AI data extraction pipelines, and contributing to government disaster management platforms.',
        points: [
            'Spearheading the eVehicle platform (ScalePart), developing frontend architectures and backend AI integrations to handle unstructured catalog data.',
            'Engineered an AI-driven document extraction pipeline utilizing external LLM endpoints to parse complex PDF manuals and unstructured text, extracting model numbers and technical specs into MongoDB schemas.',
            'Built an intelligent caching and confidence scoring layer for AI responses, significantly reducing external API latency and costs.',
            'Contributed to the UPSDMA (UP State Disaster Management Authority) platform (Rahat Sewa App) for SDRF personnel, ensuring high concurrency and operational reliability.',
            'Actively exploring and upskilling in Google Cloud Platform (GCP) and Vertex AI to architect scalable AI infrastructures.',
            'Developing and optimizing RESTful architectures with Node.js, Express.js, TypeScript, and React.js.',
        ],
        tags: ['ScalePart', 'AI Extraction', 'MERN', 'TypeScript', 'Gov-Tech', 'GCP'],
    },
    {
        company: 'Cognitivo',
        role: 'Full Stack Developer',
        period: 'Jun 2024 — Aug 2025',
        location: 'Hybrid',
        summary:
            'Shipped AI conversational features, real-time push alerts, and high-throughput APIs supporting a 50% increase in concurrent traffic.',
        points: [
            'Integrated AI-powered conversational features (OpenAI GPT-based) directly into applications, providing intelligent user assistance and automating responses.',
            'Architected and optimized end-to-end RESTful and GraphQL APIs using Node.js and PostgreSQL/MongoDB, handling a 50% increase in concurrent user traffic.',
            'Built Web Push Notifications using Service Workers and VAPID keys to implement real-time event-driven alert systems.',
            'Integrated complex third-party platforms including Monday.com via custom webhooks and automation scripts.',
            'Refactored legacy UI components using React.js, TypeScript, Material UI, and Tailwind CSS, improving responsiveness and accessibility.',
        ],
        tags: ['OpenAI GPT', 'GraphQL', 'PostgreSQL', 'Service Workers', 'React', 'TypeScript'],
    },
    {
        company: 'Singularies Pvt Ltd',
        role: 'Software Engineer',
        period: 'Jan 2023 — May 2024',
        location: 'Remote',
        summary:
            'Engineered scalable microservices in Go (Golang) and built reusable component systems using React.js, Remix, and TypeScript.',
        points: [
            'Designed and implemented robust features for a key product, writing maintainable logic utilizing TypeScript, React.js, and Remix frameworks.',
            'Developed scalable backend microservices using Go (Golang) and integrated critical third-party APIs ensuring high reliability and fault tolerance.',
            'Created high-performance, reusable UI components with Tailwind CSS focusing on an inclusive, accessible user experience.',
        ],
        tags: ['Remix', 'TypeScript', 'Go', 'React', 'Tailwind CSS'],
    },
]

export const projects = [
    {
        title: 'ScalePart (eVehicle Platform)',
        category: 'ai',
        label: 'eVehicle Platform · Live',
        featured: true,
        description:
            'An end-to-end intelligent eVehicle platform delivering robust backend APIs and a highly responsive React frontend. Features an AI-driven data extraction pipeline that parses complex PDF documents and unstructured text into structured database records with confidence scoring and intelligent caching.',
        highlights: [
            'Live eVehicle platform at scalepart.com',
            'AI-driven PDF & catalog extraction pipeline',
            'Intelligent caching & confidence scoring layer',
            'Scalable MongoDB schemas for rapid retrieval',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'TypeScript'],
        links: { live: 'https://scalepart.com/' },
    },
    {
        title: 'MOOC Ed-Tech Platform (Jalshaala)',
        category: 'fullstack',
        label: 'Ed-Tech · Live',
        featured: true,
        description:
            'A full-scale Ed-Tech platform developed from scratch, handling architecture, APIs, authentication, database design, interactive learning features, and cloud deployment.',
        highlights: [
            'Live platform at new.jalshaala.com',
            'Complete end-to-end solo development',
            'Authentication, role-based access & course flows',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind'],
        links: { live: 'https://new.jalshaala.com/?showWebsite=true' },
    },
    {
        title: 'Rahat Sewa App (UPSDMA)',
        category: 'fullstack',
        label: 'Gov-Tech · Production',
        description:
            'Disaster-preparedness and coordination platform for SDRF personnel and Aapda Mitra volunteers under the Uttar Pradesh State Disaster Management Authority, engineered for high concurrency and field reliability.',
        highlights: [
            'Used by SDRF personnel & Aapda Mitra volunteers',
            'High concurrency & operational reliability',
        ],
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: {},
    },
    {
        title: 'AI Conversational Assistant',
        category: 'ai',
        label: 'Gen AI · Cognitivo',
        description:
            'GPT-powered conversational assistant integrated directly into production applications — automated intelligent responses, user assistance, and elevated user retention.',
        highlights: [
            'Integrated OpenAI GPT models',
            'Context-aware automated assistance',
        ],
        tech: ['OpenAI GPT', 'Node.js', 'React', 'PostgreSQL'],
        links: {},
    },
    {
        title: 'Twitter Clone API',
        category: 'fullstack',
        label: 'Backend · Open Source',
        description:
            'Robust social backend architecture built with Node.js and Express.js featuring JWT auth, bcrypt password hashing, dynamic timelines, follow/unfollow associations, likes, and comments. Extensively tested with Postman.',
        highlights: [
            'Secure JWT & bcrypt authentication flow',
            'Relational associations in MongoDB',
            'Fully documented & tested Postman endpoints',
        ],
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
        links: { github: 'https://github.com/yashshuklaaa' },
    },
]

// icon keys map to react-icons in App.jsx
export const skillGroups = [
    {
        name: 'AI & Cloud',
        skills: [
            { name: 'AI Integrations & LLMs', icon: 'openai' },
            { name: 'Google Cloud (GCP)', icon: 'gcp' },
            { name: 'Vertex AI', icon: 'gemini' },
            { name: 'Prompt Engineering', icon: 'terminal' },
            { name: 'AI Extraction Pipelines', icon: 'layers' },
            { name: 'LangChain', icon: 'langchain' },
            { name: 'Hugging Face', icon: 'huggingface' },
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
            { name: 'HTML5 / CSS3', icon: 'layout' },
        ],
    },
    {
        name: 'Backend',
        skills: [
            { name: 'Node.js', icon: 'node' },
            { name: 'Express.js', icon: 'express' },
            { name: 'Go (Golang)', icon: 'go' },
            { name: 'REST & GraphQL APIs', icon: 'server' },
            { name: 'Web Push / SW', icon: 'bell' },
        ],
    },
    {
        name: 'Databases & Tools',
        skills: [
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'SQL', icon: 'database' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Git & GitHub', icon: 'git' },
            { name: 'Postman', icon: 'postman' },
            { name: 'C++ / DSA', icon: 'cpp' },
        ],
    },
]

export const marquee = [
    'openai', 'react', 'node', 'typescript', 'gcp', 'mongodb', 'postgres',
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
        degree: 'Bachelor of Technology, Electrical Engineering',
        grade: 'CGPA: 7.56 / 10',
    },
    {
        period: '2019',
        school: 'Saraswati Vidya Mandir',
        degree: 'Class XII — PCM',
        grade: '79%',
    },
]
