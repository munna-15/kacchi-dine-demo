"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Visit", href: "#visit" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="bg-white text-[#17130f]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-14 border-b border-[#17130f]/10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative h-[58px] w-[70px] overflow-hidden">
                <Image
                  src="/images/kacchi-dine/logo.jpg"
                  alt="Kacchi Dine logo"
                  fill
                  sizes="70px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <span className="block text-[18px] font-semibold tracking-[0.16em] text-[#17130f]">
                  KACCHI DINE
                </span>

                <span className="mt-1.5 block text-[8px] uppercase tracking-[0.3em] text-[#17130f]/40">
                  Authentic Cuisine
                </span>
              </div>
            </Link>

            <p className="mt-8 max-w-sm text-[14px] leading-7 text-[#17130f]/55">
              Authentic flavours, timeless recipes, and a table made for
              bringing people together.
            </p>

            <Link
              href="#reservation"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#17130f]/25 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17130f]/70 transition-colors duration-300 hover:border-[#17130f] hover:text-[#17130f]"
            >
              Reserve a Table
              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease,
            }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806f5b]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-[14px] text-[#17130f]/55 transition-colors duration-300 hover:text-[#17130f]"
                >
                  {link.label}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#17130f] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Visit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease,
            }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806f5b]">
              Visit Us
            </p>

            <div className="mt-6 flex items-start gap-3">
              <MapPin
                size={17}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-[#17130f]/40"
              />

              <div>
                <p className="text-[14px] leading-6 text-[#17130f]/70">
                  Dhaka
                  <br />
                  Bangladesh
                </p>

                <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#17130f]/35">
                  Opening hours
                </p>

                <p className="mt-2 text-[13px] text-[#17130f]/55">Every day</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col justify-between gap-8 py-10 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[clamp(2rem,4vw,4rem)] font-medium leading-none tracking-[-0.055em] text-[#17130f]/[0.07]">
              Gather around.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[9px] uppercase tracking-[0.2em] text-[#17130f]/30 md:items-end">
            <span>© {new Date().getFullYear()} Kacchi Dine</span>
            <span>Authentic Bangladeshi Cuisine</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom brand line */}
      <div className="border-t border-[#17130f]/[0.06]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#17130f]/25">
            Kacchi Dine
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-[#17130f]/20">
            Authentic Cuisine
          </span>
        </div>
      </div>
    </footer>
  );
}
