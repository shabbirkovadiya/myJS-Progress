// Have a button that, when clicked, increments a counter displayed on console log.  You'll need a function to handle the incrementing and updating the display

console.log("Dynamic Counter");
let Count = 0;  
function inc() {
    Count += 1;
    document.getElementById("ex1").innerText = "Current Count: " + Count;
    console.log(Count);
}