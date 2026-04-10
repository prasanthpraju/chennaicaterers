import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Birthday Party',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
    description: 'Make your special day memorable with our delicious catering',
  },
  {
    id: 2,
    title: 'Marriage Reception',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop',
    description: 'Elegant dining experience for your wedding celebration',
  },
  {
    id: 3,
    title: 'Engagement',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    description: 'Celebrate your love with exquisite culinary delights',
  },
  {
    id: 4,
    title: 'Housewarming',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
    description: 'Warm your new home with our authentic flavors',
  },
  {
    id: 5,
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    description: 'Professional catering for business gatherings',
  },
  {
    id: 6,
    title: 'Puberty Function',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional celebrations made special',
  },
  {
    id: 7,
    title: 'Valaikappu Function',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=800&auto=format&fit=crop',
    description: 'Bless the occasion with authentic cuisine',
  },
  {
    id: 8,
    title: 'Industrial Catering',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=800&auto=format&fit=crop',
    description: 'Bulk catering solutions for industries',
  },
  {
    id: 9,
    title: 'School College Catering',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop',
    description: 'Nutritious meals for educational institutions',
  },
  {
    id: 10,
    title: 'Hospital Catering',
    image: 'https://images.unsplash.com/photo-1588693959600-41584b8026db?q=80&w=800&auto=format&fit=crop',
    description: 'Healthy and hygienic meals for patients',
  },
  {
    id: 11,
    title: 'Hotel Catering',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
    description: 'Premium catering for hotels and accommodations',
  },
];

export default function CateringServices() {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#ec2290]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#ec2290]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <UtensilsCrossed size={18} className="text-[#ec2290]" />
              <span className="text-[#ec2290] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px]">
                What We Offer
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] tracking-tighter mb-3">
              Catering <span className="text-[#ec2290]">Services</span>
            </h1>
            
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto px-4">
              From intimate gatherings to grand celebrations, we provide exceptional 
              catering experiences tailored to your needs
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-[#ec2290] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>

                {/* Content - No Buttons */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e293b] mb-2 group-hover:text-[#ec2290] transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border-2 border-[#ec2290] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Simple Footer Note - Removed CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            Custom packages available for all occasions
          </p>
        </motion.div>

      </div>
    </div>
  );
}