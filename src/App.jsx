import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Nether from "./components/Nether";
import Overworld from "./components/Overworld";
import Inicio from "./components/Inicio";

function App() {
  return (
    <BrowserRouter>
      <div className="principal">
        <nav>
          <h1>
            Convertidor <br /> de coordenadas
          </h1>
          <ul>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Inicio</li>
            </NavLink>
            <NavLink
              to="/overworld"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Overworld a nether</li>
            </NavLink>
            <NavLink
              to="/nether"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Nether a overworld</li>
            </NavLink>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/overworld" element={<Overworld />} />
            <Route path="/nether" element={<Nether />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
