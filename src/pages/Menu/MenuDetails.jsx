import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Utensils } from "lucide-react";

const BASE_URL = "https://api.chennaicaterers.in";

const MenuDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMenu();
  }, [type]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/menus/${type}`);
      setMenu(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setMenu([]);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imageObj) => {
    if (!imageObj) return null;
    const url = imageObj.formats?.medium?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] bg-white px-4">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
        >
          <div className="absolute inset-0 border-4 border-[#ec2290]/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#ec2290] rounded-full border-t-transparent shadow-[0_0_15px_rgba(236,34,144,0.3)]"></div>
          <Utensils className="text-[#ec2290]" size={18} />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-[#ec2290] font-bold tracking-[0.2em] uppercase text-[9px] sm:text-[10px] text-center"
        >
          Curating Flavors
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Decorative Blobs - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-[#ec2290]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="hidden md:block absolute top-1/3 left-0 w-[200px] h-[200px] bg-[#ec2290]/5 rounded-full blur-[80px] -z-10 -translate-x-1/2" />

      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 pb-12 sm:pb-16 max-w-7xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#ec2290] font-bold uppercase tracking-widest text-[9px] sm:text-[10px] mb-4 sm:mb-6 transition-colors group active:text-[#ec2290]"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Menus
          </motion.button>

          <motion.span 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#ec2290] font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mb-2 block"
          >
            Signature Collection
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black capitalize text-[#1e293b] tracking-tighter leading-tight px-2"
          >
            {type} <span className="text-[#ec2290]">Menu</span>
          </motion.h1>
        </div>

        {/* Content Section */}
        {menu.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 sm:py-16 px-4 bg-gray-50 rounded-2xl sm:rounded-3xl border border-dashed border-gray-200"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white shadow-md rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Utensils className="text-gray-300" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-1 text-center">Coming Soon</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-medium text-center px-4">Our chefs are still perfecting this selection.</p>
          </motion.div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
          >
            {menu.map((item) => (
              <motion.div 
                key={item.id} 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group h-full"
              >
                <Link 
                  to={`/menu-item/${item.documentId}`}
                  state={{ itemData: item }}
                  className="flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full relative active:scale-[0.98]"
                >
                  {/* Image Container */}
                  <div className="h-48 sm:h-52 md:h-56 w-full relative overflow-hidden bg-gray-50">
                    {item.image ? (
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <Utensils className="text-gray-300" size={32} />
                      </div>
                    )}
                    
                    {/* Mobile touch indicator */}
                    <div className="absolute bottom-3 right-3 md:hidden bg-white/90 backdrop-blur-sm w-8 h-8 rounded-lg flex items-center justify-center text-[#ec2290] shadow-md">
                      <ArrowRight size={14} />
                    </div>

                    {/* Desktop FAB */}
                    <div className="hidden md:flex absolute bottom-4 right-4 bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-xl items-center justify-center text-[#ec2290] shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <ArrowRight size={16} />
                    </div>

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#1e293b] mb-1.5 sm:mb-2 group-hover:text-[#ec2290] transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4 flex-grow">
                      {item.description || "A masterfully crafted selection of flavors tailored for your event."}
                    </p>
                    
                    {/* Footer Divider */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                      <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        Signature Dish
                      </span>
                      <div className="w-6 sm:w-8 h-[2px] bg-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#ec2290] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MenuDetails;