
// Create object array like 
// const cartItems = [{ name: "Laptop", price: 999.99 },   { name: "Headphones", price: 149.95 }, { name: "Mouse", price: 29.99 }];

// using for loop find total final price and print log result


const cartItems = [{ name: "Laptop", price: 999.99 },   { name: "Headphones", price: 149.95 }, { name: "Mouse", price: 29.99 }];
let total = 0;
for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
}
        console.log("Total price: " + total);


document.getElementById("ex1").innerText = "See Console For Result";