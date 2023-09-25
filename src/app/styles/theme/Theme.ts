export const theme = {
  name: 'dark',
  colors: {
    bodyBg: 'linear-gradient(180deg,#424979, #24273b)',
    primaryBg: '#49526f',
    secondaryBg: '#161828',
    thirdBg: '#24273b',
    accent: '#444a7c',
    accent2: '#5a62a4',
    primaryFont: '#FFFFFF',
    secondaryFont: '#808080',
    error: '#ff2828',
    shadowPrimary: '0 0 15px 2px rgba(22, 24, 40, 0.8)',
    svg: {
      fill: '#ffffff',
      gradientStops: {
        stop1: '#ffffff',
        stop2: '#ffffff',
        stop3: '#ffffff',
        stop4: '#ffffff',
        stop5: '#ffffff',
      },
    },
  },
  media: {
    tablet: 'screen and (max-width: 768px)',
    mobile: 'screen and (max-width: 576px)',
  },
}

export const lightTheme = {
  name: 'light',
  colors: {
    bodyBg: 'linear-gradient(180deg, #73a4de, #adcaec)',
    primaryBg: '#E6E6E6',
    secondaryBg: '#F0F0F0',
    thirdBg: '#D0D0D0',
    accent: '#0077FF',
    accent2: '#2c8efd',
    primaryFont: '#555555',
    secondaryFont: '#FFFFFF',
    error: '#b90000',
    shadowPrimary: '0 0 15px 2px rgba(0, 95, 204, 0.2)',
    svg: {
      fill: '#999999',
      gradientStops: {
        stop1: '#999999',
        stop2: '#999999',
        stop3: '#999999',
        stop4: '#999999',
        stop5: '#999999',
      },
    },
  },
  media: {
    tablet: 'screen and (max-width: 768px)',
    mobile: 'screen and (max-width: 576px)',
  },
}

export type ThemeT = typeof theme
