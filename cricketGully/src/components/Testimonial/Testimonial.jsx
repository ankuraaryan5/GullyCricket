import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'National Cricket Player',
      content: 'The coaching I received transformed my game completely. My batting average improved by 40% within just 3 months.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'State Team Captain',
      content: 'The technical insights from the coaches are unparalleled. They identified flaws in my technique that others had missed.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      role: 'Under-19 Player',
      content: 'The mental conditioning program helped me handle pressure situations much better. I now perform consistently in crucial matches.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Women\'s Team',
      content: 'The personalized training regimen took my fitness to international standards. My bowling speed increased by 12kmph!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-orange-50 py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Player Testimonials</h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-4 gap-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-amber-200"
                />
                <div>
                  <h4 className="font-medium text-orange-800">{testimonial.name}</h4>
                  <p className="text-xs text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;