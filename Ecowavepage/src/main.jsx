import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/Home/Home.jsx";
import Cart from "./modules/Cart/Cart.jsx";
import Pagess from "./components/Pages/Pagess.jsx";
import About from "./components/About/About.jsx";
import Features from "./components/Features/Features.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Cart",
      element: <Cart />,
    },
    {
      path: "/Pages",
      element: <Pagess />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Features",
      element: <Features />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
