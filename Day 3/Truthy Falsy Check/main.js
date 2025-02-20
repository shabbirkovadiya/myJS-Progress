// Write a function isTruthy(value) that takes a value as input and print true if it's truthy, and false if it's falsy.
// Test your function with various values (numbers, strings, Booleans, null, undefined, arrays, objects).


function isTruthy(value) {
    if (value) {
        console.log("true");
    } else {
        console.log("false");
    }
}

isTruthy(true);        // true
isTruthy(false);       // false
isTruthy(1);           // true
isTruthy(0);           // false
isTruthy("Hello");     // true
isTruthy("");          // false
isTruthy(null);        // false
isTruthy(undefined);   // false
isTruthy([]);          // true
isTruthy({});          // true
isTruthy(NaN);         // false

document.getElementById("ex1").innerText = "Check Console For Getting Boolean Result";        
