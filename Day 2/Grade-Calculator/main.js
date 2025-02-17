// Create variable and assign any numbers between 0 to 100
// Create a function for check what grade based on variable value.
// Calculation Grade 
// A: 90-100
// B: 80-89

// C: 70-79
// D: 60-69
// F: 0-59
// If user enter number of 100 plus then show message like this is not valid numbers
// all grade should be print in console
// Create a button for calling function



console.log("Grade Calculator");
function grade(marks){
    if(marks >=100){
        return "Ente Marks Between 0-100";
    }
    else if(marks >=90){
        return "You Got Grade A";
    }
    else if(marks >=80){
        return "You Got Grade B";
    }
    else if(marks >=70){
        return "You Got Grade C";
    }
    else if(marks >=60){
        return "You Got Grade D";
    }
    else if(marks <= 59){
        return "You Got Grade E";
    }
    else {
        return "You Enter Invalid Number";
    }
}
// console.log(grade(87));
function showgrade(){
    console.log(grade(99) + " for 99 Marks")
}

document.getElementById("ex1").innerText = grade(87) + " for 87 Marks";