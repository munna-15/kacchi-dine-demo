"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section id="visit" className="bg-[#f5efe6] text-[#17130f]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#806f5b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#806f5b]">
              The Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease,
            }}
            className="max-w-5xl text-[clamp(3.2rem,6vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.065em]"
          >
            Good food.
            <br />
            Better moments.
          </motion.h2>
        </div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease,
          }}
          className="group relative mt-14 aspect-[16/8] overflow-hidden lg:mt-16"
        >
          <motion.div
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/kacchi-dine/food-03.jpg"
              alt="Dining at Kacchi Dine"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between lg:bottom-8 lg:left-8 lg:right-8">
            <p className="max-w-sm text-[13px] leading-6 text-white/70">
              A table made for conversations, celebrations and the simple
              pleasure of sharing a meal together.
            </p>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-white/55 sm:block">
              Gather around
            </span>
          </div>
        </motion.div>

        {/* Visit information */}
        <div className="mt-14 border-t border-[#d8cec1] lg:mt-16">
          <div className="grid lg:grid-cols-3">
            {/* Visit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="border-b border-[#d8cec1] py-7 lg:border-b-0 lg:border-r lg:pr-10"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#806f5b]">
                Visit
              </span>

              <p className="mt-4 text-[18px] leading-7 tracking-[-0.02em]">
                Uttara, Dhaka
                <br />
                Bangladesh
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="border-b border-[#d8cec1] py-7 lg:border-b-0 lg:border-r lg:px-10"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#806f5b]">
                Opening Hours
              </span>

              <p className="mt-4 text-[18px] leading-7 tracking-[-0.02em]">
                Every day
                <br />
                11:00 AM — 11:00 PM
              </p>
            </motion.div>

            {/* Reservation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="py-7 lg:pl-10"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#806f5b]">
                Reservations
              </span>

              <Link
                href="#reservation"
                className="group mt-4 flex w-fit items-center gap-3 text-[18px] tracking-[-0.02em]"
              >
                Reserve your table
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
