"use client";

import {
  CheckInTimeIcon,
  CheckOutTimeIcon,
  CocktailLoungeIcon,
  CricketTurfIcon,
  DiningSalonIcon,
  DiscoLightsIcon,
  GamesLoungeIcon,
  GuestsGroupIcon,
  SingleGroupBuyoutIcon,
  ItalianWashroomIcon,
  JacuzziIcon,
  KitchenEquippedIcon,
  LivingSalonIcon,
  LuxurySuitesIcon,
  PoolIcon,
  SmartTvIcon,
  SpeakerSoundIcon,
  TablewareIcon,
} from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { whatsappUrl } from "@/components/whatsapp";
import { ArrowRight } from "lucide-react";
import { SectionDivider } from "@/components/section-divider";
import { Footer } from "@/components/footer";
let u = [
    {
      icon: LuxurySuitesIcon,
      title: "4 AC Bedrooms (4 BHK)",
      desc: "Every bedroom has its own attached bathroom",
    },
    {
      icon: ItalianWashroomIcon,
      title: "4 Attached Bathrooms + 1 Common",
      desc: "Plus a common washroom in the living area",
    },
    {
      icon: PoolIcon,
      title: "Private Swimming Pool",
      desc: "Steps away from the living room",
    },
    {
      icon: CricketTurfIcon,
      title: "Rooftop Cricket Turf",
      desc: "Netted turf with floodlights for many sports",
    },
    {
      icon: CocktailLoungeIcon,
      title: "Party Room",
      desc: "Snooker, bar, disco lights and music",
    },
    {
      icon: GuestsGroupIcon,
      title: "Up to 15 Guests",
      desc: "Only one group stays at a time",
    },
    {
      icon: LuxurySuitesIcon,
      title: "8 Extra Mattresses",
      desc: "Up to 8 extra mattresses on request",
    },
    {
      icon: SmartTvIcon,
      title: "65″ Smart 4K TV",
      desc: "With a JBL 5.1 surround sound system",
    },
    {
      icon: SpeakerSoundIcon,
      title: "Poolside Speaker",
      desc: "Play music by the pool",
    },
    {
      icon: GamesLoungeIcon,
      title: "Indoor Games",
      desc: "8-Ball Pool, Table Tennis, Foosball, Carrom & Chess",
    },
    {
      icon: DiscoLightsIcon,
      title: "Laser & Disco Lights",
      desc: "Party lights inside the party room",
    },
    {
      icon: KitchenEquippedIcon,
      title: "Full Kitchen",
      desc: "Microwave, refrigerator, gas stove, toaster & RO water",
    },
    {
      icon: DiningSalonIcon,
      title: "6-Seater Dining Table",
      desc: "A dining table for group meals",
    },
    {
      icon: TablewareIcon,
      title: "Plates & Glasses",
      desc: "Full set of plates, cutlery and glasses",
    },
  ],
  h = [
    {
      src: "/images/home/pool-day.jpg",
      alt: "Private swimming pool",
    },
    {
      src: "/images/home/turf-day.jpg",
      alt: "Box cricket turf",
    },
    {
      src: "/images/home/party-50.jpg",
      alt: "Party room sofas and bar",
    },
    {
      src: "/images/home/bedroom-1.jpg",
      alt: "Master suite with balcony",
    },
    {
      src: "/images/home/gallery/cabana/cabana-05.jpg",
      alt: "Poolside cabana",
    },
    {
      src: "/images/home/kids-38.jpg",
      alt: "Kids play area at night",
    },
  ],
  g = [
    {
      src: "/images/home/living-1.jpg",
      alt: "Living room",
    },
    {
      src: "/images/home/party-43.jpg",
      alt: "Snooker table and turf view",
    },
    {
      src: "/images/home/terrace-sunrise.jpg",
      alt: "Terrace at sunrise",
    },
    {
      src: "/images/home/bedroom-17.jpg",
      alt: "Balcony with valley view",
    },
    {
      src: "/images/home/exterior-sunset.jpg",
      alt: "Casa Brio at sunset",
    },
    {
      src: "/images/home/gallery/terrace/terrace-02.jpg",
      alt: "Friends on the terrace at sunset",
    },
  ];
