// Create variables likesChocolate and likesVanilla
// let likesChocolate = false;
// let likesVanilla = true;
// Create a function and call oncliking button
// inside this function use the || operator to log "Here's your ice cream" if at least one flavor preference is true. Otherwise, log "Sorry, we don't have a flavor for you".
// change after all two let (variables)  value to false and check condition


let likesChocolate = false;
 let likesVanilla = true;
 function check() {
   if (likesChocolate || likesVanilla) {
      console.log("Here's your ice cream")
      return "Here's your ice cream";
   }
   else {
      console.log("Sorry, we don't have a flavor for you");
      return "Sorry, we don't have a flavor for you";
   }
 }
 document.getElementById("ex1").innerText =check();
