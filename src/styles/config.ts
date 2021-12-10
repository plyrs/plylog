import { createStitches } from '@stitches/react';

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "#47b7cc",
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      untitled: `'Helvetica Neue', 'Helvetica', 'Arial', '游ゴシック',
              'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro',
              'メイリオ', Meiryo, sans-serif`,
      mono: 'Monaco, Menlo, Consolas, Courier New, monospace',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: '(min-width: 35.5em)',
  },
});
