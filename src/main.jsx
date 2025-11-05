import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'

import App from './App.jsx'
import Home from './paginas/home/Home.jsx'
import Search from './paginas/search/Search.jsx'
import Movie from './paginas/movie/Movie.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
