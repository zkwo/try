import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

const Header = () => {
  return (
    <GlassCard 
      className="header-nav" 
      style={{ 
        padding: '15px 30px', 
        borderRadius: '0 0 16px 16px', 
        marginBottom: '20px',
        maxWidth: '1200px',
        margin: '0 auto 20px auto'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          MyMonochrome.Dev
        </Link>
        <nav>
          <Link to="/" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Home</Link>
          <Link to="/about" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>About</Link>
          <Link to="/projects" style={{ marginLeft: '25px', fontSize: '1.1rem' }}>Projects</Link>
        </nav>
      </div>
    </GlassCard>
  );
};

export default Header;
