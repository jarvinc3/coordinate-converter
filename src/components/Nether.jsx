import { LogicaN } from "../logic/Logica";

export default function Nether() {
  const {
    value3,
    value4,
    result3,
    result4,
    handleInputChange3,
    handleInputChange4,
    calculate,
  } = LogicaN();

  return (
    <div className="container nether">
      <div className="like-dislike-container">
        <p className="text-content">Ingresa las coordenadas del nether:</p>
        <div className="icons-box">
          <div className="icons">
            X:
            <label className="btn-label">
              <input
                autoComplete="off"
                required=""
                type="text"
                value={value3}
                onChange={handleInputChange3}
              />
            </label>
          </div>
          <div className="icons">
            Z:
            <label className="btn-label">
              <input
                autoComplete="off"
                required=""
                type="text"
                value={value4}
                onChange={handleInputChange4}
              />
            </label>
          </div>
        </div>
      </div>
      <section className="">
        <button onClick={calculate}>Convertir</button>
      </section>
      <div className="like-dislike-container">
        <p className="text-content">
          Tus coordenadas de el nether <br />
          En el overworld son:
        </p>
        <div className="icons-box">
          <div className="icons">
            X:
            <label className="btn-label">
              <span className="span">{result3}</span>
            </label>
          </div>
          <div className="icons">
            Z:
            <label className="btn-label">
              <span className="span">{result4}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
