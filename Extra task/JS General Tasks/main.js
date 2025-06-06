let student = [
{ name: "John", marks: 50 }, 
{name: "Alice", marks:39},
{ name: "Harish", marks: 87 },
{ name: "Liza", marks: 49 }
];

const myFunc1 = arr =>  arr.filter(e => e.marks > 49).map(e => e.name);
document.getElementById("ex1").innerText = myFunc1(student);


// exercise 2 
const myFunc2 = str => [...new Set(str)];
document.getElementById("ex2").innerText = myFunc2("aabbccdef11255");

//exercise 3 
const myFunc3 = (arr1,arr2) => {
let tempArr=[];
for (let x of arr2){
  tempArr.push(arr1[x])
}
return tempArr;
}
document.getElementById("ex3").innerText = myFunc3(['a', 'b', 'c', 'd','e'],[1,3]);