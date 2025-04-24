// Create a function that takes two parameters
// first param is a string with all lowercase
// second param is a search string with all uppercase
// Using these two parameters, find the second param string from the first string using case-insensitive search
const str ="hello world";
const searchStr ="HELLO WORLD";
function casesensi(str, searchStr) {
    console.log(str.includes(searchStr.toLowerCase())); //true
    console.log(str.includes(searchStr)); //false
}
casesensi(str, searchStr);