import { createStitches } from '@stitches/react';

const { createTheme } = createStitches();

export const lightTheme = createTheme({
  colors: {
    background: '#FFF',
    alert: '#FF3040',
    gray100: '#CCCCCC',
    gray200: '#D5D5D5',
    gray300: '#A1A1A1',
    gray400: '#8E8E8E',
    gray500: '#262626'
  }
});
