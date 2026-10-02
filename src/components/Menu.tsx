"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const dishes = [
  {
    number: "01",
    name: "Kacchi Biryani",
    description:
      "Fragrant basmati rice, tender meat and aromatic spices, slow-cooked together for the unmistakable taste of kacchi.",
    image: "/images/kacchi-dine/food-02.jpg",
  },
  {
    number: "02",
    name: "Chicken Roast",
    description:
      "Tender chicken layered with a rich blend of traditional spices and deep, comforting flavours.",
    image: "/images/kacchi-dine/food-03.jpg",
  },
  {
    number: "03",
    name: "Signature Platter",
    description:
      "A generous combination of flavours made for sharing around the table.",
    image: "/images/kacchi-dine/food-01.jpg",
  },
];

export default function Menu() {
  const featured = dishes[0];

  return (
    <section
      id="menu"
      className="bg-[#17130f] px-6 py-20 text-white lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#a88b68]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a88b68]">
                From our kitchen
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
              className="mt-7 max-w-5xl text-[clamp(3.2rem,6.5vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]"
            >
              Made to be
              <br />
              remembered.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
          >
            <Link
              href="#reservation"
              className="group flex w-fit items-center gap-3 border-b border-white/25 pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65 transition-colors duration-300 hover:border-white/70 hover:text-white"
            >
              Explore the menu
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured dish */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease,
          }}
          className="mt-14 grid overflow-hidden border border-white/10 lg:mt-16 lg:grid-cols-[1.45fr_0.55fr]"
        >
          {/* Image */}
          <div className="group relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[620px]">
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55">
                Signature dish
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-between bg-[#211b15] p-7 lg:p-10 xl:p-12">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                {featured.number}
              </span>

              <span className="h-px w-10 bg-white/10" />
            </div>

            <div className="py-12 lg:py-0">
              <h3 className="text-[clamp(2.4rem,4vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                {featured.name}
              </h3>

              <p className="mt-7 max-w-sm text-[14px] leading-7 text-white/45">
                {featured.description}
              </p>

              <div className="mt-9 h-px w-full bg-white/10" />

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Prepared with care
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  className="text-white/30"
                />
              </div>
            </div>

            <span className="text-[9px] uppercase tracking-[0.22em] text-white/20">
              Kacchi Dine
            </span>
          </div>
        </motion.div>

        {/* Supporting dishes */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {dishes.slice(1).map((dish, index) => (
            <motion.article
              key={dish.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease,
              }}
              className="group grid grid-cols-[120px_1fr] gap-5 border-b border-white/10 pb-5 sm:grid-cols-[150px_1fr] sm:gap-6"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex min-h-full flex-col justify-between py-1">
                <div>
                  <span className="text-[10px] tracking-[0.18em] text-white/25">
                    {dish.number}
                  </span>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.025em]">
                    {dish.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-white/38">
                    {dish.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="mt-5 text-white/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
