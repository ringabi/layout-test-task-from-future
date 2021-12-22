const popupBg = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.banner .button');
const closePopupButton = document.querySelector('.close-popup');

openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupBg.classList.add('active');
  popup.classList.add('active');
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});

const readMoreAboutOrganizer = document.querySelector('#about-organizer a[id="read-more-about-organizer"]');
const hideMoreAboutOrganizer = document.querySelector('#about-organizer a[id="hide-more-about-organizer"]');
const arrowToDownAboutOrganizer = document.querySelector('#about-organizer a[id="read-more-about-organizer"] + img');
const addInfoAboutOrganizer = document.querySelector('#about-organizer div[id="add-about-organizer"]');
const ellipsis = document.querySelector('#about-organizer .lh-150percent span');

readMoreAboutOrganizer.addEventListener('click', () => {
  readMoreAboutOrganizer.style.display = 'none';
  hideMoreAboutOrganizer.style.display = 'inline';
  arrowToDownAboutOrganizer.style.display = 'none';
  addInfoAboutOrganizer.style.display = 'inline';
  ellipsis.style.display = 'none';
});

hideMoreAboutOrganizer.addEventListener('click', () => {
  hideMoreAboutOrganizer.style.display = 'none';
  addInfoAboutOrganizer.style.display = 'none';
  readMoreAboutOrganizer.style.display = 'inline';
  arrowToDownAboutOrganizer.style.display = 'inline';
  ellipsis.style.display = 'inline';
});

const readMoreWhatIWillProvide = document.querySelector('#about-organizer a[id="read-more-what-i-will-provide"]');
const hideMoreWhatIWillProvide = document.querySelector('#about-organizer a[id="hide-more-what-i-will-provide"]');
const arrowToDown = document.querySelector('#about-organizer a[id="read-more-what-i-will-provide"] + img');
const addInfoWhatIWillProvide = document.querySelector('#about-organizer div[id="add-what-i-will-provide"]');

readMoreWhatIWillProvide.addEventListener('click', () => {
  readMoreWhatIWillProvide.style.display = 'none';
  arrowToDown.style.display = 'none';
  addInfoWhatIWillProvide.style.display = 'inline';
  hideMoreWhatIWillProvide.style.display = 'inline';
});

hideMoreWhatIWillProvide.addEventListener('click', () => {
  hideMoreWhatIWillProvide.style.display = 'none';
  addInfoWhatIWillProvide.style.display = 'none';
  readMoreWhatIWillProvide.style.display = 'inline';
  arrowToDown.style.display = 'inline';
});

const showMoreInfoAboutPhotographer = document.querySelector('#about-organizer a[id="show-more-info-about-photographer"]');
const hideMoreInfoAboutPhotographer = document.querySelector('#about-organizer a[id="hide-more-info-about-photographer"]');
const addInfoAboutPhotographer = document.querySelector('#about-organizer div[id="add-about-photographer"]');

showMoreInfoAboutPhotographer.addEventListener('click', () => {
  showMoreInfoAboutPhotographer.style.display = 'none';
  addInfoAboutPhotographer.style.display = 'inline';
  hideMoreInfoAboutPhotographer.style.display = 'inline';
});

hideMoreInfoAboutPhotographer.addEventListener('click', () => {
  hideMoreInfoAboutPhotographer.style.display = 'none';
  addInfoAboutPhotographer.style.display = 'none';
  showMoreInfoAboutPhotographer.style.display = 'inline';
});

const showMoreInfoAboutPhotographerMap = document.querySelector('#map a[id="show-more-info-about-photographer-map"]');
const hideMoreInfoAboutPhotographerMap = document.querySelector('#map a[id="hide-more-info-about-photographer-map"]');
const addInfoAboutPhotographerMap = document.querySelector('#map div[id="add-about-photographer-map"]');

showMoreInfoAboutPhotographerMap.addEventListener('click', () => {
  showMoreInfoAboutPhotographerMap.style.display = 'none';
  addInfoAboutPhotographerMap.style.display = 'inline';
  hideMoreInfoAboutPhotographerMap.style.display = 'inline';
});

hideMoreInfoAboutPhotographerMap.addEventListener('click', () => {
  hideMoreInfoAboutPhotographerMap.style.display = 'none';
  addInfoAboutPhotographerMap.style.display = 'none';
  showMoreInfoAboutPhotographerMap.style.display = 'inline';
});

