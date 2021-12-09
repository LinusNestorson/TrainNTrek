import React, { useState } from "react";
import "./BMICalculator.css"

const BMICalculator = () => {
  const [text, settext] = useState();
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [infoText, setInfoText] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    settext("Your BMI is: ");
    if (val < 18.5) {
      setInfo("Under Weight");
      setInfoText("Being underweight could be a sign you're not eating enough or you may be ill.");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy weight");
      setInfoText("Keep up the good work! For tips on maintaining a healthy weight, check out the diet and fitness sections.");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
      setInfoText("The best way to lose weight if you're overweight is through a combination of diet and exercise.");
    } else {
      setInfo("Obese");
      setInfoText("The best way to lose weight if you're obese is through a combination of diet and exercise, and, in some cases, medicines.");
    }
  };

  return (
    <div className="container">
    <div className="form-control">
      <div className="signin-text"><h2>BMI-Calculatore</h2></div>
        <div className="signin-text"> Modify the values and ckick the Calculate button to use.</div>
        <input 
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder=" Enter you height in cm"
         />
    </div>
    <div className="form-control">
        <input 
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder=" Enter your weight in kg"
        />
    </div>
    <button className="btn btn-block" onClick={handleBmi} > Calculate </button>
    <div>
    <h1 className="bmi-text">{text} {bmi}</h1>
    <h3 className="bmi-text">{info}</h3>
    <div className="bmi-text">{infoText}</div>
    
    </div>

</div>
  );
};

export default BMICalculator;