import { createTheme, createThemeContract } from '@vanilla-extract/css';

const palette = {
  BG_100: '#FFFFFF',
  BG_75: '#FFFFFFBF',
  BG_50: '#FFFFFF7F',
  TEXT_100: '#000000',
  TEXT_75: '#000000BF',
  TEXT_50: '#0000007F',
  MAIN_100: '#FF772B',
  MAIN_75: '#ff772bbf',
  MAIN_50: '#ff772b7f',
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
    bg: null,
    text: null,
    main: null,
  },
});

export const lightThemeClass = createTheme(themeColor, {
  color: {
    bg: palette.BG_100,
    text: palette.TEXT_100,
    main: palette.MAIN_100,
  },
});

export const darkThemeClass = createTheme(themeColor, {
  color: {
    bg: darkPalette.BG_100,
    text: darkPalette.TEXT_100,
    main: darkPalette.MAIN_100,
  },
});
