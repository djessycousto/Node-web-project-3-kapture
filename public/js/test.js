// export function test() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".base-page-wrap-image-block-2");
//     const images = document.querySelectorAll(
//       ".base-page-wrap-image-block-2 img"
//     );
//     const imageHeight = images[0].clientHeight;
//     console.log(imageHeight, images[0]);
//     let currentSlide = 0;
//     function slide() {
//       currentSlide = (currentSlide + 1) % images.length;
//       console.log(currentSlide);
//       container.style.transform = `translateY(-${
//         (currentSlide - 1) * imageHeight
//       }px)`;
//       // Check if the last image is reached and loop back to the first image
//       if (currentSlide === 0) {
//         setTimeout(() => {
//           container.style.transition = "none"; // Disable transition for an instant reset
//           container.style.transform = "translateY(0)";
//           void container.offsetWidth; // Trigger reflow to apply the reset instantly
//           container.style.transition = "transform 1s ease"; // Re-enable transition
//         }, 1000); // Use a timeout to allow the transition to complete before resetting
//       }
//     }
//     // Change slide every 3 seconds (adjust the interval as needed)
//     setInterval(slide, 1000);
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".base-page-wrap-image-block-2");
//     const images = document.querySelectorAll(
//       ".base-page-wrap-image-block-2 img"
//     );
//     const imageHeight = images[0].clientHeight;
//     let currentSlide = 0;

//     function animate() {
//       currentSlide = ((currentSlide + 1) % images.length) - 1;
//       const translateYValue = -currentSlide * imageHeight;

//       // Use the Web Animations API for smooth scrolling
//       container.animate(
//         {
//           transform: [
//             `translateY(${translateYValue}px)`,
//             `translateY(${translateYValue}px)`,
//           ],
//         },
//         { duration: 1000, easing: "ease-in-out", fill: "forwards" }
//       );

//       // Change slide every 3 seconds (adjust the interval as needed)
//       setTimeout(animate, 3000);
//     }

//     // Start the animation loop
//     animate();
//   });
// }

// test();
// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".base-page-wrap-image-block-2");
//     const images = document.querySelectorAll(
//       ".base-page-wrap-image-block-2 img"
//     );
//     const imageHeight = images[0].clientHeight;
//     let currentSlide = 0;

//     function handleScroll() {
//       currentSlide = (currentSlide + 1) % images.length;
//       console.log(currentSlide);
//       container.scrollTop = (currentSlide - 1) * imageHeight;
//     }

//     // Change slide every 3 seconds (adjust the interval as needed)
//     setInterval(handleScroll, 1000);
//   });

// export function test() {
//   function truncateTextToLines(text, maxLines) {
//     const lines = text.split("\n");
//     if (lines.length <= maxLines) {
//       return text;
//     }

//     const truncatedLines = lines.slice(0, maxLines);
//     const truncatedText = truncatedLines.join("\n");
//     return truncatedText + "...";
//   }

//   const allPaServiceGrid = document.querySelectorAll(".services p");
//   const paras = [...allPaServiceGrid];

//   const tst = paras.forEach((para) => {
//     const originalText = para.textContent;
//     const truncatedText = truncateTextToLines(originalText, 2);

//     const tst = (para.innerHTML = truncatedText);
//     console.log(tst);
//   });
// }

// test();
