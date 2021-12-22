import getWindowWidth from './slider.js';

const allPhotos = document.querySelectorAll('#package-photos .section > img');

if (getWindowWidth() <= 426) {
  for (const element of allPhotos) {
    element.classList.remove('d-none');
  }
}
