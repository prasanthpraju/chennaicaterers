import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

// Assets
import WhyOurService1 from "../assets/WhyOurService/why1.png"
import WhyOurService2 from "../assets/WhyOurService/why2.png"
import WhyOurService3 from "../assets/WhyOurService/why3.png"
import WhyOurService4 from "../assets/WhyOurService/why4.png"

const WhyOurService = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
               <span className="text-[#ec2290] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block">
                 Our Heritage
               </span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] tracking-tighter leading-tight">
                Excellence in <br />
                <span className="text-[#ec2290] relative inline-block">
                  Catering Services
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
              </h2>
            </motion.div>

            {/* Subtle Brand Border Paragraph */}
            <motion.div variants={fadeUp} className="relative mt-8">
              <div className="absolute -left-4 top-0 w-1 h-full bg-[#ec2290] rounded-full opacity-20 hidden md:block" />
              <div className="space-y-4 md:pl-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                  Chennai Catering Service is a boutique, high-end catering collective. We deliver 
                  elegant, professional services tailored for both private celebrations and corporate functions.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team consists of industry veterans dedicated to perfection. Whether it's an 
                  intimate dinner or a grand wedding reception, we bring the same level of 
                  passion and precision to every plate.
                </p>
              </div>
            </motion.div>

            {/* Quick Action */}
            <motion.div variants={fadeUp} className="pt-4 flex items-center gap-6">
              {/* <button className="bg-[#1e293b] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ec2290] transition-all flex items-center gap-2 group">
                About Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-gray-200" />
                <UtensilsCrossed size={16} className="text-gray-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Refined Image Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative lg:pl-10"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Image 1 */}
              <motion.div variants={fadeUp} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group">
                <img 
                  src={WhyOurService1}
                  alt="Traditional Service" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Image 2 (Higher offset) */}
              <motion.div variants={fadeUp} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group mt-10">
                <img 
                  src={WhyOurService2}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Image 3 (Lower offset) */}
              <motion.div variants={fadeUp} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group -mt-10">
                <img 
                  src={WhyOurService3}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div variants={fadeUp} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl group">
                <img 
                  src={WhyOurService4}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Glassmorphism Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-default"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl px-8 py-6 flex flex-col items-center justify-center rounded-2xl rotate-[-5deg]">
                  <span className="text-xl md:text-2xl font-black text-[#1e293b] italic tracking-tight">
                    Taste It
                  </span>
                  <div className="h-1 w-8 bg-[#ec2290] mt-1 rounded-full" />
                </div>
              </motion.div>

            </div>

            {/* Subtle Gradient Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#ec2290]/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyOurService;