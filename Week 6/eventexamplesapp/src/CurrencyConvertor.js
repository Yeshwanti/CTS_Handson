import React, { useState } from "react";

function CurrencyConvertor() {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");
  const [result, setResult] = useState("");

  const convert = () => {

    let converted = 0;

    switch (currency) {

      case "Euro":
        converted = amount / 90;
        break;

      case "Dollar":
        converted = amount / 83;
        break;

      case "Pound":
        converted = amount / 105;
        break;

      case "Yen":
        converted = amount / 0.57;
        break;

      default:
        converted = amount;
    }

    setResult(converted.toFixed(2));
  };

  return (

    <div className="card">

      <h2>Currency Convertor</h2>

      <input
        type="number"
        placeholder="Enter Amount in INR"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >

        <option>Euro</option>
        <option>Dollar</option>
        <option>Pound</option>
        <option>Yen</option>

      </select>

      <br /><br />

      <button onClick={convert}>
        Convert
      </button>

      <h3>
        Converted Amount : {result} {currency}
      </h3>

    </div>

  );

}

export default CurrencyConvertor;