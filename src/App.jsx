// src/App.jsx
import React from 'react';
import Header from './components/Header';
import GlassCard from './components/GlassCard';

/* --- Komponen Bagian --- */

const HeroSection = () => (
  <section id="hero" className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
    <GlassCard style={{ padding: '50px', maxWidth: '700px', border: 'none' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>[Nama Anda], Web Developer</h1>
      <p style={{ fontSize: '1.4rem', color: '#ccc' }}>
        Membangun pengalaman web yang cepat, elegan, dan fungsional menggunakan **React** dan desain **Monokrom Glassmorphism**.
      </p>
    </GlassCard>
  </section>
);

const AboutSection = () => (
  <section id="about" className="container">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Tentang Saya</h2>
    <GlassCard>
      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        Saya fokus pada Front-End Development, mengubah konsep desain menjadi antarmuka yang interaktif. Saya memprioritaskan kualitas kode, didukung oleh **ESLint** dan *tooling* modern seperti **Vite**, memastikan aplikasi tidak hanya terlihat bagus tetapi juga berkinerja tinggi.
      </p>
    </GlassCard>
  </section>
);

const ProjectsSection = () => {
  const projectData = [
    { id: 1, title: 'Glassy E-Commerce Mockup', desc: 'Desain mockup e-commerce glassmorphism yang elegan.', link: '#' },
    { id: 2, title: 'Monochrome Dashboard UI', desc: 'Panel admin monokrom minimalis yang responsif.', link: '#' },
    { id: 3, title: 'Personal Website (Vite)', desc: 'Portofolio ini sendiri, contoh penerapan Glassmorphism.', link: '#' },
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Proyek Unggulan</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {projectData.map(project => (
          <GlassCard key={project.id} style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
            <p style={{ marginBottom: '15px', color: '#ccc', fontSize: '0.95rem' }}>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>
              Lihat →
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="container" style={{ minHeight: '50vh', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Hubungi Saya</h2>
    <GlassCard style={{ maxWidth: '500px', margin: '0 auto' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
        Tertarik untuk berkolaborasi atau hanya ingin menyapa? Kirim pesan!
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <a href="mailto:emailanda@example.com" style={{ fontSize: '1.2rem' }}>📧 Email</a>
        <a href="https://github.com/akunanda" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>🐙 GitHub</a>
        <a href="https://linkedin.com/in/akunanda" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>💼 LinkedIn</a>
      </div>
    </GlassCard>
  </section>
);

/* --- Komponen Utama --- */

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
