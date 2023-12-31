import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Nether from "./components/Nether";
import Overworld from "./components/Overworld";
import Inicio from "./components/Inicio";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <video autoPlay muted loop id="myVideo">
          <source src="video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <img src="/gift300.gif" alt="" id="myGift" />
        <img src="/gift700.gif" alt="" id="myGift700" />
      </div>
      <div className="principal">
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
