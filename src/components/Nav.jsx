import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <h1>Convertidor de coordenadas</h1>
        <ul>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active " : ""
            }
          >
            <li className="">Inicio</li>
          </NavLink>

          <NavLink
            to="/overworld"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Overworld</li>
          </NavLink>

          <NavLink
            to="/nether"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Nether</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
