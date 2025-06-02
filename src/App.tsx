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
        <footer className="border-t-2 border-text">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/LogoGlifo.webp" alt="Lumiert" className="h-24" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm uppercase tracking-wider">© {new Date().getFullYear()} Lumiert</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
