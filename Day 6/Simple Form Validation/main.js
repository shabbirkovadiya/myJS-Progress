const Fname = document.getElementById('Fname');
const email = document.getElementById('email');
const emailWarning = document.getElementById('emailWarning')
const nameWarning = document.getElementById('nameWarning')

function check() {
    if (!Fname.value) {
        nameWarning.style.display = "block";
    } else {
        nameWarning.style.display = "none";
    }

    if (!email.value) {
        emailWarning.style.display = "block";
    } else {
        emailWarning.style.display = "none";
    }
}

