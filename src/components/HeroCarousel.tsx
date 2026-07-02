import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import stGeorgesImage from '../assets/st-george-hero.png';

const slides = [
  {
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eglise_anglicane_Saint-Georges_Paris.jpg?width=2000',
    kicker: "Saint George's, Paris",
    title: 'A Warm Welcome Awaits',
    subtitle: '7 rue Auguste Vacquerie, in the heart of Paris',
  },
  {
    image: 'https://www.stgeorgesparis.com/s/cc_images/teaserbox_27758840.jpg?t=1427181210',
    kicker: 'Welcome Home',
    title: "Welcome to St George's",
    subtitle: 'Church entrance',
  },
  {
    // image: 'https://www.stgeorgesparis.com/s/cc_images/cache_65276581.jpg?t=1709828506',
    image: stGeorgesImage,
    kicker: 'A Place of Prayer',
    title: 'Come as You Are',
    subtitle: "Inside Saint George's",
  },
  {
    image: 'https://www.stgeorgesparis.com/s/cc_images/cache_10122967.jpg?t=1391976196',
    kicker: 'Music & Worship',
    title: 'Music at the Heart of Worship',
    subtitle: 'Our sanctuary and organ',
  },
  {
    image: 'https://www.stgeorgesparis.com/s/cc_images/cache_63183845.jpg?t=1661897141',
    kicker: 'Our Community',
    title: 'A Community of Faith',
    subtitle: "Life together at St George's",
  },
] as const;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div className="relative h-[calc(100vh-5rem)] min-h-[420px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient scrim instead of a boxed overlay, for legible but elegant text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          {/* Radial vignette centered on the text so the image itself darkens behind it, fading out toward the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.05)_80%)]" />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6 sm:px-12 lg:px-20">
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="h-px w-10 bg-primary" />
                  <span className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold text-primary-light">
                    {slide.kicker}
                  </span>
                  <span className="h-px w-10 bg-primary" />
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-white/85 font-medium max-w-xl mx-auto">{slide.subtitle}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
