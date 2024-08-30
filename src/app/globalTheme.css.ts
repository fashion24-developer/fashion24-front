import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

const palette = {
  BG_100: '#FFFFFF',
  MAIN_100: '#DD0505',
  TEXT_100: '#000000',
  BASIC_100: '#F2F2F2',
  OPTION_100: '#A1A1A1',
};

const darkPalette = {
  BG_100: '#000000',
  MAIN_100: '#DD0505',
  TEXT_100: '#FFFFFF',
  BASIC_100: '#F2F2F2',
  OPTION_100: '#A1A1A1',
};

export const themeColor = createThemeContract({
  color: {
    bg: '',
    text: '',
    basic: '',
    option: '',
    main: '',
  },
});

export const lightThemeClass = createGlobalTheme(':root', themeColor, {
  color: {
    bg: palette.BG_100,
    text: palette.TEXT_100,
    basic: palette.BASIC_100,
    option: palette.OPTION_100,
    main: palette.MAIN_100,
  },
});

// export const darkThemeClass = createGlobalTheme(':root', themeColor, {
//   color: {
//     bg: darkPalette.BG_100,
//     text: darkPalette.TEXT_100,
//     main: darkPalette.MAIN_100,
//     basic: darkPalette.BG_100,
//     option: darkPalette.TEXT_100,
//   },
// });

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
