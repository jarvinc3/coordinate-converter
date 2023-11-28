import { useState } from "react";

export const LogicaO = () => {
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

  return {
    value1,
    value2,
    result1,
    result2,
    handleInputChange1,
    handleInputChange2,
    calculate,
  };

}

export const LogicaN = () => {
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [result3, setResult3] = useState();
  const [result4, setResult4] = useState();

  const handleInputChange3 = (event) => {
    setValue3(event.target.value);
  };
  const calculateResult3 = () => {
    const newValue = Math.floor(parseFloat(value3) * 8);
    setResult3(newValue);
  };

  const handleInputChange4 = (event) => {
    setValue4(event.target.value);
  };
  const calculateResult4 = () => {
    const newValue = Math.floor(parseFloat(value4) * 8);
    setResult4(newValue);
  };

  const calculate = () => {
    calculateResult3();
    calculateResult4();
  };

  return {
    value3,
    value4,
    result3,
    result4,
    handleInputChange3,
    handleInputChange4,
    calculate,
  };

}
