"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using elegant placeholders from Unsplash matching the Kerala/water theme
  const images = [
    { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2", alt: "Kerala backwaters wide view" },
    { src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Houseboat wooden details" },
    { src: "https://images.unsplash.com/photo-1593693397690-362cb9666c6c?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2", alt: "Traditional Kerala food" },
    { src: "https://images.unsplash.com/photo-1610645607384-825dfa3ab2e4?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Peaceful river view" },
    { src: "https://images.unsplash.com/photo-1543781552-47864f7df2b2?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1", alt: "Sunset over backwaters" },
  ];

  return (
    <section className="py-24 md:py-32 bg-nature-900" id="gallery">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
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

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
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
