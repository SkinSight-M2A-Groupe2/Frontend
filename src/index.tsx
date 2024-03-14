import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/common/errorPage/ErrorPage';
import HomePage from './components/specific/homePage/HomePage';
import ProtectedRoute from './components/specific/protectedRoute/ProtectedRoute';
import PasswordReset from './components/specific/passwordReset/PasswordReset';
import Appointments from './components/specific/homePage/appointments/Appointments';
import Documents from './components/specific/documents/Documents';
import RendezVous from './components/specific/rendezVous/RendezVous';
const router = createBrowserRouter([
  {
    element: <ProtectedRoute user="" />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/prendre-rendez-vous",
            element: <RendezVous />,
          },
          {
            path: "/mes-rendez-vous",
            element: <Appointments />,
          },
          {
            path: "/documents",
            element: <Documents />,
          }
        ],
      },
    ],
  },
  {
    path: "/resetpassword",
    element: <PasswordReset />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
