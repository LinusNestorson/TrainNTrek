const { CalculateBMI } = require("./CalculateBMI");

describe(" calculate BMI ", () => {
    test.each([
      [55, 165, 20.2],
      [90, 170, 31.1],
      [0, 170, 0],
      [55, -170, 0],
    ])(" Gets height and weight and calculate BMI", (weight, height, expected) => {
        let actual = Number(CalculateBMI(weight,height));
      expect(actual).toBeCloseTo(expected);
    });
  });