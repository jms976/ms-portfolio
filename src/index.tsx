import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { injectTokenToCSS } from './styles/injectTokenToCSS.ts';
import { tokens } from './styles/tokens.ts';

injectTokenToCSS(tokens);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
