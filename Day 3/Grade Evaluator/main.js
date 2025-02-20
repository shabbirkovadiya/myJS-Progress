// Create a variable grade with a letter grade
// assign any one value from this ('A', 'B', 'C', 'D', 'F').
// se a switch statement to output a message:
// "Excellent" for 'A'
// "Good" for 'B'
// "Satisfactory" for 'C'
// "Needs improvement" for 'D'
// "Failed" for 'F'
// Include a default case for an invalid grade.

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Satisfactory");
    break;
  case "D":
    console.log("Needs improvement");
    break;
  case "F":
    console.log("Failed");
    default:
        console.log("Invalid grade");
}

document.getElementById("ex1").innerText = "Check Console For Grade A";
