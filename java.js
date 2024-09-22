let slideIndex = 0; // Start with the first slide
showSlides(slideIndex);

setInterval(() => {
    nextSlide();
}, 3000); // 3 seconds

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  if (n >= slides.length) {
    slideIndex = 0; // Loop back to the first slide
  }
  if (n < 0) {
    slideIndex = slides.length - 1; // Go to the last slide
  }
  
  // Hide all slides by removing the active class
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Show the current slide by adding the active class
  slides[slideIndex].classList.add("active");
}

function prevSlide() {
  plusSlide(-1);
}

function nextSlide() {
  plusSlide(1);
}
