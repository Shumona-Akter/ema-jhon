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
import Review from './Component/Review/Review';
import Login from './Component/Login/Login';
import Inventory from './Component/Inventory/Inventory';
import SignUp from './Component/SignUp/SignUp';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import PrivateRoute from './Component/Route/PrivateRoute';
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
      },
      {
        path: "inventory",
        element: <PrivateRoute><Inventory/></PrivateRoute>,
        loader: cartLoaderProduct
      },
      {
        path: "login",
        element: <Login/>,
        loader: cartLoaderProduct
      },
      {
        path: "signup",
        element: <SignUp/>,
        loader: cartLoaderProduct
      },

    ]
    
    
  
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
