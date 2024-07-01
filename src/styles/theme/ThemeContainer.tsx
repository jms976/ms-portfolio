import { PropsWithChildren, createContext, useMemo, useState } from 'react';
import { PaletteMode, Paper, ThemeProvider, createTheme } from '@mui/material';
import getDesignTokens from './themes';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeContainer = (props: PropsWithChildren) => {
  const { children } = props;

  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper sx={{ bgcolor: 'background.body', height: '100vh', overflow: 'auto' }}>{children}</Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContainer;
