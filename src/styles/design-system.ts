/**
 * Design System para o site Lumiert
 * Estilo brutalista, direto, com identidade visual forte
 */

export const colors = {
  // Cores principais
  background: '#FFFFFF',      // Fundo branco
  text: '#111111',            // Texto quase preto
  
  // Cores de destaque
  purple: '#7928CA',          // Roxo vibrante
  cyan: '#00BFFF',            // Ciano brilhante
  turquoise: '#40E0D0',       // Turquesa
  
  // Cores de apoio
  lightGray: '#F4F4F4',       // Cinza claro para áreas secundárias
  darkGray: '#333333',        // Cinza escuro para elementos de contraste
  
  // Cores de ação
  accent: '#7928CA',          // Cor de destaque principal (roxo)
  hover: '#00BFFF',           // Cor ao passar o mouse (ciano)
};

export const typography = {
  // Família tipográfica principal (sem serifa, marcante)
  fontFamily: '"Space Grotesk", "Archivo Black", "Inter", sans-serif',
  
  // Pesos tipográficos
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  
  // Tamanhos de texto
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '4rem',     // 64px
    '7xl': '5rem',     // 80px
    '8xl': '6rem',     // 96px
  },
  
  // Espaçamento entre linhas
  lineHeights: {
    tight: '1.1',
    normal: '1.5',
    loose: '1.8',
  },
};

export const spacing = {
  // Sistema de espaçamento
  0: '0',
  1: '0.25rem',      // 4px
  2: '0.5rem',       // 8px
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  32: '8rem',        // 128px
};

export const breakpoints = {
  // Pontos de quebra para responsividade
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const effects = {
  // Efeitos visuais
  grain: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
  glitch: 'position: relative; &:before, &:after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; } &:before { left: 2px; text-shadow: -1px 0 #00BFFF; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; } &:after { left: -2px; text-shadow: -1px 0 #7928CA; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim2 5s infinite linear alternate-reverse; }',
  
  // Transições
  transition: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
};

// Componentes reutilizáveis
export const components = {
  // Botões
  button: {
    base: 'inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out',
    primary: 'bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan',
    secondary: 'bg-transparent border-2 border-purple text-purple hover:border-cyan hover:text-cyan',
    sizes: {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-base',
      lg: 'py-4 px-8 text-lg',
    },
  },
  
  // Containers
  container: {
    base: 'w-full mx-auto px-4',
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  },
  
  // Títulos
  heading: {
    h1: 'font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight',
    h2: 'font-bold text-4xl md:text-5xl tracking-tight',
    h3: 'font-bold text-3xl md:text-4xl',
    h4: 'font-bold text-2xl',
    h5: 'font-bold text-xl',
  },
  
  // Cards
  card: {
    base: 'bg-white border-2 border-text p-6',
    hover: 'transition-all duration-300 ease-in-out hover:border-purple',
  },
  
  // Navegação
  nav: {
    base: 'flex items-center',
    link: 'font-medium uppercase tracking-wider hover:text-purple transition-colors duration-300 ease-in-out',
    active: 'text-purple',
  },
};

// Animações para Framer Motion
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  stagger: {
    transition: { staggerChildren: 0.1 },
  },
};
