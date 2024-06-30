import { Outlet, useLocation, Navigate } from 'react-router-dom';

const IdGuards = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');

  if (pathname === '/') {
    return <Navigate to="/1/about" replace />;
  }

  if (pathArray.length === 2 || !pathArray.at(2)) {
    const toPath = `${pathArray.at(1) ?? 1}/about`;
    return <Navigate to={toPath} replace />;
  }

  return <Outlet context={pathArray.at(1) ?? 1} />;
};

export default IdGuards;
