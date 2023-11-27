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
    < div className="container">
      <section className="card">
        <input type="number" value={value1} onChange={handleInputChange1} />
        <input type="number" value={value2} onChange={handleInputChange2} />
      </section>
      <section className="card">
        <button onClick={calculate}>Converter</button>
      </section>
      <section className="card">
        <p>{result1}</p>
        <p>{result2}</p>
      </section>
    </div>
  );
}

export default App;
