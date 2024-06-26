import { ReactElement, Suspense } from 'react';
import { RouteObject, Navigate, Outlet } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import { About } from '../pages/About';

export type RouteConfig = Omit<RouteObject, 'children'> & {
  children?: RouteConfig[];
  icon?: ReactElement;
  hideNav?: boolean;
};

export const routes: RouteConfig[] = [
  {
    id: 'MS Potfolio',
    index: true,
    element: <Navigate to="/about" replace />,
  },
  {
    id: 'about',
    path: '/about',
    element: <About />,
  },
  {
    id: 'resume',
    path: '/resume',
    element: <>resume</>,
  },
  {
    id: 'project',
    path: '/project',
    element: <>project</>,
  },
  {
    id: 'skills',
    path: '/skills',
    element: <>skills</>,
  },
  {
    id: 'contact',
    path: '/contact',
    element: <>contact</>,
  },
];

export const routeMap: RouteConfig[] = [
  {
    id: 'route',
    path: '/',
    element: (
      <Suspense fallback>
        <RootLayout>
          <Outlet />
        </RootLayout>
      </Suspense>
    ),
    children: [
      {
        errorElement: <>Error</>,
        children: [...routes],
      },
    ],
  },
];
