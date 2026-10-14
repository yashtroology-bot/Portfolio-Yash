import { forwardRef, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, animate, useScroll, useSpring } from 'framer-motion'
import {
    FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiDownload,
    FiMenu, FiX, FiCpu, FiLayers, FiServer, FiLayout, FiZap, FiDatabase, FiGrid,
    FiTerminal, FiBell, FiCode, FiSend, FiCheck, FiArrowRight, FiBookOpen,
} from 'react-icons/fi'
import { HiOutlineSparkles, HiOutlineFire } from 'react-icons/hi'
import { LuBrainCircuit } from 'react-icons/lu'
import {
    SiOpenai, SiLangchain, SiHuggingface, SiGooglegemini, SiPython, SiReact, SiTypescript,
    SiJavascript, SiRemix, SiRedux, SiTailwindcss, SiMui, SiNodedotjs, SiExpress, SiGraphql,
    SiGo, SiMongodb, SiPostgresql, SiDocker, SiGit, SiPostman, SiCplusplus, SiLeetcode,
    SiGeeksforgeeks, SiGooglecloud,
} from 'react-icons/si'
import {
    profile, stats, pillars, expertise, experiences, projects, skillGroups,
    marquee, achievements, education,
} from './data'

/* ───────────────────────── Icon registry ───────────────────────── */
const ICONS = {
    openai: SiOpenai, langchain: SiLangchain, huggingface: SiHuggingface, gemini: SiGooglegemini,
    python: SiPython, react: SiReact, typescript: SiTypescript, javascript: SiJavascript,
    remix: SiRemix, redux: SiRedux, tailwind: SiTailwindcss, mui: SiMui, node: SiNodedotjs,
    express: SiExpress, graphql: SiGraphql, go: SiGo, mongodb: SiMongodb, postgres: SiPostgresql,
    docker: SiDocker, git: SiGit, postman: SiPostman, cpp: SiCplusplus, leetcode: SiLeetcode,
    gfg: SiGeeksforgeeks, gcp: SiGooglecloud, layers: FiLayers, grid: FiGrid, database: FiDatabase, terminal: FiTerminal,
    cpu: FiCpu, server: FiServer, bell: FiBell, layout: FiLayout, zap: FiZap, brain: LuBrainCircuit,
    code: FiCode, flame: HiOutlineFire,
}
const Icon = ({ name, ...rest }) => {
    const C = ICONS[name] || FiCode
    return <C {...rest} />
}

const NAV = ['About', 'Expertise', 'Experience', 'Projects', 'Skills', 'Contact']

const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
}

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/* ───────────────────────── Hooks ───────────────────────── */
function useTypewriter(words, { type = 70, erase = 35, hold = 1800 } = {}) {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[index % words.length]
        let t
        if (!deleting && text === word) t = setTimeout(() => setDeleting(true), hold)
        else if (deleting && text === '') {
            setDeleting(false)
            setIndex((i) => i + 1)
        } else {
            t = setTimeout(
                () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
                deleting ? erase : type,
            )
        }
        return () => clearTimeout(t)
    }, [text, deleting, index, words, type, erase, hold])

    return text
}

function useActiveSection(ids) {
    const [active, setActive] = useState('')
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-45% 0px -50% 0px' },
        )
        ids.forEach((id) => {
            const el = document.getElementById(id)
            if (el) obs.observe(el)
        })
        return () => obs.disconnect()
    }, [ids])
    return active
}

