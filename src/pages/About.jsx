import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Smile, ChefHat, Target, Lightbulb, 
  Users, Utensils, CalendarCheck, Star, Award, Sparkles
} from 'lucide-react';

// Assuming your image imports remain exactly the same
import Aboutimg from "../assets/CateringSection/about.png";
import Aboutimg1 from "../assets/CateringSection/about1.png";
import Aboutimg2 from "../assets/CateringSection/about2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-[72px] font-sans selection:bg-[#ec2290] selection:text-white overflow-x-hidden">
      
      {/* 1. ADVANCED HERO BANNER */}
      <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src={Aboutimg}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Decorative element */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#ec2290]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#ec2290]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ec2290]/20 text-[#ec2290] border border-[#ec2290]/30 text-sm font-bold tracking-widest uppercase mb-4">
            Discover Our Roots
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            About Our Kitchen
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-gray-300 bg-white/10 w-fit mx-auto px-6 py-2 rounded-full border border-white/10">
            <Link to="/" className="hover:text-[#ec2290] transition-colors duration-300">Home</Link>
            <ChevronRight size={16} className="text-[#ec2290]" />
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN STORY SECTION (Modern Overlapping Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 text-[#ec2290] font-bold uppercase tracking-widest mb-4">
              <Award size={20} />
              <span className="text-xs sm:text-sm">The Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1e293b] leading-[1.1] mb-6 tracking-tight">
              The Finest Catering <br className="hidden lg:block"/> Experts in Chennai
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#ec2290] to-[#ec2290]/60 rounded-full mb-8 shadow-sm"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
              <strong className="text-[#1e293b] font-bold">Chennai Caterers</strong> began with a simple mission: to bring the rich, authentic, and diverse flavors of Indian cuisine to every celebration. We are not just food providers; we are culinary architects dedicated to making your events unforgettable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
              From hand-picking the freshest local ingredients to following centuries-old traditional recipes, our master chefs pour their heart into every dish. Whether it's a traditional banana leaf wedding feast, a corporate buffet, or an intimate family gathering, we handle the stress so you can enjoy the moment.
            </p>

            {/* Premium Signature Box */}
            <div className="flex items-center gap-4 sm:gap-5 bg-white p-4 sm:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 inline-flex">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ec2290] to-[#c01a7a] rounded-full flex items-center justify-center text-white font-black text-base sm:text-xl shadow-inner tracking-tighter">
                CC
              </div>
              <div>
                <p className="text-[#1e293b] font-extrabold text-base sm:text-xl tracking-tight">The Chennai Caterers Team</p>
                <p className="text-[#ec2290] text-xs sm:text-sm font-bold uppercase tracking-wide mt-0.5">Serving happiness since 2008</p>
              </div>
            </div>
          </div>

          {/* Advanced Image Grid Display */}
          <div className="order-1 lg:order-2 relative mt-10 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              
              <img 
                src={Aboutimg1}
                alt="Chefs Prepping"
                className="absolute top-0 right-4 sm:right-8 w-3/4 h-[65%] object-cover rounded-2xl sm:rounded-3xl shadow-2xl z-10 border-4 sm:border-8 border-white"
              />
              <img 
                src={Aboutimg2}
                alt="Biryani Cooking" 
                className="absolute bottom-0 left-0 w-[65%] h-[60%] object-cover rounded-2xl sm:rounded-3xl shadow-2xl z-20 border-4 sm:border-8 border-white"
              />
              
              {/* Floating Experience Badge */}
              <div className="absolute top-[45%] -left-4 sm:-left-6 lg:-left-12 -translate-y-1/2 bg-white/95 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center border border-white z-30 w-28 h-28 sm:w-36 sm:h-36">
                <div className="text-[#ec2290] mb-1 sm:mb-2 bg-[#ec2290]/10 p-1.5 sm:p-2 rounded-full">
                  <ChefHat size={20} sm:size={28} />
                </div>
                <p className="text-2xl sm:text-4xl font-black text-[#1e293b] leading-none">15+</p>
                <p className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center mt-1 sm:mt-2">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. FLOATING STATISTICS ROW (Social Proof) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-10 mb-16 sm:mb-20">
        <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 divide-y-4 md:divide-y-0 md:divide-x divide-gray-50">
          {[
            { icon: Users, num: "10k+", label: "Happy Guests", color: "text-[#ec2290]", bg: "bg-[#ec2290]/10" },
            { icon: CalendarCheck, num: "500+", label: "Events Catered", color: "text-[#ec2290]", bg: "bg-[#ec2290]/10" },
            { icon: Utensils, num: "120+", label: "Signature Dishes", color: "text-[#ec2290]", bg: "bg-[#ec2290]/10" },
            { icon: Star, num: "4.9", label: "Average Rating", color: "text-[#ec2290]", bg: "bg-[#ec2290]/10" }
          ].map((stat, index) => (
            <div key={index} className={`flex flex-col items-center pt-6 md:pt-0 ${index < 2 ? 'pt-0' : ''}`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bg} ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}>
                <stat.icon size={22} sm:size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e293b] mb-1">{stat.num}</h3>
              <p className="text-gray-500 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CORE VALUES GRID */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden mt-10">
        <div className="absolute inset-0 z-0 bg-[#1e293b]">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#ec2290]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#ec2290]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Chennai <span className="text-[#ec2290]">Caterers</span>
            </h2>
            <div className="w-24 h-1 bg-[#ec2290] mx-auto mt-5 sm:mt-6 rounded-full"></div>
            <p className="text-gray-400 mt-5 sm:mt-6 font-medium text-sm sm:text-base lg:text-lg tracking-wide uppercase">Our Core Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              { icon: Smile, title: "Who We Are?", desc: "With years of experience, we master changing taste options to provide a delicious and exciting selection of catering packages to our clients." },
              { icon: ChefHat, title: "What We Do?", desc: "We provide food for events in several ways like traditional banana leaf sit-down meals, and grand buffets, exactly as you wish the food to be served." },
              { icon: Target, title: "Our Mission", desc: "To provide all kinds of catering services for personal & corporate events at a lower cost with the assurance of best quality and prompt service." },
              { icon: Lightbulb, title: "Our Vision", desc: "To become the NO 1 catering service provider in Chennai, by means of absolute professionalism and reliability in the catering industry." }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#ec2290]/30">
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-[#ec2290]/10 text-[#ec2290] rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 border border-white/5`}>
                    <item.icon size={28} sm:size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium text-sm sm:text-base transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec2290] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}