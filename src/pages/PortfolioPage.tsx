import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import BrutalistCard from '../components/BrutalistCard';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'YOUTUBE',
    desc: 'Videoclipes, performances ao vivo e conteúdo exclusivo.',
    icon: <img src="/youtube-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://www.youtube.com/@Lumiert',
  },
  {
    title: 'SPOTIFY',
    desc: 'Álbuns, singles e playlists curadas disponíveis para streaming.',
    icon: <img src="/spotify-round-black-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://open.spotify.com/intl-pt/artist/3RUOoztK2hYVZrAbFztJlP',
  },
  {
    title: 'TIDAL',
    desc: 'Streaming de alta qualidade para audiófilos e entusiastas.',
    icon: <img src="/tidal-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://tidal.com/browse/artist/41062498?u',
  },
    {
    title: 'INSTAGRAM',
    desc: 'Conteúdo sobre arte e produção.',
    icon: <img src="/black-instagram-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://instagram.com/djlumiert',
  },
    {
    title: 'TIKTOK',
    desc: 'Livestream produzindo, mixando ou trocando ideia.',
    icon: <img src="/tiktok-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://www.tiktok.com/@djlumiert',
  },
  {
    title: 'SOUNDCLOUD',
    desc: 'Remixes, demos e conteúdo experimental exclusivo.',
    icon: <img src="/soundcloud-round-black-icon.svg" alt="Tidal" className="w-12 h-12" />,
    link: 'https://soundcloud.com/lumiert',
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between border-2 border-text bg-background p-6 transition-colors duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-square flex flex-col items-center justify-center">
                  {category.icon}
                  <span className="bg-background text-xl font-bold mt-8">{category.title}</span>
                </div>

                <p className="mb-4">{category.desc}</p>

                <Button href={`${category.link}`} variant="secondary" size="sm">
                  <ArrowUpRight className="w-4 h-4 ms-1 inline-block align-text-bottom" /> Acessar
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Releases */}
      <section className="py-16 bg-topo bg-fixed bg-cover text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none "></div>
        <Container>
          <Heading level={2} className="mb-12">
            LANÇAMENTOS EM DESTAQUE
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <BrutalistCard key={item} className="overflow-hidden border-white">
                <div className="aspect-square bg-darkGray flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Release {item}</span>
                </div>
                <div className="p-6 bg-darkGray">
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
