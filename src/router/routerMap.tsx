import { ReactElement, Suspense } from 'react';
import { RouteObject, Navigate, Outlet } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import { Index } from '../pages/Index';

export type RouteConfig = Omit<RouteObject, 'children'> & {
  children?: RouteConfig[];
  icon?: ReactElement;
};

export const routes = [
  {
    id: 'MS Potfolio',
    index: true,
    element: <Navigate to="/index" replace />,
  },
  {
    id: 'index',
    path: '/index',
    hideNav: true,
    element: (
      <RootLayout title="index">
        <Index />
      </RootLayout>
    ),
  },
  {
    id: 'about',
    path: '/about',
    element: (
      <RootLayout>
        <>about</>
      </RootLayout>
    ),
  },
  {
    id: 'project',
    path: '/project',
    element: (
      <RootLayout>
        <>project</>
      </RootLayout>
    ),
  },
  {
    id: 'skills',
    path: '/skills',
    element: (
      <RootLayout>
        <>skills</>
      </RootLayout>
    ),
  },
  {
    id: 'contact',
    path: '/contact',
    element: (
      <RootLayout>
        <>contact</>
      </RootLayout>
    ),
  },
];

export const routeMap: RouteConfig[] = [
  {
    id: 'route',
    path: '/',
    element: (
      <Suspense fallback>
        <Outlet />
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
