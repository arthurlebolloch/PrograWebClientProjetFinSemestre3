// Slider

const sliderrow = document.getElementById('sliderrow');
let currentIndex = 0;
const totalSlides = sliderrow.querySelectorAll('[data-slide]').length;
const sliderIndicator = document.getElementById('sliderIndicator');

function updateSliderPosition() {
    const percentage = -(currentIndex * 10);
    sliderrow.style.transform = `translateX(${percentage}%)`;
    sliderrow.style.transition = "transform 0.5s ease";

    const indicatorWidth = (currentIndex / (totalSlides - 1)) * 100;
    sliderIndicator.style.width = `${indicatorWidth}%`;
}

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
});
