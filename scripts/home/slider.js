var images = document.querySelectorAll('.featured-image');
var currentImage = 0;
var intervalId;

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

function prevImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
}

function startSlideShow() {
    intervalId = setInterval(nextImage, 7000);
}

function stopSlideShow() {
    clearInterval(intervalId);
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'prev') {
        intervalId = 0;
        prevImage();
    } else if (event.code === 'next') {
        intervalId = 0;
        nextImage();
    }
});