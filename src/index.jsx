import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/Squirrel/",
    element: <App />,
    children: [
      {
        path: "/Squirrel/",
        element: <Home />
      },
      {
        path: "/Squirrel/pricing",
        element: <Pricing />
      },
      {
        path: "/Squirrel/contact-us",
        element: <Contact />
      },
      {
        path: "/Squirrel/sign-up",
        element: <Signup />
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

