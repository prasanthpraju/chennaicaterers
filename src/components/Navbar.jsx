import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const location = useLocation();

  // Handle transparent to solid background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset dropdown when mobile menu closes
  useEffect(() => {
    if (!isOpen) setMobileMenuExpanded(false);
  }, [isOpen]);

  // Unified function to force close the menu instantly on tap/click
  const closeNav = () => {
    setIsOpen(false);
    setMobileMenuExpanded(false);
  };

  // Navigation Links (High Tea removed)
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Menu",
      subLinks: [
        { name: "Morning", path: "/menu/morning" },
        { name: "Lunch", path: "/menu/lunch" },
        { name: "Dinner", path: "/menu/dinner" },
      ],
    },
    // { name: "Orders", path: "/orders" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Cart Icon Component
  const CartIcon = () => (
    <Link
      to="/cart"
      aria-label="View Cart"
      className="relative p-2 text-gray-800 hover:text-red-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg"
      onClick={closeNav}
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
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-white/95 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center z-50 px-1"
          onClick={closeNav}
        >
          <img
            src={Logo}
            alt="Chennai Caters Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isMainActive = link.path && location.pathname === link.path;
            const isSubActive = link.subLinks?.some(
              (sub) => location.pathname === sub.path
            );
            const isActive = isMainActive || isSubActive;

            return (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div
                    className={`flex items-center gap-1 relative font-semibold text-base transition-colors duration-300 py-2 cursor-pointer rounded-md px-1 ${
                      isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      strokeWidth={3}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                    {/* Active Underline Indicator */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-red-600 transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={closeNav}
                    className={`flex items-center gap-1 relative font-semibold text-base transition-colors duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md px-1 ${
                      isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {link.name}
                    {/* Active Underline Indicator */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-red-600 transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2 flex flex-col">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={closeNav}
                          className={`px-4 py-2.5 text-sm font-semibold transition-colors ${
                            location.pathname === subLink.path
                              ? "bg-red-50 text-red-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <CartIcon />
          <Link
            to="/login"
            onClick={closeNav}
            className="flex items-center gap-2 bg-[#00b251] hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <User size={18} strokeWidth={2.5} />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="flex lg:hidden items-center gap-3 z-50">
          <CartIcon />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 p-1 focus:outline-none rounded-lg transition-transform duration-300"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => {
            const isMainActive = link.path && location.pathname === link.path;
            const isSubActive = link.subLinks?.some(
              (sub) => location.pathname === sub.path
            );
            const isActive = isMainActive || isSubActive;

            return (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-100 pr-2">
                  {link.subLinks ? (
                    <button
                      onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                      className={`text-lg font-bold transition-colors py-3 px-2 rounded-lg flex-1 text-left flex justify-between items-center ${
                        isActive
                          ? "text-red-600 bg-red-50/50"
                          : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${
                          mobileMenuExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeNav}
                      className={`text-lg font-bold transition-colors py-3 px-2 rounded-lg flex-1 ${
                        isActive
                          ? "text-red-600 bg-red-50/50"
                          : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>

                {link.subLinks && (
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-300 bg-gray-50/50 rounded-b-lg ${
                      mobileMenuExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        onClick={closeNav}
                        className={`pl-6 pr-4 py-3 text-base font-semibold border-l-2 transition-colors ${
                          location.pathname === subLink.path
                            ? "border-red-600 text-red-600 bg-red-50/30"
                            : "border-transparent text-gray-600 hover:text-red-600 hover:bg-gray-100/50"
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            to="/login"
            onClick={closeNav}
            className="flex items-center justify-center gap-2 bg-[#00b251] hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 mt-4 shadow-md active:scale-95"
          >
            <User size={20} strokeWidth={2.5} />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}