// Overview photos: cross-fades to the next photo every 2.5 seconds.
const villaSlides = [
  { src: "/images/home/exterior-sunset.jpg", alt: "Casa Brio at sunset" },
  { src: "/images/home/living-1.jpg", alt: "Living room" },
  { src: "/images/home/pool-day.jpg", alt: "Private swimming pool" },
  { src: "/images/home/bedroom-1.jpg", alt: "Master suite with balcony" },
  { src: "/images/home/party-46.jpg", alt: "Party room with snooker table" },
  { src: "/images/home/turf-day.jpg", alt: "Box cricket turf" },
  { src: "/images/home/terrace-sunrise.jpg", alt: "Terrace at sunrise" },
  { src: "/images/home/kids-33.jpg", alt: "Kids play area" },
];
function VillaSlideshow() {
  let n = villaSlides.length,
    [i, setI] = useState(0),
    // Bumped on every manual change so the 2.5s auto-advance restarts from that photo.
    [tick, setTick] = useState(0),
    touchX = useRef(null),
    go = (k) => {
      setI(((k % n) + n) % n);
      setTick((t) => t + 1);
    };
  useEffect(() => {
    let t = setInterval(() => setI((v) => (v + 1) % n), 2500);
    return () => clearInterval(t);
  }, [n, tick]);
  return (
    <div
      className="relative aspect-[3/2] w-full touch-pan-y select-none overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        let dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        // Swipe left = next photo, swipe right = previous photo.
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
      }}
    >
      {villaSlides.map((e, t) => (
        <img
          src={e.src}
          alt={e.alt}
          draggable={!1}
          loading={t === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${t === i ? "opacity-100" : "opacity-0"}`}
          key={e.src}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-0.5 bg-black/50 px-1.5 backdrop-blur-sm">
        {villaSlides.map((e, t) => (
          <button
            type="button"
            onClick={() => go(t)}
            aria-label={`Show photo ${t + 1}: ${e.alt}`}
            aria-current={t === i}
            className="group flex h-7 items-center px-1 cursor-pointer"
            key={t}
          >
            <span
              className={`block h-1.5 transition-all duration-500 ${t === i ? "w-5 bg-[#d4af37]" : "w-1.5 bg-white/45 group-hover:bg-white/80"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
function B() {
  let e = useRef(null),
    { scrollYProgress: a } = useScroll({
      target: e,
      offset: ["start end", "end start"],
    }),
    r = useSpring(a, {
      stiffness: 65,
      damping: 24,
      restDelta: 0.001,
    }),
    c = useTransform(r, [0, 1], ["0%", "-28%"]),
    d = useTransform(r, [0, 1], ["-28%", "0%"]),
    x = [...h, ...h, ...h],
    f = [...g, ...g, ...g];
  return (
    <section ref={e} className="relative py-16 sm:py-20 bg-[#08080a] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-6 bg-[#d4af37]" />
              <span className="eyebrow text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                TAKE A TOUR
              </span>
              <span className="h-px w-6 bg-[#d4af37]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4efe6]">
              A Look Around the Villa
            </h2>
          </div>
        </Reveal>
        <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 md:w-28 z-20 bg-gradient-to-r from-[#08080a] via-[#08080a]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 md:w-28 z-20 bg-gradient-to-l from-[#08080a] via-[#08080a]/80 to-transparent" />
          <motion.div
            style={{
              x: c,
            }}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {x.map((e, t) => (
              <Link
                href="/gallery"
                aria-label={`${e.alt}: see all photos in the gallery`}
                className="group relative block shrink-0 w-[285px] sm:w-[345px] md:w-[405px] lg:w-[450px] h-[190px] sm:h-[230px] md:h-[270px] lg:h-[300px] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-[0_15px_35px_rgba(0,0,0,0.85)] transition-colors duration-500 hover:border-[rgba(212,175,55,0.6)]"
                key={`top-${t}`}
              >
                <img
                  src={e.src}
                  alt={e.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080a]/50 via-transparent to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-30" />
                <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 border border-[#d4af37]/40 bg-[#08080a]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Gallery <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </motion.div>
          <motion.div
            style={{
              x: d,
            }}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {f.map((e, t) => (
              <Link
                href="/gallery"
                aria-label={`${e.alt}: see all photos in the gallery`}
                className="group relative block shrink-0 w-[285px] sm:w-[345px] md:w-[405px] lg:w-[450px] h-[190px] sm:h-[230px] md:h-[270px] lg:h-[300px] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-[0_15px_35px_rgba(0,0,0,0.85)] transition-colors duration-500 hover:border-[rgba(212,175,55,0.6)]"
                key={`bottom-${t}`}
              >
                <img
                  src={e.src}
                  alt={e.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080a]/50 via-transparent to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-30" />
                <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 border border-[#d4af37]/40 bg-[#08080a]/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Gallery <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border border-[#d4af37] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#08080a]"
          >
            <span>See All Photos</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
function AboutVillaClient() {
  let [e, n] = useState(15);
  return (
    <div
      suppressHydrationWarning={!0}
      className="min-h-screen bg-[#08080a] text-[#f4efe6] selection:bg-[#d4af37]/30"
    >
      <SiteHeader />
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden pt-28 pb-14 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bungalow/drone-facade.jpg"
            alt="Casa Brio private villa from the outside"
            fill={!0}
            priority={!0}
            className="object-cover object-center brightness-[0.72] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-[#08080a]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(8,8,10,0.85)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 my-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#d4af37]" />
              <span className="eyebrow text-xs sm:text-sm whitespace-nowrap tracking-[0.12em] min-[390px]:tracking-[0.2em] sm:tracking-[0.32em] font-semibold text-[#d4af37] uppercase">
                PRIVATE VILLA IN LONAVALA
              </span>
              <span className="h-px w-8 bg-[#d4af37]" />
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal tracking-[0.12em] text-[#fcf8f0] uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              CASA BRIO
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "\n                  group\n                  inline-flex\n                  h-12\n                  sm:h-13\n                  items-center\n                  gap-3\n                  rounded-sm\n                  bg-[#d4af37]\n                  px-7\n                  sm:px-8\n                  text-xs\n                  font-semibold\n                  uppercase\n                  tracking-[0.16em]\n                  text-[#08080a]\n                  shadow-[0_4px_25px_rgba(212,175,55,0.25)]\n                  transition-all\n                  duration-300\n                  hover:bg-[#b8952b]\n                  hover:shadow-[0_4px_35px_rgba(212,175,55,0.4)]\n                "
                }
              >
                <span>Book the Villa</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#overview"
                className={
                  "\n                  inline-flex\n                  h-12\n                  sm:h-13\n                  items-center\n                  rounded-sm\n                  border\n                  border-[rgba(212,175,55,0.4)]\n                  bg-[rgba(18,16,21,0.6)]\n                  px-7\n                  sm:px-8\n                  text-xs\n                  font-semibold\n                  uppercase\n                  tracking-[0.16em]\n                  text-[#f4efe6]\n                  backdrop-blur-md\n                  transition-all\n                  duration-300\n                  hover:border-[#d4af37]\n                  hover:bg-[#d4af37]\n                  hover:text-[#08080a]\n                "
                }
              >
                <span>See What&apos;s Inside</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 sm:mt-14 mx-auto w-full max-w-5xl">
              <div className="relative rounded-none border border-[rgba(212,175,55,0.28)] bg-[#0e0c10]/85 backdrop-blur-2xl p-4 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(212,175,55,0.2)]">
                  <div className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-2 group">
                    <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                      <LuxurySuitesIcon className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors leading-none">
                        4
                      </span>
                      <span className="mt-1.5 font-sans text-xs uppercase tracking-[0.24em] font-semibold text-[#a39c93] group-hover:text-[#f4efe6] transition-colors">
                        BEDROOMS (4 BHK)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-2 group">
                    <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                      <GuestsGroupIcon className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-[#d4af37] leading-none">
                        15
                      </span>
                      <span className="mt-1.5 font-sans text-xs uppercase tracking-[0.24em] font-semibold text-[#a39c93] group-hover:text-[#f4efe6] transition-colors">
                        MAX GUESTS
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-2 group">
                    <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                      <SingleGroupBuyoutIcon className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors leading-none">
                        1
                      </span>
                      <span className="mt-1.5 font-sans text-xs uppercase tracking-[0.24em] font-semibold text-[#a39c93] group-hover:text-[#f4efe6] transition-colors">
                        GROUP AT A TIME
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <SectionDivider />
      <section id="overview" className="relative py-16 sm:py-20 bg-[#08080a]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <Reveal>
                <VillaSlideshow />
              </Reveal>
              <Reveal delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group flex items-center gap-4 rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] p-4 sm:p-5 shadow-lg transition-colors duration-300 hover:border-[#d4af37]">
                    <div className="text-[#d4af37] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <CheckInTimeIcon className="h-8 w-8 sm:h-9 sm:w-9 text-[#d4af37]" />
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                        CHECK-IN
                      </span>
                      <span className="mt-0.5 block font-serif text-base sm:text-xl font-normal text-[#f4efe6]">
                        2:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="group flex items-center gap-4 rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] p-4 sm:p-5 shadow-lg transition-colors duration-300 hover:border-[#d4af37]">
                    <div className="text-[#d4af37] shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <CheckOutTimeIcon className="h-8 w-8 sm:h-9 sm:w-9 text-[#d4af37]" />
                    </div>
                    <div>
                      <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                        CHECK-OUT
                      </span>
                      <span className="mt-0.5 block font-serif text-base sm:text-xl font-normal text-[#f4efe6]">
                        11:00 AM
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal delay={150}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-6 bg-[#d4af37]" />
                  <span className="eyebrow text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                    THE VILLA
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.2] text-[#f4efe6] mb-5">
                  Lots of Space to{" "}
                  <span className="text-[#d4af37]">Relax and Celebrate.</span>
                </h2>
                <p className="font-sans text-sm sm:text-base font-light leading-[1.85] text-[#e6dfd5]/90 mb-6">
                  Casa Brio has a big, open living room that leads straight to your private pool
                  and wooden deck. It is a 4 BHK: four AC bedrooms, each with an attached bathroom, plus a common washroom in the living area.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[rgba(212,175,55,0.18)]">
                  {[
                    {
                      icon: JacuzziIcon,
                      title: "Jacuzzi in Main Bedroom",
                      desc: "Your own jacuzzi tub in the bathroom",
                    },
                    {
                      icon: LuxurySuitesIcon,
                      title: "4 AC Bedrooms (4 BHK)",
                      desc: "Each with an attached bathroom",
                    },
                    {
                      icon: LivingSalonIcon,
                      title: "Large Living Room",
                      desc: "Opens right onto the pool deck",
                    },
                    {
                      icon: GuestsGroupIcon,
                      title: "Up to 15 Guests",
                      desc: "Up to 8 extra mattresses available",
                    },
                  ].map((e) => {
                    let T = e.icon;
                    return (
                      <div
                        className="group flex items-start gap-3.5 rounded-none border border-[rgba(212,175,55,0.18)] bg-[#121015] p-3.5 transition-colors duration-300 hover:border-[#d4af37]"
                        key={e.title}
                      >
                        <div className="text-[#d4af37] shrink-0 transition-transform duration-300 group-hover:scale-110 pt-0.5">
                          <T className="h-6 w-6 text-[#d4af37]" />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-medium text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
                            {e.title}
                          </h4>
                          <p className="mt-0.5 text-xs text-[#a39c93] font-light leading-relaxed">
                            {e.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
      <B />
      <SectionDivider />
      <section className="relative py-16 sm:py-20 bg-[#0c0a0f]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-[rgba(212,175,55,0.15)]">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-6 bg-[#d4af37]" />
                  <span className="eyebrow text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                    WHAT&apos;S INCLUDED
                  </span>
                  <span className="h-px w-6 bg-[#d4af37]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4efe6]">
                  Everything at the Villa
                </h2>
              </div>
              <p className="max-w-md font-sans text-sm font-light leading-relaxed text-[#e6dfd5]/75 md:text-right">
                Every room, facility and game here is only for your group.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[rgba(212,175,55,0.15)]">
            {u.map((e, t) => {
              let A = e.icon;
              return (
                <Reveal delay={25 * t} className="h-full" key={e.title}>
                  <div className="group relative flex h-full items-start gap-3 sm:gap-4 border-b border-r border-[rgba(212,175,55,0.15)] bg-[#0c0a0f] p-3.5 sm:px-5 sm:py-4 transition-colors duration-300 hover:bg-[#131017]">
                    <div className="shrink-0 text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                      <A className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm sm:text-base font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors leading-snug">
                        {e.title}
                      </h3>
                      <p className="hidden sm:block mt-1 font-sans text-xs font-light text-[#a39c93] leading-relaxed">
                        {e.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <SectionDivider />
      <section id="pricing" className="relative py-16 sm:py-20 bg-[#08080a]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12 sm:mb-16 text-left">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-[#d4af37]" />
                <span className="eyebrow text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                  PRICES
                </span>
                <span className="h-px w-6 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4efe6]">
                Our Prices
              </h2>
            </div>
          </Reveal>
          <div className="lg:hidden -mx-6 px-6 sm:-mx-8 sm:px-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-3 pt-1">
              <div className="w-[76vw] sm:w-[350px] shrink-0 snap-start flex flex-col">
                <div className="group flex flex-col justify-between h-full border border-[rgba(212,175,55,0.22)] bg-[#0c0a0f] p-7 sm:p-8 transition-all duration-300 shadow-xl">
                  <div>
                    <div className="pb-4 border-b border-[rgba(212,175,55,0.18)] flex items-start justify-between gap-3">
                      <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Weekday</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Mon – Thu</span></span>
                    </div>
                    <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                      <button
                        type="button"
                        onClick={() => n(15)}
                        className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${15 === e ? "bg-[#d4af37] text-[#08080a] shadow-sm" : "text-[#a39c93] hover:text-[#f4efe6] hover:bg-white/5"}`}
                      >
                        15 Guests
                      </button>
                      <button
                        type="button"
                        onClick={() => n(10)}
                        className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${10 === e ? "bg-[#d4af37] text-[#08080a] shadow-sm" : "text-[#a39c93] hover:text-[#f4efe6] hover:bg-white/5"}`}
                      >
                        10 Guests
                      </button>
                    </div>
                    <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                      Starting from
                    </span>
                    <div className="mt-2 min-h-[58px] flex items-baseline gap-3">
                      <span className="font-serif text-lg sm:text-xl text-[#a39c93] line-through font-light">
                        {15 === e ? "₹35,000" : "₹28,000"}
                      </span>
                      <div className="flex items-baseline">
                        <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                          ₹
                        </span>
                        <span className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#f4efe6]">
                          {15 === e ? "32,000" : "24,000"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-px w-4 bg-[#d4af37]" />
                      <span className="eyebrow text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37]">
                        per night
                      </span>
                    </div>
                    <div className="my-7 h-px bg-[rgba(212,175,55,0.15)]" />
                    <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/85">
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span className="text-[#f4efe6] font-normal">
                          {"Up to "}
                          {e}
                          {" Guests"}
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>All amenities included</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Pool & turf access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Party room included</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center gap-2.5 border border-[rgba(212,175,55,0.4)] bg-[rgba(18,16,21,0.6)] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a]"
                    >
                      <span>CONTACT US</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[76vw] sm:w-[350px] shrink-0 snap-start flex flex-col">
                <div className="relative group flex flex-col justify-between h-full border-2 border-[#d4af37] bg-[#131017] p-7 sm:p-8 shadow-[0_12px_45px_rgba(212,175,55,0.18)] transition-all duration-300">
                  <div>
                    <div className="pb-4 border-b border-[#d4af37]/30 flex items-start justify-between gap-3">
                      <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Weekend</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">2-night stay</span></span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] bg-[#d4af37]/15 px-2.5 py-0.5 border border-[#d4af37]/35">
                        POPULAR
                      </span>
                    </div>
                    <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                      <div className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                        Up to 15 Guests
                      </div>
                    </div>
                    <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                      Starting from
                    </span>
                    <div className="mt-2 min-h-[58px] flex items-baseline">
                      <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                        ₹
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#f4efe6]">
                        105,000
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-px w-4 bg-[#d4af37]" />
                      <span className="eyebrow text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
                        for 2 nights
                      </span>
                    </div>
                    <div className="my-7 h-px bg-[#d4af37]/25" />
                    <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/90">
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span className="text-[#f4efe6] font-normal">Up to 15 Guests</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>All amenities included</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Pool & turf access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Party room included</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center gap-2.5 bg-[#d4af37] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#08080a] shadow-[0_4px_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-[#b8952b]"
                    >
                      <span>BOOK NOW</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[76vw] sm:w-[350px] shrink-0 snap-start flex flex-col pr-2">
                <div className="group flex flex-col justify-between h-full border border-[rgba(212,175,55,0.22)] bg-[#0c0a0f] p-7 sm:p-8 transition-all duration-300 shadow-xl">
                  <div>
                    <div className="pb-4 border-b border-[rgba(212,175,55,0.18)] flex items-start justify-between gap-3">
                      <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Friday or Sunday</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Single night</span></span>
                    </div>
                    <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                      <div className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                        Up to 15 Guests
                      </div>
                    </div>
                    <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                      Starting from
                    </span>
                    <div className="mt-2 min-h-[58px] flex items-baseline">
                      <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                        ₹
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#f4efe6]">
                        41,000
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-px w-4 bg-[#d4af37]" />
                      <span className="eyebrow text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37]">
                        per night
                      </span>
                    </div>
                    <div className="my-7 h-px bg-[rgba(212,175,55,0.15)]" />
                    <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/85">
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span className="text-[#f4efe6] font-normal">Up to 15 Guests</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>All amenities included</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Pool & turf access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                        <span>Party room included</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center gap-2.5 border border-[rgba(212,175,55,0.4)] bg-[rgba(18,16,21,0.6)] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a]"
                    >
                      <span>CONTACT US</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            <Reveal delay={0} className="h-full">
              <div className="group flex flex-col justify-between h-full border border-[rgba(212,175,55,0.22)] bg-[#0c0a0f] p-8 sm:p-10 transition-all duration-300 hover:border-[#d4af37] hover:bg-[#121015]">
                <div>
                  <div className="pb-4 border-b border-[rgba(212,175,55,0.18)] flex items-start justify-between gap-3">
                    <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Weekday</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Mon – Thu</span></span>
                  </div>
                  <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                    <button
                      type="button"
                      onClick={() => n(15)}
                      className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${15 === e ? "bg-[#d4af37] text-[#08080a] shadow-sm" : "text-[#a39c93] hover:text-[#f4efe6] hover:bg-white/5"}`}
                    >
                      15 Guests
                    </button>
                    <button
                      type="button"
                      onClick={() => n(10)}
                      className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${10 === e ? "bg-[#d4af37] text-[#08080a] shadow-sm" : "text-[#a39c93] hover:text-[#f4efe6] hover:bg-white/5"}`}
                    >
                      10 Guests
                    </button>
                  </div>
                  <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                    Starting from
                  </span>
                  <div className="mt-2 min-h-[58px] flex items-baseline gap-3">
                    <span className="font-serif text-lg sm:text-xl text-[#a39c93] line-through font-light">
                      {15 === e ? "₹35,000" : "₹28,000"}
                    </span>
                    <div className="flex items-baseline">
                      <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                        ₹
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-[#f4efe6]">
                        {15 === e ? "32,000" : "24,000"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-4 bg-[#d4af37]" />
                    <span className="eyebrow text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37]">
                      per night
                    </span>
                  </div>
                  <div className="my-7 h-px bg-[rgba(212,175,55,0.15)]" />
                  <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/85">
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span className="text-[#f4efe6] font-normal">
                        {"Up to "}
                        {e}
                        {" Guests"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>All amenities included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Pool & turf access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Party room included</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2.5 border border-[rgba(212,175,55,0.4)] bg-[rgba(18,16,21,0.6)] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a]"
                  >
                    <span>CONTACT US</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="h-full">
              <div className="relative group flex flex-col justify-between h-full border-2 border-[#d4af37] bg-[#131017] p-8 sm:p-10 shadow-[0_12px_45px_rgba(212,175,55,0.18)] transition-all duration-300 hover:shadow-[0_16px_55px_rgba(212,175,55,0.28)]">
                <div>
                  <div className="pb-4 border-b border-[#d4af37]/30 flex items-start justify-between gap-3">
                    <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Weekend</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">2-night stay</span></span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] bg-[#d4af37]/15 px-2.5 py-0.5 border border-[#d4af37]/35">
                      POPULAR
                    </span>
                  </div>
                  <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                    <div className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                      Up to 15 Guests
                    </div>
                  </div>
                  <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                    Starting from
                  </span>
                  <div className="mt-2 min-h-[58px] flex items-baseline">
                    <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                      ₹
                    </span>
                    <span className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-[#f4efe6]">
                      105,000
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-4 bg-[#d4af37]" />
                    <span className="eyebrow text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
                      for 2 nights
                    </span>
                  </div>
                  <div className="my-7 h-px bg-[#d4af37]/25" />
                  <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/90">
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span className="text-[#f4efe6] font-normal">Up to 15 Guests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>All amenities included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Pool & turf access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Party room included</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2.5 bg-[#d4af37] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#08080a] shadow-[0_4px_25px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-[#b8952b] hover:shadow-[0_4px_35px_rgba(212,175,55,0.4)]"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} className="h-full">
              <div className="group flex flex-col justify-between h-full border border-[rgba(212,175,55,0.22)] bg-[#0c0a0f] p-8 sm:p-10 transition-all duration-300 hover:border-[#d4af37] hover:bg-[#121015]">
                <div>
                  <div className="pb-4 border-b border-[rgba(212,175,55,0.18)] flex items-start justify-between gap-3">
                    <span className="flex flex-col"><span className="font-serif text-2xl sm:text-[1.7rem] font-normal leading-tight text-[#f4efe6]">Friday or Sunday</span><span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">Single night</span></span>
                  </div>
                  <div className="mt-6 flex border border-[rgba(212,175,55,0.25)] bg-[#08080a]">
                    <div className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                      Up to 15 Guests
                    </div>
                  </div>
                  <span className="mt-8 block text-xs uppercase tracking-[0.2em] font-medium text-[#a39c93]">
                    Starting from
                  </span>
                  <div className="mt-2 min-h-[58px] flex items-baseline">
                    <span className="font-serif text-2xl sm:text-3xl text-[#d4af37] font-normal mr-1">
                      ₹
                    </span>
                    <span className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-[#f4efe6]">
                      41,000
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-4 bg-[#d4af37]" />
                    <span className="eyebrow text-xs uppercase tracking-[0.2em] font-medium text-[#d4af37]">
                      per night
                    </span>
                  </div>
                  <div className="my-7 h-px bg-[rgba(212,175,55,0.15)]" />
                  <ul className="space-y-3.5 text-sm font-light text-[#e6dfd5]/85">
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span className="text-[#f4efe6] font-normal">Up to 15 Guests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>All amenities included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Pool & turf access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                      <span>Party room included</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2.5 border border-[rgba(212,175,55,0.4)] bg-[rgba(18,16,21,0.6)] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a]"
                  >
                    <span>CONTACT US</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SectionDivider />
      <Footer />
    </div>
  );
}
export { AboutVillaClient };
export default AboutVillaClient;
