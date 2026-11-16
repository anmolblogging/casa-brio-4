"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/lightbox";
import { ArrowRight, ChevronRight } from "lucide-react";
let c = [
  {
    "title": "Party Room & Bar",
    "category": "GAMES & FUN",
    "description": "A private party room with a full-size snooker table, leather sofas, a bar and a strong sound system.",
    "images": [
      {
        "src": "/images/home/party-50.jpg",
        "caption": "Leather Chesterfield sofas in front of the gold-lit bar.",
        "alt": "Party room leather sofas and bar"
      },
      {
        "src": "/images/home/party-46.jpg",
        "caption": "Full-size snooker table, with the bar and lounge right behind it.",
        "alt": "Party room snooker table and lounge"
      },
      {
        "src": "/images/home/party-43.jpg",
        "caption": "Play snooker while looking out at the floodlit turf.",
        "alt": "Snooker table with a view of the turf"
      },
      {
        "src": "/images/home/party-54.jpg",
        "caption": "Your own private bar counter.",
        "alt": "Party room bar counter"
      }
    ]
  },
  {
    "title": "Swimming Pool & Deck",
    "category": "PRIVATE POOL",
    "description": "A private pool with steps, grass all around and space to eat and drink by the water.",
    "images": [
      {
        "src": "/images/home/pool-day.jpg",
        "caption": "The private pool on a sunny afternoon.",
        "alt": "Casa Brio private swimming pool"
      },
      {
        "src": "/images/home/pool-jump.jpg",
        "caption": "Jump in, splash around. It's only your group here.",
        "alt": "Guests jumping into the pool"
      },
      {
        "src": "/images/home/pool-snacks.jpg",
        "caption": "Snacks and cold drinks served right by the pool.",
        "alt": "Snacks and drinks by the pool"
      },
      {
        "src": "/images/home/pool-ball.jpg",
        "caption": "Pool games for all ages.",
        "alt": "Guest playing with a ball in the pool"
      }
    ]
  },
  {
    "title": "Box Cricket Turf",
    "category": "PRIVATE SPORTS",
    "description": "A fully netted cricket turf inside the villa. Play in the day, or at night under floodlights.",
    "images": [
      {
        "src": "/images/home/turf-day.jpg",
        "caption": "A full-length netted pitch with real stumps.",
        "alt": "Box cricket turf in daylight"
      },
      {
        "src": "/images/home/turf-night.jpg",
        "caption": "Floodlights for cricket matches after dark.",
        "alt": "Box cricket turf under floodlights"
      },
      {
        "src": "/images/home/turf-side.jpg",
        "caption": "The turf sits right next to the kids' play area.",
        "alt": "Cricket turf next to the play area"
      },
      {
        "src": "/images/home/turf-night-2.jpg",
        "caption": "Night match, ready to go.",
        "alt": "Cricket turf at night"
      }
    ]
  },
  {
    "title": "Living Room",
    "category": "RELAX TOGETHER",
    "description": "A big, bright living room with large sofas, a TV and glass doors, made for the whole group.",
    "images": [
      {
        "src": "/images/home/living-2.jpg",
        "caption": "Big sofas with room for the whole group.",
        "alt": "Casa Brio living room sofas"
      },
      {
        "src": "/images/home/living-1.jpg",
        "caption": "TV, music and plenty of seating.",
        "alt": "Living room with TV and sofas"
      },
      {
        "src": "/images/home/living-3.jpg",
        "caption": "Full-height glass doors and marble floors.",
        "alt": "Living room with glass doors"
      }
    ]
  },
  {
    "title": "Bedrooms with a View",
    "category": "4 BHK",
    "description": "Four bedrooms, each with an attached bathroom and views of the hills.",
    "images": [
      {
        "src": "/images/home/bedroom-1.jpg",
        "caption": "Master suite opening onto a balcony with hill views.",
        "alt": "Master suite with balcony"
      },
      {
        "src": "/images/home/bedroom-2.jpg",
        "caption": "Bright suites with big windows and a lounge chair.",
        "alt": "Master suite with large windows"
      },
      {
        "src": "/images/home/bedroom-11.jpg",
        "caption": "Cosy rooms with warm lights and fresh linen.",
        "alt": "Bedroom with king-size bed"
      },
      {
        "src": "/images/home/bedroom-17.jpg",
        "caption": "Balconies with a swing chair and open valley views.",
        "alt": "Balcony with swing chair and valley view"
      }
    ]
  },
  {
    "title": "Kids Play Area",
    "category": "FOR THE LITTLE ONES",
    "description": "A colourful play area with slides, swings and a merry-go-round, right next to the turf.",
    "images": [
      {
        "src": "/images/home/kids-33.jpg",
        "caption": "Slides, climbing frames and soft flooring.",
        "alt": "Kids play area with slides"
      },
      {
        "src": "/images/home/kids-32.jpg",
        "caption": "A merry-go-round and swings for younger kids.",
        "alt": "Play area merry-go-round and slide"
      },
      {
        "src": "/images/home/kids-34.jpg",
        "caption": "Rocking rides and hopscotch on soft flooring.",
        "alt": "Kids play area rocking rides"
      },
      {
        "src": "/images/home/kids-38.jpg",
        "caption": "Lit up in the evening, so the fun keeps going.",
        "alt": "Kids play area at night"
      }
    ]
  }
];
function EstateFeatures() {
  let [e, s] = useState(null),
    n = (e, a = 0) => {
      s({
        featureIdx: e,
        imageIdx: a,
      });
    };
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#08080a] py-16 sm:py-20 text-[#f4efe6]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  VILLA HIGHLIGHTS
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2">
                Everything You Need.{" "}
                <span className="text-[#d4af37] font-normal">Nothing You Share.</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
              Six spaces made just for your group. Great for lazy afternoons, fun evenings and
              total privacy.
            </p>
          </div>
        </Reveal>
        <div className="md:hidden -mx-6 px-6 sm:-mx-8 sm:px-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-3 pt-1">
            {c.map((e, t) => (
              <div
                className="w-[76vw] sm:w-[350px] shrink-0 snap-start flex flex-col"
                key={e.title}
              >
                <X_ item={e} featureIdx={t} onOpenModal={n} isMobile={!0} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.map((e, t) => (
            <X_ item={e} featureIdx={t} onOpenModal={n} key={e.title} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {null !== e && (
          <Lightbox
            images={c[e.featureIdx].images.map((t) => ({
              ...t,
              label: c[e.featureIdx].title,
            }))}
            index={e.imageIdx}
            onIndexChange={(a) =>
              s({
                ...e,
                imageIdx: a,
              })
            }
            onClose={() => {
              s(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
function X_({ item: e, featureIdx: s, onOpenModal: i, isMobile: l }) {
  let [o, c] = useState(0),
    m = e.images.length;
  useEffect(() => {
    if (m <= 1) return;
    let iv,
      e = setTimeout(
        () => {
          iv = setInterval(() => {
            c((e) => (e + 1) % m);
          }, 4200);
        },
        (s % 3) * 600,
      );
    return () => {
      clearTimeout(e);
      clearInterval(iv);
    };
  }, [m, s]);
  let g = (
    <div
      onClick={() => i(s, o)}
      className="group relative flex h-full flex-col overflow-hidden rounded-none border border-[rgba(212,175,55,0.2)] bg-[#121015] shadow-xl transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_12px_35px_rgba(212,175,55,0.18)] cursor-pointer"
    >
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-black shrink-0">
        {e.images.map((e, t) => {
          let s = t === o;
          return (
            <img
              src={e.src}
              alt={e.alt}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${s ? "opacity-100 scale-100 group-hover:scale-105 z-0" : "opacity-0 scale-105 z-0 pointer-events-none"}`}
              key={e.src}
            />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121015] via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute top-4 left-4 border border-[rgba(212,175,55,0.35)] bg-[#08080a]/85 px-3 py-1 backdrop-blur-md z-10 pointer-events-none">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
            {e.category}
          </span>
        </div>
        {m > 1 && (
          <div className="absolute top-4 right-4 flex items-center gap-1 z-10 pointer-events-none bg-black/50 backdrop-blur-sm px-2 py-1 border border-[rgba(212,175,55,0.25)]">
            {e.images.map((e, t) => (
              <span
                className={`h-1 transition-all duration-500 ${t === o ? "w-3.5 bg-[#d4af37]" : "w-1 bg-white/30"}`}
                key={t}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
          <span className="inline-flex items-center gap-2 border border-[#d4af37] bg-[#08080a]/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] shadow-lg">
            <span>View Gallery</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 pt-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
            {e.title}
          </h3>
          <p className="mt-2 font-sans text-xs sm:text-sm font-light leading-relaxed text-[#e6dfd5]/85">
            {e.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-[rgba(212,175,55,0.12)] flex items-center justify-between text-xs text-[#d4af37]">
          <span className="font-sans font-medium tracking-wide">
            See Photos ({m}
            {" photos)"}
          </span>
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
  return l ? g : <Reveal delay={80 * s}>{g}</Reveal>;
}
export { EstateFeatures };
export default EstateFeatures;
