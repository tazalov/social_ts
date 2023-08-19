export const theme = {
  name: 'dark',
  colors: {
    bodyBg: 'linear-gradient(180deg,#424979, #24273b)',
    primaryBg: '#49526f',
    secondaryBg: '#161828',
    thirdBg: '#24273b',
    accent: '#00b7ff',
    accent2: '#0077FF',
    primaryFont: '#FFFFFF',
    secondaryFont: '#808080',
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
    bodyBg: 'linear-gradient(180deg, #D0D0D0, #F0F0F0)',
    primaryBg: '#E6E6E6',
    secondaryBg: '#F0F0F0',
    thirdBg: '#D0D0D0',
    accent: '#0077FF',
    accent2: '#005FCC',
    primaryFont: '#555555',
    secondaryFont: '#808080',
    shadowPrimary: '0 0 15px 2px rgba(22, 24, 40, 0.2)',
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
