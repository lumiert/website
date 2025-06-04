import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../components/Heading';
import Container from '../components/Container';
import { animations } from '../styles/design-system';
import { ArrowUpRight, X, ChevronDown } from 'lucide-react';
import galleryDataJson from '../gallery-data.json'; // Import the generated JSON
import { Dialog, DialogContent, DialogOverlay, DialogClose } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button"; // Import Button from ui

// Define the type for a gallery item based on the JSON structure
interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  images: string[];
  thumbnail: string;
}

// Type assertion for the imported JSON
const galleryData: GalleryItem[] = galleryDataJson as GalleryItem[];

// --- Gallery Modal Component ---
interface GalleryModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ item, isOpen, onClose }) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* Overlay with blur */}
      <DialogOverlay className="fixed inset-0 z-40" />
      <DialogContent
        className="fixed inset-0 z-50 m-auto flex h-full max-h-[90vh] w-full max-w-[95vw] lg:max-w-[90vw] flex-col items-center justify-center bg-background p-0 shadow-lg outline-none md:flex-row md:items-stretch overflow-hidden border border-text/20 rounded-none" // Added rounded-none
        style={{ pointerEvents: 'auto' }}
      >
        <DialogClose
          onClick={onClose}
          className="absolute right-3 top-3 z-[60] rounded-none p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-6 w-6 text-darkGray hover:text-purple transition-colors" />
          <span className="sr-only">Fechar</span>
        </DialogClose>

        {/* Carousel Section - Adjusted for centering and padding */} 
        <div className="relative flex h-3/5 w-full items-center justify-center bg-black md:h-full md:w-2/3">
          {item.images.length > 0 ? (
            <Carousel 
              className="w-full h-full flex items-center justify-center" // Added padding
              opts={{ 
                align: "center", // Ensure items align center
                loop: item.images.length > 1 // Loop only if more than one image
              }}
            >
              <CarouselContent className="flex items-center h-full -ml-4"> {/* Adjust margin if needed based on carousel lib */} 
                {item.images.map((image, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center h-full pl-4"> {/* Adjust padding if needed */} 
                    <img
                      src={image}
                      alt={`${item.title} - Imagem ${index + 1}`}
                      className="max-h-full max-w-full select-none" // Ensure image fits and is centered
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {item.images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-[60] text-white bg-black/50 hover:bg-black/80 p-2 rounded-none" /> {/* Added rounded-none */} 
                  <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-[60] text-white bg-black/50 hover:bg-black/80 p-2 rounded-none" /> {/* Added rounded-none */} 
                </>
              )}
            </Carousel>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-text/50">
              Nenhuma imagem disponível.
            </div>
          )}
        </div>

        {/* Details Section */} 
        <div className="w-full h-2/5 bg-lightGray p-6 md:h-full md:w-1/3 md:overflow-y-auto flex flex-col">
          <h3 className="mb-4 text-2xl font-bold text-text">{item.title}</h3>
          <div className="flex-grow overflow-y-auto">
             <p className="whitespace-pre-wrap text-text/80">{item.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
// --- End Gallery Modal Component ---

// Function to format category names for display
const formatCategoryName = (category: string): string => {
  if (category === 'all') return 'Tudo'; // Changed 'Todas Categorias' to 'Tudo'
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ArtesPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all'); // 'all' or category id
  const [filteredData, setFilteredData] = useState<GalleryItem[]>(galleryData);

  // Extract unique categories from data
  const categories = ['all', ...Array.from(new Set(galleryData.map(item => item.category)))];

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Delay clearing selected item for fade-out animation
    // setTimeout(() => setSelectedItem(null), 300); 
  };

  // Filter logic
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredData(galleryData);
    } else {
      setFilteredData(galleryData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Header Section (Keep as is) */}
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
      <section className="py-24 relative text-white bg-cover bg-topo bg-fixed bg-cover">
        <div className=" absolute inset-0 pointer-events-none"></div>
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <Heading className="text-white" level={2}>GALERIA</Heading>
            {/* Dropdown Filter - Adjusted */} 
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* Changed Button variant and text */} 
                <Button variant="ghost" className="flex items-center gap-14 text-white hover:bg-transparent hover:text-purple px-2 rounded-none border-b border-transparent hover:border-purple">
                  Categorias
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none border-text/20 bg-background"> {/* Added rounded-none */} 
                <DropdownMenuLabel>Filtrar por Categoria</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-text/20"/>
                {categories.map(category => (
                  <DropdownMenuItem
                    key={category}
                    onSelect={() => setSelectedCategory(category)}
                    className={`${selectedCategory === category ? 'bg-purple/20 text-purple' : 'hover:bg-purple/10'}`}
                  >
                    {formatCategoryName(category)} {/* Use updated format function */} 
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory} // Re-trigger animation on filter change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  // Added rounded-none to gallery items
                  className="border-2 border-text/20 hover:border-purple transition-colors duration-300 overflow-hidden cursor-pointer group rounded-none"
                  initial={animations.fadeIn.initial} // Keep individual item fade-in
                  animate={animations.fadeIn.animate}
                  transition={{ ...animations.fadeIn.transition, delay: index * 0.05 }}
                  onClick={() => openModal(item)}
                  layout // Add layout animation for smoother filtering
                >
                  <div className="aspect-square border-white border-2 bg-darkGray relative">
                    <img 
                      src={item.thumbnail} 
                      alt={`Miniatura de ${item.title}`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/50 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver detalhes
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredData.length === 0 && (
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="text-center text-text/70 mt-8"
             >
               Nenhuma arte encontrada para a categoria "{formatCategoryName(selectedCategory)}".
             </motion.p>
          )}
        </Container>
      </section>

      {/* Modal */} 
      <AnimatePresence>
        {isModalOpen && selectedItem && (
           <motion.div
             key="gallery-modal"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
             className="fixed inset-0 z-30" // Ensure modal container is fixed
             style={{ pointerEvents: 'none' }} // Let Dialog handle pointer events
           >
            <GalleryModal 
              item={selectedItem} 
              isOpen={isModalOpen} 
              onClose={closeModal} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ArtesPage;

