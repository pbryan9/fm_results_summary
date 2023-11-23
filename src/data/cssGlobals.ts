const SIZES = {
  screens: {
    mobile: '1250px',
    desktop: '1440px',
  },
  fonts: {
    normal: 18 / 16 + 'rem',
  },
};

const COLORS = {
  primary: {
    Reaction: '0 100% 67%',
    Memory: '39 100% 56%',
    Verbal: '166 100% 37%',
    Visual: '234 85% 45%',
  },
  gradients: {
    background: {
      'slate-blue': '252 100% 67%',
      'royal-blue': '241 81% 54%',
    },
    circle: {
      'violet-blue': '256 72% 46% / 1',
      'persian-blue': '241 72% 46% / 0',
    },
  },
  neutral: {
    white: '0 0% 100%',
    'pale-blue': '221 100% 96%',
    'light-lavender': '241 100% 89%',
    'gray-blue': '224 30% 27%',
  },
};

const ICONS = {
  Reaction: '/assets/images/icon-reaction.svg',
  Memory: '/assets/images/icon-memory.svg',
  Verbal: '/assets/images/icon-verbal.svg',
  Visual: '/assets/images/icon-visual.svg',
};

const FONTS = {
  hanken: '"Hanken Grotesk", sans-serif',
  weights: {
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
};

export { SIZES, COLORS, FONTS, ICONS };
