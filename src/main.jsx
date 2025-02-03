import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import { AuthProvider } from './context/authcontext'; 
import UserProfile from "./pages/userprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/userprofile", 
    element: <UserProfile /> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
