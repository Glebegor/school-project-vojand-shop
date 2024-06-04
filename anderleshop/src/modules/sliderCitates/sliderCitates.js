import React, { useEffect } from 'react';

import "./main.css"
import SliderCitatesItem from "../../components/sliderCitatesItem/sliderCitatesItem";

const SliderCitates = () => {
    useEffect(() => {
        const prevButton = document.querySelector(".slider-button-prev");
        const nextButton = document.querySelector(".slider-button-next");

        var sliderTape = document.querySelector(".slider-tape");


        const sliderPoints = document.querySelectorAll(".slider-point");
        const sliderItems = document.querySelectorAll(".slider-item");


        const sliderItemWidth = sliderItems[0].offsetWidth;
        const sliderItemsCount = sliderItems.length;

        var id = 0;

        function setInitial() {
            sliderTape.style.transform = `translateX(-${(id+1)*sliderItemWidth}px)`;
            // setActivePoint();
            // setActiveItem();
        }

        setInitial();
        function setActivePoint() {
            sliderPoints.forEach((point) => {
                point.classList.remove("active");
            });
            sliderPoints[id].classList.add("active");
        }

        function setActiveItem() {
            sliderItems.forEach((item) => {
                item.classList.remove("active");
            });
            sliderItems[id].classList.add("active");
        }


        if (nextButton) {
            nextButton.addEventListener("click", () => {
                id++;
                if(id+4 > sliderItemsCount) {
                    // Clone the first slider item and append it to the end
                    const clonedNode = sliderItems[0].cloneNode(true);
                    sliderTape.appendChild(clonedNode);

                    // Ensure we remove the correct first child
                    if (sliderTape.firstChild) {
                        sliderTape.removeChild(sliderTape.firstChild);
                    }
                }
                sliderTape.style.transform = `translateX(-${(id+1)*sliderItemWidth}px)`;
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                id--;
                sliderTape.style.transform = `translateX(-${(id+1)*sliderItemWidth}px)`;
            });
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (nextButton) {
                nextButton.removeEventListener("click", () => { console.log("next") });
            }
            if (prevButton) {
                prevButton.removeEventListener("click", () => { console.log("prev") });
            }
        };
    }, []);

    return (
        <div className={"slider-citates"}>
            <div className={"slider-wrapper"}>
                <div className={"slider-tape"}>
                    <SliderCitatesItem citate={"They are doing perfect performance."} author={"Max Verstappen"}/>
                    <SliderCitatesItem citate={"Interesting company and interesting cars. We will work with them all the time."} author={"Dietrich Mateschitz"}/>
                    <SliderCitatesItem citate={"I'm very happy to work with them. They are doing great job."} author={"Sergio Perez"}/>
                    <SliderCitatesItem citate={"Their’s motors are faster than my mind. I'm like a roller coaster, side to side."} author={"Lando Norris"}/>
                </div>
            </div>
            <div className={"slider-buttons"}>
                <button className={"slider-button slider-button-prev"}></button>
                <div className={"slider-points"}>
                    <div className={"slider-point"}></div>
                    <div className={"slider-point"}></div>
                    <div className={"slider-point"}></div>
                    <div className={"slider-point"}></div>
                </div>
                <button className={"slider-button slider-button-next"}></button>
            </div>

        </div>

    )
}


export default SliderCitates;