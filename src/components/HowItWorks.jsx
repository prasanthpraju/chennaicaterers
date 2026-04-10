import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, UserCog, MapPin } from 'lucide-react';

const stepsData = [
  {
    id: "01",
    title: "Choose the Best",
    description: "The best food, service, and attention to detail, alongside any additional arrangements for your special occasion.",
    icon: ClipboardList,
    // Using a gradient based on your brand pink
    color: "from-[#ff6baf] to-[#ec2290]",
    glow: "from-[#ec2290]/40 to-transparent"
  },
  {
    id: "02",
    title: "Specialized Workforce",
    description: "Our competent chefs can produce a wide range of authentic dishes based entirely on your unique tastes.",
    icon: UserCog,
    color: "from-[#ec2290] to-[#d11b7c]",
    glow: "from-[#ec2290]/40 to-transparent"
  },
  {
    id: "03",
    title: "Tradition of Service",
    description: "We focus on the importance of a long history of outstanding customer hospitality and flawless execution.",
    icon: MapPin,
    color: "from-[#d11b7c] to-[#9d0d59]",
    glow: "from-[#d11b7c]/40 to-transparent"
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const drawLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#ec2290] font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] uppercase tracking-tight mb-2">
            How It <span className="text-[#ec2290] relative inline-block">
              Works
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-3 left-0 h-3 text-[#ec2290]/30" 
                viewBox="0 0 200 10" 
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        {/* Steps Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative"
        >
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative flex flex-col items-center group"
              >
                
                {/* Connecting Dashed Line */}
                {index < stepsData.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%] z-0 pointer-events-none">
                    <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <motion.path 
                        variants={drawLineVariants}
                        d="M0 20 Q 100 -10, 200 20" 
                        stroke="#ec2290" 
                        strokeWidth="2" 
                        strokeDasharray="8 8"
                        strokeOpacity="0.3"
                        fill="none"
                      />
                      {/* Arrow head */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        d="M 190 12 L 200 20 L 190 28"
                        stroke="#ec2290"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Icon Circle Container */}
                <div className="relative mb-10 z-10">
                  {/* Background Hover Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${step.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Main White Circle */}
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-28 h-28 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-2 border-transparent group-hover:border-[#ec2290]/20 flex items-center justify-center relative z-10 transition-colors duration-300"
                  >
                    <Icon size={40} strokeWidth={1.5} className="text-gray-400 group-hover:text-[#ec2290] transition-colors duration-500" />
                    
                    {/* Number Badge */}
                    <div className={`absolute -top-2 -left-2 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} shadow-lg border-4 border-white flex items-center justify-center z-20 transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-sm font-black">{step.id}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="text-center px-4 max-w-[280px]">
                  <h3 className="text-xl font-bold text-[#1e293b] mb-4 group-hover:text-[#ec2290] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;