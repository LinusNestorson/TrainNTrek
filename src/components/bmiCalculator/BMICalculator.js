import React, { useState } from "react";
import "./BMICalculator.css"

const BMICalculator = () => {
                          
  const [text, setText] = useState();
  const [bmi, setBmi] = useState();
  const [status, setStatus] = useState();
  const [infoText, setInfoText] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const { CalculateBMI } = require("./CalculateBMI");
  const { PrintBMIStatus } = require("./PrintInfo");
  const { PrintBMIInfo } = require("./PrintInfo");

  

  const handleBmi = () => {
    let value
    if( weight == null || height == null )
    {
      alert("Woops, the field can not be blank. Please enter a value ")
      return "value is not valid";
    }
    if( weight <= 0 || height <=0  )
    {
      alert("Woops, the value of weight and height must be greater than 0 ")
      return "value is not valid";
    }
    value = CalculateBMI(weight,height);
    setBmi(value);
    setText("Your BMI is: ");
    let status = PrintBMIStatus(value);
    setStatus(status);
    setInfoText(PrintBMIInfo(status));
  };
  
  return (
    <div className="container">
    <div className="form-control">
      <div className="header-text"><h2>BMI-Calculatore</h2></div>
        <div className="header-text"> Modify the values and ckick the Calculate button to use.</div>
        <input 
        type="number"
        onChange={(e) => setHeight(e.target.value)}
        placeholder=" Enter you height in cm"
         />
    </div>
    <div className="form-control">
        <input 
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        placeholder=" Enter your weight in kg"
        />
    </div>
    <button className="btn btn-block" onClick={handleBmi} > Calculate </button>
    <div>
    <h1 className="bmi-text">{text} {bmi}</h1>
    <h3 className="bmi-text">{status}</h3>
    <div className="bmi-text">{infoText}</div>
    
    </div>

</div>
  );
};

export default BMICalculator;