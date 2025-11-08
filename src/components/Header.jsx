// src/components/Header.jsx (Revisi)
import React from 'react';

// Styling Glassmorphism diterapkan langsung ke elemen header
const headerStyle = {
  background: 'rgba(18, 18, 18, 0.95)', /* Background hampir gelap total */
  backdropFilter: 'blur(10px)', /* Efek blur untuk Glassmorphism */
  WebkitBackdropFilter: 'blur(10px)',
  position: 'sticky',
  top: '0',
  zIndex: 10,
  padding: '15px 0', /* Padding vertikal yang lebih sedikit */
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)' /* Border tipis di bawah */
};

const navContainerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          MyMonochrome.Dev
        </a>
        <nav>
          <a href="#about" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>About</a>
          <a href="#projects" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Projects</a>
          <a href="#contact" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
