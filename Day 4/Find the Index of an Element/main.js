// Create array variable like this const fruits = ["apple", "banana", "orange", "grape"]; 

// Create another variable like this const targetFruit = "orange"; 

// using this array and for loop find index position of targetFruit value. 

// if targetFruit index found then break loop

// if targetFruit index position is found then print message like console.log("Index of", targetFruit, "is:", targetIndex);

// and other wise if index position is not found then print message   console.log(targetFruit, "not found.");

const fruits = ["apple", "banana", "orange", "grape"];
var targetFruit = "orange";
for ( i = 0; i < fruits.length; i++) {
    if (fruits[i] === targetFruit) {
        console.log("Index of", targetFruit, "is:", i);
        break;
    }
    } 
console.log("Current Index = ", i);
    if (i === fruits.length) {
        console.log(targetFruit, "not found.");
        }


document.getElementById("ex1").innerText = "See Console For Result";