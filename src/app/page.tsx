import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web, App & Software Development",
  description: "Pathixo provides expert web development, mobile app development, and software solutions to help businesses scale and succeed digitally.",
  openGraph: {
    title: "Web, App & Software Development | Pathixo",
    description: "Pathixo provides expert web development, mobile app development, and software solutions to help businesses scale and succeed digitally.",
    url: "https://pathixo.com",
    siteName: "Pathixo",
    type: "website",
  }
};

import ContactUs from "@/components/home/contact";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import LogoLoop from "@/components/LogoLoop";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Problems } from "@/components/home/problems";
import Services from "@/components/home/services";
import MeetTheTeam from "@/components/home/team";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import { techLogos } from "@/data/home";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-zinc-950 min-h-screen text-white">
      {/* Background Noise Images */}
      <div className="sticky inset-0 w-screen h-screen z-0 pointer-events-none opacity-50">
        <Image
          src="/lb-noise.webp"
          alt="Background Noise"
          fill
          priority
          className="hidden md:block object-cover"
        />
        <Image
          src="/mb-noise.webp"
          alt="Background Noise Mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />
      </div>
      <Hero />

      <div className="relative z-10 bg-zinc-950 rounded-t-[2em] -mt-5">
        <div className="rounded-t-[2.5em]">
          {/* Problems Section */}
          <Problems />

          {/* Tech Logos Loop */}
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#09090b"
            ariaLabel="Technology partners"
            className="h-[10vh]"
          />

          {/* Services Section */}
          <div className="w-screen relative flex justify-center bg-zinc-950">
            <Services />
          </div>

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* Team */}
          <MeetTheTeam />

          {/* Testimonials */}
          <Testimonials />

          {/* Contact */}
          <ContactUs />

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgress className="top-[1px] h-[2px] bg-purple-500" />
    </div>
  );
}
