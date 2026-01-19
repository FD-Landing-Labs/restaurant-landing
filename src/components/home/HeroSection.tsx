"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { data } from "@/data";

// Easing curve for smooth animations
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Social media icon component
function SocialIcon({ name, href }: { name: string; href: string }) {
  // Simple icon representations
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "facebook":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {getIcon(name)}
    </motion.a>
  );
}

// Navigation card component
function NavigationCard({
  label,
  href,
  image,
  index,
}: {
  label: string;
  href: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: easeOut }}
      className="relative flex-1 min-h-0"
    >
      <Link href={href} className="group block relative h-full overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Label with arrow */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <span className="text-sm tracking-[0.2em] text-white/90 font-medium">
            {label}
          </span>
          <motion.div
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export function HeroSection() {
  const { hero, navigationCards } = data;

  return (
    <section className="h-screen w-full bg-[#0a0a0a] p-3 md:p-4 overflow-hidden">
      <div className="h-full flex flex-col lg:flex-row gap-3 md:gap-4">
        {/* Left - Main Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative flex-1 lg:flex-[3] rounded-3xl overflow-hidden"
        >
          {/* Hero Background Video */}
          <div className="absolute inset-0">
            <video
              src="/assets/videos/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col justify-end p-6 md:p-10 lg:p-12">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            >
              <h1 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[0.01em] text-primary-200">
                {hero.headline}
                <br />
                {hero.subheadline}
              </h1>
            </motion.div>

            {/* Social Icons - Bottom Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden absolute bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 md:flex items-center gap-3"
            >
              {hero.socialLinks?.map((social) => (
                <SocialIcon key={social.name} name={social.icon} href={social.href} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Navigation Cards */}
        <div className="flex flex-col lg:flex-col gap-3 md:gap-4 lg:flex-1 min-h-[350px] lg:h-full">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={card.id}
              label={card.label}
              href={card.href}
              image={card.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
