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
