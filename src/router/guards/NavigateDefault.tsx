import { useOutletContext, Navigate } from 'react-router-dom';

const NavigateDefault = () => {
  const portfolioId = useOutletContext();
  const path = portfolioId ? `${portfolioId}/about` : '1/about';

  return <Navigate to={path} replace />;
};

export default NavigateDefault;
