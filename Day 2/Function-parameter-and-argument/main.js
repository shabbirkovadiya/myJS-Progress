// Create a function that's take two parameter and this function need to concat this parameter and log result like The concat is 15 

console.log("Function-parameter-and-argument");
function concat(a, b) {
    
    return "concat of "+a+" and "+b+" is : "+ String(a)+String(b);
}

// Function call with arguments
console.log (concat(1, 5)); 

document.getElementById("ex1").innerText = concat(2, 6);