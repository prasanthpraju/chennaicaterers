import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import Logo from "../assets/logo/logo1.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Used to track active page

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Orders", path: "/orders" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper component for the Cart Icon to keep code DRY
  const CartIcon = ({ isMobile }) => (
    <Link
      to="/cart"
      aria-label="View Cart"
      className="relative p-2 text-gray-800 hover:text-red-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg"
      onClick={() => isMobile && setIsOpen(false)}
    >
      <ShoppingCart size={24} strokeWidth={2.5} />
      <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-pulse">
        3
      </span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
          : "bg-white/95 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
       <Link
  to="/"
  className="flex items-center z-50 px-1"
  onClick={() => setIsOpen(false)}
>
  <img
    src={Logo}
    alt="Chennai Caters Logo"
    className="h-12 md:h-14 w-auto object-contain"
  />
</Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-semibold text-base transition-colors duration-300 py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md px-1 ${
                  isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"
                }`}
              >
                {link.name}
                {/* Underline Animation (Stays full width if active) */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-red-600 transition-all duration-300 rounded-full ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <CartIcon isMobile={false} />

          <Link
            to="/login"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            <User size={18} strokeWidth={2.5} />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle & Cart */}
        <div className="flex lg:hidden items-center gap-2 z-50">
          <CartIcon isMobile={true} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg transition-transform duration-300"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold transition-colors py-3 border-b border-gray-100 px-2 rounded-lg ${
                  isActive
                    ? "text-red-600 bg-red-50/50"
                    : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 mt-4 shadow-md active:scale-95"
          >
            <User size={20} strokeWidth={2.5} />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
