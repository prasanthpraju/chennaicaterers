import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-[72px] font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image (Spices theme matching your screenshot) */}
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop" 
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-gray-300">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white border-b border-red-500 pb-0.5">Contact Us</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID (Info + Form + Images) */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you have a question about our menu, need a custom catering quote, or just want to say hello, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Contact Info & Images */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Subtle decorative background accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Contact Info</h3>
              
              <ul className="flex flex-col gap-6 relative z-10">
                <li className="flex items-start gap-4 group">
                  <div className="bg-red-50 p-3 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      No. 128, 6th Street, Kambar Nagar,<br/>
                      Periyar Nagar (Post),<br/>
                      Chennai - 600082.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="bg-green-50 p-3 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-gray-600 font-medium hover:text-green-600 cursor-pointer transition-colors">(+91) 8925444055</p>
                    <p className="text-gray-600 font-medium hover:text-green-600 cursor-pointer transition-colors">(+91) 9597755363</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="bg-amber-50 p-3 rounded-2xl text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-600 font-medium hover:text-amber-500 cursor-pointer transition-colors break-all">
                      info@chennaicateringservice.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Food Image Collage (Inspired by your screenshot) */}
            <div className="grid grid-cols-2 gap-4 h-[200px] md:h-[250px]">
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=800&auto=format&fit=crop" 
                alt="Idli Sambar"
                className="w-full h-full object-cover rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              />
              <img 
                src="https://images.unsplash.com/photo-1628127335682-121287114b0b?q=80&w=800&auto=format&fit=crop" 
                alt="Dosa"
                className="w-full h-full object-cover rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Write a message</h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Your Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email & City Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Email ID</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">City</label>
                    <input 
                      type="text" 
                      placeholder="Chennai" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Message *</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your event, guest count, and menu preferences..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Fake reCAPTCHA UI for visual match */}
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded-xl w-fit">
                  <input type="checkbox" className="w-5 h-5 accent-red-600 rounded cursor-pointer" id="robot" />
                  <label htmlFor="robot" className="text-sm font-medium text-gray-700 cursor-pointer">I'm not a robot</label>
                  <div className="ml-6 flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 opacity-70" />
                    <span className="text-[9px] text-gray-400 mt-1">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-2 group flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* 3. INTERACTIVE LOCATION / MAP SECTION */}
      <div className="relative w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Find Us on the Map</h2>
              <p className="text-gray-600 font-medium">Visit our kitchen to discuss your event in person.</p>
            </div>
            <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm">
              <Clock size={18} />
              Open Daily: 8 AM - 10 PM
            </div>
          </div>

          {/* Google Maps iFrame */}
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
            <iframe 
              title="Chennai Caters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9174542289196!2d80.218556!3d13.104444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzE2LjAiTiA4MMKwMTMnMDYuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Overlay hint to interact */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md font-bold text-sm text-gray-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll to zoom
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}