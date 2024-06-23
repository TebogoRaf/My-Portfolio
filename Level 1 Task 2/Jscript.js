let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.project');
    const totalSlides = slides.length;
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
