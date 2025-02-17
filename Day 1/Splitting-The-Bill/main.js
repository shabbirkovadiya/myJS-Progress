// You go out for dinner with friends. The total bill comes to $75.
// There are 5 of you splitting the bill evenly.
// Calculate how much each person needs to pay.


console.log("Bill Splitting");
var totalBill = 75;
var peoples = 5;
let amountperpeson = totalBill / peoples;
console.log("Each Person Need To Pay: $" + amountperpeson);
document.getElementById("ex1").innerText = "$ " + amountperpeson;