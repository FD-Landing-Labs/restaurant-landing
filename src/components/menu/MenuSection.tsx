"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { data } from "@/data";

// Easing curve
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

// Menu Item Component
function MenuItem({
  name,
  emoji,
  description,
  price,
  image,
}: {
  name: string;
  emoji: string;
  description: string;
  price: string;
  image: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-4 p-3 rounded-xl bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-colors"
    >
      {/* Image */}
      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-medium text-white truncate">
          {name}
        </h3>
        <p className="text-sm text-white/50 truncate">{description}</p>
      </div>

      {/* Price */}
      <div className="flex-shrink-0">
        <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#2a2a2a] rounded-lg">
          {price}
        </span>
      </div>
    </motion.div>
  );
}

// Menu Category Component
function MenuCategory({
  name,
  emoji,
  timeRange,
  items,
}: {
  name: string;
  emoji: string;
  timeRange: string;
  items: typeof data.menu.items;
}) {
  return (
    <div className="mb-8">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* <span className="text-lg">{emoji}</span> */}
          <h2 className="text-lg font-medium tracking-[0.1em] text-primary-200">
            {name}
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-white/40 text-sm">
          <Clock className="w-4 h-4" />
          <span>{timeRange}</span>
        </div>
      </div>

      {/* Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-3"
      >
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            emoji={item.emoji}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function MenuSection() {
  const { menu } = data;

  // Group items by category
  const itemsByCategory = menu.categories.map((category) => ({
    ...category,
    items: menu.items.filter((item) => item.category === category.id),
  }));

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
              src={menu.heroImage}
              alt="Menu Hero"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
          </div>

          {/* Title */}
          <div className="relative h-full flex items-end p-8 md:p-12 lg:p-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="font-heading text-5xl md:text-6xl lg:text-[6rem] leading-[0.95] tracking-[0.02em] text-primary-200"
            >
              {menu.pageTitle}
            </motion.h1>
          </div>
        </motion.div>

        {/* Right - Menu Content */}
        <div className="lg:w-1/2  py-8 lg:px-10 lg:py-12">
          <div className=" mx-auto lg:mx-0">
            {itemsByCategory.map((category) => (
              <MenuCategory
                key={category.id}
                name={category.name}
                emoji={category.emoji}
                timeRange={category.timeRange}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
