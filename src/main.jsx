import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Header/Header';
import Products from './Component/Products/Products';
import Menu from './Component/Menu/Menu';
import Order from './Component/Order/Order';
import { cartLoaderProduct } from './utilities/loader';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Menu></Menu>,
    children:[
      {
        path: "/",
        element: <Products/>,
      },
      {
        path: "oder",
        element: <Order/>,
        loader: cartLoaderProduct
      }

    ]
    
    
  
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
