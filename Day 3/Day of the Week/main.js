
// Create a variable called day and assign it a number between 1 and 7 (representing days of the week).
// Use a switch statement to output the corresponding day of the week (e.g., 1 for "Monday").
// Include a default case that outputs "Invalid day number".

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day number");
}

document.getElementById("ex1").innerText = "See Console For CASE 3";