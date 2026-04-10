import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ChefHat, Wallet, ShieldCheck, Truck, CalendarDays, ArrowRight } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Sourcing fresh ingredients to ensure every dish is nutritious and delicious.",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Master Chefs",
    description: "Veteran culinary team specializing in authentic wood-fire cooking.",
    icon: ChefHat,
  },
  {
    id: 3,
    title: "Budget-Friendly",
    description: "Customizable menus tailored to fit your specific event budget.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Trust & Hygiene",
    description: "Highest standards of safety and cleanliness in every preparation step.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "On-Time Delivery",
    description: "Punctuality promise: food arrives hot and fresh, exactly on schedule.",
    icon: Truck,
  },
  {
    id: 6,
    title: "Complete Planning",
    description: "Logistics handled for everything from intimate dinners to grand weddings.",
    icon: CalendarDays,
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header - Reduced Margins and Sizes */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ec2290] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] leading-tight mb-4"
          >
            The Gold Standard in <br />
            <span className="text-[#ec2290] relative inline-block">
              Catering
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl text-sm md:text-base font-medium"
          >
            We create culinary experiences that linger in memory long after the event ends.
          </motion.p>
        </div>

        {/* Features Grid - Smaller Gap */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.id}
                variants={cardVariants}
                className="group relative bg-gray-50 p-7 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 flex flex-col items-start"
              >
                {/* Icon Section - Reduced Size */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#ec2290] transition-all duration-300">
                    <Icon size={22} className="text-[#ec2290] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#ec2290] rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold text-[#1e293b] mb-2 tracking-tight group-hover:text-[#ec2290] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-4">
                  {feature.description}
                </p>

                <div className="mt-auto flex items-center gap-1.5 text-[#ec2290] font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-5px] group-hover:translate-x-0">
                  More <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;