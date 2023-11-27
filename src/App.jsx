import { useState } from "react";

function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();

  const handleInputChange1 = (event) => {
    setValue1(event.target.value);
  };
  const calculateResult1 = () => {
    const newValue = Math.floor(parseFloat(value1) / 8);
    setResult1(newValue);
  };

  const handleInputChange2 = (event) => {
    setValue2(event.target.value);
  };
  const calculateResult2 = () => {
    const newValue = Math.floor(parseFloat(value2) / 8);
    setResult2(newValue);
  };

  const calculate = () => {
    calculateResult1();
    calculateResult2();
  };

  return (
    <div className="principal">
      <nav>
        <h1>Convertidor <br /> decoordenadas</h1>
        <ul>
          <li>Overworld a nether</li>
          <li>Nether a overworld</li>
        </ul>
      </nav>
      <div className="container">
        <section className="">
          <div className="input-container">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-two-tone/24/x-coordinate.png"
              alt="x-coordinate"
            />
            <input
              type="number"
              value={value1}
              onChange={handleInputChange1}
              className="input"
            />
          </div>
          <div className="input-container">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-two-tone/24/z-coordinate.png"
              alt="z-coordinate"
            />
            <input
              type="number"
              value={value2}
              onChange={handleInputChange2}
              className="input"
            />
          </div>
        </section>
        <section className="">
          <button onClick={calculate}>Convertir</button>
        </section>
        <section className="">
          <div className="card">
            <div className="img">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-two-tone/24/x-coordinate.png"
                alt="x-coordinate"
              />
            </div>
            <div className="textBox">
              <span className="span">{result1}</span>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-two-tone/24/z-coordinate.png"
                alt="z-coordinate"
              />
            </div>
            <div className="textBox">
              <span className="span">{result2}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
