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
            icon: tokens.color.cyan9,
            iconText: tokens.color.gray6,
          },
          background: {
            body: tokens.color.gray2,
            card: tokens.color.gray0,
          },
        }
      : {
          // palette values for dark mode
          color: {
            typography: tokens.color.gray2,
            content: tokens.color.gray5,
            active: tokens.color.cyan9,
            title: tokens.color.gray0,
            text: tokens.color.gray9,
            icon: tokens.color.cyan9,
            iconText: tokens.color.gray1,
          },
          background: {
            default: tokens.color.gray9,
            body: tokens.color.gray8,
            card: tokens.color.gray8,
          },
        }),
  },
});

export default getDesignTokens;
