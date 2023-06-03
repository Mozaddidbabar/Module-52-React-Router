import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Friends from './components/Friends/Friends.jsx';
import Home from './components/Home/Home.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Home></Home>]
  },
  {
    path: "/friends",
    element: <Friends></Friends>,
  },
  {
    path: "/friends/:id",
    element: <FriendDetails></FriendDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
