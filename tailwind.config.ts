/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Core brand palette extracted from the reference site */
        bg: '#04070f',          /* deep near-black background */
        surface: '#0b1120',     /* card/section surface */
        border: '#1a2540',      /* subtle borders */
        cyan: '#00e5ff',        /* teal/cyan accent */
        blue: '#4488ff',        /* blue heading gradient end */
        purple: '#7c3aed',      /* purple timeline icon bg */
        muted: '#6b7a99',       /* secondary text */
        light: '#c8d4f0',       /* body text */
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        /* The hero gradient heading effect */
        'gradient-heading': 'linear-gradient(90deg, #4488ff 0%, #00e5ff 100%)',
        /* Subtle card gradient */
        'card-gradient': 'linear-gradient(135deg, #0d1628 0%, #091020 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
