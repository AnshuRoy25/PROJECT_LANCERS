import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPages from './components/AuthPages';
import FindWorkPage from './Pages/Findworkpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/find-work" element={<FindWorkPage />} />
      </Routes>
    </Router>
  );
}

export default App;