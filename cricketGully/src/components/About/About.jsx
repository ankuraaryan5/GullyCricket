import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    aos.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            About <span className="text-amber-600">Our Cricket Community</span>
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto" data-aos="fade-up">
            Discover the passion behind our local cricket movement
          </p>
        </header>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            data-aos="fade-up"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 bg-orange-100 flex items-center justify-center">
              <svg className="w-20 h-20 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-3">Our Team</h2>
              <p className="text-gray-600 mb-4">Meet the passionate players and organizers who make our cricket community thrive.</p>
              <Link to="/about/team" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                Meet the team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 bg-orange-100 flex items-center justify-center">
              <svg className="w-20 h-20 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-3">Our History</h2>
              <p className="text-gray-600 mb-4">From humble beginnings to becoming the heart of local cricket culture.</p>
              <Link to="/about/history" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                Explore history
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 bg-orange-100 flex items-center justify-center">
              <svg className="w-20 h-20 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-3">Our Values</h2>
              <p className="text-gray-600 mb-4">The principles that guide our cricket community and tournaments.</p>
              <Link to="/about/values" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center shadow-xl" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Cricket Family</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Whether you're a player, supporter, or just love the game, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
  to="/signup"
  className="cursor-pointer bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-6 rounded-full shadow-lg transition-all"
>
  Register Now
</Link>

<Link
  to="/contact"
  className="cursor-pointer bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-20 hover:text-black font-bold py-3 px-6 rounded-full transition-all"
>
  Contact Us
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;