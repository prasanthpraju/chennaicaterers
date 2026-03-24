import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
    { name: "Track Orders", path: "/orders" },
    { name: "Catering Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t-[3px] border-red-600 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col">
            {/* Matches Navbar Logo exactly */}
            <Link to="/" className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4 inline-block">
              Chennai <span className="text-red-600">Caters</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
              Delivering hot, fresh, and authentic meals straight to your door. Your trusted partner for every occasion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="bg-white p-3 rounded-full text-gray-600 shadow-sm border border-gray-100 hover:-translate-y-1 hover:text-red-600 hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {/* Matches Navbar Link Hover Style */}
                  <Link 
                    to={link.path} 
                    className="relative text-gray-600 font-medium text-base hover:text-red-600 transition-colors duration-300 py-1 group inline-block"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin size={20} className="text-red-600 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors">
                  123 Food Street, T. Nagar,<br />
                  Chennai, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone size={20} className="text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail size={20} className="text-red-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors">
                  hello@chennaicaters.in
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Stay Updated</h3>
            <p className="text-gray-600 text-sm font-medium mb-4">
              Subscribe for exclusive offers and fresh menu updates!
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
              />
              {/* Matches Navbar Login Button Style exactly */}
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Chennai Caters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}