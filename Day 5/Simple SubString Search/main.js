// Write a function that takes a string and a substring as parameter.
// It should print true if the substring is found anywhere in the string, false otherwise.

function checkString(str, subStr) {
 console.log(str.includes(subStr))
}

// Example usage:
checkString("hello world", "world"); // Output: true
checkString("hello world", "planet"); // Output: false