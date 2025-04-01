import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aos from 'aos';
import 'aos/dist/aos.css';

const Leaderboard = () => {
  useEffect(() => {
    aos.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  // Gully cricket players data
  const players = [
    {
      id: 1,
      name: 'Raju Kaka',
      village: 'Choti Kashi',
      runs: 128,
      matches: 7,
      sixes: 18,
      role: 'Batsman',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Chotu Bhaiya',
      village: 'Naya Gaon',
      runs: 112,
      matches: 8,
      sixes: 15,
      role: 'All-rounder',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Billi Mausi',
      village: 'Choti Kashi',
      runs: 98,
      matches: 6,
      sixes: 12,
      role: 'Bowler',
      image: 'https://images.unsplash.com/photo-1519244700835-56d3b6f3b9c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'Guddu Chacha',
      village: 'Purana Pind',
      runs: 87,
      matches: 5,
      sixes: 10,
      role: 'Batsman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      name: 'Munni Didi',
      village: 'Naya Gaon',
      runs: 76,
      matches: 6,
      sixes: 8,
      role: 'Wicketkeeper',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Village colors mapping
  const villageColors = {
    'Choti Kashi': 'bg-orange-100 text-orange-800',
    'Naya Gaon': 'bg-green-100 text-green-800',
    'Purana Pind': 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating decorative elements (cricket balls) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200 opacity-20"
            style={{
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundImage: 'radial-gradient(circle at 30% 30%, #fff, #f97316)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12" data-aos="fade-down">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-orange-800 mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-amber-600">Gully Cricket</span> Leaderboard
          </motion.h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" data-aos="fade" data-aos-delay="300"></div>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Ranking of our local cricket heroes from nearby villages
          </p>
        </header>

        {/* Village Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md">
            All Villages
          </button>
          <button className="bg-white hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200 transition-colors">
            Choti Kashi
          </button>
          <button className="bg-white hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200 transition-colors">
            Naya Gaon
          </button>
          <button className="bg-white hover:bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200 transition-colors">
            Purana Pind
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-orange-600 text-white p-4 font-bold text-sm md:text-base">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-4">Player</div>
            <div className="col-span-3">Village</div>
            <div className="col-span-1 text-center">Matches</div>
            <div className="col-span-1 text-center">Runs</div>
            <div className="col-span-2 text-center">Sixes</div>
          </div>

          {/* Table Rows */}
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              className="grid grid-cols-12 items-center p-3 md:p-4 border-b border-orange-100 hover:bg-orange-50 transition-colors"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
              whileHover={{ scale: 1.005 }}
            >
              <div className="col-span-1 text-center text-orange-700 font-bold">
                {index + 1}
                {index < 3 && (
                  <span className="ml-1">
                    {index === 0 ? '🏆' : index === 1 ? '🥈' : '🥉'}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex items-center">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover mr-3 border-2 border-orange-200"
                />
                <div>
                  <h3 className="font-bold text-orange-800 text-sm md:text-base">{player.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${player.role === 'Batsman' ? 'bg-orange-100 text-orange-800' : player.role === 'Bowler' ? 'bg-red-100 text-red-800' : 'bg-purple-100 text-purple-800'}`}>
                    {player.role}
                  </span>
                </div>
              </div>
              <div className="col-span-3">
                <span className={`text-xs px-2 py-1 rounded-full ${villageColors[player.village]}`}>
                  {player.village}
                </span>
              </div>
              <div className="col-span-1 text-center text-orange-700">{player.matches}</div>
              <div className="col-span-1 text-center font-bold text-orange-800">{player.runs}</div>
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center">
                  <span className="font-bold text-amber-600 mr-1">{player.sixes}</span>
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <motion.div 
            className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-500"
            data-aos="fade-up"
            whileHover={{ y: -3 }}
          >
            <h3 className="font-bold text-orange-800 mb-2">Most Sixes</h3>
            <div className="flex items-center">
              <img 
                src={players[0].image} 
                alt={players[0].name} 
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-amber-200"
              />
              <div>
                <h4 className="font-medium">{players[0].name}</h4>
                <p className="text-sm text-orange-600">{players[0].sixes} sixes</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500"
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ y: -3 }}
          >
            <h3 className="font-bold text-orange-800 mb-2">Best Bowler</h3>
            <div className="flex items-center">
              <img 
                src={players[2].image} 
                alt={players[2].name} 
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-blue-200"
              />
              <div>
                <h4 className="font-medium">{players[2].name}</h4>
                <p className="text-sm text-blue-600">7 wickets</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-4 rounded-xl shadow-md border-l-4 border-green-500"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ y: -3 }}
          >
            <h3 className="font-bold text-orange-800 mb-2">Emerging Player</h3>
            <div className="flex items-center">
              <img 
                src={players[4].image} 
                alt={players[4].name} 
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-green-200"
              />
              <div>
                <h4 className="font-medium">{players[4].name}</h4>
                <p className="text-sm text-green-600">5 catches</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Village Trophy */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white text-center shadow-xl"
          data-aos="fade-up"
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-4xl mb-2">🏆</div>
          <h2 className="text-2xl font-bold mb-2">Choti Kashi Wins Village Trophy!</h2>
          <p className="text-orange-100">Defeated Naya Gaon by 12 runs in the final match</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;