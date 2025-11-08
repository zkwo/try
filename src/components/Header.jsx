// src/components/Header.jsx
import React from 'react';
import GlassCard from './GlassCard';

const Header = () => {
  return (
    <GlassCard 
      className="header-nav" 
      style={{ 
        padding: '15px 30px', 
        borderRadius: '0 0 16px 16px', 
        position: 'sticky', /* Menjaga header tetap di atas */
        top: '0', 
        zIndex: 10,
        margin: '0 auto',
        width: '100%',
        maxWidth: '1000px', /* Sesuaikan dengan container */
        backgroundColor: 'rgba(18, 18, 18, 0.9)' /* Background sedikit lebih gelap untuk menonjol */
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          MyMonochrome.Dev
        </a>
        <nav>
          <a href="#about" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>About</a>
          <a href="#projects" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Projects</a>
          <a href="#contact" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Contact</a>
        </nav>
      </div>
    </GlassCard>
  );
};

export default Header;
