import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Send, Sparkles, ChefHat } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-[72px] font-sans selection:bg-red-500 selection:text-white">
      
      {/* 1. HERO BANNER */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image (Spices theme) */}
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" 
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-gray-300 bg-white/10 w-fit mx-auto px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
            <Link to="/" className="hover:text-red-400 transition-colors duration-300">Home</Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN "COMING SOON" CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-red-100 rounded-full blur-[100px] opacity-60 z-0"></div>

        <div className="relative z-10 bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 text-center">
          
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-red-100">
            <Sparkles size={16} />
            Launching Soon
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            We are preparing our <br className="hidden md:block"/> master kitchen.
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Our official contact details, physical address, and phone lines are currently being set up. We can't wait to start serving you the finest authentic catering in Chennai very soon!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500">
                  <ChefHat size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Operations Starting</h3>
                <p className="text-sm text-gray-500 font-medium">Updates coming soon</p>
             </div>
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-500">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Email Enquiries</h3>
                <p className="text-sm text-gray-500 font-medium">Temporarily unavailable</p>
             </div>
          </div>

          {/* Waitlist / Notification Form */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">Want to be the first to know?</h3>
                <p className="text-slate-400 font-medium">Leave your email and we'll notify you the moment our catering lines open.</p>
              </div>
              
              <form className="w-full md:w-auto flex-1 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                  required
                />
                <button 
                  type="submit" 
                  className="group flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shrink-0 whitespace-nowrap hover:-translate-y-0.5"
                >
                  <span>Notify Me</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}