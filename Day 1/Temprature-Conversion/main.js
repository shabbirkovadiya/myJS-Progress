// Your friend in Europe tells you it's 25 degrees Celsius.
// Convert that temperature to Fahrenheit using the formula:  F = (C * 9/5) + 32.


console.log("Temprature Conversion");
var Celsius = 25;
var Fahrenheit = (Celsius * 9/5) + 32;
console.log("The Fahrenheit Of "+Celsius+"Celcius is " + Fahrenheit);
document.getElementById("ex1").innerText = "The Fahrenheit Of "+Celsius+" Celcius is " + Fahrenheit;