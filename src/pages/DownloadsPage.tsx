import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import Button from '../components/Button';
import BrutalistCard from '../components/BrutalistCard';

import { Download, ArrowUpRight, KeyboardMusic, AudioWaveform, LayoutTemplate } from 'lucide-react';

const categories = [
  {
    title: 'PRESETS',
    desc: 'Configurações de sintetizadores e efeitos usados em minhas produções.',
    icon: <KeyboardMusic size={48} color="#111111" strokeWidth={1.5} />,
  },
  {
    title: 'SAMPLES',
    desc: 'Samples originais e processados para uso em suas produções.',
    icon: <AudioWaveform size={48} color="#111111" strokeWidth={1.5} />,
  },
  {
    title: 'TEMPLATES',
    desc: 'Templates de projetos para diferentes DAWs.',
    icon: <LayoutTemplate size={48} color="#111111" strokeWidth={1.5} />,
  },
];

const DownloadsPage: React.FC = () => {
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
              DOWNLOADS
            </Heading>
            <p className="text-xl md:text-2xl max-w-2xl mb-12">
              Recursos exclusivos para produtores e fãs. Presets, samples e materiais para sua criação.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Categories Section */}
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

                <Button href={`#${category.title.toLowerCase()}`} variant="secondary" size="sm">
                  <ArrowUpRight className="w-4 h-4 ms-1 inline-block align-text-bottom" /> Acessar
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Presets Section */}
      <section id="presets" className="py-16 bg-topo text-white bg-fixed relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            PRESETS
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <BrutalistCard key={item} className="flex border-white flex-col">
                <div className="aspect-video bg-darkGray flex items-center justify-center">
                  <img 
                    src={`/preset-pack-${item}.jpg`} 
                    alt={`Preset Pack ${item}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='white' text-anchor='middle' alignment-baseline='middle'%3EPreset Pack " + item + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6 bg-darkGray flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">Preset Pack {item}</h3>
                  <p className="mb-4 flex-grow">Descrição do pacote de presets e instrumentos incluídos.</p>
                  <div className="mt-4">
                    <Button href="#" size="sm" className="inline-flex items-center gap-1 whitespace-nowrap">
                      <Download className="w-4 h-4 ms-1 inline-block align-text-bottom"/> Download
                    </Button>
                  </div>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-16 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            SAMPLES
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <BrutalistCard key={item} className="flex flex-col">
                <div className="aspect-video bg-darkGray flex items-center justify-center">
                  <img 
                    src={`/sample-pack-${item}.jpg`} 
                    alt={`Sample Pack ${item}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='white' text-anchor='middle' alignment-baseline='middle'%3ESample Pack " + item + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">Sample Pack {item}</h3>
                  <p className="mb-4 flex-grow">Descrição do pacote de samples e conteúdo incluído. Este texto pode ser mais longo para testar o alinhamento vertical.</p>
                  <div className="mt-auto">
                  <div className="mt-4">
                    <Button href="#" size="sm" className="inline-flex items-center gap-1 whitespace-nowrap">
                      <Download className="w-4 h-4 ms-1 inline-block align-text-top"/> Download
                    </Button>
                  </div>
                  </div>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16 bg-topo text-white bg-fixed relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <Container>
          <Heading level={2} className="mb-12">
            TEMPLATES
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <BrutalistCard key={item} className="flex border-white flex-col">
                <div className="aspect-video bg-darkGray flex items-center justify-center">
                  <img 
                    src={`/template-${item}.jpg`} 
                    alt={`Template ${item}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='white' text-anchor='middle' alignment-baseline='middle'%3ETemplate " + item + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col bg-darkGray flex-grow">
                  <h3 className="text-xl font-bold mb-2">Template {item}</h3>
                  <p className="mb-4 flex-grow">Descrição do template e DAW compatível.</p>
                  <div className="mt-auto">
                    <Button href="#" size="sm" className="inline-flex items-center gap-1 whitespace-nowrap">
                      <Download className="w-4 h-4 ms-1 inline-block align-text-bottom"/> Download
                    </Button>
                  </div>
                </div>
              </BrutalistCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DownloadsPage;
