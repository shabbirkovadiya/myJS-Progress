// Create a function calculatePower(base, exponent).
// This function takes two arguments: base and exponent.
// Inside the function, use a exponential (for a challenge) to calculate base raised to the power of exponent.
// log the calculated power.
// Call the function with different values for base and exponent.

console.log("Power Of A Number");

function calculatePower(base, expo) {
    return base**expo;
}
console.log("The Base : 2 and Exponential by 3 is : " + calculatePower(2, 3));

document.getElementById("ex1").innerText = "The Base : 2 and Exponential by 6 is : "+ calculatePower(2,6);