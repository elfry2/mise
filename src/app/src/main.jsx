import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './index.css';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router.jsx';

document.title = import.meta.env.VITE_APP_NAME;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