/* ───────────────────────── Background FX ───────────────────────── */
function NeuralCanvas() {
    const ref = useRef(null)

    useEffect(() => {
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let w, h, nodes, raf
        const mouse = { x: -9999, y: -9999 }
        const dpr = Math.min(window.devicePixelRatio || 1, 2)

        const init = () => {
            w = canvas.offsetWidth
            h = canvas.offsetHeight
            canvas.width = w * dpr
            canvas.height = h * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            const count = Math.min(90, Math.floor((w * h) / 16000))
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.6 + 0.6,
            }))
        }

        const draw = () => {
            ctx.clearRect(0, 0, w, h)
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i]
                a.x += a.vx
                a.y += a.vy
                if (a.x < 0 || a.x > w) a.vx *= -1
                if (a.y < 0 || a.y > h) a.vy *= -1

                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j]
                    const d = Math.hypot(a.x - b.x, a.y - b.y)
                    if (d < 130) {
                        ctx.strokeStyle = `rgba(139, 124, 255, ${0.16 * (1 - d / 130)})`
                        ctx.lineWidth = 0.7
                        ctx.beginPath()
                        ctx.moveTo(a.x, a.y)
                        ctx.lineTo(b.x, b.y)
                        ctx.stroke()
                    }
                }
                const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
                if (md < 180) {
                    ctx.strokeStyle = `rgba(56, 232, 255, ${0.35 * (1 - md / 180)})`
                    ctx.beginPath()
                    ctx.moveTo(a.x, a.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }
                ctx.fillStyle = md < 180 ? 'rgba(56, 232, 255, 0.9)' : 'rgba(180, 170, 255, 0.55)'
                ctx.beginPath()
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
                ctx.fill()
            }
            if (!reduce) raf = requestAnimationFrame(draw)
        }

        const onMove = (e) => {
            const r = canvas.getBoundingClientRect()
            mouse.x = e.clientX - r.left
            mouse.y = e.clientY - r.top
        }
        const onLeave = () => { mouse.x = mouse.y = -9999 }

        init()
        draw()
        window.addEventListener('resize', init)
        window.addEventListener('mousemove', onMove)
        document.addEventListener('mouseleave', onLeave)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', init)
            window.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    return <canvas ref={ref} className="neural-canvas" aria-hidden="true" />
}

function CursorGlow() {
    useEffect(() => {
        const move = (e) => {
            document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
            document.documentElement.style.setProperty('--my', `${e.clientY}px`)
        }
        window.addEventListener('pointermove', move)
        return () => window.removeEventListener('pointermove', move)
    }, [])
    return <div className="cursor-glow" aria-hidden="true" />
}

// Card that tracks mouse for a localised spotlight border
const GlowCard = forwardRef(function GlowCard({ className = '', children, as: Tag = motion.div, ...rest }, ref) {
    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
    }
    return (
        <Tag ref={ref} className={`glow-card ${className}`} onMouseMove={onMove} {...rest}>
            {children}
        </Tag>
    )
})

function Counter({ value, suffix = '', decimals = 0 }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const [n, setN] = useState(0)
    useEffect(() => {
        if (!inView) return
        const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v) })
        return () => c.stop()
    }, [inView, value])
    const display = decimals
        ? n.toFixed(decimals)
        : Math.round(n).toLocaleString()
    return <span ref={ref}>{display}{suffix}</span>
}

function SectionHeader({ eyebrow, title, accent, sub }) {
    return (
        <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.span className="eyebrow" variants={reveal}><span className="eyebrow-line" />{eyebrow}</motion.span>
            <motion.h2 className="section-title" variants={reveal} custom={1}>
                {title} <span className="text-gradient">{accent}</span>
            </motion.h2>
            {sub && <motion.p className="section-sub" variants={reveal} custom={2}>{sub}</motion.p>}
        </motion.div>
    )
}

/* ───────────────────────── Navbar ───────────────────────── */
function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const active = useActiveSection(NAV.map((n) => n.toLowerCase()))
    const { scrollYProgress } = useScroll()
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
    }, [open])

    const go = (id) => { setOpen(false); scrollToId(id) }

    return (
        <>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} />
            <motion.header
                className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="nav-inner">
                    <button id="nav-logo" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
                        <span className="logo-mark">YS</span>
                        <span className="logo-text">Yash <span>Shukla</span></span>
                    </button>

                    <nav className="nav-links" aria-label="Primary">
                        {NAV.map((item) => {
                            const id = item.toLowerCase()
                            return (
                                <button key={id} id={`nav-${id}`} onClick={() => go(id)} className={`nav-link ${active === id ? 'is-active' : ''}`}>
                                    {active === id && <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                                    <span>{item}</span>
                                </button>
                            )
                        })}
                    </nav>

                    <div className="nav-actions">
                        <a id="nav-resume" href={profile.resume} download="Yash_Shukla_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                            Resume <FiDownload />
                        </a>
                        <button id="nav-toggle" className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
                            {open ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {NAV.map((item, i) => (
                            <motion.button
                                key={item}
                                id={`mobile-nav-${item.toLowerCase()}`}
                                onClick={() => go(item.toLowerCase())}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i }}
                            >
                                <span className="mono">0{i + 1}</span>{item}
                            </motion.button>
                        ))}
                        <motion.a
                            id="mobile-nav-resume"
                            href={profile.resume}
                            download="Yash_Shukla_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ margin: '1.5rem 2rem 0', justifyContent: 'center' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                        >
                            Download Resume <FiDownload />
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

