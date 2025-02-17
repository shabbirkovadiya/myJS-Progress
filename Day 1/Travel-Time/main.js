// You're driving to a destination 250 KM away.
// You average a speed of 55 KM per hour.
// Calculate approximately how long the drive will take time.
// console.log("The drive will take approximately:", time, "hours");

console.log("Travel Time");
var destination = 250;
var speed = 35;
var time = destination / speed ;

console.log("The drive will take approximately:", time, "hours");
document.getElementById("ex1").innerText = "The drive will take approximately :"+ time + " hours";