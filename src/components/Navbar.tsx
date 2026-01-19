"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Reservation", href: "/reservation" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
];

// Easing curve
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Decorative diamond component
function DiamondDecoration() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-1.5 h-1.5 rotate-45 border border-[#f5f0e8]/30" />
      <div className="w-8 h-px bg-[#f5f0e8]/20" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#f5f0e8]/30" />
    </div>
  );
}

// Animation variants
const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const menuContentVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: easeOut,
    },
  },
};

const containerVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-2 left-0 md:top-10 md:left-8 z-40 px-4 py-4 md:px-6 lg:px-8 w-full md:w-auto">
        <nav className="flex items-center justify-center max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-6 px-2 py-2 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
            {/* Left side - Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white/80" />
              </motion.button>

              {/* Logo */}
              <Link href="/" className="group pr-2">
                <span className="font-heading text-xl md:text-2xl tracking-[0.15em] text-primary-200 transition-colors group-hover:text-white">
                  AMRA
                </span>
              </Link>
            </div>

            {/* Center - Nav Links (Desktop only) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.1em] text-primary-200 hover:text-white transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side - CTA Button */}
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-white/20 bg-transparent text-primary-100 hover:bg-white/5 hover:text-white hover:border-white/40 text-xs tracking-[0.15em] uppercase px-5 h-10"
            >
              <Link href="/reservation">Book a Table</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0a0a0a]"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
              variants={menuContentVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white/80" />
            </motion.button>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center h-full">
              {/* Top Decoration */}
              <motion.div variants={menuContentVariants}>
                <DiamondDecoration />
              </motion.div>

              {/* Menu Links */}
              <motion.nav
                className="flex flex-col items-center gap-2 md:gap-4 py-8"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {menuLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative block"
                    >
                      <span className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] text-primary-200 transition-all duration-300 group-hover:text-white">
                        {link.name.toUpperCase()}
                      </span>
                      {/* Hover underline effect */}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Bottom Decoration */}
              <motion.div variants={menuContentVariants}>
                <DiamondDecoration />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
