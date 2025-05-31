import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ArtesPage from './pages/ArtesPage';
import DownloadsPage from './pages/DownloadsPage';
import ComunidadePage from './pages/ComunidadePage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/artes" element={<ArtesPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/comunidade" element={<ComunidadePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <footer className="py-8 border-t-2 border-text mt-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/LogoGlifo.webp" alt="Lumiert" className="h-24" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm uppercase tracking-wider">© {new Date().getFullYear()} Lumiert</p>
              <a 
                href="https://wa.me/5554997122776" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm uppercase tracking-wider hover:text-purple transition-colors duration-300"
              >
                Contato: +55 54 99712-2776
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
