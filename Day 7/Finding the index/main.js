//EX 1
const myNumbers = [1, 2, 3, 4, 5];
const finalNumber = myNumbers.findIndex((num) => num % 2 == 0);
document.getElementById("output1").innerText =
  "index of first even number = " + finalNumber;

//EX 2
const mystr = ["banana", "mango", "apple"];
const finalstr = mystr.findIndex((fruit) => fruit.startsWith("a"));
document.getElementById("output2").innerText =
  "index of the first string starting with a: " + finalstr;

//EX 3
const myObj = [
  { name: "AB", age: 30 },
  { name: "CD", age: 25 },
  { name: "EF", age: 20 },
];

const finalObj = myObj.findIndex((obj) => obj.age > 30);
document.getElementById("output3").innerText =
  "Finding the index of the first object with age grater than 30 : " + finalObj;
