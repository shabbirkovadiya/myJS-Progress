// Ex:- 1
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvenNumber = myNumbers.filter((num) => num % 2 == 0);
document.getElementById("output1").innerText = filterEvenNumber;

const filterNum = myNumbers.filter((num) => num > 5);
document.getElementById("output2").innerText = filterNum;

const filterNumByThree = myNumbers.filter((num) => num % 3 == 0);
document.getElementById('output3').innerText = filterNumByThree;


// Ex:- 2
const mystr = ["banana", "mango", "blueberry", "apple", "grapes"];

const finalLenghtStr = mystr.filter((fruit) => fruit.length > 5);
document.getElementById('output4').innerText = finalLenghtStr;


const filterStr = mystr.filter((fruit) => fruit.startsWith("b"));
document.getElementById('output5').innerText = filterStr;


const filterWord = mystr.filter((fruit) => fruit.includes("grapes"));
document.getElementById('output6').innerText = filterWord;


// Ex:- 3
const myObj = [
  { name: "Abbasali", age: 35 },
  { name: "Mohammadali", age: 50 },
  { name: "Shabbirhasan", age: 45 },
];

const filterAge = myObj.filter((obj) => obj.age > 40);
document.getElementById('output7').innerText = JSON.stringify(filterAge);

const filterName = myObj.filter((obj) => obj.name.startsWith("A"));
document.getElementById('output8').innerText = JSON.stringify(filterName);
