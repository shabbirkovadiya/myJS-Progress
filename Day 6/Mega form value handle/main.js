const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passError = document.getElementById('password-error');
const nameInput =document.getElementById('nameInput');
const emailInput =document.getElementById('emailInput');
const passInput =document.getElementById('passInput');
const addressInput=document.getElementById('addressInput')
const saveBtn =document.getElementById('saveBtn');
const dataTable = document.getElementById('dataTable')


function checkpass(){
   if(passInput.value.length >= 4 && passInput.value.length <= 12){
    passError.style.display = "none";
    passInput.style.borderColor = "Black";
   }else{
    passError.style.display = "block";
    passInput.style.borderColor = "red";
   }
}
function saveData(){
    if(nameInput.value){
        nameError.style.display = "none";
        nameInput.style.borderColor = "Black";
       }else{
        nameError.style.display = "block";
        nameInput.style.borderColor = "red";
       }
    if(emailInput.value){
        emailError.style.display = "none";
        emailInput.style.borderColor = "Black";
       }else{
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
       }

       const formData = `
    <td>${nameInput.value}</td>
    <td>${emailInput.value}</td>
    <td>${passInput.value}</td>
    <td>${addressInput.value}</td>
    <td>${nameInput.value}</td>
    <td>${nameInput.value}</td>
    <td>${countryInput.value}</td>
    <td class="action-icons"><i class="fas fa-edit"></i></td>
    <td class="action-icons"><i class="fas fa-trash"></i></td>
  `
  dataTable.insertAdjacentHTML("beforeend",formData);
}
