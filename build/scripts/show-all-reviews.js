let arrowToDownLeftReviews = document.querySelector('#reviews img[id="arrow-to-down-left-reviews"]');
let showAllReviews = document.querySelector('#reviews a[id="show-all-reviews"]');
let arrowToDownRightReviews = document.querySelector('#reviews img[id="arrow-to-down-right-reviews"]');
let hideAllReviews = document.querySelector('#reviews a[id="hide-all-reviews"]');
let addAllReviews = document.querySelectorAll('.review > .d-none');

const numberOfProminentReviews = 3;
const numberOfReviews = numberOfProminentReviews + addAllReviews.length;
document.getElementById("number-of-reviews").innerText = numberOfReviews;

showAllReviews.addEventListener('click', () => {
    arrowToDownLeftReviews.style.display = 'none';
    showAllReviews.style.display = 'none';
    arrowToDownRightReviews.style.display = 'none';

    for (let i = 0; i < addAllReviews.length; i = i + 1) {
        addAllReviews[i].style.display = 'block';
    }

    hideAllReviews.style.display = 'block';
});

hideAllReviews.addEventListener('click', () => {
    hideAllReviews.style.display = 'none';

    for (let i = 0; i < addAllReviews.length; i = i + 1) {
        addAllReviews[i].style.display = 'none';
    }

    arrowToDownLeftReviews.style.display = 'inline';
    showAllReviews.style.display = 'inline';
    arrowToDownRightReviews.style.display = 'inline';
});