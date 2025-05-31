/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        text: '#111111',
        purple: '#7928CA',
        cyan: '#00BFFF',
        turquoise: '#40E0D0',
        lightGray: '#F4F4F4',
        darkGray: '#333333',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Archivo Black"', '"Inter"', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      animation: {
        'glitch-1': 'glitch-1 5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 5s infinite linear alternate-reverse',
      },
      keyframes: {
        'glitch-1': {
          '0%, 100%': { clip: 'rect(44px, 450px, 56px, 0)' },
          '20%': { clip: 'rect(12px, 450px, 92px, 0)' },
          '40%': { clip: 'rect(76px, 450px, 24px, 0)' },
          '60%': { clip: 'rect(50px, 450px, 80px, 0)' },
          '80%': { clip: 'rect(28px, 450px, 40px, 0)' },
        },
        'glitch-2': {
          '0%, 100%': { clip: 'rect(40px, 450px, 52px, 0)' },
          '20%': { clip: 'rect(8px, 450px, 88px, 0)' },
          '40%': { clip: 'rect(72px, 450px, 20px, 0)' },
          '60%': { clip: 'rect(46px, 450px, 76px, 0)' },
          '80%': { clip: 'rect(24px, 450px, 36px, 0)' },
        },
      },
    },
  },
  plugins: [],
}
