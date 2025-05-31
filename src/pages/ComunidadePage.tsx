import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';
import { animations } from '../styles/design-system';

const ComunidadePage: React.FC = () => {
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
              COMUNIDADE
            </Heading>
            <p className="text-xl md:text-2xl max-w-2xl mb-12">
              Conecte-se com outros fãs, produtores e artistas. Compartilhe ideias, receba feedback e participe de eventos exclusivos.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Discord Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={animations.slideInLeft.initial}
              animate={animations.slideInLeft.animate}
              transition={animations.slideInLeft.transition}
            >
              <Heading level={2} className="mb-8">
                DISCORD
              </Heading>
              <p className="text-lg mb-6">
                Junte-se à nossa comunidade no Discord para:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-purple mr-2">→</span>
                  <span>Compartilhar suas produções e receber feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">→</span>
                  <span>Participar de desafios de produção e eventos exclusivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">→</span>
                  <span>Acessar conteúdo exclusivo e tutoriais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-2">→</span>
                  <span>Conectar-se diretamente comigo e outros produtores</span>
                </li>
              </ul>
              <Button 
                href="https://dcd.gg/lumiert" 
                size="lg"
                className="text-lg"
              >
                Entrar no Discord
              </Button>
            </motion.div>
            <motion.div
              className="relative"
              initial={animations.slideInRight.initial}
              animate={animations.slideInRight.animate}
              transition={animations.slideInRight.transition}
            >
              <div className="relative w-full aspect-square border-2 border-text overflow-hidden bg-darkGray flex items-center justify-center">
                <div className="text-5xl mb-4">💬</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-cyan bg-background"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Community Events Section */}
      <section className="py-16 bg-lightGray relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            EVENTOS
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Feedback Friday', desc: 'Compartilhe suas produções e receba feedback da comunidade toda sexta-feira.' },
              { title: 'Masterclasses', desc: 'Workshops exclusivos sobre produção musical, design sonoro e performance ao vivo.' },
              { title: 'Challenges', desc: 'Desafios mensais de produção com temas específicos e prêmios para os melhores.' }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="border-2 border-text bg-background p-6 hover:border-purple transition-colors duration-300"
                initial={animations.slideUp.initial}
                animate={animations.slideUp.animate}
                transition={{ ...animations.slideUp.transition, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="mb-6">{event.desc}</p>
                <Button href="https://dcd.gg/lumiert" variant="secondary" size="sm">
                  Saiba mais
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ComunidadePage;
