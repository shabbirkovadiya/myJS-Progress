let student = [
  { name: "John", marks: 50 },
  { name: "Alice", marks: 39 },
  { name: "Harish", marks: 87 },
  { name: "Liza", marks: 49 }
];

const myFunc1 = arr => arr.filter(e => e.marks > 49).map(e => e.name);
document.getElementById("ex1").innerText = myFunc1(student);


// exercise 2 
const myFunc2 = str => [...new Set(str)];
document.getElementById("ex2").innerText = myFunc2("aabbccdef11255");

//exercise 3 
const myFunc3 = (arr1, arr2) => {
  let tempArr = [];
  for (let x of arr2) {
    tempArr.push(arr1[x])
  }
  return tempArr;
}
document.getElementById("ex3").innerText = myFunc3(['a', 'b', 'c', 'd', 'e'], [1, 3]);

//exercise 4
const myFunc4 = str => str.replace(str.slice(4, -12), "...");
document.getElementById("ex4").innerText = myFunc4("dcoders_Iab@exampIe.com");

//exercise 5
const myFunc5 = arr => arr.filter(e => typeof e == "number").reduce((sum, e) => sum + e, 0);
document.getElementById("ex5").innerText = myFunc5([15, 35, -5, "a", 0, -15]);

// exercise 6
// const myFunc6 = num => {
// Pendingg 
// }
// document.getElementById("ex6").innerText = myFunc6(32);

// exercise 7
const myFunc7 = (arr, i) => {
  arr.splice(i, 1);
  return arr;
}
document.getElementById("ex7").innerText = JSON.stringify(myFunc7([{ x: 1 }, { y: 2 }, { z: 3 }], 1));

// exercise 8 

const myFunc8 = str => {
  var [first, ...rest] = str;
  return first.toLowerCase() + rest.join("").toUpperCase();
}
document.getElementById("ex8").innerText = myFunc8("dcoders");


// exercise 9
const myFunc9 = (arr, value) => arr.filter(e => e <= value).length;
document.getElementById("ex9").innerText = myFunc9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

// exercise 10
const myFunc10 = arr => arr.sort((a,b) => a.price - b.price)
document.getElementById("ex10").innerText =JSON.stringify( myFunc10([{product: "phone", price:15000}, {product: "laptop",
price:75000}, {product: "camera", price:12000}]));
