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
    <div className="container nether">
      <div className="like-dislike-container">
        <p className="text-content gap">Ingresa las coordenadas del nether:</p>
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
        <button className="buttonC" onClick={calculate}>
          Convertir
        </button>
      </section>
      <div className="like-dislike-container">
        <p className="text-content">Tus coordenadas en el overworld son:</p>
        <div className="icons-box">
          <div className="icons">
            X:
            <label className="btn-label">
              <span className="span" id="spanX">
                {result3}
              </span>
            </label>
          </div>
          <div className="copiar" onClick={copyToClipboard}>
            <button className="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" >
              <img src="/copiar.gif" className="stroke-blue-300" />
            </button>
          </div>
          <div className="icons">
            Z:
            <label className="btn-label">
              <span className="span" id="spanZ">
                {result4}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
