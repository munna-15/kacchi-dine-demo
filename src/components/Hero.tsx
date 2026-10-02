"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#17120d] text-white">
      {/* Cinematic Background */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 18,
          ease: "easeOut",
        }}
        className="absolute inset-[-3%] will-change-transform"
      >
        <Image
          src="/images/kacchi-dine/hero.jpg"
          alt="Kacchi Dine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease,
        }}
        className="absolute inset-0 bg-black/38"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,220,170,0.10),transparent_38%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pb-8 lg:px-10 lg:pb-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease,
            }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/50" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/65">
              Authentic Bangladeshi Cuisine
            </p>
          </motion.div>

          {/* Main Heading */}
          <h1 className="max-w-4xl overflow-hidden text-[clamp(3.6rem,8vw,7.8rem)] font-medium leading-[0.86] tracking-[-0.07em]">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.05,
                delay: 0.42,
                ease,
              }}
              className="block"
            >
              The taste
            </motion.span>

            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.15,
                  delay: 0.52,
                  ease,
                }}
                className="block"
              >
                worth coming back for.
              </motion.span>
            </span>
          </h1>

          {/* Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.8,
              ease,
            }}
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end"
          >
            <p className="max-w-md text-sm leading-6 text-white/60">
              Rich tradition, slow-cooked perfection, and the unmistakable taste
              of authentic kacchi.
            </p>

            <Link
              href="#menu"
              className="group inline-flex w-fit items-center gap-3 border-b border-white/35 pb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-500 hover:border-white"
            >
              Explore our menu
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1,
            ease,
          }}
          className="mt-14 flex items-end justify-between border-t border-white/15 pt-5"
        >
          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:gap-10">
            <span>Dhaka</span>
            <span>Open today</span>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/45"
          >
            Scroll
            <ArrowDown size={13} strokeWidth={1.4} />
          </motion.div>
        </motion.div>
      </div>

      {/* One-time Cinematic Light Sweep */}
      <motion.div
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        animate={{
          x: "120%",
          opacity: [0, 0.12, 0],
        }}
        transition={{
          duration: 2.2,
          delay: 1.1,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
      />
    </section>
  );
}
