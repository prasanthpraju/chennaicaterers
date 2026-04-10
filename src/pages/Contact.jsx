import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, CalendarHeart } from 'lucide-react';
import contact from "../assets/CateringSection/contact.png";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Simulating an API call for sending the message
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-[72px] font-sans selection:bg-[#ec2290] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src={contact}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#ec2290]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#ec2290]/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
          >
            Get In Touch
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base font-bold text-gray-300 bg-white/10 w-fit mx-auto px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
          >
            <Link to="/" className="hover:text-[#ec2290] transition-colors duration-300">Home</Link>
            <ChevronRight size={16} className="text-[#ec2290]" />
            <span className="text-white">Contact</span>
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-20 -mt-10">
        
        {/* Contact Details & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Static Premium Contact Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 bg-[#ec2290]/10 text-[#ec2290] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6 border border-[#ec2290]/20">
                <MessageSquare size={14} />
                Contact Information
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] mb-3 sm:mb-4 tracking-tight">
                We'd love to hear from you.
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-medium">
                Whether you have a question about our menus, pricing, or want to book an event, our team is ready to answer all your questions.
              </p>

              <div className="space-y-5 sm:space-y-6">
                
                {/* Block 1: Event Bookings */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#ec2290] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ec2290] shrink-0">
                      <CalendarHeart size={20} sm:size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Catering &</p>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1e293b]">Event Bookings</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-xl mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ec2290]/10 flex items-center justify-center text-[#ec2290]">
                      <Phone size={16} sm:size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Direct Line</p>
                      <p className="text-sm sm:text-base font-bold text-gray-800">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ec2290]/10 flex items-center justify-center text-[#ec2290]">
                      <Mail size={16} sm:size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-sm sm:text-base font-bold text-gray-800">hello@chennaicaterers.com</p>
                    </div>
                  </div>
                </div>

                {/* Block 2: Location / Address */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#ec2290] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ec2290] shrink-0">
                      <MapPin size={20} sm:size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Head Office</p>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-2 sm:mb-3">Our Kitchen</h3>
                      <p className="text-gray-600 font-bold leading-relaxed text-xs sm:text-sm">
                        123 Catering Lane, T. Nagar,<br /> Chennai, Tamil Nadu 600017
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#ec2290]/5 rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              
              <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] mb-6 sm:mb-8 relative z-10">Send us a Message</h3>
              
              {/* Success Notification */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 sm:mb-8 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl flex items-center gap-3 relative z-10"
                  >
                    <div className="bg-green-100 text-green-600 p-1.5 sm:p-2 rounded-full">
                      <CheckCircle2 size={20} sm:size={24} />
                    </div>
                    <div>
                      <h4 className="text-green-800 font-bold text-sm sm:text-base">Message Sent Successfully!</h4>
                      <p className="text-green-600 text-xs sm:text-sm font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-5 sm:space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-[#1e293b] ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name" 
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 bg-gray-50 text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#ec2290] focus:ring-2 focus:ring-[#ec2290]/20 transition-all font-medium text-sm sm:text-base"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-[#1e293b] ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number" 
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 bg-gray-50 text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#ec2290] focus:ring-2 focus:ring-[#ec2290]/20 transition-all font-medium text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1e293b] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address" 
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 bg-gray-50 text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#ec2290] focus:ring-2 focus:ring-[#ec2290]/20 transition-all font-medium text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-[#1e293b] ml-1">Your Message</label>
                  <textarea 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your event..." 
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 bg-gray-50 text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#ec2290] focus:ring-2 focus:ring-[#ec2290]/20 transition-all font-medium text-sm sm:text-base resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={submitStatus === 'submitting'}
                  className={`w-full group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 shadow-lg cursor-pointer active:scale-[0.98] ${
                    submitStatus === 'submitting' 
                      ? 'bg-[#ec2290]/60 text-white cursor-not-allowed shadow-none' 
                      : 'bg-[#ec2290] hover:bg-[#c01a7a] text-white hover:shadow-[#ec2290]/30'
                  }`}
                >
                  <span className="text-sm sm:text-base">{submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  {submitStatus !== 'submitting' && (
                    <Send size={16} sm:size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}