import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import HomePage from './components/layouts/HomePage';
import Jobs from './components/layouts/Jobs';
import ApplayedJobs from './components/layouts/ApplayedJobs';
import Statistics from './components/layouts/Statistics';
import Blogs from './components/layouts/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applayedJobs',
        element: <ApplayedJobs></ApplayedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
