import React from 'react';
import { motion } from 'framer-motion';
import aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  // Sample team data
  const teams = [
    {
      id: 1,
      name: 'Indian Cricket Team',
      logo: 'https://media.gettyimages.com/id/2159841766/photo/bridgetown-barbados-kuldeep-yadav-of-india-lifts-the-icc-mens-t20-cricket-world-cup-trophy.jpg?s=612x612&w=0&k=20&c=AWfa6auttbo7ZwoT1HwvQXVNVzfQKILHxx4ZRAu6I9g=',
      captain: 'Rohit Sharma',
      coach: 'Rahul Dravid',
      ranking: 1,
      players: ['Rohit Sharma', 'Virat Kohli', 'Jasprit Bumrah', 'Ravindra Jadeja', 'KL Rahul']
    },
    {
      id: 2,
      name: 'Australian Cricket Team',
      logo: 'https://media.gettyimages.com/id/2159841766/photo/bridgetown-barbados-kuldeep-yadav-of-india-lifts-the-icc-mens-t20-cricket-world-cup-trophy.jpg?s=612x612&w=0&k=20&c=AWfa6auttbo7ZwoT1HwvQXVNVzfQKILHxx4ZRAu6I9g=',
      captain: 'Pat Cummins',
      coach: 'Andrew McDonald',
      ranking: 2,
      players: ['Pat Cummins', 'Steve Smith', 'David Warner', 'Glenn Maxwell', 'Mitchell Starc']
    },
    {
      id: 3,
      name: 'England Cricket Team',
      logo: 'https://media.gettyimages.com/id/2159841766/photo/bridgetown-barbados-kuldeep-yadav-of-india-lifts-the-icc-mens-t20-cricket-world-cup-trophy.jpg?s=612x612&w=0&k=20&c=AWfa6auttbo7ZwoT1HwvQXVNVzfQKILHxx4ZRAu6I9g=',
      captain: 'Jos Buttler',
      coach: 'Matthew Mott',
      ranking: 3,
      players: ['Jos Buttler', 'Ben Stokes', 'Joe Root', 'Jofra Archer', 'Jonny Bairstow']
    },
    {
      id: 4,
      name: 'Pakistan Cricket Team',
      logo: 'https://media.gettyimages.com/id/2159841766/photo/bridgetown-barbados-kuldeep-yadav-of-india-lifts-the-icc-mens-t20-cricket-world-cup-trophy.jpg?s=612x612&w=0&k=20&c=AWfa6auttbo7ZwoT1HwvQXVNVzfQKILHxx4ZRAu6I9g=',
      captain: 'Babar Azam',
      coach: 'Misbah-ul-Haq',
      ranking: 4,
      players: ['Babar Azam', 'Shaheen Afridi', 'Mohammad Rizwan', 'Shadab Khan', 'Fakhar Zaman']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6 relative overflow-hidden">
      {/* Bubble Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="text-center mb-12 relative z-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-3">Cricket Teams</h1>
        <p className="text-xl text-orange-600">Explore the top international cricket teams</p>
      </header>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -10 }}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <img 
                  src={team.logo} 
                  alt={team.name} 
                  className="h-24 w-24 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-center text-orange-700 mb-2">{team.name}</h2>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                  Rank: #{team.ranking}
                </span>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Captain</p>
                  <p className="font-medium text-orange-600">{team.captain}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600">Coach:</p>
                <p className="font-medium text-orange-600">{team.coach}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Key Players:</p>
                <ul className="space-y-1">
                  {team.players.slice(0, 5).map((player, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {player}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 px-6 py-3 border-t border-orange-100">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition duration-200">
                View Full Squad
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Comparison Section */}
      <div className="mt-16 relative z-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Team Comparison</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="text-left py-3 px-4 text-orange-700">Team</th>
                <th className="text-left py-3 px-4 text-orange-700">Ranking</th>
                <th className="text-left py-3 px-4 text-orange-700">Captain</th>
                <th className="text-left py-3 px-4 text-orange-700">Matches Won</th>
                <th className="text-left py-3 px-4 text-orange-700">Win %</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id} className="border-b border-orange-50 hover:bg-orange-50 transition">
                  <td className="py-3 px-4 flex items-center">
                    <img src={team.logo} alt={team.name} className="h-8 w-8 mr-3" />
                    <span>{team.name}</span>
                  </td>
                  <td className="py-3 px-4">#{team.ranking}</td>
                  <td className="py-3 px-4">{team.captain}</td>
                  <td className="py-3 px-4">{Math.floor(Math.random() * 100) + 50}</td>
                  <td className="py-3 px-4">{Math.floor(Math.random() * 30) + 60}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;