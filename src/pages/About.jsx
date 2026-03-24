import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Smile, ChefHat, Target, Lightbulb, 
  Users, Utensils, CalendarCheck, Award, ShieldCheck, Clock, Star 
} from 'lucide-react';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-[72px] font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" 
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            About Our Kitchen
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-gray-300">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white border-b border-red-500 pb-0.5">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN STORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-red-100">
              <Award size={16} />
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              The Best Catering <br/> Experts in Chennai
            </h2>
            <div className="w-24 h-1.5 bg-green-500 rounded-full mb-8 shadow-sm"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              <strong className="text-gray-900">Chennai Caters</strong> began with a simple mission: to bring the rich, authentic, and diverse flavors of Indian cuisine to every celebration. We are not just food providers; we are culinary architects dedicated to making your events unforgettable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              From hand-picking the freshest local ingredients to following centuries-old traditional recipes, our master chefs pour their heart into every dish. Whether it's a traditional banana leaf wedding feast, a corporate buffet, or an intimate family gathering, we handle the stress so you can enjoy the moment.
            </p>

            {/* Signature / Founder Note */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 inline-flex">
               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-black text-xl">
                 CC
               </div>
               <div>
                 <p className="text-gray-900 font-bold text-lg">The Chennai Caters Team</p>
                 <p className="text-gray-500 text-sm font-medium">Serving happiness since 2008</p>
               </div>
            </div>
          </div>

          {/* Image Grid Display */}
          <div className="order-1 lg:order-2 relative grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" 
              alt="Indian Sweets" 
              className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop" 
              alt="Biryani Cooking" 
              className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-lg"
            />
            
            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center border-4 border-gray-50 z-10 w-40 h-40">
              <div className="text-red-600 mb-1">
                <ChefHat size={32} />
              </div>
              <p className="text-3xl font-black text-gray-900">15+</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest text-center mt-1">Years of<br/>Excellence</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. STATISTICS ROW (Social Proof) */}
      <div className="bg-white border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100 text-center">
          <div className="flex flex-col items-center">
            <Users size={32} className="text-red-500 mb-3" />
            <h3 className="text-4xl font-black text-gray-900 mb-1">10k+</h3>
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Happy Guests</p>
          </div>
          <div className="flex flex-col items-center">
            <CalendarCheck size={32} className="text-green-500 mb-3" />
            <h3 className="text-4xl font-black text-gray-900 mb-1">500+</h3>
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Events Catered</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <Utensils size={32} className="text-orange-500 mb-3" />
            <h3 className="text-4xl font-black text-gray-900 mb-1">120+</h3>
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Signature Dishes</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <Star size={32} className="text-yellow-500 mb-3" />
            <h3 className="text-4xl font-black text-gray-900 mb-1">4.9</h3>
            <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Average Rating</p>
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE US (New Section) */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just cook food; we craft experiences. Here is what makes us the preferred choice for thousands of families and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, color: "text-green-600", bg: "bg-green-50", title: "Uncompromising Hygiene", desc: "Our kitchens adhere to strict safety and sanitation protocols, ensuring every meal is as safe as it is delicious." },
            { icon: Clock, color: "text-red-600", bg: "bg-red-50", title: "Punctual Delivery", desc: "We respect your schedule. Our logistics team ensures your food arrives hot, fresh, and exactly on time, every single time." },
            { icon: Utensils, color: "text-orange-600", bg: "bg-orange-50", title: "Authentic Taste", desc: "No artificial flavors. We use traditional cooking methods and farm-fresh ingredients to maintain the true essence of our recipes." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CORE VALUES GRID (From your screenshots) */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Chennai <span className="text-red-500">Caters</span>
            </h2>
            <p className="text-gray-400 mt-3 font-medium text-lg">Our Core Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smile size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Who We Are?</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg">
                With years of experience, we master changing taste options to provide a delicious and exciting selection of catering packages to our clients.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChefHat size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">What We Do?</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg">
                We provide food for events in several ways like traditional banana leaf sit-down meals, and grand buffets, exactly as you wish the food to be served.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg">
                To provide all kinds of catering services for personal & corporate events at a lower cost with the assurance of best quality and prompt service.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg">
                To become the NO 1 catering service provider in Chennai, by means of absolute professionalism and reliability in the catering industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CALL TO ACTION (CTA) SECTION */}
      <div className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to make your event memorable?
          </h2>
          <p className="text-red-100 text-lg mb-8 font-medium">
            Let's discuss your menu. Get in touch with our catering experts today to get a custom quote for your upcoming celebration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
              Contact Us Now
            </Link>
            <Link to="/menu" className="bg-red-700 text-white hover:bg-red-800 border border-red-500 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}