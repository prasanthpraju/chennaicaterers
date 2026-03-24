import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Clock, Users, Star, Heart, Coffee, Utensils, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CateringSection1 from "../assets/CateringSection/sec1.png"
import CateringSection2 from "../assets/CateringSection/sec2.png"
import CateringSection3 from "../assets/CateringSection/sec3.png"


const menuData = [
  {
    id: 1,
    category: "CHENNAI CATERING",
    title: "Break Fast Menu",
    description: "For all occasions and weddings, Chennai Catering Service provides the best breakfast menu; we also assist customers in building a customised menu that is personalised to their preferences and suitable for the celebration.",
    longDescription: "Our breakfast menu features an exquisite selection of traditional South Indian delicacies including crispy dosas, fluffy idlis, flavorful vadas, and aromatic pongal. Each dish is prepared with authentic spices and fresh ingredients, ensuring a memorable start to any celebration.",
    image: CateringSection1,
    features: ["Traditional Recipes", "Fresh Ingredients", "Customizable"],
    rating: 4.9,
    prepTime: "30-45 min",
    serves: "10-500 guests",
    icon: Coffee,
    bgGradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 2,
    category: "CHENNAI CATERING",
    title: "Lunch Menu",
    description: "Chennai Catering Service provides delicious lunch menus for a variety of gatherings and events; we also allow customers to create a custom menu based on their tastes, budget, and pricing range.",
    longDescription: "Experience the richness of authentic Tamil Nadu cuisine with our elaborate lunch menus. From traditional banana leaf service to modern buffet presentations, we offer a wide range of vegetarian and non-vegetarian options.",
    image: CateringSection2,
    features: ["Banana Leaf Service", "Multiple Curries", "Traditional Desserts"],
    rating: 4.8,
    prepTime: "60-90 min",
    serves: "20-1000 guests",
    icon: Utensils,
    bgGradient: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    category: "CHENNAI CATERING",
    title: "Dinner Menu",
    description: "Elegant dinner spreads featuring both South Indian specialties and fusion cuisine, perfect for evening receptions and formal gatherings.",
    longDescription: "Our dinner menu combines traditional flavors with contemporary presentation. Choose from our curated selection of starters, main courses, and desserts that will leave your guests impressed.",
    image: CateringSection3,
    features: ["Live Counters", "Fusion Cuisine", "Premium Ingredients"],
    rating: 4.9,
    prepTime: "45-60 min",
    serves: "15-800 guests",
    icon: Utensils,
    bgGradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    category: "CHENNAI CATERING",
    title: "Dessert Special",
    description: "Indulgent sweet treats and traditional desserts crafted to add a perfect sweet ending to your celebrations.",
    longDescription: "From classic payasam to modern dessert presentations, our sweet menu is designed to delight every palate. We offer a variety of traditional sweets and contemporary options.",
    image: "/path-to-dessert-image.jpg",
    features: ["Traditional Sweets", "Live Counters", "Custom Cakes"],
    rating: 4.9,
    prepTime: "30-45 min",
    serves: "10-500 guests",
    icon: Cake,
    bgGradient: "from-yellow-500/20 to-orange-500/20"
  }
];

const CateringSection = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const currentIndex = menuData.findIndex(menu => menu.id === activeMenu.id);
  
  const nextMenu = () => {
    setDirection(1);
    const nextIndex = (currentIndex + 1) % menuData.length;
    setActiveMenu(menuData[nextIndex]);
    setIsExpanded(false);
  };
  
  const prevMenu = () => {
    setDirection(-1);
    const prevIndex = (currentIndex - 1 + menuData.length) % menuData.length;
    setActiveMenu(menuData[prevIndex]);
    setIsExpanded(false);
  };
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextMenu();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevMenu();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextMenu();
        setIsAutoPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const displayedDescription = isExpanded 
    ? activeMenu.longDescription 
    : activeMenu.description;

  const ActiveIcon = activeMenu.icon;

  // Animation variants for slider
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full mb-3 border border-orange-100">
            <Sparkles size={14} className="text-orange-500 animate-pulse" />
            <span className="text-orange-600 font-semibold text-xs tracking-wide">CURATED EXPERIENCES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Our Signature <span className="text-red-600 relative inline-block">
              Menus
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-2 text-red-200" 
                viewBox="0 0 200 10" 
                fill="currentColor"
              >
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
              </motion.svg>
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm font-medium"
          >
            Discover our carefully crafted culinary offerings
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Featured Image Slider Section */}
          <div className="relative group">
            {/* Background Glow Effect */}
            <div 
              className={`absolute -inset-4 bg-gradient-to-r ${activeMenu.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeMenu.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  <img 
                    src={activeMenu.image} 
                    alt={activeMenu.title} 
                    className="w-full h-[420px] object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <motion.span 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/95 backdrop-blur-sm text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-orange-100"
                    >
                      <Star size={12} className="fill-orange-500 text-orange-500" />
                      {activeMenu.rating}
                    </motion.span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      <Clock size={10} />
                      {activeMenu.prepTime}
                    </motion.span>
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      <Users size={10} />
                      {activeMenu.serves}
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows - On Image */}
              <button 
                onClick={() => {
                  prevMenu();
                  setIsAutoPlaying(false);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous menu"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => {
                  nextMenu();
                  setIsAutoPlaying(false);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next menu"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Auto-play Indicator */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 text-xs"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? "⏸" : "▶"}
              </button>
              
              {/* Progress Bar */}
              {isAutoPlaying && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-20"
                />
              )}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {menuData.map((menu, idx) => (
                <button
                  key={menu.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setActiveMenu(menu);
                    setIsExpanded(false);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 ${
                    activeMenu.id === menu.id
                      ? "w-6 h-2 bg-red-600 rounded-full"
                      : "w-2 h-2 bg-gray-300 rounded-full hover:bg-red-400"
                  }`}
                  aria-label={`Go to ${menu.title}`}
                />
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-red-200 rounded-bl-xl hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-red-200 rounded-tr-xl hidden lg:block" />
          </div>

          {/* Text and Interactive Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-4"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 px-3 py-1.5 rounded-full border border-orange-100">
                <ActiveIcon size={14} className="text-red-600" />
                <span className="text-red-600 font-bold tracking-wider text-xs uppercase">
                  {activeMenu.category}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                {activeMenu.title}
              </h2>
              
              {/* Description */}
              <div className="space-y-2">
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {displayedDescription}
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center gap-1 group text-sm"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                  <ChevronRight 
                    size={14} 
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                  />
                </button>
              </div>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeMenu.features.map((feature, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-semibold hover:bg-red-100 hover:text-red-600 transition-colors cursor-default"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
              
              {/* Manual Navigation Arrows */}
              <div className="flex gap-2 pt-2">
                <button 
                  onClick={() => {
                    prevMenu();
                    setIsAutoPlaying(false);
                  }}
                  className="group w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Previous menu"
                >
                  <ChevronLeft size={18} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    nextMenu();
                    setIsAutoPlaying(false);
                  }}
                  className="group w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Next menu"
                >
                  <ChevronRight size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-2"
              >
                {/* <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden text-sm"> */}
                  {/* <span className="relative z-10">Inquire About This Menu</span> */}
                  {/* <Sparkles size={14} className="relative z-10 group-hover:rotate-12 transition-transform" /> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                {/* </button> */}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

       
      
      </div>
    </section>
  );
};

export default CateringSection;