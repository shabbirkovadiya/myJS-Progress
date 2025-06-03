// function myFunc1(str) {
//  str = str.split(" ");
//   const newArr =  str.map((e) => {
//     let [first,...rest] = e;
//     return first.toUpperCase() + rest.join("");
//   }
// );
//    return newArr.join(" ");
// }


const newStr = (str) => str.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
document.getElementById("ex1").innerText = newStr("i love india");

//exercise 2

// function myFunc2(num) {
//  num += "";
//  return num.length;
// }

const myFunc2 = num => ("" + num).length;
document.getElementById("ex2").innerText = myFunc2(7990);

//exercise 3

// function myFunc3(num) {
//   num +="";
//  let num2= num.split("").toReversed().join("");
//  return num === num2 ? `${num} is palindrome👍` : `${num} is Not a palindrome👎`;
// }

const myFunc3 = num => num == +([...("" + num)].reverse().join(""));
document.getElementById("ex3").innerText = myFunc3(12721);

//exercise 4

// function myFunc4(arr) {
//   return arr.sort().reverse();
// }

const myFunc4 = arr => arr.sort().reverse();
document.getElementById("ex4").innerText =
    myFunc4(["Apple", "Zebra", "Mango"]);

// exercise 5
let obj1 = { age:18, name: "Jhon" };
let obj2 = { name: "Jhon" ,age : 18};
let obj3 = { name: "Doe" };
const myFunc5 = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}
document.getElementById("ex5").innerText =myFunc5(obj1, obj2);



//exercise 6
const myFunc6 = arr => Array.isArray(arr);
document.getElementById("ex6").innerText = myFunc6([1, 2]);


//exercise 7
const myFunc7 = arr => {
    const [FirstElem] = arr;
    return Array.isArray(FirstElem) ? "[]" : "First Element : " + FirstElem;
}
document.getElementById("ex7").innerText = myFunc7([70, 90, 50]);

//exercise 8
const myFunc8 = (arr, sign) => arr.join(sign);
document.getElementById("ex8").innerText = myFunc8(["hello", "Coders"], " + ");

//exercise 9
const myFunc9 = arr => arr.flat(Infinity);
document.getElementById("ex9").innerText = myFunc9([1, 2, [3], [[4, 5]], 6, 7]);

//exercise 10
const myFunc10 = num => num.map(e => e * 2);
document.getElementById("ex10").innerText = myFunc10([2, 3, 4, 5]);

//exercise 11
const myFunc11 = num => num.reduce((total, ele) => total + ele * ele, 0);
document.getElementById("ex11").innerText = myFunc11([4, 5]);

//exercise 12
const myFunc12 = num => num.filter(e => e >= 0)
document.getElementById("ex12").innerText = myFunc12([1, -2, 3, 77, -99, 5]);

//exercise 13
const myFunc13 = num => num.map(e => +e).reduce((sum, e, i) => sum + (i % 2 !== 0 ? e : 0), 0)
document.getElementById("ex13").innerText = myFunc13(["20", "100", "30", "10", "51", "1000"]);
