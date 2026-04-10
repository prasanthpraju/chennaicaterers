import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import { UtensilsCrossed, MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show scroll button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
    { name: "Catering Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0a0f1c] pt-12 md:pt-20 pb-6 md:pb-8 border-t border-white/5 font-sans text-slate-400 relative overflow-hidden">
      
      {/* Brand Accent Top Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#ec2290] to-transparent opacity-50" />

      {/* Decorative Background Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <UtensilsCrossed size={600} className="absolute -top-24 -right-24 text-white rotate-12" />
        <UtensilsCrossed size={400} className="absolute -bottom-20 -left-20 text-white -rotate-12" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Adjusted gap for better mobile flow - Improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-16">
          
          {/* 1. Brand Section - Improved mobile centering */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 sm:mb-4 inline-block hover:text-[#ec2290] transition-colors"
            >
              Chennai <span className="text-[#ec2290]">Caterers</span>
            </Link>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-medium max-w-sm px-4 sm:px-0">
              Premium catering services in Chennai. We specialize in authentic traditional flavors, 
              impeccable service, and high-standard hygiene.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 rounded-full text-slate-400 border border-white/10 hover:bg-[#ec2290] hover:text-white hover:border-[#ec2290] transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - Improved mobile spacing */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:pl-0 lg:pl-8 w-full">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec2290]"></span>
              Navigation
            </h3>
            <ul className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 w-full">
              {footerLinks.map((link) => (
                <li key={link.name} className="w-full sm:w-auto">
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="group flex items-center justify-center sm:justify-start text-slate-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest hover:text-white transition-all duration-300 py-1"
                  >
                    <span className="hidden sm:block w-0 h-[1.5px] bg-[#ec2290] transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info - Improved mobile touch targets */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1 w-full">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ec2290]"></span>
              Get In Touch
            </h3>
            
            <ul className="space-y-4 sm:space-y-5 flex flex-col items-center sm:items-start w-full">
              <li className="flex flex-row items-start gap-3 sm:gap-4 max-w-[280px] sm:max-w-none text-left w-full justify-center sm:justify-start">
                <MapPin size={16} sm:size={18} className="text-[#ec2290] shrink-0 mt-0.5" />
                <span className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  123 Catering Lane, T. Nagar,<br /> Chennai, Tamil Nadu 600017
                </span>
              </li>
              <li className="flex flex-row items-center gap-3 sm:gap-4 w-full justify-center sm:justify-start">
                <Phone size={16} sm:size={18} className="text-[#ec2290] shrink-0" />
                <a href="tel:+919876543210" className="text-slate-500 text-xs sm:text-sm font-medium hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex flex-row items-center gap-3 sm:gap-4 w-full justify-center sm:justify-start">
                <Mail size={16} sm:size={18} className="text-[#ec2290] shrink-0" />
                <a href="mailto:hello@chennaicaterers.com" className="text-slate-500 text-xs sm:text-sm font-medium hover:text-white transition-colors break-all">
                  hello@chennaicaterers.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Improved mobile layout */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-slate-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-center px-4">
            © {new Date().getFullYear()} Chennai Caterers. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
            <div className="flex gap-4 sm:gap-6 text-slate-600">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
            
            <span className="hidden sm:block text-slate-800">/</span>
            
            <p className="flex items-center gap-1.5 text-slate-500 text-center text-[9px] sm:text-[10px]">
              Made with <FaHeart size={8} sm:size={10} className="text-[#ec2290] animate-pulse" /> by 
              <a 
                href="https://www.jgntechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ec2290] transition-colors ml-1"
              >
                JGN Tech
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Scroll to top button - Improved mobile visibility */}
      {/* {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-[#ec2290] text-white p-3 rounded-full shadow-lg hover:bg-[#d01d7a] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#ec2290] focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )} */}
    </footer>
  );
}