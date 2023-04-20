var images = document.querySelectorAll('.featured-image');
var currentImage = 0;
var intervalId;

function nextImage() {
    clearInterval(intervalId);
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
    intervalId = setInterval(nextImage, 4000); 
}

function prevImage() {
    clearInterval(intervalId); 
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
    intervalId = setInterval(nextImage, 4000); 
}
function startSlideShow(){
    intervalId = setInterval(nextImage, 4000);
}
document.addEventListener('keydown', function(event) {
    if (event.code === 'prev') {
        clearInterval(intervalId);
        prevImage();
        startSlideShow();
    } else if (event.code === 'next') {
        clearInterval(intervalId);
        nextImage();
        startSlideShow();
    }
});

