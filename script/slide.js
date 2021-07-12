let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slideImages = document.querySelectorAll("#slider-container div");
  for (i = 0; i < slideImages.length; i++) {
    slideImages[i].classList.add("hidden");
  }
  slideIndex++;
  if (slideIndex > slideImages.length) {
    slideIndex = 1;
  }

  slideImages[slideIndex - 1].classList.remove("hidden");

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
