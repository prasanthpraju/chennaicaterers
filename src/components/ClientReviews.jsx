import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Priya & Rahul",
    role: "Wedding Reception",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "The catering service for our wedding was absolutely phenomenal. The traditional South Indian spread was authentic, and the live counters were a huge hit with our guests. The attention to detail was unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Karthik Rajan",
    role: "Corporate Event",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    text: "We hired them for our annual company gathering of 500+ employees. The logistics were handled flawlessly, and the food was served hot and on time. Highly recommend for large-scale corporate needs!",
    rating: 5
  },
  {
    id: 3,
    name: "Lakshmi Narayanan",
    role: "Family Gathering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "I booked their services for my father's 60th birthday. The custom menu they helped us design was perfect for both the kids and the elders. Tasted exactly like home-cooked meals.",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Desai",
    role: "Cocktail Party",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "Outstanding fusion appetizers and exceptional bartending support! They perfectly understood the vibe of our evening party and delivered a modern menu to remember.",
    rating: 5
  }
];

const SLIDE_DURATION = 4000;

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
      }, SLIDE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const currentReview = reviewsData[currentIndex];

  // Animation for the text changing
  const textVariants = {
    initial: { opacity: 0, y: 15, scale: 0.98 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  return (
    <section className="bg-gray-50 py-12 lg:py-20 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ec2290] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block"
          >
            Word of Mouth
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] leading-tight mb-4"
          >
            Hear From Our <br className="md:hidden" />
            <span className="text-[#ec2290] relative inline-block md:ml-3">
              Guests
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 left-0 h-2 text-[#ec2290]/20" 
                viewBox="0 0 200 10" 
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
              </motion.svg>
            </span>
          </motion.h2>
        </div>

        {/* Main Review Card */}
        <div 
          className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Quote Marks (Themed to brand color) */}
          <Quote size={80} className="absolute top-6 left-8 text-[#ec2290] opacity-5 -z-0 rotate-180" />
          <Quote size={80} className="absolute bottom-6 right-8 text-[#ec2290] opacity-5 -z-0" />

          {/* Review Content Area */}
          <div className="relative z-10 min-h-[180px] md:min-h-[140px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-2xl mx-auto"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < currentReview.rating ? "text-[#ec2290] fill-[#ec2290]" : "text-gray-200 fill-gray-200"} 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed italic mb-8">
                  "{currentReview.text}"
                </p>

                {/* Author Name */}
                <h4 className="text-lg font-bold text-[#1e293b]">{currentReview.name}</h4>
                <p className="text-[#ec2290] text-[10px] font-bold uppercase tracking-widest mt-1.5">
                  {currentReview.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar (Themed) */}
          <div className="w-full h-1 bg-gray-100 mt-10 mb-8 rounded-full overflow-hidden relative max-w-md mx-auto">
            <motion.div 
              key={currentIndex}
              className="absolute top-0 left-0 h-full bg-[#ec2290]"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "0%" : "100%" }}
              transition={{ duration: isHovered ? 0 : (SLIDE_DURATION / 1000), ease: "linear" }}
            />
          </div>

          {/* Interactive Avatar Dock */}
          <div className="flex justify-center items-center gap-3 md:gap-5">
            {reviewsData.map((review, idx) => {
              const isActive = idx === currentIndex;
              
              return (
                <button
                  key={review.id}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative group outline-none"
                  aria-label={`View review by ${review.name}`}
                >
                  <motion.div 
                    animate={{
                      scale: isActive ? 1.2 : 0.9,
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      isActive ? 'border-[#ec2290] shadow-[0_5px_15px_rgba(236,34,144,0.3)] z-10' : 'border-transparent group-hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientReviews;