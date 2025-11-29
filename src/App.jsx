import React from 'react'
import { Github, Linkedin, Mail, Terminal, Code2, Database, Globe } from 'lucide-react'

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter'] selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center space-y-8 mb-24 animate-fade-in-up">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
                        <div className="relative w-32 h-32 rounded-full bg-gray-900 border-2 border-gray-800 overflow-hidden flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold font-['Outfit'] tracking-tight">
                            Ignacio <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Ruiz</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                            FullStack Developer crafting digital experiences with code and creativity.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <SocialLink href="https://github.com/ruizr-ignacio" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/ruizrignacio/" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:ruizr.ignacio@gmail.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </div>

                {/* Tech Stack / Skills */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <SkillCard
                        icon={<Globe className="text-blue-400" />}
                        title="Frontend"
                        desc="React, Vite, Tailwind CSS, Modern JS"
                    />
                    <SkillCard
                        icon={<Database className="text-purple-400" />}
                        title="Backend"
                        desc="Node.js, Python, SQL, Cloud Infrastructure"
                    />
                    <SkillCard
                        icon={<Terminal className="text-green-400" />}
                        title="DevOps"
                        desc="CI/CD, Docker, Git, Automation"
                    />
                </div>

                {/* Footer */}
                <footer className="text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Ignacio Ruiz. Built with Vite & React.</p>
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
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
            aria-label={label}
        >
            <span className="text-gray-400 group-hover:text-white transition-colors">
                {icon}
            </span>
        </a>
    )
}

function SkillCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-['Outfit'] mb-2">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
    )
}

export default App
