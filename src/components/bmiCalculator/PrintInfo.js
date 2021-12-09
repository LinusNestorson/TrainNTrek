const PrintBMIStatus = (val) => {
    if (val < 18.5) {
      return "Under Weight";
    } else if (val > 18.5 && val <= 24.9) {
      return "Healthy weight";
    } else if (val > 24.9 && val < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
};

const PrintBMIInfo = (status) => {
    if (status==="Under Weight") {
      return "Being underweight could be a sign you're not eating enough or you may be ill.";
    } else if (status==="Healthy weight") {
      return "Keep up the good work! For tips on maintaining a healthy weight, check out the diet and fitness sections.";
    } else if (status==="Overweight") {
      return "The best way to lose weight if you're overweight is through a combination of diet and exercise.";
    } else if (status==="Obese") {
      return "The best way to lose weight if you're obese is through a combination of diet and exercise, and in some cases, medicines.";
    }
};

module.exports={
    PrintBMIInfo,
    PrintBMIStatus
}