"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-nature-900 flex items-center justify-center">
      {/* Cinematic Background - Using placeholder that will be replaced via IMAGE_REPLACEMENT_GUIDE.md */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-transparent to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-drift"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop')" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-wood-300 tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-6 block">
            Alappuzha, Kerala
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-tight md:leading-[1.1] mb-8 text-shadow"
        >
          Drift Through Kerala’s <br className="hidden md:block"/>
          <span className="italic text-wood-100">Timeless</span> Backwaters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-wood-50 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12 text-shadow-sm"
        >
          A premium family-run houseboat experience. Slow living, authentic hospitality, and private immersion in nature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="https://wa.me/+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white rounded transition-colors duration-300 text-sm tracking-wider uppercase w-full sm:w-auto text-center"
          >
            Inquire on WhatsApp
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border border-white/30 hover:border-white/80 hover:bg-white/10 text-white rounded transition-all duration-300 text-sm tracking-wider uppercase w-full sm:w-auto text-center"
          >
            Explore Experience
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
