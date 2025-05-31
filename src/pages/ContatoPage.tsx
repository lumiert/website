import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';
import BrutalistCard from '../components/BrutalistCard';

const ContatoPage: React.FC = () => {
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
              CONTATO
            </Heading>
            <p className="text-xl md:text-2xl max-w-2xl mb-12">
              Entre em contato para colaborações, shows, licenciamento ou qualquer outra proposta.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container size="md">
          <BrutalistCard className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">FALE COMIGO</h2>
            <div className="max-w-md mx-auto">
              <p className="mb-8 text-lg">
                Para propostas, colaborações, shows ou qualquer outro assunto:
              </p>
              <Button 
                href="mailto:contato@lumiert.com" 
                size="lg"
                className="w-full justify-center text-lg"
              >
                contato@lumiert.com
              </Button>
            </div>
          </BrutalistCard>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">REDES SOCIAIS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Instagram', url: 'https://instagram.com/lumiert' },
                { name: 'Twitter', url: 'https://twitter.com/lumiert' },
                { name: 'YouTube', url: 'https://youtube.com/lumiert' },
                { name: 'SoundCloud', url: 'https://soundcloud.com/lumiert' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-text hover:border-purple transition-colors duration-300 p-4 flex items-center justify-center bg-background"
                >
                  <span className="font-bold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContatoPage;
