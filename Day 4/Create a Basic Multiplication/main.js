// Create variable like const number = 5; 
// and create for loop of limit 10 and divide number variable to index and each count of loop print this message 
// console.log( `${number} x ${i} = ${result}` );

let number = 5;
for (let i = 0; i < 10; i++) {
    let result = number / i;
    console.log(`${number} X ${i} = ${result}`);
    }
document.getElementById("ex1").innerText = "See Console For Result";