import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState("");
  const [resultWithPercentage, setResultWithPercentage] = useState("");
  const [error, setError] = useState("");
  const [profitPercentage, setProfitPercentage] = useState("");

  const handleBackspace = () => {
    setNumber(number.slice(0, -1));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleProfitChange = (event) => {
    const { value } = event.target;
    setProfitPercentage(value);
  };

  const handleKeypadInput = (digit) => {
    if (number.length < 5) {
      setNumber(number + digit);
    }
  };

  const handleClear = () => {
    setNumber("");
    setOutput("");
    setResultWithPercentage("");
    setError("");
    setProfitPercentage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(number) < 10000 || parseInt(number) > 10999) {
      setError("Invalid code.");
      setOutput("");
      setResultWithPercentage("");
    } else {
      const lastThreeDigits = number.slice(-3);
      const result = 1000 - parseInt(lastThreeDigits);
      const profitPercent = profitPercentage
        ? parseFloat(profitPercentage)
        : 30;
      const resultPercentage = result + result * (profitPercent / 100);
      setError("");
      setOutput(result);
      setResultWithPercentage(resultPercentage);
    }
  };

  return (
    <div className="container ">
      <h1 className="header">Code Reader</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Enter Code :</h2>
          <input
            type="text"
            value={number}
            onChange={handleChange}
            maxLength={5}
            placeholder="Enter Code"
          />
        </label>
        <label>
          <h2>Profit Percentage:</h2>
          <input
            type="number"
            value={profitPercentage}
            onChange={handleProfitChange}
            placeholder="Enter profit percentage (30)"
          />
        </label>
        <div className="keypad">
          <button type="button" onClick={() => handleKeypadInput("1")}>
            1
          </button>
          <button type="button" onClick={() => handleKeypadInput("2")}>
            2
          </button>
          <button type="button" onClick={() => handleKeypadInput("3")}>
            3
          </button>
          <button type="button" onClick={() => handleKeypadInput("4")}>
            4
          </button>
          <button type="button" onClick={() => handleKeypadInput("5")}>
            5
          </button>
          <button type="button" onClick={() => handleKeypadInput("6")}>
            6
          </button>
          <button type="button" onClick={() => handleKeypadInput("7")}>
            7
          </button>
          <button type="button" onClick={() => handleKeypadInput("8")}>
            8
          </button>
          <button type="button" onClick={() => handleKeypadInput("9")}>
            9
          </button>
          <button type="button" onClick={() => handleKeypadInput("0")}>
            0
          </button>
          <button
            type="button"
            className="backspace-button"
            onClick={handleBackspace}
          >
            Backspace
          </button>
          <button type="button" className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error">Error: {error}</p>}
      {output && <p className="result">Loading Price : {output}</p>}
      {resultWithPercentage && (
        <p className="result">Profit : {resultWithPercentage.toFixed(2)}</p>
      )}
    </div>
  );
}

export default App;
