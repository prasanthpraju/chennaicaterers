import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, ShoppingBag, Plus } from "lucide-react";

export default function LunchPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://api.chennaicaterers.in";

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/menus?populate=*&filters[category][name][$eq]=lunch`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
      })
      .then((result) => {
        setData(result.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 pt-24 pb-12 md:py-24 font-sans min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-10 md:h-12 w-48 md:w-64 bg-gray-200 rounded-lg animate-pulse mb-4 mx-auto md:mx-0"></div>
          <div className="h-4 w-32 md:w-48 bg-gray-200 rounded animate-pulse mb-10 mx-auto md:mx-0"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col relative animate-pulse pb-2 md:pb-0">
                <div className="h-40 md:h-52 bg-gray-200 w-full rounded-2xl"></div>
                <div className="md:hidden relative z-10 -mt-6 mx-2 bg-white rounded-xl h-16 shadow-sm border border-gray-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-24 font-sans min-h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center px-6">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <AlertCircle size={36} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-3">Menu Unavailable</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto font-medium">We couldn't load the lunch items right now. Please try again.</p>
          <button onClick={() => window.location.reload()} className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg active:scale-95">
            <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" /> TRY AGAIN
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 pt-24 pb-12 md:py-24 font-sans min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-10 md:mb-16"
        > 
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-3 md:mb-4">
            Lunch <span className="text-red-600 relative inline-block">
              Menu
              <motion.svg 
                initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-2 md:h-3 text-red-200" viewBox="0 0 200 10" fill="currentColor"
              >
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
              </motion.svg>
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto md:mx-0 px-2 md:px-0">
            Hearty and fulfilling meals to power your afternoon. We ensure that our lunch is perfectly seasoned and satisfying.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8"
        >
          {data.length > 0 ? (
            data.map((item) => {
              const imageUrl = item.image?.[0]?.url ? `${API_BASE_URL}${item.image[0].url}` : null;

              return (
                <motion.article
                  variants={cardVariants}
                  key={item.documentId || item.id}
                  className="group relative bg-transparent md:bg-white md:rounded-3xl md:shadow-sm md:hover:shadow-xl md:border md:border-gray-100/50 transition-all duration-300 md:hover:-translate-y-1 flex flex-col cursor-pointer pb-2 md:pb-4 md:p-4"
                >
                  {/* Image Area */}
                  <div className="relative h-40 sm:h-48 md:h-52 bg-gray-100 w-full rounded-2xl md:rounded-2xl overflow-hidden flex-shrink-0 z-0 shadow-sm md:shadow-none">
                    {imageUrl ? (
                      <img src={imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                        <ShoppingBag size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Veg Badge */}
                    {item.isVeg && (
                      <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-white/95 backdrop-blur-md text-green-700 text-[10px] md:text-xs px-2 py-1 md:px-2.5 md:py-1.5 rounded-md font-bold shadow-sm flex items-center gap-1 z-10">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></span> Veg
                      </span>
                    )}
                  </div>

                  {/* 📱 MOBILE OVERLAP CONTENT */}
                  <div className="md:hidden relative z-10 -mt-8 mx-1.5 sm:mx-2 bg-white rounded-xl p-2.5 sm:p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col transition-transform active:scale-[0.98]">
                    <h3 className="text-gray-900 font-black text-xs sm:text-sm uppercase tracking-tight line-clamp-1 mb-1">
                      {item.name || "Menu Item"}
                    </h3>
                    
                    <div className="flex justify-between items-end">
                      <span className="text-gray-900 font-bold text-sm sm:text-base tracking-tighter">
                        ₹{item.price || "0"}
                      </span>
                      
                      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 cursor-pointer">
                        {item.isAvailable ? (
                          <>
                            <div className="absolute top-0.5 -left-0.5 w-full h-full bg-lime-400 rounded-lg" />
                            <button className="absolute inset-0 bg-orange-500 text-white rounded-lg flex items-center justify-center shadow-sm w-full h-full active:scale-90 transition-transform">
                              <Plus size={16} strokeWidth={3} />
                            </button>
                          </>
                        ) : (
                          <button disabled className="absolute inset-0 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center border border-gray-200 text-[9px] font-bold">
                            OUT
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 💻 DESKTOP CONTENT AREA */}
                  <div className="hidden md:flex flex-col flex-grow px-2 mt-4">
                    <h3 className="text-lg lg:text-xl font-black text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors duration-300 line-clamp-1 mb-1">
                      {item.name || "Menu Item"}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-sm font-medium flex-grow mb-5 line-clamp-2">
                      {item.description || "A satisfying lunch option."}
                    </p>

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                      <span className="text-gray-900 font-black text-2xl tracking-tighter">
                        ₹{item.price || "0"}
                      </span>
                      
                      <div className="relative w-24 h-10 flex-shrink-0 cursor-pointer group/btn">
                        {item.isAvailable ? (
                          <>
                            <div className="absolute top-1 -left-1 w-full h-full bg-lime-400 rounded-xl transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            <button className="absolute inset-0 bg-orange-400 text-white text-sm font-bold rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300 w-full h-full cursor-pointer focus:outline-none">
                              ADD
                            </button>
                          </>
                        ) : (
                          <button disabled className="absolute inset-0 bg-gray-100 text-gray-400 text-sm font-bold rounded-xl flex items-center justify-center border border-gray-200 cursor-not-allowed w-full h-full">
                            SOLD
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.article>
              );
            })
          ) : (
            <motion.div variants={cardVariants} className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-gray-200 border-dashed shadow-sm mx-2">
              <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mb-4" strokeWidth={1} />
              <p className="text-gray-900 text-lg md:text-xl font-black uppercase tracking-tight mb-2">No items available</p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Check back a little later for our lunch specials!</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}