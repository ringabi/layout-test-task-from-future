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

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    let radioButtons = document.getElementsByClassName("radio-button");
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        if (getWindowWidth() <= 426) {
            slide.style.display = "none";
        }
    }

    for (let radioButton of radioButtons) {
        radioButton.style.background = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    radioButtons[slideIndex - 1].style.background = "#fc9b09";   
}