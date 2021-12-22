const getWindowWidth = () => window.innerWidth || document.body.clientWidth;

let slideIndex = 1;

const showSlides = (n) => {
  const slides = document.getElementsByClassName('item');
  const radioButtons = document.getElementsByClassName('radio-button');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (const slide of slides) {
    if (getWindowWidth() <= 426) {
      slide.style.display = 'none';
    }
  }

  for (const radioButton of radioButtons) {
    radioButton.style.background = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
  radioButtons[slideIndex - 1].style.background = '#fc9b09';
};

if (getWindowWidth() <= 426) {
  showSlides(slideIndex);
}

const nextSlide = () => {
  if (getWindowWidth() <= 426) {
    showSlides(slideIndex += 1);
  }
};

const previousSlide = () => {
  if (getWindowWidth() <= 426) {
    showSlides(slideIndex -= 1);
  }
};

const currentSlide = (n) => {
  showSlides(slideIndex = n);
};

export {
  getWindowWidth, nextSlide, previousSlide, currentSlide,
};
