// Create a variable month (store a number between 1 and 12). like month = 2
// Use a switch statement, potentially with nested logic, to determine and output the season:
// 12, 1, 2: "Winter"
// 3, 4, 5: "Spring"
// 6, 7, 8: "Summer"
// 9, 10, 11: "Autumn"
// Include a default case for an invalid month number.

let month = 2;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}
document.getElementById("ex1").innerText = "Check Console For Month 2";
