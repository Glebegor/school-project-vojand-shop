// <div class="sliderWrapper">
//     <div class="sliderTape">
//         <div class="sliderItem">1</div>
//         <div class="sliderItem">2</div>
//         <div class="sliderItem">3</div>
//         <div class="sliderItem">4</div>
//         <div class="sliderItem">5</div>
//     </div>
//     <div class="sliderButtons">
//         <button class="sliderButton" id="sliderButtonLeft"></button>
//         <button class="sliderButton" id="sliderButtonRight"></button>
//     </div>
// </div>

var slider = document.querySelector('.sliderTape');
var sliderItems = document.querySelectorAll('.sliderItem');
var sliderButtonLeft = document.querySelector('#sliderButtonLeft');
var sliderButtonRight = document.querySelector('#sliderButtonRight');

var sliderWidth = sliderItems[0].offsetWidth;
var sliderPosition = 0;

sliderButtonLeft.addEventListener('click', function() {
    if (sliderPosition < 0) {
        sliderPosition += sliderWidth;
        slider.style.transform = `translateX(${sliderPosition}px)`;
        console.log("l")

    }
});

sliderButtonRight.addEventListener('click', function() {
    if (sliderPosition > -sliderWidth * (sliderItems.length - 1)) {
        sliderPosition -= sliderWidth;
        slider.style.transform = `translateX(${sliderPosition}px)`;
        console.log("r")

    }
});

