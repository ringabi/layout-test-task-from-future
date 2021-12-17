const popupBg = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.banner .button');
const closePopupButton = document.querySelector('.close-popup');

openPopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});