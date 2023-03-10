import { createStitches } from '@stitches/react';

const { globalCss } = createStitches();

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Helvetica,  sans-serif'
  },

  'body': {
    backgroundColor: '#FFF'
  }
});
