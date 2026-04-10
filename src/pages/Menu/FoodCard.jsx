import React from "react";

const FoodCard = ({ food }) => {
  if (!food) return null;

  const imagePath =
    food.image?.url ||
    food.image?.data?.url ||
    food.image?.data?.attributes?.url;

  const imageUrl = imagePath
    ? `https://api.chennaicateres.in${imagePath}`
    : "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={food.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#ec2290] transition-colors line-clamp-1">
          {food.name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1.5 sm:mt-2 line-clamp-2">
          {food.description}
        </p>
        <p className="text-[#ec2290] font-bold text-lg sm:text-xl mt-3 sm:mt-4">
          ₹{food.price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;