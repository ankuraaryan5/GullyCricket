import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RegisterTeam = () => {
  const { tournamentId } = useParams();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    contactNumber: '',
    email: '',
    players: Array(15).fill({ 
      name: '', 
      role: '',
      aadhaarNumber: '',
      aadhaarFile: null,
      aadhaarPreview: ''
    })
  });

  useEffect(() => {
    // Simulate fetching tournament details
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
            description: "The most prestigious street cricket tournament in Mumbai.",
            registrationEnd: "10 Oct 2023",
            organizer: "Mumbai Cricket Association"
          }
        ];
        const foundTournament = tournaments.find(t => t.id.toString() === tournamentId);
        setTournament(foundTournament);
        setLoading(false);
      }, 500);
    };

    fetchTournament();
  }, [tournamentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = [...formData.players];
    updatedPlayers[index] = {
      ...updatedPlayers[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      players: updatedPlayers
    }));
  };

  const handleAadhaarUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type (PDF, JPG, PNG)
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid file type (PDF, JPG, PNG)');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return;
    }

    const updatedPlayers = [...formData.players];
    updatedPlayers[index] = {
      ...updatedPlayers[index],
      aadhaarFile: file,
      aadhaarPreview: file.type.includes('image') ? URL.createObjectURL(file) : null
    };

    setFormData(prev => ({
      ...prev,
      players: updatedPlayers
    }));
  };

  const removeAadhaarFile = (index) => {
    const updatedPlayers = [...formData.players];
    updatedPlayers[index] = {
      ...updatedPlayers[index],
      aadhaarFile: null,
      aadhaarPreview: '',
      aadhaarNumber: ''
    };
    setFormData(prev => ({
      ...prev,
      players: updatedPlayers
    }));
  };

  const validateAadhaarNumber = (number) => {
    // Basic Aadhaar number validation (12 digits)
    return /^\d{12}$/.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate Aadhaar details for required players
    for (let i = 0; i < 11; i++) { // First 11 players are required
      const player = formData.players[i];
      if (!player.aadhaarNumber || !player.aadhaarFile) {
        alert(`Please provide Aadhaar details for Player ${i + 1}`);
        return;
      }
      if (!validateAadhaarNumber(player.aadhaarNumber)) {
        alert(`Please enter a valid 12-digit Aadhaar number for Player ${i + 1}`);
        return;
      }
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', { tournamentId, ...formData });
    
    // Create FormData for file upload
    const submissionData = new FormData();
    submissionData.append('teamName', formData.teamName);
    submissionData.append('captainName', formData.captainName);
    submissionData.append('contactNumber', formData.contactNumber);
    submissionData.append('email', formData.email);
    submissionData.append('tournamentId', tournamentId);
    
    formData.players.forEach((player, index) => {
      submissionData.append(`players[${index}][name]`, player.name);
      submissionData.append(`players[${index}][role]`, player.role);
      submissionData.append(`players[${index}][aadhaarNumber]`, player.aadhaarNumber);
      if (player.aadhaarFile) {
        submissionData.append(`players[${index}][aadhaarFile]`, player.aadhaarFile);
      }
    });

    // In a real app, you would send this to your API
    // await axios.post('/api/register-team', submissionData);
    
    alert('Team registration submitted successfully!');
    navigate(`/tournaments/${tournamentId}`);
  };

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
          <p className="text-gray-600 mt-2">The tournament you're trying to register for doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">Register Team for {tournament.name}</h1>
          <p className="text-gray-600 mb-6">Fill out the form below to register your team (Aadhaar required for all players)</p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="teamName">
                  Team Name *
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="captainName">
                  Captain Name *
                </label>
                <input
                  type="text"
                  id="captainName"
                  name="captainName"
                  value={formData.captainName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="contactNumber">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  required
                  pattern="[0-9]{10}"
                  title="10 digit mobile number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-orange-800 mb-4">Player Details (Minimum 11 players required)</h2>
            <div className="space-y-6 mb-8">
              {formData.players.map((player, index) => (
                <div key={index} className="grid grid-cols-1 gap-6 bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-semibold text-orange-700">Player {index + 1} {index < 11 && <span className="text-red-500">*</span>}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name {index < 11 && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required={index < 11}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Role {index < 5 && <span className="text-red-500">*</span>}
                      </label>
                      <select
                        value={player.role}
                        onChange={(e) => handlePlayerChange(index, 'role', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required={index < 5}
                      >
                        <option value="">Select Role</option>
                        <option value="Batsman">Batsman</option>
                        <option value="Bowler">Bowler</option>
                        <option value="All-rounder">All-rounder</option>
                        <option value="Wicket-keeper">Wicket-keeper</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Aadhaar Number {index < 11 && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        value={player.aadhaarNumber}
                        onChange={(e) => handlePlayerChange(index, 'aadhaarNumber', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        placeholder="12-digit Aadhaar number"
                        required={index < 11}
                        pattern="\d{12}"
                        title="12 digit Aadhaar number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Aadhaar Proof {index < 11 && <span className="text-red-500">*</span>}
                      </label>
                      {player.aadhaarFile ? (
                        <div className="flex items-center">
                          {player.aadhaarPreview ? (
                            <img 
                              src={player.aadhaarPreview} 
                              alt="Aadhaar preview" 
                              className="h-12 w-12 object-cover rounded mr-3"
                            />
                          ) : (
                            <div className="h-12 w-12 bg-gray-100 flex items-center justify-center rounded mr-3">
                              <span className="text-xs text-gray-500">PDF</span>
                            </div>
                          )}
                          <span className="flex-1 truncate">{player.aadhaarFile.name}</span>
                          <button
                            type="button"
                            onClick={() => removeAadhaarFile(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <label className="flex-1 cursor-pointer">
                            <div className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-center">
                              <span className="text-sm text-gray-600">Upload Aadhaar (PDF/JPG/PNG)</span>
                              <input
                                type="file"
                                onChange={(e) => handleAadhaarUpload(index, e)}
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required={index < 11}
                              />
                            </div>
                          </label>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Max 2MB (Front side only)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                <span className="text-red-500">*</span> indicates required fields
              </p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => navigate(`/tournaments/${tournamentId}`)}
                  className="cursor-pointer px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-6 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Submit Registration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeam;