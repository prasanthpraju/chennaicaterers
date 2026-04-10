import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import your local images
import breakfastImg from "../../assets/CateringSection/breakfast.png";
import lunchImg from "../../assets/CateringSection/lunch.png";
import dinnerImg from "../../assets/CateringSection/dinner.png";

const BASE_URL = "https://api.chennaicaterers.in";

const SubMenuDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itemData = location.state?.itemData;

  const getImageUrl = (imageObj, size = 'medium') => {
    if (!imageObj) return null;
    const url = imageObj.formats?.[size]?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  if (!itemData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Menu Not Found</h2>
          <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">We couldn't load the details for this menu.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="w-full py-3 sm:py-4 bg-[#ec2290] hover:bg-[#d01d7a] text-white rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-[#ec2290]/30 active:scale-95 cursor-pointer text-sm sm:text-base"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  const getHeroImage = (title) => {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('breakfast')) return breakfastImg;
    if (lowerTitle.includes('dinner')) return dinnerImg;
    if (lowerTitle.includes('lunch')) return lunchImg;
    return lunchImg;
  };

  const heroImage = getHeroImage(itemData.title);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 sm:pb-20 md:pb-24 font-sans">
      
      {/* Modern Hero Section */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] w-full bg-gray-900 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white capitalize leading-tight tracking-tight drop-shadow-md">
              {itemData.title} Menu
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-1.5rem] sm:mt-[-2rem] relative z-20">
        
        {/* Floating Action Bar */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl shadow-gray-200/50 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 border border-gray-100">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center text-gray-500 hover:text-[#ec2290] font-bold uppercase tracking-wide text-xs sm:text-sm transition-colors w-full sm:w-auto group active:text-[#ec2290] py-2 sm:py-0"
          >
            <div className="bg-gray-100 group-hover:bg-[#ec2290]/10 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
            Back to Menus
          </button>

          <button className="bg-[#ec2290] hover:bg-[#d01d7a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-[#ec2290]/40 w-full sm:w-auto active:scale-95 cursor-pointer text-sm sm:text-base">
            Book This Menu
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Description */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-[#ec2290] rounded-full"></div>
              <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">About the Menu</h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed">
              {itemData.description || `Experience the finest selection of our ${itemData.title} menu, crafted to provide a truly memorable dining experience.`}
            </p>
          </div>

          {/* Included Items List */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-[#ec2290] rounded-full"></div>
              <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">Included Items</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {itemData.foods?.map((food, index) => (
                <div key={`tag-${food.id}`} className="bg-red-50 border border-red-100 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 flex items-center hover:bg-red-100 transition-colors cursor-default">
                  <span className="text-[#ec2290] font-extrabold text-xs sm:text-sm mr-1.5 sm:mr-2">{index + 1}.</span>
                  <span className="text-red-900 font-semibold text-xs sm:text-sm line-clamp-1">{food.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100 mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-10 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#ec2290] rounded-full"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Menu Gallery</h3>
            </div>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-600 rounded-lg text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide">
              {itemData.foods?.length || 0} Items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {itemData.foods?.map((food, index) => (
              <motion.div
                key={`card-${food.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 sm:h-52 md:h-56 relative overflow-hidden bg-gray-50 w-full">
                  {food.image ? (
                    <>
                      <img
                        src={getImageUrl(food.image)}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">No Image</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow items-start bg-white z-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 capitalize group-hover:text-[#ec2290] transition-colors line-clamp-2">
                    {food.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuDetails;