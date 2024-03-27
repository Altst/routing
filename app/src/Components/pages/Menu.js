import { Outlet, Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <>
      <nav>
        <div class="dropdown">
          <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul class="dropdown-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Menu;
