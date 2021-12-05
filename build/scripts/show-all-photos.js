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

    for (let i = 8; i < addAllPhotos.length - numberArrowToDown; i = i + 1) {
        addAllPhotos[i].style.display = 'inline';
    }

    hideAllPhotos.style.display = 'block';
});

hideAllPhotos.addEventListener('click', () => {
    hideAllPhotos.style.display = 'none';

    for (let i = 8; i < addAllPhotos.length - 2; i = i + 1) {
        addAllPhotos[i].style.display = 'none';
    }

    arrowToDownLeft.style.display = 'inline';
    showAllPhotos.style.display = 'inline';
    arrowToDownRight.style.display = 'inline';
});