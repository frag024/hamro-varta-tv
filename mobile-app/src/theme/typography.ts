import { Platform } from 'react-native';

// System font stack — keeps the demo APK lean (no custom font files to embed)
// while still reading as editorial/serious via weight + tracking choices.
const serifFallback = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

export const typography = {
  headlineFont: serifFallback, // used for big editorial headlines
  bodyFont: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }),

  sizes: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    xxl: 30,
    display: 36,
  },
  lineHeights: {
    xs: 15,
    sm: 18,
    base: 22,
    md: 24,
    lg: 27,
    xl: 31,
    xxl: 37,
    display: 42,
  },
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    black: '800' as const,
  },
  tracking: {
    tight: -0.3,
    normal: 0,
    wide: 0.6,
    wider: 1.2,
    label: 1.6,
  },
};
