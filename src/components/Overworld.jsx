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

  const copyToClipboard = () => {
    const spanX = document.getElementById("spanX");
    const spanZ = document.getElementById("spanZ");

    const combinedText = `${spanX.textContent} ${spanZ.textContent}`;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = combinedText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
  };


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
        <button className="buttonC" onClick={calculate}>
          Convertir
        </button>
      </section>
      <div className="like-dislike-container">
        <p className="text-content">Tus coordenadas en el nether son:</p>
        <div className="icons-box">
          <div className="icons">
            X:
            <label className="btn-label">
              <span className="span" id="spanX">{result1}</span>
            </label>
          </div>
          <div className="copiar" onClick={copyToClipboard}>
            <button
              className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back">
              <img src="/copiar.gif" className="stroke-blue-300" />
            </button>
          </div>

          <div className="icons">
            Z:
            <label className="btn-label">
              <span className="span" id="spanZ">{result2}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
