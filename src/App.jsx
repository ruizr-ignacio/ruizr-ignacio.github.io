import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Terminal, Code2, Database, Globe, Briefcase, GraduationCap, Sun, Moon } from 'lucide-react'

function App() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-['Inter'] selection:bg-purple-500/30 transition-colors duration-300">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-6 right-6 z-50">
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-white/80 dark:bg-white/10 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:scale-110 transition-all duration-300"
                >
                    {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
                </button>
            </nav>

            <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center space-y-8 mb-24 animate-fade-in-up">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
                        <div className="relative w-32 h-32 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold font-['Outfit'] tracking-tight">
                            Ignacio <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Ruíz</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
                            Fullstack Web Developer
                        </p>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Specializing in NodeJS, React, Vue, PHP, Postgres, and MySQL. Passionate about building scalable web applications and improving user experiences.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <SocialLink href="https://github.com/ruizr-ignacio" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/ruizrignacio/" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:ruizr.ignacio@gmail.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </div>

                {/* Experience Section */}
                {/* <div className="mb-24">
            <h2 className="text-3xl font-bold font-['Outfit'] mb-8 flex items-center gap-3">
                <Briefcase className="text-purple-600 dark:text-purple-400" /> Experience
            </h2>
            <div className="space-y-6">
                <ExperienceCard 
                    role="Fullstack Developer"
                    company="Improving"
                    period="Present"
                    desc="Contributing to high-impact projects using modern web technologies."
                />
                <ExperienceCard 
                    role="Developer / Student"
                    company="Universidad de Colima"
                    period="Previous"
                    desc="Academic foundation and early development projects."
                />
            </div>
        </div> */}

                {/* Tech Stack / Skills */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold font-['Outfit'] mb-8 flex items-center gap-3">
                        <Code2 className="text-blue-600 dark:text-blue-400" /> Tech Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SkillCard
                            icon={<Globe className="text-blue-600 dark:text-blue-400" />}
                            title="Frontend"
                            desc="React, Vue.js, TypeScript, Next.js, Tailwind CSS"
                        />
                        <SkillCard
                            icon={<Database className="text-purple-600 dark:text-purple-400" />}
                            title="Backend"
                            desc="Node.js, PHP, PostgreSQL, MySQL, Serverless, Redis"
                        />
                        <SkillCard
                            icon={<Terminal className="text-green-600 dark:text-green-400" />}
                            title="DevOps & Cloud"
                            desc="Git, Docker, AWS, CI/CD, Linux, Terraform"
                        />
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center text-gray-500 dark:text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Ignacio Ruíz Ramírez. Built with Vite & React.</p>
                </footer>
            </main>
        </div>
    )
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            aria-label={label}
        >
            <span className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                {icon}
            </span>
        </a>
    )
}

function SkillCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-gray-100 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-white/20 transition-all duration-300 hover:shadow-xl dark:hover:bg-white/10 backdrop-blur-sm">
            <div className="mb-4 p-3 rounded-xl bg-gray-50 dark:bg-white/5 w-fit">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-['Outfit'] mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
    )
}

function ExperienceCard({ role, company, period, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-gray-100 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold font-['Outfit'] text-gray-900 dark:text-white">{role}</h3>
                <span className="text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{period}</span>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-2">{company}</div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
    )
}

export default App
