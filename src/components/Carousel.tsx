import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  caption?: string;
}

interface CarouselProps {
  slides: Slide[];
  intervalMs?: number;
  aspect?: string; // Tailwind aspect-ratio class, e.g. "aspect-video"
}

export default function Carousel({ slides, intervalMs = 4000, aspect = 'aspect-video' }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-gray-900`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt={slides[index].caption || 'Gallery photo'}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {slides[index].caption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">{slides[index].caption}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
}
