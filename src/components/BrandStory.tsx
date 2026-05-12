"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-wood-50 relative overflow-hidden" id="story">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-nature-50 opacity-50 rounded-l-full transform translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-nature-800 rounded-sm transform translate-x-4 translate-y-4" />
              <img
                src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop"
                alt="Kerala backwater traditional wooden boat details"
                className="absolute inset-0 w-full h-full object-cover rounded-sm z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-6 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-nature-900 mb-8 leading-tight">
              A Family Tradition on the <span className="italic text-nature-600">Waters of Kerala</span>
            </h2>

            <div className="space-y-6 text-nature-700 font-light leading-relaxed text-lg">
              <p>
                UBJ Houseboats is more than a stay; it is a legacy passed down through generations. Founded and personally managed by Unni, Biju, and Jayan, our roots run deep in the backwaters of Alappuzha.
              </p>
              <p>
                We grew up listening to the rhythm of the rivers and the rustle of the coconut groves. Today, we invite you into our home—the waters of Kerala—offering a handcrafted experience where authentic hospitality meets premium comfort.
              </p>
              <p>
                When you sail with us, you aren’t just a guest; you are family. Experience the warmth of local care, curated routes far from the crowds, and the true essence of slow living.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-nature-200">
              <p className="font-serif text-2xl text-nature-800 italic">
                Unni, Biju & Jayan
              </p>
              <p className="text-sm text-nature-500 uppercase tracking-widest mt-2">The Founders</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
