import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-amber-50 min-h-screen overflow-hidden py-12">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200 opacity-10"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            Get In <span className="text-amber-600">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Have questions about our cricket programs? Reach out to our team and we'll get back to you within 24 hours.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8"
            data-aos="fade-right"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-bold text-orange-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-orange-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-orange-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-orange-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="training">Training Programs</option>
                  <option value="tournament">Tournament Registration</option>
                  <option value="coaching">Coaching Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-orange-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-orange-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-800">Our Location</h3>
                    <p className="text-gray-600">Cricket Excellence Center, Sports Complex<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-800">Phone Numbers</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="tel:+912212345678" className="text-amber-600 hover:underline">+91 22 1234 5678</a><br />
                      Training Programs: <a href="tel:+919876543210" className="text-amber-600 hover:underline">+91 98765 43210</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-800">Email Addresses</h3>
                    <p className="text-gray-600">
                      General: <a href="mailto:info@cricketacademy.com" className="text-amber-600 hover:underline">info@cricketacademy.com</a><br />
                      Support: <a href="mailto:support@cricketacademy.com" className="text-amber-600 hover:underline">support@cricketacademy.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755837866493!2d72.82821431584696!3d19.0276879871111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee5dacf15e5%3A0x6a7b11f3a5182d6a!2sWankhede%20Stadium!5e0!3m2!1sen!2sin!4v1624456789012!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-xl p-6 text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-4">Connect With Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition-colors">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;