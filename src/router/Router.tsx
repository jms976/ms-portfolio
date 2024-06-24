import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { routeMap } from './routerMap';

const router = createBrowserRouter(routeMap as RouteObject[]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
