import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-top relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading level={1} className="mb-8">
                LUMIERT
              </Heading>
              <p className="text-2xl md:text-3xl font-medium mb-8 max-w-xl">
                Nada é por acaso, você não me achou, eu que te encontrei :)
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/portfolio" size="lg">
                  Explorar
                </Button>
                <Button href="/comunidade" variant="secondary" size="lg">
                  Comunidade
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <img 
                  src="/LogoGlifo.webp" 
                  alt="Lumiert" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container size="md">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading level={2} className="mb-12">
              MANIFESTO
            </Heading>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 max-w-3xl mx-auto">
              "Não sigo tendências, crio experiências sonoras que desafiam o convencional e expandem os limites da música eletrônica."
            </p>
            <div className="w-24 h-1 bg-purple mx-auto"></div>
          </motion.div>
        </Container>
      </section>

      {/* Latest Work Preview */}
      <section className="py-24 bg-lightGray relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            TRABALHOS RECENTES
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="border-2 border-text bg-background transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <div className="aspect-video bg-darkGray flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Projeto {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projeto {item}</h3>
                  <p className="mb-4">Descrição breve do projeto de música ou arte visual.</p>
                  <Button href="/portfolio" variant="secondary" size="sm">
                    Ver mais
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
