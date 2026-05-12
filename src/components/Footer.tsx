import { Mail, MapPin, Phone } from "lucide-react";
// Lucide react social icons are named differently or not included in the main export sometimes.
// It's safer to use simple SVGs or just remove them to avoid compilation errors, but let's use text links or simple SVGs instead.

export default function Footer() {
  return (
    <footer className="bg-nature-900 text-wood-50 py-16 md:py-24 border-t border-nature-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-wider mb-4">
              UBJ<span className="text-wood-400 font-light text-xl ml-1">Houseboats</span>
            </h3>
            <p className="text-nature-200 text-sm leading-relaxed mb-6 max-w-xs">
              A premium family-run houseboat experience in Alappuzha, Kerala. Slow living on the backwaters.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-nature-300 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-nature-300 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-nature-300 hover:text-white transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Experience</h4>
            <ul className="space-y-3">
              <li><a href="#houseboats" className="text-nature-300 hover:text-white text-sm transition-colors">Our Houseboats</a></li>
              <li><a href="#experience" className="text-nature-300 hover:text-white text-sm transition-colors">A Day on the Water</a></li>
              <li><a href="#gallery" className="text-nature-300 hover:text-white text-sm transition-colors">Gallery</a></li>
              <li><a href="#why-us" className="text-nature-300 hover:text-white text-sm transition-colors">The UBJ Difference</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-nature-300 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-nature-300 hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-nature-300 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-nature-300 text-sm">
                <MapPin className="w-5 h-5 text-wood-400 shrink-0 mt-0.5" />
                <span>Punnamada, Alappuzha,<br />Kerala, India 688006</span>
              </li>
              <li className="flex items-center gap-3 text-nature-300 text-sm">
                <Phone className="w-5 h-5 text-wood-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-nature-300 text-sm">
                <Mail className="w-5 h-5 text-wood-400 shrink-0" />
                <span>stay@ubjhouseboats.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-nature-800 text-center text-nature-400 text-xs">
          <p>&copy; {new Date().getFullYear()} UBJ Houseboats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
