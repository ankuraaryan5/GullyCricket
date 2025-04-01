import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState('tournaments');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [applications, setApplications] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    location: '',
    prize: '',
    maxTeams: '',
    type: 'T20',
    description: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    // Mock data
    setApplications([
      { id: 1, name: 'Rahul Sharma', team: 'Chotu XI', status: 'Pending', appliedOn: '2023-10-05' },
      { id: 2, name: 'Priya Patel', team: 'Gully Girls', status: 'Approved', appliedOn: '2023-10-04' },
      { id: 3, name: 'Vikram Singh', team: 'Sixers Club', status: 'Pending', appliedOn: '2023-10-03' }
    ]);

    setTournaments([
      {
        id: 1,
        name: "Mumbai Street Premier",
        date: "15-18 Oct 2023",
        teams: 8,
        status: "Ongoing",
        prize: "₹50,000"
      },
      {
        id: 2,
        name: "Delhi Gully Cup",
        date: "5-12 Nov 2023",
        teams: 12,
        status: "Upcoming",
        prize: "₹75,000"
      }
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateTournament = (e) => {
    e.preventDefault();
    const newTournament = {
      id: tournaments.length + 1,
      name: formData.name,
      date: `${formData.startDate} to ${formData.endDate}`,
      teams: 0,
      status: "Upcoming",
      prize: formData.prize
    };
    setTournaments([...tournaments, newTournament]);
    setShowCreateForm(false);
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      location: '',
      prize: '',
      maxTeams: '',
      type: 'T20',
      description: ''
    });
  };

  const handleDeleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const handleApproveApplication = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'Approved' } : app
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 p-4 md:p-8">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">Organizer Dashboard</h1>
          <p className="text-orange-600">Manage your cricket tournaments and applications</p>
        </header>

        {/* Tabs */}
        <div className="flex border-b border-orange-200 mb-8" data-aos="fade-up">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'tournaments' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-orange-400'}`}
            onClick={() => setActiveTab('tournaments')}
          >
            My Tournaments
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'applications' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-orange-400'}`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
        </div>

        {/* Content */}
        {activeTab === 'tournaments' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-orange-800">Your Tournaments</h2>
              <button 
                onClick={() => setShowCreateForm(true)}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create Tournament
              </button>
            </div>

            {/* Create Tournament Form */}
            {showCreateForm && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-up"
              >
                <h3 className="text-xl font-bold text-orange-800 mb-4">Create New Tournament</h3>
                <form onSubmit={handleCreateTournament}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-orange-700 mb-2">Tournament Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">Prize Money</label>
                      <input
                        type="text"
                        name="prize"
                        value={formData.prize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">Max Teams</label>
                      <input
                        type="number"
                        name="maxTeams"
                        value={formData.maxTeams}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-orange-700 mb-2">Tournament Type</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="T20">T20</option>
                        <option value="T10">T10</option>
                        <option value="Test">Test</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-orange-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="cursor-pointer px-4 py-2 border border-orange-300 text-orange-600 rounded-md hover:bg-orange-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                    >
                      Create Tournament
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Tournaments List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
              {tournaments.map((tournament) => (
                <motion.div
                  key={tournament.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-orange-800">{tournament.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tournament.status === "Ongoing" ? "bg-green-100 text-green-800" :
                        "bg-orange-100 text-orange-800"
                      }`}>
                        {tournament.status}
                      </span>
                    </div>
                    <div className="flex items-center text-orange-600 mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{tournament.teams} Teams</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold">{tournament.prize}</span>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button className="px-3 py-1 bg-orange-100 text-orange-600 rounded-md text-sm hover:bg-orange-200 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-sm hover:bg-red-200 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'applications' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-orange-800 mb-6" data-aos="fade-up">Team Applications</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up">
              <div className="grid grid-cols-12 bg-orange-600 text-white p-4 font-bold">
                <div className="col-span-1">#</div>
                <div className="col-span-3">Team Name</div>
                <div className="col-span-3">Captain</div>
                <div className="col-span-2">Applied On</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1">Actions</div>
              </div>
              
              {applications.map((app, index) => (
                <motion.div
                  key={app.id}
                  className="grid grid-cols-12 items-center p-4 border-b border-orange-100 hover:bg-orange-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="col-span-1 text-orange-700">{index + 1}</div>
                  <div className="col-span-3 font-medium">{app.team}</div>
                  <div className="col-span-3">{app.name}</div>
                  <div className="col-span-2 text-sm text-gray-600">{app.appliedOn}</div>
                  <div className="col-span-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      app.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex space-x-2">
                    {app.status === 'Pending' && (
                      <button 
                        onClick={() => handleApproveApplication(app.id)}
                        className="p-1 text-green-600 hover:text-green-800 transition-colors"
                        title="Approve"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    )}
                    <button 
                      onClick={() => handleDeleteApplication(app.id)}
                      className="p-1 text-red-600 hover:text-red-800 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrganizerDashboard;