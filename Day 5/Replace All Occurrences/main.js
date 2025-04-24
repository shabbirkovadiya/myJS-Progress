// Create a variable like that const numbers = [1, 2, 3, 2, 4]; 
// Write a function that takes an numbers, a value to replace, and a new value as a parameter. 
// Like replac1zeAll(numbers, 2, 5); a
// It should modify the original array, replacing all occurrences of the old value with the new value.
// For example we have array like numbers  variable 
// and function second parameter is old value like 2 number 
// and function 3rd parameter is new number
// so function can do this is in number  on every places found 2 number then this 2 number should be replaced to with new number 5
// Final result will be console.log(numbers); // Output: [1, 5, 3, 5, 4] 
 
const numbers = [1, 2, 3, 2, 4]; 
function replaceAll(numbers,oldValue,newValue){
for(i=0;i<numbers.length;i++){
if(numbers[i] == oldValue){
    numbers[i] = newValue;
}
}
console.log(numbers)
}

replaceAll(numbers,2,5)