import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Home />
        },
        
        {
            path: "/about",
            element:<About />
        },
        
        {
            path: "/contact",
            element:<Contact />
        }
    ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div><Home /></div>
);
root.render(<RouterProvider router={router}/>);

