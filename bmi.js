// var personHeight = prompt("What is your height in meters?");
// var personWeight = prompt("What is your weight in kg?");
// var heightSquared = Math.pow(personHeight, 2);
// var bmi = personWeight / heightSquared;
// var roundbmi = Math.round(bmi * 10) / 10;
// if (roundbmi < 18.5) {
//   alert("Your BMI is " + roundbmi + " You are classed as underweight");
// } else if (roundbmi < 24.9) {
//   alert(
//     "Your BMI is " + roundbmi + " You are classed as normal healthy weight"
//   );
// } else if (roundbmi < 29.9) {
//   alert("Your BMI is " + roundbmi + " You are classed as overweight");
// } else if (roundbmi < 39.9) {
//   alert("Your BMI is " + roundbmi + " You are classed as obese");
// } else if (roundbmi >= 40.0) {
//   alert("Your BMI is " + roundbmi + " You are classed as morbidly obese");
// }

// //Underweight - BMI less than 18.5

// Normal healthy weight - BMI between 18.5 and 24.9

// Overweight - BMI between 25.0 and 29.9

// Obese - BMI between 30.0 and 39.9

// Morbidly obese – BMI 40.0 and above
function bmicalc() {
  var personHeight = document.getElementById("height");
  var personWeight = document.getElementById("weight");
  var heightSquared = Math.pow(personHeight, 2);
  var bmi = personWeight / heightSquared;
  var roundbmi = Math.round(bmi * 10) / 10;
  if (roundbmi < 18.5) {
    document
      .getElementById("yourbmi")
      .innerHTML("Your BMI is " + roundbmi + " You are classed as underweight");
  } else if (roundbmi < 24.9) {
    document
      .getElementById("yourbmi")
      .innerHTML(
        "Your BMI is " + roundbmi + " You are classed as normal healthy weight"
      );
  } else if (roundbmi < 29.9) {
    document
      .getElementById("yourbmi")
      .innerHTML("Your BMI is " + roundbmi + " You are classed as overweight");
  } else if (roundbmi < 39.9) {
    document
      .getElementById("yourbmi")
      .innerHTML("Your BMI is " + roundbmi + " You are classed as obese");
  } else if (roundbmi >= 40.0) {
    document
      .getElementById("yourbmi")
      .innerHTML(
        "Your BMI is " + roundbmi + " You are classed as morbidly obese"
      );
  }
}
