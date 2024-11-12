import { Outlet, Link } from "react-router-dom";
import React from 'react';


const Gamepage = () => {
  return (
    <>
      <nav id='gamepage'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/war">War</Link>
          </li>
          <li>
            <Link to="/bluemoon">BlueMoon</Link>
          </li>
          <li>
            <Link to="/solitare">Solitare</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Gamepage;