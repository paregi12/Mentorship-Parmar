import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import MentorDirectory from './components/MentorDirectory';
import MentorProfile from './components/MentorProfile';
import Stories from './components/Stories';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home');
  };

  const navigateToMentor = (mentor) => {
    setSelectedMentor(mentor);
    setCurrentPage('mentor-profile');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="pt-16">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'mentors' && (
          <MentorDirectory onMentorSelect={navigateToMentor} />
        )}
        {currentPage === 'mentor-profile' && selectedMentor && (
          <MentorProfile mentor={selectedMentor} onBack={() => setCurrentPage('mentors')} />
        )}
        {currentPage === 'stories' && <Stories user={user} />}
      </main>
    </div>
  );
}

export default App;