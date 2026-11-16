"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-[#08080a] py-16 sm:py-20 text-[#f4efe6]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 flex flex-col">
            <Reveal>
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="h-px w-8 bg-[#d4af37]" />
                  <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                    ABOUT CASA BRIO
                  </span>
                  <span className="h-px w-8 bg-[#d4af37]" />
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:gap-10 mb-8">
                  <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] md:w-1/2 shrink-0">
                    Peaceful and Private.{" "}
                    <span className="text-[#d4af37] font-normal">All Yours.</span>
                  </h2>
                  <p className="mt-4 md:mt-0 font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80 md:w-1/2">
                    When you book Casa Brio, the whole villa is yours. The pool, the party room
                    and every other space is only for your group. No strangers, no sharing.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 border-y border-[rgba(212,175,55,0.2)] py-6">
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl text-[#d4af37]">
                      100% Private
                    </div>
                    <div className="font-sans text-xs text-[#a39c93] uppercase tracking-wider mt-1">
                      One Group at a Time
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl text-[#d4af37]">
                      6 Master Suites
                    </div>
                    <div className="font-sans text-xs text-[#a39c93] uppercase tracking-wider mt-1">
                      Mountain Views
                    </div>
                  </div>
                </div>
                <div className="flex-1 mt-6 border-l border-t border-[rgba(212,175,55,0.15)] flex flex-col">
                  <div className="group flex items-start gap-3 border-b border-r border-[rgba(212,175,55,0.15)] px-5 py-4 transition-colors duration-300 hover:bg-[#121015] flex-1">
                    <span className="mt-1.5 h-1.5 w-1.5 bg-[#d4af37] shrink-0" />
                    <span className="font-sans text-sm font-light text-[#f4efe6] leading-relaxed">
                      Your own chef and staff, ready when you need them
                    </span>
                  </div>
                  <div className="group flex items-start gap-3 border-b border-r border-[rgba(212,175,55,0.15)] px-5 py-4 transition-colors duration-300 hover:bg-[#121015] flex-1">
                    <span className="mt-1.5 h-1.5 w-1.5 bg-[#d4af37] shrink-0" />
                    <span className="font-sans text-sm font-light text-[#f4efe6] leading-relaxed">
                      Play music as late as you want in the party room
                    </span>
                  </div>
                </div>
                <div className="mt-9">
                  <Link href="/about-villa" className="outline-link">
                    <span>See the Villa</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            <Reveal delay={120}>
              {/* Frames use each photo's own shape (3:2 and 4:3) so nothing is cropped. */}
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none sm:pb-[30%]">
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.25)] bg-[#121015] shadow-2xl">
                  <img
                    src="/images/home/exterior-sunset.jpg"
                    alt="Casa Brio villa lit up at sunset with the hills behind"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 -left-6 sm:-left-10 w-[45%] aspect-[4/3] overflow-hidden rounded-sm border-2 border-[#d4af37]/40 bg-[#121015] shadow-[0_25px_60px_rgba(0,0,0,0.9)] hidden sm:block">
                  <img
                    src="/images/home/exterior-mountains.jpg"
                    alt="Casa Brio villa and the Sahyadri hills"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
export { HomeAbout };
export default HomeAbout;
