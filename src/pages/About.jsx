import React from 'react';
import GlassCard from '../components/GlassCard';

const About = () => {
  const skills = ['ReactJS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Glassmorphism', 'Vite', 'ESLint', 'Tailwind/Styled Components'];
  
  return (
    <div className="container">
      <GlassCard>
        <h1 style={{ marginBottom: '20px' }}>Tentang Saya</h1>
        <p style={{ lineHeight: '1.6' }}>
          Saya adalah pengembang perangkat lunak dengan hasrat untuk menciptakan pengalaman web yang cepat dan intuitif. Fokus utama saya adalah pada arsitektur komponen React yang bersih dan kualitas kode yang terjamin dengan ESLint.
        </p>
      </GlassCard>

      <GlassCard>
        <h2 style={{ marginBottom: '15px' }}>Keahlian Teknis</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.map(skill => (
            <span 
              key={skill} 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                padding: '5px 15px', 
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#fff'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default About;
