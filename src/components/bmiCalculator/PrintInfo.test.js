const { PrintBMIInfo } = require("./PrintInfo");
const { PrintBMIStatus } = require("./PrintInfo");

describe(" Print BMI status ", () => {
    test.each([
      [10 ,"Under Weight"],
      [19, "Healthy weight"],
      [28,"Overweight"],
      [35,"Obese"],
    ])(" Gets BMI value and print BMI status", (BMIValue, expected) => {
        let actual= PrintBMIStatus(BMIValue);
        expect(actual).toBe(expected);
    });
  });

  describe(" Print BMI status information ", () => {
    test.each([
      ["Under Weight" ,"Being underweight could be a sign you're not eating enough or you may be ill."],
      ["Healthy weight","Keep up the good work! For tips on maintaining a healthy weight, check out the diet and fitness sections."],
      ["Overweight","The best way to lose weight if you're overweight is through a combination of diet and exercise."],
      ["Obese","The best way to lose weight if you're obese is through a combination of diet and exercise, and in some cases, medicines."],
    ])(" Gets BMI status and print BMI status information", (BMIStatus, expected) => {
        let actual= PrintBMIInfo(BMIStatus)
        expect(actual).toBe(expected);
    });
  });