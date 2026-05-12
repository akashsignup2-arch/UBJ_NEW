"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-wood-50" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-wood-600 tracking-[0.2em] uppercase text-xs md:text-sm font-medium mb-6 block">
              Connect With Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-nature-900 mb-8 leading-tight">
              Let’s Plan Your <span className="italic text-nature-600">Journey</span>
            </h2>
            <p className="text-nature-700 font-light text-lg mb-12 max-w-md">
              We manage all bookings personally to ensure you get exactly the experience you desire. Reach out to us via WhatsApp for the fastest response.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/+919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded transition-colors duration-300 text-sm font-medium tracking-wider uppercase shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="pt-8 border-t border-nature-200 space-y-6">
                <div className="flex items-start gap-4 text-nature-800">
                  <MapPin className="w-6 h-6 text-wood-500 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Boarding Point</h4>
                    <p className="font-light text-nature-600 text-sm">
                      Punnamada Finishing Point,<br />
                      Alappuzha, Kerala, India 688006
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-nature-800">
                  <Phone className="w-6 h-6 text-wood-500 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Direct Line</h4>
                    <p className="font-light text-nature-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-nature-800">
                  <Mail className="w-6 h-6 text-wood-500 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email Inquiry</h4>
                    <p className="font-light text-nature-600 text-sm">stay@ubjhouseboats.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[500px] bg-nature-200 rounded-sm relative overflow-hidden group border border-nature-300 shadow-sm"
          >
            {/*
              This is a placeholder for a Google Maps iframe.
              Replace with actual embed code later.
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-nature-100/50 backdrop-blur-sm z-10 p-8 text-center border-4 border-white/20 m-4 rounded">
              <MapPin className="w-12 h-12 text-wood-400 mb-4" />
              <p className="text-nature-800 font-serif text-xl mb-2">Alappuzha Backwaters</p>
              <p className="text-nature-600 font-light text-sm max-w-xs">
                Google Maps Embed Placeholder. Actual map will show exact boarding location at Punnamada.
              </p>
            </div>

            {/* Background texture for the map placeholder */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply"
              style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
