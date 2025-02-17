// Create variable with object 
// add two key like first name and last name

// Create a function for create full name 
// for example object first name is Raju  and last name  Sharma then concat this first and last name and console log the full name like  The full name is Raju Sharma  

// Create a button to execute this function.
console.log("Person Profile")
let fullname = {
    fname:"Shabbir",
    lname:"Kovadiya",
}
function printname(){
console.log(fullname.fname + fullname.lname);
document.getElementById("ex1").innerText = fullname.fname + fullname.lname;
}