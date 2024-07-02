import { PaletteMode } from '@mui/material';
import { tokens } from '../tokens';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          color: {
            typography: tokens.color.gray8,
            active: tokens.color.gray9,
            title: tokens.color.gray9,
          },
          background: {
            body: tokens.color.gray2,
          },
        }
      : {
          // palette values for dark mode
          color: {
            typography: tokens.color.gray2,
            content: tokens.color.gray5,
            active: tokens.color.lime9,
            title: tokens.color.gray0,
            text: tokens.color.gray9,
          },
          background: {
            default: tokens.color.gray9,
            body: tokens.color.gray7,
          },
        }),
  },
});

export default getDesignTokens;
