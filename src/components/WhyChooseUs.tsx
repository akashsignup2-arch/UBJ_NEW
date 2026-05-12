"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Leaf, ShieldCheck, Map } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Family-Run Hospitality",
      description: "Hosted personally by founders Unni, Biju, and Jayan. We treat you not as tourists, but as guests in our own home."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Curated Routes",
      description: "We avoid the crowded tourist canals. Our captains navigate through serene, untouched village backwaters for true privacy."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Authentic Slow Living",
      description: "No rush, no strict schedules. Enjoy locally sourced meals, traditional aesthetics, and a pace dictated only by the river."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Premium & Secure",
      description: "Immaculate hygiene, modern amenities within traditional wooden hulls, and uncompromised safety standards for families."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-wood-50" id="why-us">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-4 block">
            The UBJ Difference
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-nature-900 mb-6">
            Why Sail With <span className="italic text-nature-600">Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-wood-600 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl text-nature-900 mb-4">{reason.title}</h3>
              <p className="text-nature-600 font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
