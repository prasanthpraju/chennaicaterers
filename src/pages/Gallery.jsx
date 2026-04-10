import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const BASE_URL = "https://api.chennaicaterers.in";
const ITEMS_PER_PAGE = 12;

// =========================================================================
// Helper Functions
// =========================================================================
const getOptimizedUrl = (mediaObj, preferLarge = false) => {
  if (!mediaObj) return null;
  const endpoint = preferLarge 
    ? (mediaObj.formats?.large?.url || mediaObj.url)
    : (mediaObj.formats?.medium?.url || mediaObj.formats?.small?.url || mediaObj.url);
  return endpoint ? `${BASE_URL}${endpoint}` : null;
};

// =========================================================================
// Animation Variants
// =========================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 300, damping: 25, duration: 0.4 } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95, 
    transition: { duration: 0.2 } 
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// =========================================================================
// Sub-components for better organization
// =========================================================================
const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      className="relative w-20 h-20"
    >
      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-[#ec2290] rounded-full border-t-transparent shadow-lg"></div>
    </motion.div>
    <motion.p 
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="mt-8 text-gray-500 font-bold tracking-widest uppercase text-xs"
    >
      Loading Gallery...
    </motion.p>
  </div>
);

const EmptyState = () => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 px-6"
  >
    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Gallery Under Curation</h3>
    <p className="text-gray-500 font-medium max-w-sm mx-auto">
      Our team is busy documenting their finest work. Exciting visuals coming soon!
    </p>
  </motion.div>
);

const GalleryCard = ({ item, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={cardVariants}
      onClick={() => onClick(item.id)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      whileTap={{ scale: 0.98 }}
    >
      {item.type === "photo" ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse" />
          )}
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transform transition-all duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
            } ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </>
      ) : (
        <div className="relative w-full h-full">
          <video
            src={item.src}
            poster={item.poster}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300">
            <motion.div 
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#ec2290] transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
          </div>
        </div>
      )}

      {/* Overlay with title - only on hover for photos */}
      {item.type === "photo" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 transition-all duration-300"
        >
          <h3 className="text-white text-base md:text-lg font-bold line-clamp-1 drop-shadow-md">
            {item.title}
          </h3>
          <p className="text-white/70 text-xs mt-1 capitalize">{item.category}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex justify-center items-center gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full border-2 transition-all duration-300 ${
          currentPage === 1 
            ? "border-gray-200 text-gray-300 cursor-not-allowed" 
            : "border-gray-300 text-gray-600 hover:border-[#ec2290] hover:text-[#ec2290] hover:bg-pink-50"
        }`}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((page, idx) => (
          page === '...' ? (
            <span key={`dots-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">
              ...
            </span>
          ) : (
            <motion.button
              key={page}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
                currentPage === page
                  ? "bg-[#ec2290] text-white shadow-lg shadow-pink-500/30"
                  : "bg-white border-2 border-gray-200 text-gray-600 hover:border-[#ec2290] hover:text-[#ec2290]"
              }`}
            >
              {page}
            </motion.button>
          )
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full border-2 transition-all duration-300 ${
          currentPage === totalPages 
            ? "border-gray-200 text-gray-300 cursor-not-allowed" 
            : "border-gray-300 text-gray-600 hover:border-[#ec2290] hover:text-[#ec2290] hover:bg-pink-50"
        }`}
        aria-label="Next page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
};

const Lightbox = ({ items, selectedIndex, onClose, onNext, onPrev }) => {
  const currentItem = items[selectedIndex];
  
  if (!currentItem) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-lg"
      onClick={onClose}
    >
      {/* Close button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-[#ec2290] p-3 rounded-full transition-all z-50"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </motion.button>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
          <motion.button 
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all z-50"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all z-50"
            aria-label="Next"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </>
      )}

      {/* Content */}
      <div 
        className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {currentItem.type === "photo" ? (
              <img
                src={currentItem.highResSrc || currentItem.src}
                alt={currentItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                loading="eager"
              />
            ) : (
              <video
                src={currentItem.src}
                className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl bg-black"
                controls
                autoPlay
                playsInline
                poster={currentItem.poster}
              />
            )}
            
            {/* Caption */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-center"
            >
              <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide">
                {currentItem.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {selectedIndex + 1} of {items.length}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail navigation indicator */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {items.slice(0, 5).map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === selectedIndex % 5 ? "w-6 bg-[#ec2290]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// =========================================================================
// Main Gallery Component
// =========================================================================
const Gallery = () => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const tabs = useMemo(() => ["All", "Photos", "Videos"], []);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/galleries?populate=*&pagination[pageSize]=100`);
      const rawData = res.data?.data || [];

      const formattedItems = rawData.flatMap((item) => {
        const mediaEntries = [];
        const baseId = item.id || item.documentId;

        if (item.image) {
          const safeImageUrl = getOptimizedUrl(item.image);
          const highResUrl = getOptimizedUrl(item.image, true);
          if (safeImageUrl) {
            mediaEntries.push({
              id: `${baseId}-photo`,
              type: "photo",
              category: "Photos",
              src: safeImageUrl,
              highResSrc: highResUrl, 
              title: item.title || "Gallery Image",
            });
          }
        }

        if (item.video) {
          mediaEntries.push({
            id: `${baseId}-video`,
            type: "video",
            category: "Videos",
            src: `${BASE_URL}${item.video.url}`,
            poster: getOptimizedUrl(item.image),
            title: item.title || "Gallery Video",
          });
        }

        return mediaEntries;
      });

      setItems(formattedItems);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (activeTab === "All") return true;
      if (activeTab === "Photos") return item.type === "photo";
      if (activeTab === "Videos") return item.type === "video";
      return true;
    });
  }, [items, activeTab]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
  const paginatedItems = useMemo(() => {
    return filteredItems.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredItems, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setSelectedIndex(null);
  }, [activeTab]);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }, []);

  const openLightbox = useCallback((id) => {
    const index = filteredItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setSelectedIndex(index);
      document.body.style.overflow = 'hidden';
    }
  }, [filteredItems]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev, closeLightbox]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32 pb-24">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <span className="inline-block py-1.5 px-5 bg-gradient-to-r from-pink-50 to-pink-100 text-[#ec2290] font-extrabold tracking-widest uppercase text-xs mb-4 rounded-full shadow-sm">
            Our Visual Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec2290] to-pink-700">Gallery</span>
          </h1>
          <p className="text-gray-600 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of exquisite catering moments, culinary artistry, and memorable events.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4"
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#ec2290] text-white shadow-lg shadow-pink-500/40"
                : "bg-white text-gray-600 hover:bg-pink-50 hover:text-[#ec2290] border-2 border-gray-200 shadow-sm"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={`gallery-${activeTab}-${currentPage}`}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={openLightbox} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && <EmptyState />}

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Results count */}
        {filteredItems.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-gray-500 text-sm font-medium"
          >
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length} items
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox 
            items={filteredItems}
            selectedIndex={selectedIndex}
            onClose={closeLightbox}
            onNext={showNext}
            onPrev={showPrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;