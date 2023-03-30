var images = document.querySelectorAll('.featured-image');
var currentImage = 0;

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