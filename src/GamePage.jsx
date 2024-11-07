import { Outlet, Link } from "react-router-dom";

const Gamepage = () => {
  return (
    <div>
      <h1>Why Cant I be Read</h1>
      <nav id='gamepage'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/war">War</Link>
          </li>
          <li>
            <Link to="/bluemoon">Once In A Blue Moon</Link>
          </li>
          <li>
            <Link to="/solitare">Solitare</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Gamepage;