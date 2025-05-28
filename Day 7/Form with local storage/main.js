
    const name = document.querySelector("#name");

    const email = document.querySelector("#email");

    const nameError = document.querySelector(".nameError");

    const emailError = document.querySelector(".emailError");

    const submitBtn = document.querySelector("#submitBtn");




    function handleSubmitData(event) {
      event.preventDefault();


      let isValid = true;

      if (!name.value.trim()) {
        nameError.style.display = "block";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }

      if (!email.value.trim()) {
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }


      if (isValid) {
        var id = Math.random().toString(16).slice(2);

        const users = JSON.parse(localStorage.getItem("Users")) || [];

        const userData = {
          id: id,
          name: name.value,
          email: email.value
        };

        users.push(userData);

        localStorage.setItem("Users", JSON.stringify(users));

        resetAllField();
      }
    }




    function resetAllField() {
      name.value = "";
      email.value = "";
    }