import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profile from './Profile.jsx';
import ErrorPage from './error-page.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App/>, errorElement: <ErrorPage />, },
  { path: '/:userName', element: <Profile/> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
