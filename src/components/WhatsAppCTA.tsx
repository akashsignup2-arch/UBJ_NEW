"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "+919876543210"; // Placeholder
  const message = encodeURIComponent("Hello! I would like to inquire about a premium houseboat stay with UBJ.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 pointer-events-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center gap-3 px-5 py-3
          bg-[#25D366] text-white rounded-full
          shadow-[0_8px_30px_rgba(37,211,102,0.4)]
          hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)]
          hover:-translate-y-1 transition-all duration-300
          pointer-events-auto group
        `}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium text-sm md:text-base hidden sm:block">Plan Your Stay</span>
      </a>
    </motion.div>
  );
}
