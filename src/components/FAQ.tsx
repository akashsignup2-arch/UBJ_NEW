"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is included in the houseboat stay?",
      answer: "Your stay includes a private, air-conditioned houseboat, a dedicated crew (captain, chef, and assistant), all meals (lunch, dinner, breakfast, and evening tea/snacks) featuring traditional Kerala cuisine, and an exclusive cruise through the backwaters."
    },
    {
      question: "What are the check-in and check-out timings?",
      answer: "Standard check-in time is 12:00 PM, and check-out is at 09:00 AM the following day. We recommend arriving slightly early to ensure a smooth boarding process."
    },
    {
      question: "Is air conditioning available throughout the day?",
      answer: "Yes, our premium houseboats offer full-time air conditioning in the bedrooms to ensure your comfort, regardless of the outside temperature."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely. Our onboard chef prepares fresh meals daily. Please inform us of any allergies, vegetarian, vegan, or Jain food preferences during your booking inquiry, and we will gladly customize the menu."
    },
    {
      question: "How do I book a stay with UBJ Houseboats?",
      answer: "We prefer a personal touch. Simply click the WhatsApp button to chat directly with our team (Unni, Biju, or Jayan). We will check availability, discuss your preferences, and guide you through the reservation process."
    },
    {
      question: "Is it safe for families and children?",
      answer: "Safety is our utmost priority. Our boats are equipped with life jackets, fire extinguishers, and a highly trained crew. The design of our boats also ensures secure areas for children to enjoy."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-nature-50" id="faq">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">

        <div className="text-center mb-16">
          <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-4 block">
            Information
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-nature-900">
            Frequently Asked <span className="italic text-nature-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-nature-200 bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-nature-50/50 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-nature-900 pr-8">{faq.question}</span>
                  <span className="text-wood-600 shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-nature-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-nature-600 font-light mb-4">Have a different question?</p>
          <a
            href="https://wa.me/+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-wood-600 hover:text-wood-700 font-medium tracking-wide uppercase text-sm underline underline-offset-4 decoration-wood-300 hover:decoration-wood-600 transition-all"
          >
            Ask us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
