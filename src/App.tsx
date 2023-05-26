import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import PostsPage from './pages/Posts';
import { Navbar, Container, Nav } from 'react-bootstrap';
import UserPage from './pages/User';
import AboutPage from './pages/About';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage/>
    },
    {
      path: "/about",
      element: 
      <AboutPage/>
    },
    {
      path: "/user/:userId",
      element: 
        <UserPage/>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
