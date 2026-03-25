import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowRight, UtensilsCrossed } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
    { name: "Track Orders", path: "/orders" },
    { name: "Catering Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-slate-900 pt-20 pb-8 border-t-[4px] border-red-600 font-sans text-slate-300 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <UtensilsCrossed size={400} className="absolute -top-20 -right-20 text-white rotate-12" />
        <UtensilsCrossed size={300} className="absolute -bottom-20 -left-20 text-white -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="text-3xl font-black text-white uppercase tracking-tight mb-4 inline-block">
              Chennai <span className="text-red-500">Caters</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium pr-4">
              Delivering hot, fresh, and authentic meals straight to your door. Your trusted partner for every occasion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="bg-slate-800 p-3 rounded-full text-slate-300 shadow-sm border border-slate-700 hover:-translate-y-1 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="relative text-slate-400 font-medium text-base hover:text-white transition-colors duration-300 py-1 group inline-block"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin size={20} className="text-red-500 mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                  123 Food Street, T. Nagar,<br />
                  Chennai, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone size={20} className="text-green-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail size={20} className="text-orange-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                  hello@chennaicaters.in
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Stay Updated
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-4">
              Subscribe for exclusive offers and fresh menu updates!
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-red-900/50 hover:-translate-y-0.5 group"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Chennai Caters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}