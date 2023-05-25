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

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage/>
    },
    {
      path: "/about",
      element: 
      <div>
          <h1>contacts</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">posts</Link>
          </li>
          <li>
            <Link to="/user">contacts</Link>
          </li>
        </ul>
      </div>
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
