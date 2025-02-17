// Create a variable with any number.
// Create a function that check this variable  number is negative, positive or zero.
// If number is zero then print   console.log("The number is zero."); 
// if number is positive then print  console.log("The number is positive ."); 
// if number is negative then print console.log("The number is negative ."); 
// Create a button and on click event to call the function

console.log("Check-Positive,Negative-and-Zero-number");
function check(number){
    if (number == 0) {
        return " The number  is zero.";
    }
 else if (number > 0){
    return " The number  is Positive.";    
 }
 else if(number < 0) {
    return " The number  is Negative.";
 }
}
console.log(check(-2));
document.getElementById("ex1").innerText =check(0);