/* ───────────────────────── Hero ───────────────────────── */
const CODE = [
    [['k', 'const '], ['v', 'agent'], ['p', ' = '], ['k', 'new '], ['f', 'Agent'], ['p', '({']],
    [['p', '  model: '], ['s', '"gpt-4o"'], ['p', ',']],
    [['p', '  tools: ['], ['v', 'searchDocs'], ['p', ', '], ['v', 'queryDB'], ['p', '],']],
    [['p', '  memory: '], ['f', 'vectorStore'], ['p', '(embeddings),']],
    [['p', '})']],
    [],
    [['k', 'await '], ['v', 'agent'], ['p', '.'], ['f', 'run'], ['p', '('], ['s', '"Find the root cause"'], ['p', ')']],
    [['c', '// ✓ retrieved 12 chunks · 184ms']],
    [['c', '// ✓ answer grounded in 4 sources']],
]

function HeroTerminal() {
    return (
        <motion.div
            className="terminal"
            initial={{ opacity: 0, y: 40, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="terminal-bar">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
                <span className="terminal-title mono">scalepart / ai-pipeline.ts</span>
                <span className="terminal-live"><span className="pulse" />live</span>
            </div>
            <pre className="terminal-body mono">
                {CODE.map((line, i) => (
                    <motion.div
                        key={i}
                        className="code-line"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.18 }}
                    >
                        <span className="ln">{String(i + 1).padStart(2, '0')}</span>
                        {line.map(([t, s], j) => <span key={j} className={`tk-${t}`}>{s}</span>)}
                        {i === CODE.length - 1 && <span className="caret" />}
                    </motion.div>
                ))}
            </pre>

            <motion.div className="float-chip chip-a" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <SiOpenai /> <div><b>LLM</b><small>GPT · Gemini</small></div>
            </motion.div>
            <motion.div className="float-chip chip-b" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <SiReact /> <div><b>Full Stack</b><small>MERN · TS</small></div>
            </motion.div>
            <motion.div className="float-chip chip-c" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <FiDatabase /> <div><b>RAG</b><small>Vector search</small></div>
            </motion.div>
        </motion.div>
    )
}

