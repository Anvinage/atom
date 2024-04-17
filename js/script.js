'use strict';

// let scrollContainer = document.querySelector('.slider');
// let upBtn = document.getElementById('upBtn');
// let downBtn = document.getElementById('downBtn');

// scrollContainer.addEventListener('wheel', (evt) => {
//     evt.preventDefault();
//     scrollContainer.style.scrollBehavior = "auto";
//     scrollContainer.scrollLeft += evt.deltaY;
// });

// downBtn.addEventListener('click', () => {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 900;
// });

// upBtn.addEventListener('click', () => {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 900;
// });

var currentIndex = 0;
    var slides = document.querySelectorAll('.slide');
    var visibleSlides = 3; // Number of slides visible at a time

    function moveSlider(direction) {
        if (direction === 'down') {
            currentIndex = (currentIndex + 1) % (slides.length - visibleSlides + 1);
        } else if (direction === 'up') {
            currentIndex = Math.max(0, currentIndex - 1);
        }
        var offset = currentIndex * -100 / visibleSlides + '%';
        document.getElementById('slider').style.top = offset;
    }
