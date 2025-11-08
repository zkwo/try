import React from 'react';
import GlassCard from '../components/GlassCard';

const projectData = [
  { id: 1, title: 'Glassy E-Commerce Mockup', desc: 'Desain mockup e-commerce dengan navigasi glassmorphism yang elegan. Proyek ini menonjolkan penggunaan efek blur yang terstruktur.', link: '#' },
  { id: 2, title: 'Monochrome Dashboard UI', desc: 'Panel admin monokrom minimalis yang responsif dan berkinerja tinggi. Fokus pada kecepatan load dengan Vite.', link: '#' },
  { id: 3, title: 'Vite Portfolio Template', desc: 'Template portofolio ini sendiri, yang menunjukkan implementasi React Router dan styling CSS murni.', link: '#' },
];

const Projects = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Proyek Unggulan</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {projectData.map(project => (
          <GlassCard key={project.id}>
            <h2 style={{ color: '#fff', marginBottom: '10px' }}>{project.title}</h2>
            <p style={{ marginBottom: '15px', color: '#ccc' }}>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>
              Lihat Proyek →
            </a>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
