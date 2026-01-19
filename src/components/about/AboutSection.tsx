"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { data } from "@/data";

// Easing curve
const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Stars Component
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[#f5f0e8] text-primary-200" />
      ))}
    </div>
  );
}

// Award Badge Component
function AwardBadge({
  source,
  award,
  stars,
  delay,
}: {
  source: string;
  award: string;
  stars: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
    >
      <Stars count={stars} />
      <h3 className="font-heading text-sm md:text-base tracking-[0.1em] text-primary-200 mt-3 mb-1">
        {source}
      </h3>
      <p className="text-[10px] tracking-[0.15em] text-white/40 uppercase">
        {award}
      </p>
    </motion.div>
  );
}

// Image Card with Navigation Arrow
function ImageCard({
  src,
  alt,
  delay,
  onNext,
  imageKey,
}: {
  src: string;
  alt: string;
  delay: number;
  onNext?: () => void;
  imageKey?: string | number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className="relative h-full w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={imageKey ?? src}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="absolute inset-0"
        >
          <Image src={src} alt={alt} fill className="object-cover object-top" />
        </motion.div>
      </AnimatePresence>
      {onNext && (
        <motion.button
          onClick={onNext}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </motion.div>
  );
}

// Headline Card
function HeadlineCard() {
  const { about } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
    >
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-[0.05em] text-primary-200 leading-tight mb-4">
        {about.headline}
      </h2>
      <p className="text-sm text-white/60 leading-relaxed">
        {about.description}
      </p>
    </motion.div>
  );
}

// Story Card
function StoryCard() {
  const { story } = data.about;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
      className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
    >
      {/* Decorative Title */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rotate-45 border border-white/30" />
          <div className="w-6 h-px bg-white/20" />
        </div>
        <h3 className="font-heading text-lg tracking-[0.1em] text-primary-200">
          {story.title}
        </h3>
        <div className="flex items-center gap-1">
          <div className="w-6 h-px bg-white/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-white/30" />
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed text-center">
        {story.content}
      </p>
    </motion.div>
  );
}

// Testimonial Section
function TestimonialSection() {
  const { testimonials } = data.about;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.reviews.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.reviews.length) % testimonials.reviews.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: easeOut }}
      className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4"
    >
      {/* Left Column - Stats Card with Image */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden relative h-64 md:h-auto md:aspect-[4/5]">
        <Image
          src={testimonials.stats.statImage}
          alt="Customer satisfaction"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
          >
            <span className="font-heading text-5xl md:text-6xl tracking-tight text-primary-200">
              {testimonials.stats.satisfactionRate}
            </span>
            <p className="text-sm text-white/60 mt-2 tracking-wide">
              {testimonials.stats.satisfactionLabel}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Stacked Cards */}
      <div className="flex flex-col gap-3 md:gap-4">
        {/* Avatar Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: easeOut }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex items-center justify-between"
        >
          {/* Avatar Stack */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {testimonials.customerCount.avatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7 + index * 0.1,
                    ease: easeOut,
                  }}
                  className="relative w-10 h-10 rounded-full border-2 border-[#0a0a0a] overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Count */}
          <div className="text-right">
            <span className="font-heading text-2xl md:text-3xl tracking-tight text-primary-200">
              {testimonials.customerCount.count}
            </span>
            <p className="text-xs text-white/60 tracking-wide">
              {testimonials.customerCount.label}
            </p>
          </div>
        </motion.div>

        {/* Testimonial Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: easeOut }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-between"
        >
          {/* Quote */}
          <div className="relative overflow-hidden min-h-[120px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <p className="text-sm md:text-base text-white/80 leading-relaxed italic">
                  &ldquo;{testimonials.reviews[currentIndex].quote}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-primary-200">
                    {testimonials.reviews[currentIndex].author}
                  </p>
                  <p className="text-xs text-white/40 tracking-wide">
                    {testimonials.reviews[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const { about } = data;
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [chefIndex, setChefIndex] = useState(0);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % 1); // Single image for now
  };

  const nextChef = () => {
    setChefIndex((prev) => (prev + 1) % about.chefImages.length);
  };

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
              src={about.heroImage}
              alt="About Qitchen"
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
              className="font-heading text-5xl md:text-6xl lg:text-[6rem] tracking-[0.05em] text-primary-200"
            >
              {about.heroTitle}
            </motion.h1>
          </div>
        </motion.div>

        {/* Right - Content Grid */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Grid of Cards */}
          <div className="flex-1">
            {/* Row 1: Headline + Featured Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
              <ImageCard
                src={about.featuredImage}
                alt="Dining experience"
                delay={0.2}
                onNext={nextFeatured}
                imageKey={featuredIndex}
              />
              <HeadlineCard />
            </div>

            {/* Row 2: Award Badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
              {about.awards.map((award, index) => (
                <AwardBadge
                  key={award.id}
                  source={award.source}
                  award={award.award}
                  stars={award.stars}
                  delay={0.25 + index * 0.05}
                />
              ))}
            </div>

            {/* Row 3: Chef Images + Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <StoryCard />
              <div className="hidden md:block relative h-48 md:h-auto md:aspect-[4/3]">
                <ImageCard
                  src={about.chefImages[chefIndex]}
                  alt="Our Chef"
                  delay={0.4}
                  onNext={nextChef}
                  imageKey={chefIndex}
                />
              </div>

            </div>

            {/* Row 4: Testimonials */}
            <TestimonialSection />
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-4 py-4 border-t border-white/10 mt-4"
          >
            <div className="flex items-center justify-center gap-2 text-xs text-white/40 tracking-wider">
              <span>{about.footer.copyright}</span>
              {about.footer.links.map((link) => (
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
