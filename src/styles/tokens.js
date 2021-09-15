/**
 *   UTILS
 * */
const baseFontSize = 11 // body on mobile

// Transforms
const toRem = (value) => `${value / FONT_SIZES.base}rem`

/**
 *   TOKENS
 * */
const BREAKPOINTS = {
  '3xs': 375,
  '2xs': 478,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1366,
  xxl: 1440,
  '3xl': 1567,
  '4xl': 1920,
}

// Typography
// - font sizes
const FONT_SIZES = {
  base: baseFontSize,
  9: 9,
  11: 11,
  14: 14,
  15: 15,
  16: 16,
  18: 18,
  26: 26,
}

// - font families
const FONT_FAMILIES = {
  body: '"Montserrat", sans-serif',
  heading: '"Montserrat", sans-serif',
}

// - line heights
// Other naming convention welcome since this is a pretty large object
const LINE_HEIGHTS = {
  none: 1,
  xtight: 1.1,
  tight: 1.16,
  relaxed: 1.18,
  loose: 1.2,
  xloose: 1.8,
}

// Borders
// - radius
const RADII = {
  0: 0,
  full: 999,
}

// - border width
const BORDER_WIDTHS = {
  0: 0,
  1: 1,
  4: 4,
}

// Box shadows

const SHADOWS = {
  header: `0 ${toRem(2)} ${toRem(5)} rgba(0, 0, 0, 0.2)`,
}

const HEIGHTS = {
  10: 10,
  30: 30,
  35: 35,
  40: 40,
  50: 50,
  70: 70,
  80: 80,
  90: 90,
  100: 100,
  120: 120,
  150: 150,
  215: 215,
  250: 250,
  300: 300,
  350: 350,
  450: 450,
}

const WIDTHS = {
  xxs: BREAKPOINTS['2xs'],
  xs: BREAKPOINTS.xs,
  sm: BREAKPOINTS.sm,
  md: BREAKPOINTS.md,
  lg: BREAKPOINTS.lg,
  xl: BREAKPOINTS.xl,
  xxl: BREAKPOINTS.xxl,
  '3xl': BREAKPOINTS['3xl'],
  '4xl': BREAKPOINTS['4xl'],
  30: 30,
  35: 35,
  50: 50,
  70: 70,
  80: 80,
  90: 90,
  100: 100,
  120: 120,
  150: 150,
}

const SIZES = {
  0: 0,
  none: 'none',
  full: '100%',
  screen: '100vh',
}

const SPACINGS = {
  0: 0,
  1: 4,
  1.5: 5,
  2: 8,
  2.5: 10,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 56,
  9: 64,
  10: 72,
  11: 140,
  12: 180,
}

const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  up: 1,
  sticky: 2,
  header: 9999,
}

const borderWidths = {}
Object.keys(BORDER_WIDTHS).map((size) => {
  borderWidths[size] = toRem(BORDER_WIDTHS[size])
})

const fontSizes = {}
Object.keys(FONT_SIZES).map((size) => {
  fontSizes[size] = toRem(FONT_SIZES[size])
})

const radiusSizes = {}
Object.keys(RADII).map((size) => {
  radiusSizes[size] = toRem(RADII[size])
})

const spacings = {}
Object.keys(SPACINGS).map((key) => {
  spacings[key] = toRem(SPACINGS[key])
})

const heights = {}
Object.keys(HEIGHTS).map((size) => {
  heights[size] = toRem(HEIGHTS[size])
})

const widths = {}
Object.keys(WIDTHS).map((size) => {
  widths[size] = toRem(WIDTHS[size])
})

const breakpoints = {}
Object.keys(BREAKPOINTS).map((size) => {
  breakpoints[size] = `${BREAKPOINTS[size]}px`
})

// ES5 Syntax as ES6 is not supported in Tailwind build
module.exports = {
  BREAKPOINTS: breakpoints,
  SHADOWS,
  BORDER_WIDTHS: borderWidths,
  RADII: radiusSizes,
  LINE_HEIGHTS,
  FONT_FAMILIES,
  FONT_SIZES: {
    ...fontSizes,
    base: baseFontSize,
  },
  SPACINGS: spacings,
  SIZES,
  Z_INDEX,
  HEIGHTS: {
    ...heights,
    ...SIZES,
    ...spacings,
  },
  WIDTHS: {
    ...widths,
    ...SIZES,
    ...spacings,
  },
}
