// Create two arrays like that 
// const colors1 = ["red", "green", "blue"]; 
// const colors2 = ["blue", "red", "purple"];  
// After that write a function allElementsExist(colors1, colors2) using these two parameters.
// This function takes two arrays as input and prints true if all elements of the first array exist in the second array (regardless of order), otherwise false. Utilize a loop and the includes() method.

const colors1 = ["red", "green", "blue"]; 
const colors2 = ["blue", "red", "purple"];

function allElementsExist(colors1, colors2) {
    for (let i = 0; i < colors1.length; i++) {
        console.log(colors1[i].includes(colors2[i])) ;
        
    }}

allElementsExist(colors1, colors2);
