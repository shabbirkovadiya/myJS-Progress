// Create any variable with number
// Create function and check this variable number is even or odd
// Print result in console is number is Odd     console.log("The number is odd.");  
// Print result in console is number is Even console.log("The number is even.");  
// Create button and add on click event this created function.



console.log("Even-Odd");
function checkEvenOdd(no) {
if (no % 2 == 0){
   return no +" Number Is Even";
}
else {
    return no + " Number is odd.";
}
}
console.log(checkEvenOdd(5));
document.getElementById("ex1").innerText = checkEvenOdd(4);