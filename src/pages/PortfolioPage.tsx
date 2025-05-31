import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import BrutalistCard from '../components/BrutalistCard';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={1} className="mb-8">
              MÚSICA
            </Heading>
            <p className="text-xl md:text-2xl max-w-2xl mb-12">
              Explorações sonoras que desafiam os limites da música eletrônica.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Music Platforms Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* YouTube */}
            <BrutalistCard className="overflow-hidden">
              <div className="aspect-video bg-darkGray flex items-center justify-center">
                <span className="text-white text-3xl font-bold">YouTube</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">YouTube</h3>
                <p className="mb-6">Videoclipes, performances ao vivo e conteúdo exclusivo.</p>
                <a 
                  href="https://youtube.com/lumiert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan py-3 px-6 text-base"
                >
                  Acessar Canal
                </a>
              </div>
            </BrutalistCard>

            {/* Spotify */}
            <BrutalistCard className="overflow-hidden">
              <div className="aspect-video bg-darkGray flex items-center justify-center">
                <span className="text-white text-3xl font-bold">Spotify</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Spotify</h3>
                <p className="mb-6">Álbuns, singles e playlists curadas disponíveis para streaming.</p>
                <a 
                  href="https://open.spotify.com/artist/lumiert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan py-3 px-6 text-base"
                >
                  Ouvir no Spotify
                </a>
              </div>
            </BrutalistCard>

            {/* Tidal */}
            <BrutalistCard className="overflow-hidden">
              <div className="aspect-video bg-darkGray flex items-center justify-center">
                <span className="text-white text-3xl font-bold">Tidal</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Tidal</h3>
                <p className="mb-6">Streaming de alta qualidade para audiófilos e entusiastas.</p>
                <a 
                  href="https://tidal.com/browse/artist/lumiert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan py-3 px-6 text-base"
                >
                  Ouvir no Tidal
                </a>
              </div>
            </BrutalistCard>

            {/* SoundCloud */}
            <BrutalistCard className="overflow-hidden">
              <div className="aspect-video bg-darkGray flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SoundCloud</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">SoundCloud</h3>
                <p className="mb-6">Remixes, demos e conteúdo experimental exclusivo.</p>
                <a 
                  href="https://soundcloud.com/lumiert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan py-3 px-6 text-base"
                >
                  Ouvir no SoundCloud
                </a>
              </div>
            </BrutalistCard>
          </div>
        </Container>
      </section>

      {/* Featured Releases */}
      <section className="py-16 bg-lightGray relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            LANÇAMENTOS EM DESTAQUE
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <BrutalistCard key={item} className="overflow-hidden">
                <div className="aspect-square bg-darkGray flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Release {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lançamento {item}</h3>
                  <p className="mb-4">Descrição breve do lançamento musical.</p>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioPage;
