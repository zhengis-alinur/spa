import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import PostsPage from './pages/Posts';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PostsPage/>
    },
    {
      path: "/user",
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
      path: "/about",
      element: 
        <div>
          <h1>About</h1>
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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
