import { createTheme, createThemeContract } from '@vanilla-extract/css';

const palette = {
  BG_100: '#FFFFFF',
  BRAND_MAIN_100: '#DD0505',
  TEXT_100: '#000000',
  BASIC_100: '#F2F2F2',
  OPTION_100: '#A1A1A1',
};

const darkPalette = {
  BG_100: '#121212',
  BG_75: '#121212BF',
  BG_50: '#1212127F',
  TEXT_100: '#ffffff',
  TEXT_75: '#ffffffbf',
  TEXT_50: '#ffffff7f',
  MAIN_100: '#FF772B',
  MAIN_75: '#ff772bbf',
  MAIN_50: '#ff772b7f',
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

export const lightThemeClass = createTheme(themeColor, {
  color: {
    bg: palette.BG_100,
    text: palette.TEXT_100,
    basic: palette.BASIC_100,
    option: palette.OPTION_100,
    main: palette.BRAND_MAIN_100,
  },
});

export const darkThemeClass = createTheme(themeColor, {
  color: {
    bg: darkPalette.BG_100,
    text: darkPalette.TEXT_100,
    main: darkPalette.MAIN_100,
    basic: darkPalette.BG_100,
    option: darkPalette.TEXT_100,
  },
});
