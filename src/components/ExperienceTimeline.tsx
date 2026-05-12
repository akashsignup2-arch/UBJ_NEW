"use client";

import { motion } from "framer-motion";
import { Coffee, Ship, UtensilsCrossed, Sunset, Moon, CloudFog } from "lucide-react";

export default function ExperienceTimeline() {
  const timelineEvents = [
    {
      time: "07:00 AM",
      title: "Sunrise & Morning Tea",
      description: "Wake up to the soft mist rolling over the backwaters. Enjoy freshly brewed local tea on the deck as the village awakens.",
      icon: <Coffee className="w-6 h-6 text-wood-500" />
    },
    {
      time: "10:00 AM",
      title: "Cruising the Backwaters",
      description: "Drift slowly through narrow canals and wide lakes. Witness local fishermen, lush paddy fields, and timeless Kerala village life.",
      icon: <Ship className="w-6 h-6 text-wood-500" />
    },
    {
      time: "01:30 PM",
      title: "Traditional Kerala Lunch",
      description: "Savor a premium, authentic Sadya or fresh local catch, prepared by our onboard chef using generations-old family recipes.",
      icon: <UtensilsCrossed className="w-6 h-6 text-wood-500" />
    },
    {
      time: "05:30 PM",
      title: "Sunset Reflections",
      description: "Anchor in a calm, secluded spot. Watch the sky turn into a canvas of amber and purple reflecting off the still waters.",
      icon: <Sunset className="w-6 h-6 text-wood-500" />
    },
    {
      time: "08:00 PM",
      title: "Calm Night Stay",
      description: "Enjoy a candlelit dinner under the stars, followed by a peaceful sleep in your air-conditioned, premium wooden cabin.",
      icon: <Moon className="w-6 h-6 text-wood-500" />
    },
    {
      time: "06:30 AM",
      title: "Morning Mist Departure",
      description: "A gentle cruise back to the shores as the morning mist clears, concluding your unforgettable slow-living retreat.",
      icon: <CloudFog className="w-6 h-6 text-wood-500" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-nature-50 relative" id="experience">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-4 block">
            The Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-nature-900 mb-6">
            A Day on the <span className="italic text-nature-600">Houseboat</span>
          </h2>
          <p className="text-nature-700 font-light text-lg">
            Immerse yourself in the rhythm of the river. Every moment is crafted to bring you closer to nature and peace.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-nature-200 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-wood-500 font-medium text-sm tracking-widest mb-2 block">
                    {event.time}
                  </span>
                  <h3 className="font-serif text-2xl text-nature-900 mb-3">{event.title}</h3>
                  <p className="text-nature-600 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Icon Marker */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-sm border border-nature-100 flex items-center justify-center z-10">
                  {event.icon}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
