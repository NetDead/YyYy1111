import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Root } from 'app/components/Root';

import { Contacts } from 'app/views/Contacts';
import { Catalog } from 'app/views/Catalog';
import { About } from 'app/views/About';

const root = document.getElementById('app');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Catalog/>,
      },
      {
        path: 'contacts',
        element: <Contacts/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
    ]
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
