
const slides = document.querySelectorAll('.carousel-item'); // Obtener todas las diapositivas
const prev = document.querySelector('.prev'); // Obtener el botón previo
const next = document.querySelector('.next'); // Obtener el botón siguiente

let currentSlide = 1; // Iniciar en la primera diapositiva

prev.addEventListener('click', () => {

  slides[currentSlide - 1].classList.add('hiden'); // Ocultar la diapositiva actual
  currentSlide = (currentSlide === 1) ? slides.length : currentSlide - 1; // Cambiar a la siguiente diapositiva
  slides[currentSlide - 1].classList.remove('hiden'); // Mostrar la nueva diapositiva
});

next.addEventListener('click', () => {
  slides[currentSlide - 1].classList.add('hiden'); // Ocultar la diapositiva actual
  currentSlide = (currentSlide === slides.length) ? 1 : currentSlide + 1; // Cambiar a la siguiente diapositiva
  slides[currentSlide - 1].classList.remove('hiden'); // Mostrar la nueva diapositiva
});