function Hero() {
    const role = useTypewriter(profile.roles)

    return (
        <section className="hero" id="home">
            <NeuralCanvas />
            <div className="hero-aurora" aria-hidden="true">
                <span className="blob blob-1" /><span className="blob blob-2" /><span className="blob blob-3" />
            </div>
            <div className="grid-overlay" aria-hidden="true" />

            <div className="container hero-grid">
                <motion.div className="hero-copy" initial="hidden" animate="visible">
                    <motion.div className="status-pill" variants={reveal}>
                        <span className="status-dot" /> Open to Full Stack &amp; AI Engineering roles
                    </motion.div>

                    <motion.p className="hero-hello mono" variants={reveal} custom={1}>
                        Hi, I&apos;m {profile.name} —
                    </motion.p>

                    <motion.h1 className="hero-title" variants={reveal} custom={2}>
                        <span className="hero-line">Engineering</span>
                        <span className="hero-line">
                            <span className="text-gradient">intelligent</span> software
                        </span>
                        <span className="hero-line hero-line--muted">end to end.</span>
                    </motion.h1>

                    <motion.div className="role-rotator" variants={reveal} custom={3}>
                        <span className="role-prefix mono">&gt;_</span>
                        <span className="role-text">{role}</span>
                        <span className="role-caret" />
                    </motion.div>

                    <motion.p className="hero-tagline" variants={reveal} custom={4}>
                        {profile.tagline}
                    </motion.p>

                    <motion.div className="hero-cta" variants={reveal} custom={5}>
                        <button id="hero-cta-projects" className="btn btn-primary" onClick={() => scrollToId('projects')}>
                            View my work <FiArrowRight />
                        </button>
                        <button id="hero-cta-contact" className="btn btn-ghost" onClick={() => scrollToId('contact')}>
                            <HiOutlineSparkles /> Let&apos;s build together
                        </button>
                    </motion.div>

                    <motion.div className="hero-socials" variants={reveal} custom={6}>
                        <a id="hero-github" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                        <a id="hero-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                        <a id="hero-email" href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
                        <span className="hero-socials-line" />
                        <span className="mono hero-loc"><FiMapPin /> {profile.location}</span>
                    </motion.div>
                </motion.div>

                <div className="hero-visual">
                    <HeroTerminal />
                </div>
            </div>

            <div className="container">
                <motion.div className="stats-bar" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                    {stats.map((s) => (
                        <div key={s.label} className="stat">
                            <div className="stat-value"><Counter value={s.value} suffix={s.suffix} decimals={s.decimals} /></div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

/* ───────────────────────── Marquee ───────────────────────── */
function Marquee() {
    const items = [...marquee, ...marquee]
    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
                {items.map((k, i) => (
                    <span key={i} className="marquee-item"><Icon name={k} /></span>
                ))}
            </div>
        </div>
    )
}

/* ───────────────────────── About / Pillars ───────────────────────── */
function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <SectionHeader
                    eyebrow="About"
                    title="Two disciplines,"
                    accent="one engineer."
                    sub={`I'm ${profile.firstName} — a Full Stack & AI Developer with 3.8+ years of experience, currently at ${profile.currentCompany}. I build scalable platforms and intelligent features: government platforms used by thousands (UPSDMA), an Ed-Tech MOOC platform (Jalshaala), and ScalePart, an AI-driven eVehicle platform.`}
                />

                <div className="pillars">
                    {pillars.map((p, i) => (
                        <GlowCard
                            key={p.key}
                            className={`pillar pillar--${p.key}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={reveal}
                            custom={i}
                        >
                            <div className="pillar-icon">{p.key === 'ai' ? <LuBrainCircuit /> : <FiCode />}</div>
                            <span className="pillar-eyebrow mono">{p.eyebrow}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <ul>
                                {p.points.map((pt) => (
                                    <li key={pt}><FiCheck /> {pt}</li>
                                ))}
                            </ul>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───────────────────────── Expertise (Bento) ───────────────────────── */
function Expertise() {
    return (
        <section className="section" id="expertise">
            <div className="container">
                <SectionHeader eyebrow="What I do" title="Where product meets" accent="intelligence." sub="From pixel-perfect interfaces to retrieval pipelines — the full surface area of a modern AI product." />
                <div className="bento">
                    {expertise.map((e, i) => (
                        <GlowCard
                            key={e.title}
                            className={`bento-item ${e.size === 'wide' ? 'bento-wide' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={reveal}
                            custom={i % 3}
                        >
                            <div className="bento-top">
                                <div className="bento-icon"><Icon name={e.icon} /></div>
                                <span className={`tag tag--${e.tag.replace(/\s/g, '').toLowerCase()}`}>{e.tag}</span>
                            </div>
                            <h3>{e.title}</h3>
                            <p>{e.text}</p>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───────────────────────── Experience ───────────────────────── */
function Experience() {
    const [active, setActive] = useState(0)
    const exp = experiences[active]

    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeader eyebrow="Experience" title="Where I've" accent="shipped." sub="Three on-site roles across gov-tech, AI products and SaaS." />

                <motion.div className="exp" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal}>
                    <div className="exp-tabs" role="tablist">
                        {experiences.map((e, i) => (
                            <button
                                key={e.company}
                                id={`exp-tab-${i}`}
                                role="tab"
                                aria-selected={active === i}
                                className={`exp-tab ${active === i ? 'is-active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                {active === i && <motion.span layoutId="exp-indicator" className="exp-indicator" />}
                                <span className="exp-tab-company">{e.company}</span>
                                <span className="exp-tab-period mono">{e.period}</span>
                            </button>
                        ))}
                    </div>

                    <GlowCard className="exp-panel">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="exp-head">
                                    <div>
                                        <h3>{exp.role} <span className="text-gradient">@ {exp.company}</span></h3>
                                        <p className="exp-meta mono">{exp.period} · {exp.location}</p>
                                    </div>
                                    {exp.current && <span className="badge-current"><span className="status-dot" /> Current</span>}
                                </div>
                                <p className="exp-summary">{exp.summary}</p>
                                <ul className="exp-points">
                                    {exp.points.map((p, i) => (
                                        <motion.li key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                                            <span className="exp-bullet" />{p}
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="chips">
                                    {exp.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </GlowCard>
                </motion.div>
            </div>
        </section>
    )
}

/* ───────────────────────── Projects ───────────────────────── */
const FILTERS = [
    { key: 'all', label: 'All work' },
    { key: 'ai', label: 'Gen AI' },
    { key: 'fullstack', label: 'Full Stack' },
]

function ProjectVisual({ category, title }) {
    return (
        <div className={`project-visual project-visual--${category}`} aria-hidden="true">
            <div className="pv-grid" />
            <div className="pv-orb" />
            <div className="pv-icon">{category === 'ai' ? <LuBrainCircuit /> : <FiLayers />}</div>
            <span className="pv-title mono">{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
    )
}

function Projects() {
    const [filter, setFilter] = useState('all')
    const list = projects.filter((p) => filter === 'all' || p.category === filter)

    return (
        <section className="section" id="projects">
            <div className="container">
                <SectionHeader eyebrow="Selected work" title="Things I've" accent="built." sub="Production systems, AI features and side projects — most of them used by real people every day." />

                <div className="filters" role="tablist">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            id={`filter-${f.key}`}
                            role="tab"
                            aria-selected={filter === f.key}
                            className={`filter ${filter === f.key ? 'is-active' : ''}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {filter === f.key && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                            <span>{f.label}</span>
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects">
                    <AnimatePresence mode="popLayout">
                        {list.map((p) => (
                            <GlowCard
                                key={p.title}
                                layout
                                className={`project ${p.featured ? 'project--featured' : ''}`}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectVisual category={p.category} title={p.title} />
                                <div className="project-body">
                                    <span className="project-label mono">{p.label}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.description}</p>
                                    {p.highlights && (
                                        <ul className="project-highlights">
                                            {p.highlights.map((h) => <li key={h}><FiCheck /> {h}</li>)}
                                        </ul>
                                    )}
                                    <div className="chips">
                                        {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                                    </div>
                                    {(p.links.github || p.links.live) && (
                                        <div className="project-links">
                                            {p.links.github && (
                                                <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                                                    <FiGithub /> Source <FiArrowUpRight />
                                                </a>
                                            )}
                                            {p.links.live && (
                                                <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
                                                    Live <FiArrowUpRight />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </GlowCard>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

/* ───────────────────────── Skills ───────────────────────── */
function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <SectionHeader eyebrow="Toolkit" title="The stack behind" accent="the work." />
                <div className="skills">
                    {skillGroups.map((g, gi) => (
                        <GlowCard
                            key={g.name}
                            className={`skill-group ${gi === 0 ? 'skill-group--ai' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={reveal}
                            custom={gi}
                        >
                            <div className="skill-group-head">
                                <h3>{g.name}</h3>
                                <span className="mono">{String(g.skills.length).padStart(2, '0')}</span>
                            </div>
                            <div className="skill-list">
                                {g.skills.map((s) => (
                                    <motion.span key={s.name} className="skill" whileHover={{ y: -3 }}>
                                        <Icon name={s.icon} /> {s.name}
                                    </motion.span>
                                ))}
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───────────────────────── Achievements + Education ───────────────────────── */
function Credentials() {
    return (
        <section className="section" id="achievements">
            <div className="container">
                <SectionHeader eyebrow="Proof of work" title="Problem solver" accent="at heart." />
                <div className="achievements">
                    {achievements.map((a, i) => (
                        <GlowCard key={a.title} className="achievement" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={i}>
                            <div className="achievement-icon"><Icon name={a.icon} /></div>
                            <div className="achievement-value">{a.value}</div>
                            <h4>{a.title}</h4>
                            <p>{a.text}</p>
                        </GlowCard>
                    ))}
                </div>

                <div className="education">
                    {education.map((e, i) => (
                        <motion.div key={e.school} className="edu" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} custom={i}>
                            <div className="edu-icon"><FiBookOpen /></div>
                            <div className="edu-body">
                                <span className="mono edu-period">{e.period}</span>
                                <h4>{e.school}</h4>
                                <p>{e.degree}</p>
                            </div>
                            <span className="edu-grade">{e.grade}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ───────────────────────── Contact ───────────────────────── */
function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
        setSent(true)
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <GlowCard className="contact-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                    <div className="contact-aurora" aria-hidden="true" />
                    <div className="contact-grid">
                        <div className="contact-copy">
                            <span className="eyebrow"><span className="eyebrow-line" />Contact</span>
                            <h2 className="contact-title">
                                Have an idea worth <span className="text-gradient">shipping?</span>
                            </h2>
                            <p>
                                Whether it&apos;s a full stack platform, an LLM-powered feature or an AI agent for your
                                workflow — I&apos;d love to hear about it.
                            </p>

                            <div className="contact-list">
                                <a id="contact-email" href={`mailto:${profile.email}`} className="contact-row">
                                    <span className="contact-ico"><FiMail /></span>
                                    <span><small>Email</small>{profile.email}</span>
                                    <FiArrowUpRight className="contact-arrow" />
                                </a>
                                <a id="contact-phone" href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-row">
                                    <span className="contact-ico"><FiPhone /></span>
                                    <span><small>Phone</small>{profile.phone}</span>
                                    <FiArrowUpRight className="contact-arrow" />
                                </a>
                                <a id="contact-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-row">
                                    <span className="contact-ico"><FiLinkedin /></span>
                                    <span><small>LinkedIn</small>yash-shukla</span>
                                    <FiArrowUpRight className="contact-arrow" />
                                </a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={onSubmit}>
                            <div className="field">
                                <input id="contact-name" name="name" value={form.name} onChange={onChange} placeholder=" " required />
                                <label htmlFor="contact-name">Your name</label>
                            </div>
                            <div className="field">
                                <input id="contact-email-input" type="email" name="email" value={form.email} onChange={onChange} placeholder=" " required />
                                <label htmlFor="contact-email-input">Email address</label>
                            </div>
                            <div className="field">
                                <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={onChange} placeholder=" " required />
                                <label htmlFor="contact-message">Tell me about your project</label>
                            </div>
                            <button id="contact-submit" type="submit" className="btn btn-primary btn-block">
                                {sent ? <><FiCheck /> Opening your mail app…</> : <>Send message <FiSend /></>}
                            </button>
                        </form>
                    </div>
                </GlowCard>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <span className="logo-mark">YS</span>
                    <div>
                        <b>{profile.name}</b>
                        <small>Full Stack &amp; AI Developer</small>
                    </div>
                </div>
                <p className="mono footer-copy">© {new Date().getFullYear()} — designed &amp; engineered by {profile.firstName}</p>
                <div className="footer-socials">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
                </div>
            </div>
        </footer>
    )
}

/* ───────────────────────── App ───────────────────────── */
export default function App() {
    return (
        <>
            <CursorGlow />
            <div className="noise" aria-hidden="true" />
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Expertise />
                <Experience />
                <Projects />
                <Skills />
                <Credentials />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
