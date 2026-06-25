import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function Galeria() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A0A0A] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="flex gap-4 px-6 md:px-0">
          {/* Main visible area */}
          <div className="relative w-full md:w-[calc(100%-16px-33%)] aspect-video rounded-xl overflow-hidden flex-shrink-0">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                src={images[current]}
                alt={`Galería ${current + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Peek next image - desktop only */}
          <div className="hidden md:block w-[33%] aspect-video rounded-xl overflow-hidden flex-shrink-0 opacity-60">
            <img
              src={images[(current + 1) % images.length]}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(10,10,10,0.6)] backdrop-blur-lg border border-white/15 flex items-center justify-center text-white hover:bg-[rgba(43,106,255,0.8)] transition-colors duration-200 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(10,10,10,0.6)] backdrop-blur-lg border border-white/15 flex items-center justify-center text-white hover:bg-[rgba(43,106,255,0.8)] transition-colors duration-200 z-10"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6 pb-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-[#2B6AFF]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
