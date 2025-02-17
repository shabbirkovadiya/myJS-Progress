// You are ordering pizza for a group of 8 people.
// Each person will eat 3 slices.
// Each pizza has 8 slices.
// Calculate how many pizzas you should order.


console.log("Pizza Party");
var group = 8;
var person = 3;
var pizzaslice = 8;

// first calculate the total slices needed
var totalSlicesNeeded = group * person;

// now divide the Slide with 8 then we got pizzas needed 
var pizzaneeded = totalSlicesNeeded / pizzaslice;
console.log ("we need to order "+pizzaneeded+"Pizzas")

document.getElementById("ex1").innerText = "We Need " + pizzaneeded +  " pizzas";