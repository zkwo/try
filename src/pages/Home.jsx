import React from 'react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  return (
    <div className="container">
      <GlassCard>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Hello, Saya [Nama Anda] 👋</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
          Front-End Developer | React Specialist | Glassmorphism Enthusiast
        </p>
      </GlassCard>
      
      <GlassCard>
        <h2>Filosofi Desain</h2>
        <p>
          Portfolio ini menggunakan gaya **Monokrom Glassmorphism** untuk menciptakan tampilan modern, fokus, dan elegan. Semua didorong oleh **React** dan *build tool* cepat **Vite**.
        </p>
      </GlassCard>
    </div>
  );
};

export default Home;
