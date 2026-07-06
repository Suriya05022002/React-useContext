import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Counter from "./Counter";
import NotFound from "./NotFound";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path :"/Counter",
    element :<Counter />,
     errorElement: <NotFound />
  }
]); createRoot(document.getElementById("root")).render(
     <RouterProvider router={rout} />
);