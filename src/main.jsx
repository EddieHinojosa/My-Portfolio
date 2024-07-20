import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Import Tailwind CSS
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //handles router behavior

//import pages folder/files
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import MyContactInfo from './pages/MyContactInfo.jsx';
import Error from './pages/Error.jsx';

//Define routes so that components respond to URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/MyContactInfo',
        element: <MyContactInfo />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

