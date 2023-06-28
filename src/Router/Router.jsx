import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from '../Pages/Home/Home/Home';
import Banner from '../Pages/Home/Banner/Banner';
import Skills from '../Pages/Home/Skills/Skills';
import Tools from '../Pages/Home/Tools/Tools';
import Projects from '../Pages/Home/Projects/Projects';
import Contact from '../Pages/Home/Contact/Contact';
import About from '../Pages/Home/About/About';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"/banner",
          element:<Banner></Banner>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/skills",
          element:<Skills></Skills>
        },
        {
          path:"/tools",
          element:<Tools></Tools>
        },
        {
          path:"/project",
          element:<Projects></Projects>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);