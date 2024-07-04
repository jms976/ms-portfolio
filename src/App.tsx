import { Router } from './router';
import { ThemeContainer } from './styles/theme';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import './styles/index.css';

const App = () => {
  return (
    <ThemeContainer>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </ThemeContainer>
  );
};

export default App;
