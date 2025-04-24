
// Create an array like this const numbers = [1, 2, 2, 3, 4, 1]; 
// Write a function that takes an array as parameter and print a new array containing only unique elements (removing duplicates). Implement a loop and includes() to check for existing elements before adding.
// Final result will be console.log(uniqueNumbers); // Output: [1, 2, 3, 4]


const numbers = [1, 2, 2, 3, 4, 1];
const newarr=[]
function removeDuplicate(a,b){
   for(let i=0; i<a.length;i++){
    if(!b.includes(a[i])){
        b.push(a[i])
    }
} 
return b;
}
x = removeDuplicate(numbers,newarr);
console.log(x)