import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cricket News Hub</h3>
            <p className="text-orange-200">Your one-stop destination for all cricket updates, scores, and analysis from around the world.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-200 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">Live Scores</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">Upcoming Matches</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition">Player Rankings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white text-2xl transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-orange-200 hover:text-white text-2xl transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-orange-200 hover:text-white text-2xl transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-orange-200 hover:text-white text-2xl transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p className="text-orange-200 mt-4">Subscribe to our newsletter</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-700 mt-8 pt-6 text-center text-orange-300">
          <p>© {new Date().getFullYear()} Cricket News Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;