export function slideShow() {
  const slides = document.querySelectorAll(".slide");

  let slideIndex = 0;
  let interval;

  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slideShow();
    restInterval();
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    slideShow();
    restInterval();
  };

  const slideShow = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 670) {
      for (let i = 0; i < slides.length; i++) {
        const slideWidth = slides[i].clientWidth;
        slides[i].style.transform = `translateX(${
          slideWidth * (i - slideIndex)
        }px)`;

        if (i === slideIndex) {
          slides[i].classList.add("slide-active");
        } else {
          slides[i].classList.remove("slide-active");
          slides[i].classList.remove("slide-next");
          slides[i].classList.remove("slide-last");
        }
      }
    } else {
      // Remove the class and stop the interval if the screen is >= 670
      clearInterval(interval);
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-active");
        slides[i].classList.remove("slide-next");
        slides[i].classList.remove("slide-last");
        // window.location.reload();
      }
    }
  };

  // Check screen width before starting the interval
  if (window.innerWidth < 670 && !interval) {
    interval = setInterval(nextSlide, 1500);
  }

  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 670) {
      // Stop the interval if the screen is >= 670
      clearInterval(interval);
      interval = null; // Reset interval variable
      window.location.reload();

      // Remove the class when the screen is >= 670
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-active");
      }
    } else if (screenWidth < 670 && !interval) {
      // Start the interval if the screen is < 670 and the interval is not already running
      interval = setInterval(nextSlide, 1500);
    }
  });

  function autoSlideCheck() {
    if (slideIndex === slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  const restInterval = () => {
    clearInterval(interval);

    // Check screen width before restarting the interval
    if (window.innerWidth < 670) {
      interval = setInterval(nextSlide, 10000);
    }
  };
}

slideShow();

//########################## tilt

export function tiltImg() {
  // const images = document.querySelectorAll(".section-3-image-block");
  const images = document.querySelectorAll(".tilt-imgs");
  const imgsArr = Array.from(images);
  // console.log(imgsArr);

  imgsArr.map((img) => {
    // console.log(img);
    img.addEventListener("mousemove", (e) => {
      imgRotate(e, img);
    });
  });

  function imgRotate(event, element) {
    const containerRect = element.getBoundingClientRect();
    // console.log(containerRect);

    // get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate mouse position relative to the image container
    const containerX = mouseX - containerRect.left;
    const containerY = mouseY - containerRect.top;

    // Calculate the tilt angles
    const tiltX = (containerX / containerRect.width) * 15;
    const tiltY = (containerY / containerRect.height) * 15;

    // Apply the tilt angles as CSS variables
    element.style.setProperty("--degX", `-${tiltY}deg`);
    element.style.setProperty("--degY", `${tiltX}deg`);

    // console.log(containerX, containerY, "mouse position within the container");
  }
}

tiltImg();

//  carousel 2

// const slider = document.querySelector(".slider");

// //
// let isDragStart = false,
//   pagePrevX,
//   ScrollPrevLeft;

// const dragStart = (e) => {
//   isDragStart = true;
//   pagePrevX = e.pageX;
//   ScrollPrevLeft = slider.scrollLeft;
// };

// const dragging = (e) => {
//   // console.log(e.pageX);

//   if (!isDragStart) return;
//   e.preventDefault();
//   let positionDiff = e.pageX - pagePrevX;
//   slider.scrollLeft = ScrollPrevLeft - positionDiff;
// };
// const dragStop = (e) => {
//   isDragStart = false;
// };

// slider.addEventListener("mousedown", dragStart);
// slider.addEventListener("mousemove", dragging);
// slider.addEventListener("mouseup", dragStop);
