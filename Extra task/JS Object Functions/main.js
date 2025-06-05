let student = {
  name: "John Doe",
  class: "JavaScript",
  rollno: 12
};
const myFunc1 = obj => Object.keys(obj).length;
document.getElementById("ex1").innerText = myFunc1(student);

//exercise 2
let bio = { name: "Dcoders", course: "JavaScript" };
const myFunc2 = obj => Object.values(obj).join(" ");
document.getElementById("ex2").innerText = myFunc2(bio);

//exercise 3

const myFunc3 = (obj, prop) => prop in obj;
document.getElementById("ex3").innerText = myFunc3({name:"abc"},"name");

//exercise 4

const myFunc4 = obj => "Yes " + Object.values(obj) ;
document.getElementById("ex4").innerText = myFunc4({name:"dcoders"});

//exercise 5
let getName = { age: 20, course: "JavaScript", name: "John Doe" };
const myFunc5 = obj => {
  const { name } = obj;
  return name;
}
document.getElementById("ex5").innerText = myFunc5(getName);


//exercise 6
let removeKey = { name: "John Doe", age: 20, color: "pink" };
const myFunc6 = obj => {
  delete obj.color;
  return Object.entries(obj).flat(Infinity).join(" ")
}
document.getElementById("ex6").innerText = myFunc6(removeKey);


//exercise 7
let person = {
  name: "John Doe",
  address: {
    city: "Springfield"
  }
}
const myFunc7 = obj => obj.address.city;
document.getElementById("ex7").innerText = myFunc7(person);


//exercise 8
const myFunc8 = arr => Object.fromEntries(arr);
document.getElementById("ex8").innerText = JSON.stringify(myFunc8([['age', 20], ['color', 'red']]));

//exercise 9
const myFunc9 = obj => 
Object.values(obj).some((ele => typeof ele == 'number'))
document.getElementById('ex9').innerText = myFunc9({ age: "90", age2: 2 })


//exercise 10
let tempVar = [{name:'John', age:20}, {type:'vehicle', model: 'car'},{year:2019,BuiltYear:1991}];
let newStr =[];
const myFunc10 = arr =>{
arr.forEach(e =>newStr.push(Object.keys(e)));
return newStr.flat(Infinity).join(" ");
} 
document.getElementById('ex10').innerText = myFunc10(tempVar);

