import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import './index.css';
import GamePage from './components/GamePage.jsx';
import Home from './pages/Home.jsx';
import War from './pages/War.jsx';
import BlueMoon from './pages/BlueMoon.jsx';
import Solitare from './pages/Solitare.jsx';
import Stats from './pages/Stats.jsx';
import NoPage from './pages/NoPage.jsx';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<GamePage />}>
        <Route index element={<Home />} />
        <Route path="war" element={<War />} />
        <Route path="bluemoon" element={<BlueMoon />} />
        <Route path="solitare" element={<Solitare />} />
        <Route path="stats" element={<Stats />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);