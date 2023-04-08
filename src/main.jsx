import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Layouts/Main';
import Home from './components/Home';
import OrderReview from './components/OrderReview';
import Grandpa from './components/FamilyTree/Grandpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('tshirts.json'),
      },
      {
        path: 'order-review',
        element: <OrderReview />,
      },
      {
        path: 'grandpa',
        element: <Grandpa />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
