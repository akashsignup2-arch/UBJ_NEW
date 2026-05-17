"use client";

import { motion } from "framer-motion";
import { BedDouble, Users, Wind, Compass } from "lucide-react";

export default function Houseboats() {
  const boats = [
    {
      id: "vinayaka",
      name: "Vinayaka",
      tagline: "Intimate Family Retreat",
      description: "A beautifully crafted 3-bedroom houseboat, perfect for small families or close friends seeking privacy and peace on the water.",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666c6c?q=80&w=1200&auto=format&fit=crop",
      features: [
        { icon: <BedDouble className="w-5 h-5" />, text: "3 Premium Bedrooms" },
        { icon: <Users className="w-5 h-5" />, text: "Up to 6 Guests" },
        { icon: <Wind className="w-5 h-5" />, text: "Air Conditioned" },
        { icon: <Compass className="w-5 h-5" />, text: "Private Upper Deck" },
      ]
    },
    {
      id: "mahadeva",
      name: "Mahadeva",
      tagline: "Spacious Group Getaway",
      description: "Our expansive 4-bedroom vessel designed for larger families, offering generous dining spaces and panoramic viewing decks.",
      image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop",
      features: [
        { icon: <BedDouble className="w-5 h-5" />, text: "4 Premium Bedrooms" },
        { icon: <Users className="w-5 h-5" />, text: "Up to 8 Guests" },
        { icon: <Wind className="w-5 h-5" />, text: "Air Conditioned" },
        { icon: <Compass className="w-5 h-5" />, text: "Large Dining Lounge" },
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-wood-50" id="houseboats">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-4 block">
            Our Fleet
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-nature-900 mb-6">
            The <span className="italic text-nature-600">Vessels</span> of UBJ
          </h2>
          <p className="text-nature-700 font-light text-lg">
            Traditional aesthetics meet modern premium comfort. Choose the perfect sanctuary for your backwater journey.
          </p>
        </div>

        <div className="space-y-24">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-black/5 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden group rounded-[2rem]">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={boat.image}
                    alt={`UBJ Houseboat - ${boat.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-wood-500 font-medium tracking-widest text-sm uppercase mb-3 block">
                  {boat.tagline}
                </span>
                <h3 className="font-serif text-4xl text-nature-900 mb-6">{boat.name}</h3>
                <p className="text-nature-700 font-light text-lg leading-relaxed mb-10">
                  {boat.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {boat.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-nature-800">
                      <div className="text-wood-600">{feature.icon}</div>
                      <span className="font-light text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <a
                    href="https://wa.me/+919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 border border-nature-800 text-nature-800 hover:bg-nature-800 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
