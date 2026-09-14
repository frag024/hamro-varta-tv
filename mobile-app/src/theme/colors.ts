// Hamro Varta Television — brand colour system
// Primary identity: strong red + white, balanced with neutral greys and dark text
// so the app reads as a serious news organisation, not a "red app".

export const colors = {
  // Brand
  brandRed: '#C81E1E', // primary accent — derived from the logo red
  brandRedDark: '#9B1414', // pressed / deep accent
  brandRedDarker: '#7A0F0F',
  brandRedLight: '#FDEBEB', // tint for chips / soft backgrounds

  // Live / breaking
  live: '#E11D2E',
  liveGlow: 'rgba(225, 29, 46, 0.18)',

  // Neutrals
  black: '#111214',
  ink: '#1A1B1E', // primary text
  inkSoft: '#3C3E43', // secondary text
  slate: '#6B6E76', // tertiary text / meta
  hairline: '#E7E6E4', // dividers
  surface: '#FFFFFF',
  surfaceAlt: '#F6F5F3', // warm off-white app background
  surfaceMuted: '#EFEEEB',
  chip: '#F1F0ED',
  overlayDark: 'rgba(10, 8, 8, 0.55)',
  overlayDarker: 'rgba(6, 5, 5, 0.72)',

  white: '#FFFFFF',
  gold: '#C9962C', // sparing use — editor's pick / premium accents

  success: '#1F8A4C',
  warning: '#B5790A',
} as const;

export type AppColors = typeof colors;
