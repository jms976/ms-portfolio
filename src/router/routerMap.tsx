import { ReactElement, Suspense } from 'react';
import { RouteObject, Outlet } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import { About } from '../pages/About';
import { IdGuards, NavigateDefault } from './guards';

export type RouteConfig = Omit<RouteObject, 'children'> & {
  children?: RouteConfig[];
  icon?: ReactElement;
  hideNav?: boolean;
};

export const routes: RouteConfig[] = [
  {
    id: 'Portfolio',
    index: true,
    path: 'about',
    element: <About />,
  },
  {
    id: 'about',
    path: 'about',
    element: <About />,
  },
  {
    id: 'resume',
    path: 'resume',
    element: <>resume</>,
  },
  {
    id: 'project',
    path: 'project',
    element: <>project</>,
  },
  {
    id: 'skills',
    path: 'skills',
    element: <>skills</>,
  },
  {
    id: 'contact',
    path: 'contact',
    element: <>contact</>,
  },
];

export const routeMap: RouteConfig[] = [
  {
    id: 'route',
    path: '/',
    element: (
      <Suspense fallback>
        <IdGuards />
      </Suspense>
    ),
    children: [
      {
        errorElement: <>Error</>,
        children: [
          {
            id: 'portfolioId',
            path: '/:id',
            element: (
              <RootLayout>
                <Outlet />
              </RootLayout>
            ),
            children: [...routes],
          },
          {
            path: '*',
            element: <NavigateDefault />,
          },
        ],
      },
    ],
  },
];
