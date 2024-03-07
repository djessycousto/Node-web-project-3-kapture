document.addEventListener("DOMContentLoaded", function () {
  contactForm();
});

export function contactForm() {
  function readStart() {
    const form = document.querySelector("form");
    const formCont = document.querySelector(".form-container");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    // console.log(formCont);
    const formBtn = document.querySelector(".form-btn");
    const msgErr = document.querySelector(".msg-err");
    const messageContainer = document.querySelector(".message-container");

    // console.log(formBtn, "form");

    // Check if the form exists before proceeding
    if (!form) {
      return;
    }

    let info = "";

    //

    formBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      // check

      if (!name.value || !email.value || !message.value) {
        errDisplay([name, email, message], " must be filled.");
        return;
      }
      if (!name.value) {
        errDisplay([name], " must be filled.");
        return;
      }

      //   email test
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value) {
        errDisplay([email], " must be filled.");
        return;
      }
      if (!emailRegex.test(email.value)) {
        errDisplay([email], " Please provide a valid email address");
        return;
      }

      if (!message.value) {
        errDisplay([message], " must be filled.");
        return;
      }

      if (message.value < 8) {
        errDisplay([message], " must be over 20 characters ");
        return;
      }

      //   form data

      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("email", email.value);
      formData.append("message", message.value);

      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      // console.log(formDataObject);

      try {
        const response = await fetch("/contact/sendEmail", {
          // "/contactUS
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          console.log("error");
          return;
        }

        const sendEmail = await response.json();
        successMessage();
        form.reset();
        // console.log("send");
      } catch (error) {
        errDisplay(inputs, message);
        return;
      }

      // end click
    });

    // success

    function successMessage() {
      formBtn.style.transition = "all .4s";
      formBtn.classList.add("animate__animated", "animate__pulse");
      formBtn.textContent = "Sent";
      formBtn.style.fontSize = 18 + "px";

      // Add a class to trigger the transition

      // Clear the transition class after 3 seconds
      setTimeout(() => {
        formBtn.style.transition = "all .4s";
        formBtn.classList.remove("animate__animated", "animate__pulse");
        formBtn.textContent = "send";
        formBtn.style.fontSize = "";
      }, 3000);
    }
    //    error
    function errDisplay(inputs, message) {
      inputs.forEach((input) => {
        input.style.border = "1px solid red";
        //   split each name
        info += `${input.name.charAt(0).toUpperCase() + input.name.slice(1)}, `;
      });
      info = info.slice(0, -2) + message;

      const elements = Array.from(formCont.children);
      elements.forEach((el) => {
        if (el.classList.contains("message-container")) {
          messageContainer.classList.add(
            "errorMsg",
            "animate__animated",
            "animate__jello"
          );

          messageContainer.style.height = "auto";
          msgErr.textContent = info;
        }
      });
      // animate__animated animate__jello

      // set timeOut for msg

      const intId = setTimeout(() => {
        info = "";
        messageContainer.classList.remove(
          "errorMsg",
          "animate__animated",
          "animate__jello"
        );
        messageContainer.style.height = 0;
      }, 3000);

      // Clear the interval after 3 seconds
      setTimeout(() => {
        clearInterval(intId);
      }, 3000);
    }
  }
  readStart();
} // end fct

// call the fction

// function errDisplay(inputs) {
//     inputs.forEach((input) => {
//       console.log(input.name);
//       input.style.border = "1px solid red";
//       //   split each name
//       info += `${input.name + " test"}, `;
//       console.log(info);
//     });

//     msgErr.textContent = info;
//   }

// animate__pulse

//   function successMessage() {
//     const pseudoElement = window.getComputedStyle(formBtn, "::before");
//     // const currentWidth = parseFloat(pseudoElement.width);
//     // const newWidth = currentWidth === 50 ? 100 : 50; // Toggle between 50% and 100%
//     const PsTranslateX = " translate: 0%";

//     // Set the width of the pseudo-element
//     formBtn.style.setProperty("translate", `${PsTranslateX}%`);

//     formBtn.classList.add(
//       // "errorMsg",
//       "animate__animated",
//       "animate__pulse"
//     );

//     const intId = setTimeout(() => {
//       formBtn.classList.remove(
//         // "errorMsg",
//         "animate__animated",
//         "animate__pulse"
//       );
//       messageContainer.style.height = 0;
//     }, 3000);

//     // Clear the interval after 3 seconds
//     setTimeout(() => {
//       clearInterval(intId);
//     }, 3000);
//   }
