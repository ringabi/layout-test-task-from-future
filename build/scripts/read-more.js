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