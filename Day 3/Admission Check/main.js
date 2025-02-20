
// Create variables age and hasTicket.
// let age = 15
// let hasTicket = false.
// Change variable value accordingly 
// Create a function and call oncliking button
// inside this function using a if statement with the && operator, log "Welcome!" if the person is over 18 and has a ticket. Otherwise, log "Sorry, you cannot enter."


console.log("Admission Check");
let age = 18;
let hasTicket = true;
function checkAdmission() {
    if (age >= 18 && hasTicket) {
        console.log("Welcome");
        return "Welcome!(print)" ;
        
    }
    else{
        console.log("Sorry, you cannot enter.");
    return "Sorry, you cannot enter.(print)" ;
}

}
document.getElementById("ex1").innerText = checkAdmission();