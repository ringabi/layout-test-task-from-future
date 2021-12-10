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