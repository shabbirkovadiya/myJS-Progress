// Create object with name and age value.
// Create a function check discount based on age
// Discount based on age
// if age is between 40 to 50 then user get 40% discounts
// if age is between 30 to 40then user get 30% discounts
// if age is between 20 to 30 then user get 20% discounts
// if age is between 0 to 20 then user get 10% discounts
// if age is more then 50 +then user not able to get any discount
// Show message on console if eligible discount like Raju, you are eligible for a 10% discount! 
// if not eligible for discount then show Raju, sorry, no discount available. 
// Click button should create function.

console.log("Check Discount");

var person = {
    name:"sk",
    age: 20,
}

function checkdiscount(){
    if (person.age>=40 && person.age<=50){
        console.log(person.name + ", You Are Eligible For 40% Discount !");
        return person.name + ", You Are Eligible For 40% Discount ! (for print)";
    }
    else if (person.age>=30 && person.age<=40){
        console.log(person.name + ", You Are Eligible For 30% Discount !");
        return person.name + ", You Are Eligible For 30% Discount ! (for print)";
    }
    else if (person.age>=20 && person.age<=30){
        console.log(person.name + ", You Are Eligible For 20% Discount !");
        return person.name + ", You Are Eligible For 20% Discount ! (for print)"
    }
    else if (person.age>=0 && person.age<=20){
        console.log(person.name + ", You Are Eligible For 10% Discount !");
        return person.name + ", You Are Eligible For 10% Discount ! (for print)";

    }
    else{
        console.log(person.name + ", No Discount Avialble For You !");
        return person.name + ", No Discount Available For You ! (for print)";
    }

    
}
document.getElementById("ex1").innerText = checkdiscount();
