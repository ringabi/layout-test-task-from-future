function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
}

let slideIndex = 1;

if (getWindowWidth() <= 426) {
    showSlides(slideIndex);
}

function nextSlide() {
    if (getWindowWidth() <= 426) {
        showSlides(slideIndex += 1);
    }
}

function previousSlide() {
    if (getWindowWidth() <= 426) {
        showSlides(slideIndex -= 1);
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */

function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    let radioButtons = document.getElementsByClassName("radio-button");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        if (getWindowWidth() <= 426) {
            slide.style.display = "none";
        }
    }

    for (let radioButton of radioButtons) {
        radioButton.style.background = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
    radioButtons[slideIndex - 1].style.background = "#fc9b09";   
}