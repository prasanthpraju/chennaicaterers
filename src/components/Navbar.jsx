// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../public/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Unified function to force close the menu instantly on tap/click
  const closeNav = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Toggle dropdown on mobile
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Menu",
      subLinks: [
        { name: "Morning", path: "/menu/breakfast" },
        { name: "Lunch", path: "/menu/lunch" },
        { name: "Dinner", path: "/menu/dinner" },
      ],
    },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#ec2290] shadow-lg py-2"
            : "bg-[#ec2290] py-3 md:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full relative z-50">
          {/* Left: Single Logo */}
          <div className="flex-1 flex justify-start z-50">
            <Link to="/" className="flex items-center group" onClick={closeNav}>
              <img
                src={Logo}
                alt="Chennai Caters"
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
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
                      className={`flex items-center gap-1 relative font-bold text-sm uppercase tracking-wide transition-all duration-300 py-2 cursor-pointer rounded-md px-1 ${
                        isActive
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 rounded-full ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeNav}
                      className={`flex items-center gap-1 relative font-bold text-sm uppercase tracking-wide transition-all duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-1 ${
                        isActive
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 rounded-full ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {link.subLinks && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="absolute -top-3 left-0 w-full h-3"></div>
                      <div className="bg-white rounded-xl shadow-xl py-2 overflow-hidden border border-gray-100">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            onClick={closeNav}
                            className={`block px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                              location.pathname === subLink.path
                                ? "text-[#ec2290] bg-pink-50"
                                : "text-gray-700 hover:text-[#ec2290] hover:bg-gray-50"
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

          {/* Right: CTA Button for Desktop */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Link
              to="/contact"
              className="bg-white text-[#ec2290] px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Toggle menu"
            >
              <span className="absolute transform transition-all duration-300">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Improved Design */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={closeNav}
        />
        
        {/* Menu Panel - Slide from right */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl transition-all duration-500 ease-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header with logo and close */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Link to="/" onClick={closeNav} className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Chennai Caters"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg tracking-tight leading-tight">
                  CHENNAI
                </span>
                <span className="text-white/70 font-semibold text-xs tracking-wide">
                  CATERERS
                </span>
              </div>
            </Link>
            <button
              onClick={closeNav}
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto h-[calc(100%-73px)] pb-24">
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isMainActive = link.path && location.pathname === link.path;
                const isSubActive = link.subLinks?.some(
                  (sub) => location.pathname === sub.path
                );
                const isActive = isMainActive || isSubActive;
                const isDropdownOpen = activeDropdown === link.name;

                return (
                  <div key={link.name} className="border-b border-white/5 last:border-0">
                    {link.subLinks ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className={`w-full text-left text-lg font-bold uppercase tracking-wide flex justify-between items-center py-4 transition-all duration-200 ${
                            isActive
                              ? "text-[#ec2290]"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-all duration-300 ${
                              isDropdownOpen ? "rotate-180 text-[#ec2290]" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-4 mb-3 flex flex-col gap-1 border-l-2 border-[#ec2290]/30 pl-4">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.path}
                                onClick={closeNav}
                                className={`py-3 text-base transition-all duration-200 ${
                                  location.pathname === subLink.path
                                    ? "text-[#ec2290] font-bold"
                                    : "text-white/50 hover:text-[#ec2290] hover:translate-x-1"
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={closeNav}
                        className={`text-lg font-bold uppercase tracking-wide block py-4 transition-all duration-200 ${
                          isActive
                            ? "text-[#ec2290]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA Button - Enhanced */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0f172a] to-transparent pt-8">
              <Link
                to="/contact"
                onClick={closeNav}
                className="block w-full bg-[#ec2290] text-white text-center py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-[#d01d7a] active:scale-98 transition-all duration-300 shadow-lg"
              >
                Book Your Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}