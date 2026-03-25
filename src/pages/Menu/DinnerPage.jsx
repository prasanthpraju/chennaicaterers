import { useEffect, useState } from "react";

export default function DinnerPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for resolving relative image paths from your CMS
  const API_BASE_URL = "https://api.chennaicaterers.in";

  useEffect(() => {
    // Updated API endpoint for dinner
    fetch(`${API_BASE_URL}/api/menus?populate=*&filters[category][name][$eq]=dinner`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
      })
      .then((result) => {
        // Strapi wraps the array inside a "data" property
        setData(result.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 1. Premium Skeleton Loader
  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto min-h-screen">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white h-72 animate-pulse flex flex-col">
              <div className="h-32 bg-gray-100 rounded-xl mb-4 w-full"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-auto"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="p-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="text-red-400 text-5xl mb-4">🍽️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Menu is unavailable</h2>
        <p className="text-gray-500 mb-6">We couldn't load the dinner items right now.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-gray-50/50">
      
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          Dinner Menu
        </h1>
        <p className="text-gray-500 text-lg">
          Explore our evening specials, curated just for you.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.length > 0 ? (
          data.map((item) => {
            // Safely extract the image URL and prepend the API domain
            const imageUrl = item.image?.[0]?.url 
              ? `${API_BASE_URL}${item.image[0].url}` 
              : null;

            return (
              <article
                key={item.documentId || item.id}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="h-44 bg-gray-100 relative overflow-hidden flex-shrink-0">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                  )}
                  
                  {/* Veg Badge Overlay */}
                  {item.isVeg && (
                    <span className="absolute top-3 right-3 bg-green-50/95 backdrop-blur-sm text-green-700 border border-green-200 text-xs px-2.5 py-1 rounded-md font-bold shadow-sm flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span> Veg
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-gray-900 mb-1 capitalize line-clamp-1 group-hover:text-red-600 transition-colors">
                    {item.name || "Menu Item"}
                  </h3>
                  
                  <p className="text-gray-500 text-sm flex-grow mb-5 line-clamp-2">
                    {item.description || "A wonderful dinner to end the day."}
                  </p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-gray-900 font-black text-xl tracking-tight">
                      ₹{item.price || "0"}
                    </span>
                    
                    {/* Add Button - Handles isAvailable status */}
                    <button 
                      disabled={!item.isAvailable}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors focus:ring-2 focus:outline-none 
                        ${item.isAvailable 
                          ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-300' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                    >
                      {item.isAvailable ? 'Add' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 border-dashed">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-gray-600 text-lg font-medium">No dinner items available right now.</p>
            <p className="text-gray-400 text-sm mt-1">Check back a little later!</p>
          </div>
        )}
      </div>
    </div>
  );
}