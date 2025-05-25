function myFunc1(str, a) {
  return str.replaceAll(a, "");
}
document.getElementById("ex1").innerText = myFunc1("Hello World", "o");

//exercise 2

function myFunc2(str) {
  return str.split(" ").length - 1;
}
document.getElementById("ex2").innerText = myFunc2(
  "this Text Contain Four Spaces"
);

//exercise 3

function myFunc3(str1, str2) {
  return str2 + " " + str1;
}
document.getElementById("ex3").innerText = myFunc3("Hello", "Coders");

//exercise 4

function myFunc4(str) {
  return str.replaceAll("a", "A");
}
document.getElementById("ex4").innerText = myFunc4("I am learning javascript");

//exercise 5

function myFunc5(str) {
  return str.slice(0,-1);
}
document.getElementById("ex5").innerText = myFunc5("javascript");


//exercise 6

function myFunc6(str) {
    let numStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      numStr += str[i];
    }
  }
  return Number(numStr);
}
document.getElementById("ex6").innerText = myFunc6("javascript2ai3ssdqdq2131cd");


//exercise 7

function myFunc7(str) {
  return str.toUpperCase();
}
document.getElementById("ex7").innerText = myFunc7("javascript");

//exercise 8

function myFunc8(a,b) {
a=String(a);
b=String(b);
return a+b;
}
document.getElementById("ex8").innerText = myFunc8(3,4);


//exercise 9

function myFunc9(str,a) {
 return str.startsWith(a.toUpperCase() || a.toLowerCase())
}
document.getElementById("ex9").innerText = myFunc9("JAVA","j");


//exercise 10

function myFunc10(str,a) {
  let location = str.indexOf(a) + 1;
  if(location <= 0){
    return "Not Exist"
  }
  return location;
}
document.getElementById("ex10").innerText = myFunc10("JAVA","J");
