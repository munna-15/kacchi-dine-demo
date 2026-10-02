"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="bg-[#0f0f0e] px-6 py-20 text-white lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid overflow-hidden border border-white/[0.08] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Content */}
          <div className="flex flex-col justify-between bg-[#111110] p-7 sm:p-10 lg:p-14 xl:p-16">
            <div>
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-8 bg-white/45" />

                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
                  Reservations
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: 0.05,
                  ease,
                }}
                className="mt-8 max-w-2xl text-[clamp(3.2rem,6vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.065em]"
              >
                Your table is
                <br />
                waiting.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }}
                className="mt-8 max-w-md text-[14px] leading-7 text-white/40"
              >
                Gather around the table, slow down, and enjoy food made for
                sharing.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
              className="mt-14"
            >
              <div className="mb-7 flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.22em] text-white/25">
                <span>Food</span>
                <span className="h-px w-5 bg-white/15" />
                <span>People</span>
                <span className="h-px w-5 bg-white/15" />
                <span>Moments</span>
              </div>

              <Link
                href="#visit"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#111110] transition-all duration-500 hover:bg-white/90"
              >
                Reserve a Table
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111110]/[0.08]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="group relative min-h-[420px] overflow-hidden lg:min-h-[620px]"
          >
            <Image
              src="/images/kacchi-dine/food-06.jpg"
              alt="Kacchi Dine dining experience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
            />

            {/* Image treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            {/* Image number */}
            <div className="absolute left-6 top-6 flex items-center gap-3 lg:left-8 lg:top-8">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
                Kacchi Dine
              </span>

              <span className="h-px w-6 bg-white/25" />

              <span className="text-[9px] tracking-[0.2em] text-white/40">
                06
              </span>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between lg:bottom-8 lg:left-8 lg:right-8">
              <span className="max-w-[180px] text-[10px] uppercase leading-5 tracking-[0.2em] text-white/55">
                A table made
                <br />
                for good moments
              </span>

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                Gather around
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="flex items-center justify-between border-x border-b border-white/[0.08] px-5 py-4 sm:px-7">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            Kacchi Dine
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            Authentic Cuisine
          </span>
        </div>
      </div>
    </section>
  );
}
