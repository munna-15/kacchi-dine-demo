"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Intro() {
  return (
    <section
      id="about"
      className="bg-[#f5efe6] px-6 py-20 text-[#17130f] lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#806f5b]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#806f5b]">
            The Kacchi Dine Story
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="mt-7 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="text-[clamp(3.2rem,6.5vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#17130f]"
          >
            A tradition worth
            <br />
            gathering around.
          </motion.h2>
        </div>

        {/* Story */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="group relative aspect-[16/9] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/kacchi-dine/food-08.jpg"
                alt="Kacchi Dine signature cuisine"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
              Made with tradition
            </span>
          </motion.div>

          {/* Brand story */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease,
            }}
            className="lg:pb-1"
          >
            <p className="text-[clamp(1.25rem,1.8vw,1.55rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[#2b241e]">
              Kacchi is more than a dish.
              <br />
              It is a reason to come together.
            </p>

            <div className="mt-6 space-y-4">
              <p className="max-w-md text-[14px] leading-6 text-[#71675c]">
                At Kacchi Dine, we celebrate the flavours that bring people to
                the same table. Fragrant rice, tender meat, slow-cooked spices,
                and the warmth of a meal shared together.
              </p>

              <p className="max-w-md text-[14px] leading-6 text-[#71675c]">
                Respect the tradition. Serve it with care. Create a place worth
                returning to.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#806f5b]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#806f5b]">
                From our table to yours
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