const arrowToDownLeft = document.querySelector('#package-photos img[id="arrow-to-down-left"]');
const showAllPhotos = document.querySelector('#package-photos a[id="show-all-photos"]');
const arrowToDownRight = document.querySelector('#package-photos img[id="arrow-to-down-right"]');
const hideAllPhotos = document.querySelector('#package-photos a[id="hide-all-photos"]');
const addAllPhotos = document.querySelectorAll('#package-photos img');
const numberArrowToDown = 2;

showAllPhotos.addEventListener('click', () => {
  arrowToDownLeft.style.display = 'none';
  showAllPhotos.style.display = 'none';
  arrowToDownRight.style.display = 'none';

  for (let i = 8; i < addAllPhotos.length - numberArrowToDown; i += 1) {
    addAllPhotos[i].style.display = 'inline';
  }

  hideAllPhotos.style.display = 'block';
});

hideAllPhotos.addEventListener('click', () => {
  hideAllPhotos.style.display = 'none';

  for (let i = 8; i < addAllPhotos.length - 2; i += 1) {
    addAllPhotos[i].style.display = 'none';
  }

  arrowToDownLeft.style.display = 'inline';
  showAllPhotos.style.display = 'inline';
  arrowToDownRight.style.display = 'inline';
});

let myMap;

const init = () => {
  myMap = new ymaps.Map('map', {
    center: [55.75521972051079, 37.54801802337153],
    zoom: 13,
  });

  myMap.controls.add(
    new ymaps.control.ZoomControl(),
  );

  const myPlacemark = new ymaps.Placemark([55.75570374299158, 37.60277800261957], {
    balloonContent: "<div class='ya-map'>Встречаемся тут!</div>",
  }, {
    preset: 'twirl#redDotIcon',
  });

  myMap.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
};

ymaps.ready(init);

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

const arrowToDownLeftReviews = document.querySelector('#reviews img[id="arrow-to-down-left-reviews"]');
const showAllReviews = document.querySelector('#reviews a[id="show-all-reviews"]');
const arrowToDownRightReviews = document.querySelector('#reviews img[id="arrow-to-down-right-reviews"]');
const hideAllReviews = document.querySelector('#reviews a[id="hide-all-reviews"]');
const addReviews = document.querySelectorAll('.review > .d-none');
const hiddenInMobileReviews = document.querySelectorAll('.review > .d-sm-none');
const arrowToRightReviews = document.querySelector('#reviews img[id="arrow-to-right-reviews"]');

const numberOfProminentReviews = 2;
const numberOfReviews = numberOfProminentReviews + hiddenInMobileReviews.length + addReviews.length;
document.getElementById('number-of-reviews').innerText = numberOfReviews;

showAllReviews.addEventListener('click', () => {
  arrowToDownLeftReviews.style.display = 'none';
  showAllReviews.style.display = 'none';
  arrowToDownRightReviews.style.display = 'none';

  for (let i = 0; i < hiddenInMobileReviews.length; i += 1) {
    hiddenInMobileReviews[i].style.display = 'block';
  }

  for (let i = 0; i < addReviews.length; i += 1) {
    addReviews[i].style.display = 'block';
  }

  arrowToRightReviews.style.display = 'none';
  hideAllReviews.style.display = 'block';
});

hideAllReviews.addEventListener('click', () => {
  hideAllReviews.style.display = 'none';

  for (let i = 0; i < addReviews.length; i += 1) {
    addReviews[i].style.display = 'none';
  }

  if (getWindowWidth() <= 426) {
    for (let i = 0; i < hiddenInMobileReviews.length; i += 1) {
      hiddenInMobileReviews[i].style.display = 'none';
    }
    showAllReviews.style.display = 'inline';
    arrowToRightReviews.style.display = 'inline';
  } else {
    arrowToDownLeftReviews.style.display = 'inline';
    showAllReviews.style.display = 'inline';
    arrowToDownRightReviews.style.display = 'inline';
  }
});

const allPhotos = document.querySelectorAll('#package-photos .section > img');

if (getWindowWidth() <= 426) {
  for (const element of allPhotos) {
    element.classList.remove('d-none');
  }
}

const imgPng = document.querySelector('#photosession img:nth-of-type(2)');
const videoControl = document.querySelector('#video-control');
const playButton = document.querySelector('#photosession .position-button-play');
const closeVideo = document.querySelector('#video-control .close-video');

playButton.addEventListener('click', () => {
  imgPng.style.display = 'none';
  playButton.style.display = 'none';
  videoControl.style.display = 'inline';
});

closeVideo.addEventListener('click', () => {
  videoControl.style.display = 'none';
  imgPng.style.display = 'inline';
  playButton.style.display = 'inline';
});
