"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using elegant placeholders from Unsplash matching the Kerala/water theme
  const images = [
    { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop", alt: "Kerala backwaters wide view" },
    { src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=800&auto=format&fit=crop", alt: "Houseboat wooden details" },
    { src: "https://images.unsplash.com/photo-1593693397690-362cb9666c6c?q=80&w=800&auto=format&fit=crop", alt: "Traditional Kerala food" },
    { src: "https://images.unsplash.com/photo-1610645607384-825dfa3ab2e4?q=80&w=800&auto=format&fit=crop", alt: "Peaceful river view" },
    { src: "https://images.unsplash.com/photo-1543781552-47864f7df2b2?q=80&w=800&auto=format&fit=crop", alt: "Sunset over backwaters" },
    { src: "https://images.unsplash.com/photo-1563212871-332e92c2a05f?q=80&w=800&auto=format&fit=crop", alt: "Traditional village near backwaters" },
    { src: "https://images.unsplash.com/photo-1613531393683-12567634f3ed?q=80&w=800&auto=format&fit=crop", alt: "Spices and local cuisine" },
    { src: "https://images.unsplash.com/photo-1632313627529-65360f06f9d3?q=80&w=800&auto=format&fit=crop", alt: "Calm morning on the water" },
  ];

  return (
    <section className="py-24 md:py-32 bg-nature-900 overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 md:px-12 mb-16">

        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-wood-400 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-4 block">
              Visual Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Moments on the <span className="italic text-wood-300">Water</span>
            </h2>
          </div>
          <p className="text-nature-200 font-light mt-6 md:mt-0 max-w-sm">
            Glimpses of the slow life, traditional craftsmanship, and serene landscapes that await you.
          </p>
        </div>

      </div>

      {/* Horizontal Scrolling Grid */}
      <div className="px-6 md:px-12 pb-8">
        <div className="grid grid-flow-col grid-rows-2 gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory auto-cols-max pb-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative overflow-hidden group cursor-pointer w-[80vw] md:w-[400px] h-[250px] md:h-[300px] snap-center rounded-2xl"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Expanded gallery view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
