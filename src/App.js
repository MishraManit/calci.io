import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState("");
  const [resultWithPercentage, setResultWithPercentage] = useState([]);
  const [error, setError] = useState("");
  const profitPercentage = [30, 70];

  const handleBackspace = () => {
    setNumber(number.slice(0, -1));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleKeypadInput = (digit) => {
    if (number.length < 5) {
      setNumber(number + digit);
    }
  };

  const handleClear = () => {
    setNumber("");
    setOutput("");
    setResultWithPercentage([]);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(number) < 10000 || parseInt(number) > 10999) {
      setError("Invalid code.");
      setOutput("");
      setResultWithPercentage([]);
    } else {
      const lastThreeDigits = number.slice(-3);
      const result = 1000 - parseInt(lastThreeDigits);

      const resultPercentage = [
        result + result * (profitPercentage[0] / 100),
        result + result * (profitPercentage[1] / 100),
      ];
      setError("");
      setOutput(result);
      setResultWithPercentage(resultPercentage.map((num) => num.toFixed(2)));
    }
  };

  return (
    <div className="container">
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

      {resultWithPercentage.length === 2 && (
        <p className="result">
          6060{resultWithPercentage[0]}
          <hr />
          6060{resultWithPercentage[1]}
        </p>
      )}
    </div>
  );
}

export default App;
