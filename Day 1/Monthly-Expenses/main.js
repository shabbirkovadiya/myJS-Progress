// You have a weekly budget of $100.
// You buy groceries for $35, gas for $20, and miscellaneous items for $12.
// Calculate how much money you have remaining for the week.

console.log("Monthly Expenses");
var budget = 100;
var groceries = 35;
var gas = 20;
var miscellaneous = 12;
let Remaining = budget - groceries - gas - miscellaneous;
console.log("Remaining money for the week: $" + Remaining);
document.getElementById("ex1").innerText =  "$" + Remaining;