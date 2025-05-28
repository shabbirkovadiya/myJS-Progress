  const myFile = document.getElementById("myFile");
    const myImage = document.getElementById("myImage");

    const imgDiv = document.querySelector(".image-div");

    const fileInput = document.querySelector(".fileInput");


    myFile.addEventListener("change", (e) => {
      const getImage = e.target.files[0];

      const reader = new FileReader(e);

      reader.onload = (e) => {
        myImage.src = e.target.result;
      };

      reader.readAsDataURL(getImage);
    });



    imgDiv.addEventListener("click", (e) => {
      const image = e.target; // Clicked Image
      const label = e.target.parentElement;

      image.addEventListener("change", (e) => {
        const img = e.target.files[0];

        const cancelIcon = e.target.previousElementSibling.children[1];

        const fileInput = e.target;

        const reader = new FileReader();

        reader.onload = (e) => {
          const prev = image.previousElementSibling;
          const img = prev.querySelector("img");
          img.src = e.target.result;
          cancelIcon.style.display = "block";
          prev.style.pointerEvents = "none";
        };

        reader.readAsDataURL(img);

        cancelIcon.addEventListener("click", (e) => {
          img.src = "null-img.png";
          console.log("hello");
        });
      });
    });

