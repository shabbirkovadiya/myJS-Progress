const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const addressInput = document.getElementById("addressInput");
const countryInput = document.getElementById("countryInput");
const saveBtn = document.getElementById("saveBtn");
const dataTable = document.getElementById("dataTable");

function checkpass() {
  if (passInput.value.length >= 4 && passInput.value.length <= 12) {
    passError.style.display = "none";
    passInput.style.borderColor = "black";
  } else {
    passError.style.display = "block";
    passInput.style.borderColor = "red";
  }
}

function saveData() {
  let isValid = true;

  // Name validation
  if (nameInput.value) {
    nameError.style.display = "none";
    nameInput.style.borderColor = "black";
  } else {
    nameError.style.display = "block";
    nameInput.style.borderColor = "red";
    isValid = false;
  }

  // Email validation
  if (emailInput.value) {
    emailError.style.display = "none";
    emailInput.style.borderColor = "black";
  } else {
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
    isValid = false;
  }

  // Password validation
  if (passInput.value.length >= 4 && passInput.value.length <= 12) {
    passError.style.display = "none";
    passInput.style.borderColor = "black";
  } else {
    passError.style.display = "block";
    passInput.style.borderColor = "red";
    isValid = false;
  }

  // Radio input (e.g., gender)
  const radioInput = document.querySelector('input[type="radio"]:checked');
  if (!radioInput) {
    alert("Please select a gender.");
    isValid = false;
  }

  // Checkbox group
  const checkboxes = document.querySelectorAll('input[name="sports"]:checked');
  let sports = "";
  checkboxes.forEach((cb, i) => {
    sports += cb.value;
    if (i < checkboxes.length - 1) sports += ", ";
  });

  if (checkboxes.length === 0) {
    alert("Please select at least one sport.");
    isValid = false;
  }

  if (!isValid) return; // Stop if anything invalid

  // Insert into table
  const id = Math.random().toString(16).slice(2);

  const formData = `
    <tr id="${id}">
      <td>${nameInput.value}</td>
      <td>${emailInput.value}</td>
      <td>${passInput.value}</td>
      <td>${addressInput.value}</td>
      <td>${sports}</td>
      <td>${radioInput.value}</td>
      <td>${countryInput.value}</td>
      <td class="action-icons"><i class="fas fa-edit"></i></td>
      <td class="action-icons"><i class="fas fa-trash" onclick="removeData('${id}')"></i></td>
    </tr>
  `;
  dataTable.insertAdjacentHTML("beforeend", formData);
}

function removeData(id) {
  const row = document.getElementById(id);
  if (row) {
    row.remove();
  }
}
