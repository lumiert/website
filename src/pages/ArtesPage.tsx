import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';
import { animations } from '../styles/design-system';
import { ArrowUpRight } from 'lucide-react';

const ArtesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <motion.div
            initial={animations.slideInLeft.initial}
            animate={animations.slideInLeft.animate}
            transition={animations.slideInLeft.transition}
          >
            <Heading level={1} className="mb-8">
              ARTES
            </Heading>
            <p className="text-xl md:text-2xl max-w-2xl mb-12">
              Expressões visuais que complementam minha identidade sonora. Capas, comics, colagens e arte digital.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            GALERIA
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <motion.div
                key={item}
                className="border-2 border-text hover:border-purple transition-colors duration-300 overflow-hidden"
                initial={animations.fadeIn.initial}
                animate={animations.fadeIn.animate}
                transition={{ ...animations.fadeIn.transition, delay: item * 0.05 }}
              >
                <div className="aspect-square bg-darkGray relative group cursor-pointer">
                  <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver detalhes
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-lightGray bg-topo bg-fixed bg-cover text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            CATEGORIAS
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Capas de Álbuns', desc: 'Artes criadas para lançamentos musicais.' },
              { title: 'Comics', desc: 'Narrativas visuais que expandem o universo Lumiert.' },
              { title: 'Colagens', desc: 'Experimentações com técnicas mistas e colagem digital.' },
              { title: 'Posters', desc: 'Artes promocionais para eventos e lançamentos.' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="border-2 border-text border-white bg-darkGray bg-background p-6 transition-colors duration-300"
                initial={animations.slideUp.initial}
                animate={animations.slideUp.animate}
                transition={{ ...animations.slideUp.transition, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="mb-6">{category.desc}</p>
                <Button href="#" variant="primary" size="sm">
                 <ArrowUpRight className="w-4 h-4 ms-1 inline-block align-text-bottom" /> Explorar
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ArtesPage;
