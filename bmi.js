function bmicalc() {
  var feet = +document.getElementById("feet").value;
  var inches = +document.getElementById("inches").value;
  var stone = +document.getElementById("stone").value;
  var pounds = +document.getElementById("pounds").value;
  var totalInches = feet * 12 + inches;
  var totalPounds = stone * 14 + pounds;
  var totalInchesSquared = Math.pow(totalInches, 2);
  var bmi = (totalPounds / totalInchesSquared) * 703;
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

function resetPage() {
  document.getElementById("bmi-input").reset();
  document.getElementById("yourbmi").innerHTML = "";
}

// BMI = 703 ×
// your weight in pounds DIVIDE
// ( your height in inches ) ²

// BMI = [Weight (lbs) / Height (inches)²] x 703
