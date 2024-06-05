import React, { useEffect, useRef } from 'react';
import "./main.css";
import SliderCitatesItem from "../../components/sliderCitatesItem/sliderCitatesItem";

const SliderCitates = () => {
    const sliderTapeRef = useRef(null);
    const sliderPointsRef = useRef([]);
    const sliderItemsRef = useRef([]);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const sliderItemWidthRef = useRef(0);
    const sliderItemsCountRef = useRef(0);
    const visibleItems = 3; // Number of visible items
    let id = useRef(0); // Start from 1 due to cloning

    useEffect(() => {
        const sliderTape = sliderTapeRef.current;
        const sliderPoints = sliderPointsRef.current;
        const sliderItems = sliderItemsRef.current;
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;


        sliderItemWidthRef.current = sliderItems[0].offsetWidth;
        sliderItemsCountRef.current = sliderItems.length;

        function setInitial() {
            sliderTape.style.transform = `translateX(-${id.current * sliderItemWidthRef.current}px)`;

        }
        function updatePoints() {
            sliderPoints.forEach((point, index) => {
                if (index === id.current) {
                    point.classList.add("active");
                } else {
                    point.classList.remove("active");
                }
            });
        }



        setInitial();

        const handleNextClick = () => {
            if (id.current >= sliderItemsCountRef.current-2) return;
            id.current++;
            sliderTape.style.transition = "transform 0.5s ease-in-out";
            sliderTape.style.transform = `translateX(-${id.current * sliderItemWidthRef.current}px)`;
            updatePoints();
        };

        const handlePrevClick = () => {
            if (id.current <= 0) return;
            id.current--;
            sliderTape.style.transition = "transform 0.5s ease-in-out";
            sliderTape.style.transform = `translateX(-${id.current * sliderItemWidthRef.current}px)`;
            updatePoints();
        };

        if (nextButton) {
            nextButton.addEventListener("click", handleNextClick);
        }

        if (prevButton) {
            prevButton.addEventListener("click", handlePrevClick);
        }

        return () => {
            if (nextButton) {
                nextButton.removeEventListener("click", handleNextClick);
            }
            if (prevButton) {
                prevButton.removeEventListener("click", handlePrevClick);
            }
        };
    }, []);

    return (
        <div className={"slider-citates"}>
            <div className={"slider-wrapper"}>
                <div className={"slider-tape"} ref={sliderTapeRef}>
                    <div className="slider-item" ref={el => sliderItemsRef.current[0] = el}>
                        <SliderCitatesItem citate={"They are doing perfect performance."} author={"Max Verstappen"}/>
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[1] = el}>
                        <SliderCitatesItem
                            citate={"Interesting company and interesting cars. We will work with them all the time."}
                            author={"Dietrich Mateschitz"}/>
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[2] = el}>
                        <SliderCitatesItem citate={"I'm very happy to work with them. They are doing great job."}
                                           author={"Sergio Perez"}/>
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[3] = el}>
                        <SliderCitatesItem
                            citate={"Their motors are faster than my mind. I'm like a roller coaster, side to side."}
                            author={"Lando Norris"}/>
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[3] = el}>
                        <SliderCitatesItem
                            citate={"Use AnderleCars, You dont need a Tesla. Youre like: Euhhh my cars not charging, taratam. Grow up!"}
                            author={"Andrew Tate"}/>
                    </div>
                </div>
            </div>
            <div className={"slider-buttons"}>
                <button className={"slider-button slider-button-prev"} ref={prevButtonRef}>Prev</button>
                <div className={"slider-points"}>
                    <div className={"slider-point active"} ref={el => sliderPointsRef.current[0] = el}></div>
                    <div className={"slider-point"} ref={el => sliderPointsRef.current[1] = el}></div>
                    <div className={"slider-point"} ref={el => sliderPointsRef.current[2] = el}></div>
                </div>
                <button className={"slider-button slider-button-next"} ref={nextButtonRef}>Next</button>
            </div>
        </div>
    );
}

export default SliderCitates;
