"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#17130f]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-[height] duration-500 lg:px-10 ${
            scrolled ? "h-[76px]" : "h-[94px]"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-[46px] w-[58px] overflow-hidden rounded-sm lg:h-[50px] lg:w-[64px]">
              <Image
                src="/images/kacchi-dine/logo.jpg"
                alt="Kacchi Dine logo"
                fill
                priority
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[15px] font-semibold tracking-[0.16em] text-white">
                KACCHI DINE
              </span>

              <span className="mt-0.5 text-[8px] uppercase tracking-[0.28em] text-white/45">
                Authentic Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-9">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  {link.label}

                  <span className="absolute bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <Link
              href="#reservation"
              className="group ml-10 flex items-center gap-2 border border-white/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white hover:text-[#17130f]"
            >
              Reserve a Table
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-white/25 text-white md:hidden"
          >
            {open ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-white/10 bg-[#17130f]/95 backdrop-blur-xl md:hidden"
            >
              <nav className="px-6 pb-7 pt-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/10 py-5 text-[13px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="#reservation"
                  onClick={() => setOpen(false)}
                  className="mt-6 flex items-center justify-between border border-white/20 px-5 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white"
                >
                  Reserve a Table
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
