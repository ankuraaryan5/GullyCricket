import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    // Simulate API fetch
    const fetchTournaments = () => {
      setTimeout(() => {
        setTournaments([
          {
            id: 1,
            name: "Mumbai Street Premier League",
            date: "15-18 Oct 2023",
            location: "Andheri East, Mumbai",
            prize: "₹1,00,000",
            teams: 32,
            type: "T20",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
            status: "Upcoming"
          },
          {
            id: 2,
            name: "Delhi Gully Cricket Championship",
            date: "5-12 Nov 2023",
            location: "Connaught Place, Delhi",
            prize: "₹75,000",
            teams: 24,
            type: "T10",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
            status: "Registration Open"
          },
          {
            id: 3,
            name: "Bangalore Night Cricket League",
            date: "20-25 Dec 2023",
            location: "Koramangala, Bangalore",
            prize: "₹50,000",
            teams: 16,
            type: "T10",
            image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e",
            status: "Early Bird"
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchTournaments();
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold text-orange-800 mb-4">Ongoing Tournaments</h1>
          <p className="text-lg text-orange-600 max-w-2xl mx-auto">
            Join the most exciting street cricket tournaments in your city
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <div 
                key={tournament.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tournament.image} 
                    alt={tournament.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tournament.status === "Upcoming" ? "bg-orange-100 text-orange-800" :
                      tournament.status === "Registration Open" ? "bg-green-100 text-green-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
                  <div className="flex items-center text-orange-600 mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-bold">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      <span>{tournament.teams} Teams</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      {tournament.type}
                    </span>
                    <Link 
                      to={`/tournaments/${tournament.id}`}
                      className="px-4 py-2 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournaments;