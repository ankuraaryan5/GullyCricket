import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Tournaments from './components/Tournament/Tournament';
import TournamentDetail from './components/Tournament/TournamentDetail';
import Login from './components/Login/Login';
import Signup from './components/Signup/SignUp';
import RegisterTeam from './components/Register/RegisterTeam';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import OrganizerDashboard from './components/Organizer/OrganizerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Tournaments />
              <News />
              <Testimonial />
              <GetInTouch />
            </>
          } />
          
          <Route path="/tournaments/:id" element={<TournamentDetail />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register-team/:tournamentId" element={<RegisterTeam />} />
          <Route path="/news" element={<News />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;