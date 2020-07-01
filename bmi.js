function bmicalc() {
  var personHeight = document.getElementById("height").value;
  var personWeight = document.getElementById("weight").value;
  var heightSquared = Math.pow(personHeight, 2);
  var bmi = personWeight / heightSquared;
  var roundbmi = Math.round(bmi * 10) / 10;
  var result = document.getElementById("yourbmi");

  if (roundbmi < 18.5) {
    result.textContent =
      "Your BMI is " + roundbmi + " You are classed as underweight";
  } else if (roundbmi < 24.9) {
    result.textContent =
      "Your BMI is " + roundbmi + " You are classed as normal healthy weight";
  } else if (roundbmi < 29.9) {
    result.textContent =
      "Your BMI is " + roundbmi + " You are classed as overweight";
  } else if (roundbmi < 39.9) {
    result.textContent =
      "Your BMI is " + roundbmi + " You are classed as obese";
  } else if (roundbmi >= 40.0) {
    result.textContent =
      "Your BMI is " + roundbmi + " You are classed as morbidly obese";
  }
}

// BMI = 703 ×
// your weight in pounds
// ( your height in inches ) ²
