// Create a form with a password and confirm password field. When the form is submitted, write JavaScript code to check if both passwords match. If not, display an error message next to the confirm password field.
const pass = document.getElementById('password');
const confirmpass = document.getElementById('confirmpassword');
const passWarning = document.getElementById('passWarning')


function check() {
if(!pass.value || !confirmpass.value){
    passWarning.style.display = "block";
    passWarning.innerText = "Enter Passwords First !"
}
else if(pass.value !== confirmpass.value){
    passWarning.innerText = "Both Passwords Are Diffrent !"
    passWarning.style.display = "block";
}
else{
    passWarning.style.display = "none";
}


}

