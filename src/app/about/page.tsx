import React from "react";
import type { Metadata } from "next";
import {
    Lightbulb,
    Gem,
    MessageSquareQuote,
    Users,
    TrendingUp,
    Target,
    Eye,
    CheckCircle,
    Code,
} from "lucide-react";
import { Footer } from "@/components/home/footer";
import { ProjectStartCTA } from "@/components/about/project-start-cta";
import { ScrollIndicator } from "@/components/about/scroll-indicator";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Pathixo, our mission, values, and the expert team behind our web and mobile development solutions.",
    openGraph: {
        title: "About Us | Pathixo",
        description: "Learn about Pathixo, our mission, values, and the expert team behind our web and mobile development solutions.",
        url: "https://pathixo.com/about",
        siteName: "Pathixo",
        type: "website",
    }
};

// --- Type Definitions ---
interface StatProps {
    value: string;
    label: string;
}

interface PillProps {
    children: React.ReactNode;
}

interface InfoCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
    borderColor?: string;
}

interface ValueCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

interface TechCardProps {
    name: string;
    category: string;
}

// --- REALISTIC STARTUP CONTENT ---
const CORE_VALUES = [
    {
        title: "Build With Purpose",
        description: "We don’t write code for the sake of it — every line solves a real problem and moves the product forward.",
        icon: <Lightbulb className="w-6 h-6" />,
    },
    {
        title: "High Standards",
        description: "We prioritize reliability, clarity, and long-term maintainability. If it’s not clean, it doesn’t ship.",
        icon: <Gem className="w-6 h-6" />,
    },
    {
        title: "Straightforward Communication",
        description: "No overpromising, no corporate jargon. Clear updates, honest expectations, and consistent progress.",
        icon: <MessageSquareQuote className="w-6 h-6" />,
    },
    {
        title: "User Experience First",
        description: "Good design disappears. We create products that feel intuitive, friendly, and enjoyable to use.",
        icon: <Users className="w-6 h-6" />,
    },
    {
        title: "Move Fast, Improve Faster",
        description: "We iterate quickly, test constantly, and adapt based on what actually works — not assumptions.",
        icon: <TrendingUp className="w-6 h-6" />,
    },
    {
        title: "Results > Noise",
        description: "We focus on meaningful output: stable builds, smooth deployments, and real business outcomes.",
        icon: <CheckCircle className="w-6 h-6" />,
    },
];

const TECH_STACK = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Python", category: "Backend" },
    { name: "AWS & Vercel", category: "Cloud" },
    { name: "Docker & K8s", category: "DevOps" },
    { name: "PostgreSQL & MongoDB", category: "Databases" },
    { name: "GraphQL & REST", category: "APIs" },
    { name: "TypeScript", category: "Language" },
    { name: "Figma & Framer", category: "Design" },
];

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-blue-950/50"></div>
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <Pill>Who We Are</Pill>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Building Digital Products With
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient">
                                Precision & Purpose
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We’re a small, sharp team of engineers and designers shipping fast, reliable, and beautiful digital experiences — without the corporate fluff.
                        </p>
                        <div className="mt-16 flex justify-center items-stretch gap-8">
                            <Stat value="2+" label="Years Experience" />
                            <div className="w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                            <Stat value="5+" label="Projects Delivered" />
                            <div className="w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                            <Stat value="2+" label="Long-Term Clients" />
                        </div>
                    </div>

                    <ScrollIndicator />
                </section>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About Pathixo",
                            "description": "Pathixo is a small, sharp team of engineers and designers shipping fast, reliable, and beautiful digital experiences.",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Pathixo"
                            }
                        }),
                    }}
                />

                {/* Consistent Page Wrapper */}
                <div className="space-y-32 md:space-y-40 py-32 md:py-40">
                    {/* Story Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="lg:pr-8">
                                <Pill>Our Story</Pill>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                    A Small Team Doing Work That
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"> Actually Matters</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                    <p>Pathixo wasn’t formed in boardrooms — it started from frustration. We saw businesses stuck with slow teams, overbuilt systems, fake timelines, and glossy presentations without real output.</p>
                                    <p>So we built something different: a hands-on engineering studio focused on clarity, speed, and getting things shipped the right way.</p>
                                    <p>No unnecessary meetings. No inflated estimates. Just focused execution and high-quality products.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <InfoCard
                                    icon={<Target className="w-8 h-8 text-purple-400" />}
                                    title="Our Mission"
                                    description="To build reliable, scalable, user-friendly digital products that solve real problems and move businesses forward."
                                />
                                <InfoCard
                                    icon={<Eye className="w-8 h-8 text-blue-400" />}
                                    title="Our Vision"
                                    description="To become the go-to engineering team startups trust when they need high-quality work delivered fast."
                                    borderColor="border-blue-500/20 hover:border-blue-500/40"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <Pill>What We Believe</Pill>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Values That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Guide Our Work</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Not fancy slogans — real principles that shape how we build, communicate, and deliver.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CORE_VALUES.map((value) => (
                                <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} />
                            ))}
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <Pill>Technology</Pill>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Tools That Help Us Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Better & Faster</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {TECH_STACK.map((tech) => (
                                <TechCard key={tech.name} name={tech.name} category={tech.category} />
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-5xl mx-auto px-6">
                        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-black/50 backdrop-blur-xl">
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                            <div className="relative p-12 md:p-16 text-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Let's Build Something
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Real & Impactful</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                                    If you want clean engineering, honest communication, and a team that actually delivers — we’re ready.
                                </p>
                                <ProjectStartCTA />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

// --- Typed, Reusable Components ---

const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">{value}</div>
        <div className="text-gray-500 mt-2 text-sm uppercase tracking-wider">{label}</div>
    </div>
);

const Pill: React.FC<PillProps> = ({ children }) => (
    <div className="inline-block mb-6">
        <div className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-xs uppercase tracking-widest text-purple-300">{children}</span>
        </div>
    </div>
);

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, borderColor = 'border-purple-500/20 hover:border-purple-500/40' }) => (
    <div className={`group relative overflow-hidden rounded-2xl border ${borderColor} transition-all bg-white/5 p-8`}>
        <div className="mb-4 transition-transform group-hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 p-8 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 bg-white/[0.02]">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative">
            <div className="mb-6 text-purple-400 transition-transform group-hover:scale-110 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const TechCard: React.FC<TechCardProps> = ({ name, category }) => (
    <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-purple-500/20 p-5 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative text-purple-400">
            <Code className="w-6 h-6" />
        </div>
        <div className="relative">
            <div className="text-xs text-gray-400 uppercase tracking-wider">{category}</div>
            <div className="text-md font-bold text-gray-200">{name}</div>
        </div>
    </div>
);
