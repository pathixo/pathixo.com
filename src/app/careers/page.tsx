import { Footer } from "@/components/home/footer"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Code2,
  Smartphone,
  Globe,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Rocket,
  Heart,
  Zap,
  TrendingUp,
  Award,
  Coffee,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Pathixo team. Explore exciting career opportunities in web development, mobile apps, and IT solutions.",
  alternates: {
    canonical: "https://pathixo.com/careers",
  },
  openGraph: {
    title: "Careers | Pathixo",
    description: "Join the Pathixo team. Explore exciting career opportunities in web development, mobile apps, and IT solutions.",
    url: "https://pathixo.com/careers",
    siteName: "Pathixo",
    type: "website",
  }
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pathixo Careers",
            "description": "Join the Pathixo team. Explore exciting career opportunities in web development, mobile apps, and IT solutions.",
            "publisher": {
              "@type": "Organization",
              "name": "Pathixo"
            }
          }),
        }}
      />
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container min-h-[80vh] flex items-center justify-center mx-auto px-4 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              <span>We're Hiring</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
              Shape Tomorrow's{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technology</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Join a team of passionate innovators building cutting-edge solutions. At Pathixo, we don't just follow
              trends—we create them.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Fast Growing</div>
                  <div className="text-sm text-muted-foreground">Startup Environment</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Impactful Work</div>
                  <div className="text-sm text-muted-foreground">Real-world Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Great Culture</div>
                  <div className="text-sm text-muted-foreground">Collaborative Team</div>
                </div>
              </div>
            </div>

            {/* <div className="pt-4">
              <Link href="/careers/apply">
                <Button size="lg" className="text-base h-12 px-8">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div> */}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="container mx-auto px-4 pb-20" hidden>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group flex flex-col gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Android Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build powerful, intuitive mobile applications that reach millions of users worldwide.
                </p>
              </div>

              <div className="group flex flex-col gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Web Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create modern, responsive web experiences using the latest technologies and frameworks.
                </p>
              </div>

              <div className="group flex flex-col gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrate cutting-edge AI capabilities to enhance functionality and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-4">
              {/* Android Developer Position */}
              <div className="group p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">Android Developer</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Remote / Hybrid</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Full-time / Internship</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Junior to Senior</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Join our mobile team to build innovative Android applications. Experience with Kotlin, Jetpack
                      Compose, and modern Android architecture patterns preferred.
                    </p>
                  </div>
                  <Link href="/careers/apply">
                    <Button className="group/btn whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Web Developer Position */}
              <div className="group p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">Web Developer</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Remote / Hybrid</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Full-time / Internship</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Junior to Senior</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Build modern web applications using React, Next.js, and other cutting-edge technologies.
                      Experience with TypeScript and responsive design is a plus.
                    </p>
                  </div>
                  <Link href="/careers/apply">
                    <Button className="group/btn whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Full Stack Developer Position */}
              <div className="group p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Remote / Hybrid</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Full-time / Internship</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Mid to Senior</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Work across the entire stack to deliver complete solutions. Integrate AI features and work with
                      modern frameworks and cloud services.
                    </p>
                  </div>
                  <Link href="/careers/apply">
                    <Button className="group/btn whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Pathixo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rapid career advancement in a fast-growing startup environment with mentorship and learning.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Cutting-Edge Tech</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Work with the latest technologies and tools, including AI integration and modern frameworks.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Collaborative Culture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Join a passionate team that values collaboration, innovation, and mutual support.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Flexible Work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose between remote or hybrid work arrangements that fit your lifestyle.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe in sustainable work practices that promote both productivity and well-being.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-xl bg-card/30 border border-border/20 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Impactful Work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build products that make a real difference and work with diverse, exciting clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-xl mx-auto">
                We review applications on a rolling basis. Apply now to join our team and help shape the future of
                technology.
              </p>
              <Link href="/careers/apply">
                <Button size="lg" className="text-base">
                  Apply for a Position
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
