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

serviceToggle();

// section 3 slideShow
