let currentSlide = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function openModal(slide) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  const img = slide.querySelector("img");
  const caption = slide.querySelector(".caption");

  modalImage.src = img.src;
  modalCaption.textContent = caption.textContent;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
