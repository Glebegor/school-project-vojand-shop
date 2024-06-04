
// Standart showing


// Upper animation
const animateElements = document.querySelectorAll('.__animate__');

const observerOptions = {
    root: null,
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(element => {
    observer.observe(element);
});


// Righter animation
const animateElementsRight = document.querySelectorAll('.__animate__right');

// show from right
const observerOptionsRight = {
    root: null,
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observerRight = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__right');
            observer.unobserve(entry.target);
        }
    });
}, observerOptionsRight);

animateElementsRight.forEach(element => {
    observerRight.observe(element);
});


// Lefter animation
const animateElementsLeft = document.querySelectorAll('.__animate__left');

// show from right
const observerOptionsLeft = {
    root: null,
    threshold: 0.5 // Trigger animation when at least 50% of the element is visible
};

const observerLeft = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__left');
            observer.unobserve(entry.target);
        }
    });
}, observerOptionsLeft);

animateElementsLeft.forEach(element => {
    observerLeft.observe(element);
});

// Footer fixed
//
// var header = document.querySelector('header');
// var main = document.querySelector('main');
// var headerHeight = header.offsetHeight;
//
// window.addEventListener('scroll', function() {
//     if (window.scrollY >= headerHeight+100) {
//         header.classList.add('fixed');
//         header.classList.add('show');
//         header.classList.remove('hide');
//         main.style.paddingTop = headerHeight + 'px';
//     }
//     else if(window.scrollY >= headerHeight){
//         header.classList.add('hide');
//     }
//     else if (window.scrollY < headerHeight) {
//         main.style.paddingTop = '0px';
//         header.classList.remove('fixed');
//         header.classList.remove('hide');
//         header.classList.add('show');
//     }
//     else{
//         main.style.paddingTop = '0px';
//         header.classList.remove('fixed');
//         header.classList.add('show');
//
//     }
// })