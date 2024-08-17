// nave toggle
export function menuToggle() {
  const headerContainer = document.querySelector(".header-container");
  const toggleMenu = document.querySelector(".toggle-menu");

  toggleMenu.addEventListener("click", () => {
    if (
      headerContainer.classList.contains("active") &&
      toggleMenu.classList.contains("active-toggle")
    ) {
      headerContainer.classList.remove("active");
      toggleMenu.classList.remove("active-toggle");
      toggleMenu.classList.remove("close-toggle");
    } else {
      headerContainer.classList.add("active");
      toggleMenu.classList.add("active-toggle");
      toggleMenu.classList.add("close-toggle");
    }
    const headerContainerContent = document.querySelector(
      ".header-container-content-logo-toggle"
    );
  });
}

menuToggle();

// section for services

export function serviceToggle() {
  document.querySelectorAll(".services").forEach((serviceTarget) => {
    serviceTarget.addEventListener("mouseover", (e) => {
      document.querySelectorAll(".services").forEach((service) => {
        service.classList.remove("service-active");
      });

      serviceTarget.classList.add("service-active");
    });
  });
}

// Reset the page when the window is resized  to correct my MD issue
// let lastWidth = window.innerWidth;

// window.addEventListener("resize", function () {
//   // Get the current window width
//   let currentWidth = window.innerWidth;

//   // Check if we've crossed the 450px breakpoint
//   if (
//     (lastWidth < 670 && currentWidth >= 670) ||
//     (lastWidth >= 670 && currentWidth < 670)
//   ) {
//     // Refresh the page
//     window.location.reload();
//   }

//   // Update lastWidth with the current window width
//   lastWidth = currentWidth;
// });

let lastWidth = window.innerWidth;

window.addEventListener("resize", function () {
  // Get the current window width
  let currentWidth = window.innerWidth;

  // Check if we've crossed the 450px breakpoint
  if (
    (lastWidth < 670 && currentWidth >= 670) ||
    (lastWidth >= 670 && currentWidth < 670)
  ) {
    // Refresh the page with a unique query string to prevent caching
    window.location.href =
      window.location.href.split("?")[0] + "?refreshed=" + new Date().getTime();
  }

  // Update lastWidth with the current window width
  lastWidth = currentWidth;
});

serviceToggle();

// section 3 slideShow
