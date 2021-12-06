const arrowToDownLeftReviews = document.querySelector('#reviews img[id="arrow-to-down-left-reviews"]');
const showAllReviews = document.querySelector('#reviews a[id="show-all-reviews"]');
const arrowToDownRightReviews = document.querySelector('#reviews img[id="arrow-to-down-right-reviews"]');
const hideAllReviews = document.querySelector('#reviews a[id="hide-all-reviews"]');
const addAllReviews = document.querySelectorAll('.review > .d-none');
const hiddenInMobileReviews = document.querySelectorAll('.review > .d-sm-none');
const arrowToRightReviews = document.querySelector('#reviews img[id="arrow-to-right-reviews"]');

const numberOfProminentReviews = 2;
const numberOfReviews = numberOfProminentReviews + hiddenInMobileReviews.length + addAllReviews.length;
document.getElementById("number-of-reviews").innerText = numberOfReviews;

showAllReviews.addEventListener('click', () => {
    arrowToDownLeftReviews.style.display = 'none';
    showAllReviews.style.display = 'none';
    arrowToDownRightReviews.style.display = 'none';

    for (let i = 0; i < hiddenInMobileReviews.length; i += 1) {
        hiddenInMobileReviews[i].style.display = 'block';
    }

    for (let i = 0; i < addAllReviews.length; i += 1) {
        addAllReviews[i].style.display = 'block';
    }

    arrowToRightReviews.style.display = 'none';
    hideAllReviews.style.display = 'block';
});

hideAllReviews.addEventListener('click', () => {
    hideAllReviews.style.display = 'none';

    for (let i = 0; i < addAllReviews.length; i += 1) {
        addAllReviews[i].style.display = 'none';
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