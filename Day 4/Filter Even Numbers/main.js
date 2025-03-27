// Create a function and call on clicking button
// Create Number data types Array like const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; 
// Filter all even number and push in new array all even value and for filter even number use for loop
// print final result in console log

function evenNumbers() {
    const numbers = [1,2,3,4,5,6,7,8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
            }
            }
            console.log(evenNumbers);
            
    }

document.getElementById("ex1").innerText = "See Console For Result";