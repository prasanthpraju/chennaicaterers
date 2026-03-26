import React from 'react';

const services = [
  {
    id: 1,
    title: 'Birthday Party',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Marriage Reception',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Engagement',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Housewarming',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Puberty Function',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Valaikappu Function',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Industrial Catering',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'School College Catering',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Hospital catering',
    image: 'https://images.unsplash.com/photo-1588693959600-41584b8026db?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Hotel accommodation Catering',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
  },
];

export default function CateringServices() {
  return (
    <div className="w-full min-h-screen bg-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12">
          
          {services.map((item) => (
            <div key={item.id} className="relative group cursor-pointer">
              
              {/* This wrapper expands and gets a shadow on hover.
                Using p-3 md:p-4 allows it to fit better on mobile.
              */}
              <div className="relative z-10 p-3 md:p-4 -m-3 md:-m-4 transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] group-hover:z-50">
                
                {/* Image container */}
                <div className="w-full aspect-square overflow-hidden mb-3 md:mb-4 border border-gray-100/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Title */}
                <h3 className="text-center font-bold text-[14px] md:text-[17px] text-[#2c3e50] leading-tight px-1">
                  {item.title}
                </h3>

                {/* Hover Buttons (Hidden by default, reveal on hover) */}
                <div className="grid grid-cols-2 gap-2 md:gap-3 overflow-hidden max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-3 md:group-hover:mt-5 transition-all duration-300 ease-in-out">
                  <button className="bg-[#fb8c26] hover:bg-[#e0771c] text-white font-bold text-[11px] md:text-sm tracking-wide uppercase py-2 md:py-2.5 rounded-sm transition-colors shadow-sm">
                    Book
                  </button>
                  <button className="bg-[#fb8c26] hover:bg-[#e0771c] text-white font-bold text-[11px] md:text-sm tracking-wide uppercase py-2 md:py-2.5 rounded-sm transition-colors shadow-sm">
                    View
                  </button>
                </div>
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}