"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { data } from "@/data";

// Easing curve
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Form Field Component
function FormField({
  label,
  type,
  placeholder,
  name,
  icon,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-medium tracking-[0.1em] text-white/50 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">{icon}</div>
        )}
      </div>
    </div>
  );
}

export function ReservationSection() {
  const { reservation } = data;

  // Split hero title by newline for multi-line display
  const heroTitleLines = reservation.heroTitle.split("\n");

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
              src={reservation.heroImage}
              alt="Book a Table"
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

        {/* Right - Form Section */}
        <div className="lg:w-1/2 bg-[#0a0a0a] flex flex-col rounded-3xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="flex-1 px-8 py-12 md:px-12 flex flex-col justify-center"
          >
            {/* Form Header */}
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl tracking-[0.15em] text-primary-200 mb-4">
                <span className="text-white/30">—</span>
                <span className="mx-4">{reservation.formTitle}</span>
                <span className="text-white/30">—</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                {reservation.formDescription}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6 max-w-lg mx-auto w-full">
              {/* Row 1: Name, Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="NAME"
                  type="text"
                  placeholder="Jane Smith"
                  name="name"
                />
                <FormField
                  label="EMAIL"
                  type="email"
                  placeholder="example@framer.com"
                  name="email"
                />
              </div>

              {/* Row 2: Phone, People */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="PHONE NUMBER"
                  type="tel"
                  placeholder="+420 123 456 789"
                  name="phone"
                />
                <FormField
                  label="PEOPLE"
                  type="text"
                  placeholder="1-10"
                  name="people"
                />
              </div>

              {/* Row 3: Date, Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="DATE"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name="date"
                  icon={<Calendar className="w-4 h-4 text-[#999]" />}
                />
                <FormField
                  label="TIME"
                  type="time"
                  placeholder="--:-- --"
                  name="time"
                  icon={<Clock className="w-4 h-4 text-[#999]" />}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-white text-[#0a0a0a] text-sm tracking-[0.15em] font-medium rounded-lg hover:bg-primary-300 cursor-pointer hover:text-white transition-colors"
              >
                {reservation.form.submitButton.label}
              </motion.button>
            </form>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-8 py-6 border-t border-white/10"
          >
            <div className="flex items-center justify-center gap-2 text-xs text-white/40 tracking-wider">
              <span>{reservation.footer.copyright}</span>
              {reservation.footer.links.map((link) => (
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
