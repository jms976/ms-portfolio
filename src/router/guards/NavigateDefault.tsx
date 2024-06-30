import { useOutletContext, Navigate } from 'react-router-dom';

const NavigateDefault = () => {
  const potfolioId = useOutletContext();
  const path = potfolioId ? `${potfolioId}/about` : '1/about';

  return <Navigate to={path} replace />;
};

export default NavigateDefault;
