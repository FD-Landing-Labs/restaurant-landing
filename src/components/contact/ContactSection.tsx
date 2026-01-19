"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Star, Twitter } from "lucide-react";
import { data } from "@/data";

// Easing curve
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Google Logo Component
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Social Icon Component
function SocialIcon({ icon, href }: { icon: string; href: string }) {
  const getIcon = () => {
    switch (icon) {
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "star":
        return <Star className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {getIcon()}
    </motion.a>
  );
}

// Opening Hours Card
function OpeningCard() {
  const { opening } = data.contact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8"
    >
      {/* Title */}
      <h2 className="font-heading text-lg tracking-[0.15em] text-primary-200 text-center mb-6">
        <span className="text-white/30">—</span>
        <span className="mx-3">{opening.title}</span>
        <span className="text-white/30">—</span>
      </h2>

      {/* Hours List */}
      <div className="space-y-4">
        {opening.hours.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-white/70">{item.day}</span>
            <span className="flex-1 mx-4 border-b border-dotted border-white/20" />
            <span className="text-sm text-white/70">{item.time}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Google Review Card
function GoogleReviewCard() {
  const { googleReview } = data.contact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center"
    >
      {/* Google Logo */}
      <GoogleLogo className="w-12 h-12 mb-4" />

      {/* Title */}
      <h3 className="font-heading text-lg tracking-wide text-primary-200 mb-6 text-center">
        {googleReview.title}
      </h3>

      {/* QR Code */}
      <div className="relative w-32 h-32 bg-white rounded-lg p-2">
        <Image
          src={googleReview.qrCode}
          alt="Scan to review on Google"
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Scan text */}
      <p className="text-xs text-white/40 mt-4 tracking-wide">
        SCAN TO REVIEW
      </p>
    </motion.div>
  );
}

// Map Card
function MapCard() {
  const { map } = data.contact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden relative"
    >
      {/* Coordinates Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg p-3 shadow-lg">
        <p className="text-xs font-medium text-[#1a1a1a]">{map.coordinates}</p>
        <p className="text-xs text-[#666]">{map.plusCode}</p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(map.plusCode)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:underline mt-1 block"
        >
          View larger map
        </a>
      </div>

      {/* Map Embed */}
      <iframe
        src={map.embedUrl}
        className="w-full h-full min-h-[250px]"
        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Restaurant Location"
      />
    </motion.div>
  );
}

// Contact Info Card
function ContactInfoCard() {
  const { info } = data.contact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8"
    >
      {/* Title */}
      <h2 className="font-heading text-lg tracking-[0.15em] text-primary-200 text-center mb-8">
        <span className="text-white/30">—</span>
        <span className="mx-3">{info.title}</span>
        <span className="text-white/30">—</span>
      </h2>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-8">
          <span className="text-xs tracking-[0.1em] text-white/40 w-20">
            {info.address.label}
          </span>
          <div className="text-sm text-white/80 text-right flex-1">
            <p>{info.address.line1}</p>
            <p>{info.address.line2}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-8">
          <span className="text-xs tracking-[0.1em] text-white/40 w-20">
            {info.phone.label}
          </span>
          <a
            href={`tel:${info.phone.value.replace(/\s/g, "")}`}
            className="text-sm text-white/80 hover:text-white transition-colors flex-1 text-right"
          >
            {info.phone.value}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-8">
          <span className="text-xs tracking-[0.1em] text-white/40 w-20">
            {info.email.label}
          </span>
          <a
            href={`mailto:${info.email.value}`}
            className="text-sm text-white/80 hover:text-white transition-colors flex-1 text-right lowercase"
          >
            {info.email.value}
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center gap-8">
          <span className="text-xs tracking-[0.1em] text-white/40 w-20">
            {info.social.label}
          </span>
          <div className="flex gap-2 flex-1 justify-end">
            {info.social.links.map((link) => (
              <SocialIcon key={link.name} icon={link.icon} href={link.href} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ContactSection() {
  const { contact } = data;

  // Split hero title by newline for multi-line display
  const heroTitleLines = contact.heroTitle.split("\n");

  return (
    <section className="min-h-screen bg-[#0a0a0a] p-3 md:p-4">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-32px)] gap-3 md:gap-4">
        {/* Left - Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative lg:w-1/2 h-[50vh] lg:h-[calc(100vh-32px)] lg:sticky lg:top-4 rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={contact.heroImage}
              alt="Get in Touch"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          </div>

          {/* Title */}
          <div className="relative h-full flex items-end p-8 md:p-12 lg:p-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="font-heading text-5xl md:text-6xl lg:text-[6rem] leading-[0.95] tracking-[0.02em] text-primary-200"
            >
              {heroTitleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Right - Content Grid */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Grid of Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Top Left - Opening Hours */}
            <OpeningCard />

            {/* Top Right - Google Review */}
            <GoogleReviewCard />

            {/* Bottom Left - Map */}
            <MapCard />

            {/* Bottom Right - Contact Info */}
            <ContactInfoCard />
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 px-4 py-4 border-t border-white/10"
          >
            <div className="flex items-center justify-center gap-2 text-xs text-white/40 tracking-wider">
              <span>{contact.footer.copyright}</span>
              {contact.footer.links.map((link) => (
                <span key={link.name} className="flex items-center gap-2">
                  <span className="text-white/20">·</span>
                  <Link
                    href={link.href}
                    className="hover:text-white/60 transition-colors"
                  >
                    {link.name}
                  </Link>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
