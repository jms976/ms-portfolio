import { Router } from './router';
import { ThemeContainer } from './styles/theme';
import './styles/index.css';

const App = () => {
  return (
    <ThemeContainer>
      <Router />
    </ThemeContainer>
  );
};

export default App;
