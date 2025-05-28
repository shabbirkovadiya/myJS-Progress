const birthdate = new Date(2005,8,16);
const currentDate = new Date()


function calcAge(){
    var age = birthdate.getFullYear() - currentDate.getFullYear();

    return ("age is " +
        Math.abs(age))
}
document.getElementById('output').innerText = calcAge();;


