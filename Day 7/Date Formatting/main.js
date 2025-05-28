       const currDate = new Date();
          const formatString = "DD/MM/YYYY";

          const output = document.getElementById("output");

          function formatDate(date, formatString) {
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            const arr = `${day}/${month + 1}/${year}`;

            const data = formatString.replace("DD/MM/YYYY", arr);
            console.log(data);
            output.innerHTML = data;
          }

          formatDate(currDate, formatString)