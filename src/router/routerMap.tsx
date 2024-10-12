import { ReactElement, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { IdGuards, NavigateDefault } from './guards';

import { RootLayout } from '../layout/RootLayout';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Project } from '../pages/Project';
import { Resume } from '../pages/Resume';
import { ContactScene } from '../pages/ContactScene';

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
    element: <Resume />,
  },
  {
    id: 'project',
    path: 'project',
    element: <Project />,
  },
  {
    id: 'contact',
    path: 'contact',
    element: <Contact />,
  },
  {
    id: 'scene',
    path: 'scene',
    element: <ContactScene />,
    hideNav: true,
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
                <IdGuards />
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
