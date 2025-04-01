import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      {/* Background cricket elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
            data-aos="fade-down"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            <span className="block">Experience The Thrill of</span>
            <span className="block text-orange-200">Gully Cricket</span>
          </h1>
          
          <p 
            className="mt-6 max-w-lg mx-auto text-xl text-orange-100"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Join India's largest street cricket community. Play, compete, and rise through the ranks!
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="/signup"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-orange-600 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Register Now
            </a>
            <a
              href="/tournaments"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-700 bg-opacity-80 hover:bg-opacity-100 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Tournaments
            </a>
          </div>
        </div>

        {/* Cricket Stats Highlights */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-300 border-opacity-30">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-orange-100">Active Players</p>
          </div>
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-300 border-opacity-30">
            <p className="text-3xl font-bold text-white">100+</p>
            <p className="text-orange-100">Tournaments</p>
          </div>
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-300 border-opacity-30">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-orange-100">Cities</p>
          </div>
          <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-300 border-opacity-30">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-orange-100">Matches</p>
          </div>
        </div>

        {/* Cricket Pitch Divider */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-dashed border-orange-300 border-opacity-50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-orange-600 text-white rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Cricket Ball Scrolling Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute -left-16 bottom-4 w-12 h-12 bg-white rounded-full animate-scroll-ball"></div>
        <div className="absolute -left-32 bottom-6 w-8 h-8 bg-white rounded-full animate-scroll-ball-delay"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-ball {
          0% { transform: translateX(0) rotate(0deg); }
          100% { transform: translateX(calc(100vw + 100px)) rotate(360deg); }
        }
        .animate-scroll-ball {
          animation: scroll-ball 15s linear infinite;
        }
        .animate-scroll-ball-delay {
          animation: scroll-ball 20s linear infinite 2s;
        }
      `}</style>
    </header>
  );
}

export default Header;