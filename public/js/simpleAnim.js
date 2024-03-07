export function menuAnim() {
  const menuLScreenIntro = document.getElementById("intro-menu");
  const serviceLink = document.querySelector(".service-link");

  let leaveTimeout;

  serviceLink.addEventListener("mouseenter", (e) => {
    const introTarget = e.target;

    if (introTarget === serviceLink) {
      // console.log("enter");
      clearTimeout(leaveTimeout); // Clear any pending leave timeout
      menuLScreenIntro.classList.remove(
        "animate__animated",
        "animate__bounceOutUp"
      );
      menuLScreenIntro.classList.add(
        "animate__animated",
        "animate__bounceInDown"
      );
      menuLScreenIntro.classList.add("intro-menu-active");
    }
  });

  // Mouse Leave

  serviceLink.addEventListener("mouseleave", (e) => {
    console.log("leave");
    const introTarget = e.relatedTarget;

    // Check if the mouse is leaving the serviceLink or its child elements
    if (!isDescendant(serviceLink, introTarget)) {
      // Use a timeout to delay the removal of classes
      leaveTimeout = setTimeout(() => {
        menuLScreenIntro.classList.remove("animate__bounceInDown");
        menuLScreenIntro.classList.add(
          //   "animate__animated",
          "animate__bounceOutUp"
        );
        // menuLScreenIntro.classList.remove("intro-menu-active");
      }, 200); // You can adjust the delay (in milliseconds) as needed
    } else {
      clearTimeout(leaveTimeout); // Clear the timeout if the mouse reenters the serviceLink
    }

    // small screens

    const screenWidth = window.innerWidth;
    if (screenWidth < 670) {
      // console.log("smaller");
    } else {
      // console.log("big");
    }
  });

  // Helper function to check if an element is a descendant of another
  function isDescendant(parent, child) {
    let node = child;

    // console.log(node, "node");
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
      // console.log(node, "node.parent");
    }
    return false;
  }
}

menuAnim();
