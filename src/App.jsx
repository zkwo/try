import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <p style={{ textAlign: 'center', padding: '20px', color: 'var(--color-accent)' }}>
        © 2024 Monochrome Glass Portfolio. Built with React & Vite.
      </p>
    </Router>
  );
}

export default App;
