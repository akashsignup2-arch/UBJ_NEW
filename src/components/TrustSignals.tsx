"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustSignals() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "United Kingdom",
      text: "An absolutely magical experience. Unni and his team made us feel like family. The food was incredible, and waking up to the mist on the water is a memory I'll cherish forever."
    },
    {
      name: "Rajesh K.",
      location: "Mumbai",
      text: "We chose the Mahadeva for our family trip. Impeccably clean, extremely courteous staff, and the route they took us on was so peaceful compared to the crowded areas."
    },
    {
      name: "Emma & James",
      location: "Australia",
      text: "The perfect slow travel experience. The wooden architecture of the Vinayaka is stunning. True premium luxury without feeling pretentious. Highly recommend!"
    }
  ];

  return (
    <section className="py-24 bg-nature-900 text-white border-y border-nature-800">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Trusted by Guests <span className="italic text-wood-300">Worldwide</span>
            </h2>
            <p className="text-nature-200 font-light">
              Don&apos;t just take our word for it. Read what our guests have to say about their stay with the UBJ family.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-6 rounded border border-white/10 backdrop-blur-sm">
            <div className="flex text-wood-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="text-sm font-light">
              <span className="font-medium text-white block">4.9 / 5.0</span>
              <span className="text-nature-300">Based on Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-nature-800/50 p-8 rounded border border-nature-700 hover:border-wood-500/50 transition-colors"
            >
              <div className="flex text-wood-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-nature-100 font-light italic leading-relaxed mb-6">
                &quot;{review.text}&quot;
              </p>
              <div>
                <p className="font-serif text-lg">{review.name}</p>
                <p className="text-sm text-nature-400">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
