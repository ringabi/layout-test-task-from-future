let showMoreInfoAboutPhotographer = document.querySelector('#about-organizer a[id="show-more-info-about-photographer"]');
let hideMoreInfoAboutPhotographer = document.querySelector('#about-organizer a[id="hide-more-info-about-photographer"]');
let addInfoAboutPhotographer = document.querySelector('#about-organizer div[id="add-about-photographer"]');

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