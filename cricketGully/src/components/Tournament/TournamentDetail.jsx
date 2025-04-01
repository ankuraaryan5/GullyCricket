import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TournamentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    // Simulate API fetch
    const fetchTournament = () => {
      setTimeout(() => {
        const tournaments = [
          {
            id: 1,
            name: "Mumbai Street Premier League",
            date: "15-18 Oct 2023",
            location: "Andheri East, Mumbai",
            prize: "₹1,00,000",
            teams: 32,
            type: "T20",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
            status: "Upcoming",
            description: "The most prestigious street cricket tournament in Mumbai. Open to all amateur players who want to showcase their talent.",
            rules: [
              "Maximum 8 players per team",
              "T20 format with 5 overs powerplay",
              "White leather ball will be used",
              "Umpire's decision will be final"
            ],
            registrationEnd: "10 Oct 2023",
            organizer: "Mumbai Cricket Association",
            contact: "contact@mumbaicricket.com",
            venue: "Andheri Sports Complex"
          },
          {
            id: 2,
            name: "Delhi Premier League",
            date: "20-25 Nov 2023",
            location: "New Delhi",
            prize: "₹1,50,000",
            teams: 24,
            type: "T20",
            image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781",
            status: "Registration Open",
            description: "The premier cricket tournament in Delhi for amateur and semi-professional players.",
            rules: [
              "Maximum 10 players per team",
              "T20 format with 6 overs powerplay",
              "White leather ball will be used",
              "Teams must register before deadline"
            ],
            registrationEnd: "15 Nov 2023",
            organizer: "Delhi Cricket Board",
            contact: "info@delhicricket.org",
            venue: "Feroz Shah Kotla Ground"
          }
        ];
        const foundTournament = tournaments.find(t => t.id.toString() === id);
        setTournament(foundTournament);
        setLoading(false);
      }, 800);
    };

    fetchTournament();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!tournament) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-600">Tournament not found</h1>
          <p className="text-gray-600 mt-2">The tournament you're looking for doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={tournament.image} 
              alt={tournament.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">{tournament.name}</h1>
              <div className="flex items-center mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  tournament.status === "Upcoming" ? "bg-orange-100 text-orange-800" :
                  tournament.status === "Registration Open" ? "bg-green-100 text-green-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {tournament.status}
                </span>
                <span className="ml-4 text-orange-200 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {tournament.location}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-orange-800 mb-4">Tournament Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Description</h3>
                    <p className="text-gray-600 mt-1">{tournament.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Rules</h3>
                    <ul className="list-disc pl-5 text-gray-600 mt-1 space-y-1">
                      {tournament.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-orange-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Date</p>
                      <p className="text-gray-800 font-semibold">{tournament.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">Prize Money</p>
                      <p className="text-gray-800 font-semibold">{tournament.prize}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">Format</p>
                      <p className="text-gray-800 font-semibold">{tournament.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">Teams Registered</p>
                      <p className="text-gray-800 font-semibold">{tournament.teams} / 32</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">Registration Ends</p>
                      <p className="text-gray-800 font-semibold">{tournament.registrationEnd}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">Venue</p>
                      <p className="text-gray-800 font-semibold">{tournament.venue}</p>
                    </div>
                  </div>

                  <button 
                    className="cursor-pointer mt-6 w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                    onClick={() => navigate(`/register-team/${id}`)}
                  >
                    Register Your Team
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Organizer Details</h3>
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{tournament.organizer}</p>
                  <p className="text-gray-600">{tournament.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;