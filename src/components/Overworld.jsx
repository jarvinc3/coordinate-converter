import { LogicaO } from "../logic/Logica";

export default function Overworld() {
    const {
        value1,
        value2,
        result1,
        result2,
        handleInputChange1,
        handleInputChange2,
        calculate,
      } = LogicaO();

  return (
    <div className="container overworld">
        <div className="like-dislike-container">
          <p className="text-content">Ingresa las coordenadas del overworld:</p>
          <div className="icons-box gap">
            <div className="icons">
              X:
              <label className="btn-label">
                <input
                  autoComplete="off"
                  required=""
                  type="text"
                  value={value1}
                  onChange={handleInputChange1}
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
                  value={value2}
                  onChange={handleInputChange2}
                />
              </label>
            </div>
          </div>
        </div>
        <section className="">
          <button className="buttonC" onClick={calculate}>Convertir</button>
        </section>
        <div className="like-dislike-container">
          <p className="text-content">Tus coordenadas en el nether son:</p>
          <div className="icons-box">
            <div className="icons">
              X:
              <label className="btn-label">
                <span className="span">{result1}</span>
              </label>
            </div>
            <div className="icons">
              Z:
              <label className="btn-label">
                <span className="span">{result2}</span>
              </label>
            </div>
          </div>
        </div>
    </div>
  )
}
