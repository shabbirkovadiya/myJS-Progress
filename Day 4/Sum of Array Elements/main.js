
// Create a function and call on clicking button
// Create Number data types Array like const numbers = [5, 12, 8, 130, 44];
// Sum all numbers inside array using for loop and print final result in console.

function sumArr(){
    const numbers = [5, 12, 8, 130, 44];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];  
    }
    console.log(sum)
}

document.getElementById("ex1").innerText = "See Console For Result";