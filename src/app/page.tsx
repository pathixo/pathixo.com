"use client";

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

export default function Home() {
  return (
    <div className="relative bg-zinc-950 min-h-screen text-white">
        {/* Background Noise Images */}
            <div className="sticky inset-0 w-screen h-screen z-0 pointer-events-none opacity-50">
                <img 
                    src="/lb-noise.webp" 
                    alt="" 
                    className="hidden md:block object-cover w-full h-full" 
                />
                <img 
                    src="/mb-noise.webp" 
                    alt="" 
                    className="block md:hidden object-cover w-full h-full" 
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
