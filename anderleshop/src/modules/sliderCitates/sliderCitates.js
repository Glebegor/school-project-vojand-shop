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
    const idRef = useRef(1); // Start from 1 due to cloning

    useEffect(() => {
        const sliderTape = sliderTapeRef.current;
        const sliderItems = sliderItemsRef.current;
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        sliderItemWidthRef.current = sliderItems[0].offsetWidth;
        sliderItemsCountRef.current = sliderItems.length;

        // Remove existing clones to avoid duplicates
        Array.from(sliderTape.children).forEach(child => {
            if (child.classList.contains('clone')) {
                sliderTape.removeChild(child);
            }
        });

        // Clone the first three items
        const firstClones = sliderItems.slice(0, 3).map(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });

        // Clone the last three items
        const lastClones = sliderItems.slice(-3).map(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });

        // Prepend the last clones to the beginning
        lastClones.reverse().forEach(clone => sliderTape.insertBefore(clone, sliderTape.firstChild));

        // Append the first clones to the end
        firstClones.forEach(clone => sliderTape.appendChild(clone));

        let id = idRef.current;
        sliderTape.style.transform = `translateX(${-sliderItemWidthRef.current * id}px)`;

        function updatePoints() {
            sliderPointsRef.current.forEach((point, index) => {
                if (index === id - 1) {
                    point.classList.add("active");
                } else {
                    point.classList.remove("active");
                }
            });
        }

        const handleNextClick = () => {
            id++;
            sliderTape.style.transition = "transform 0.5s ease-in-out";
            sliderTape.style.transform = `translateX(${-sliderItemWidthRef.current * id}px)`;
            updatePoints();

            if (id >= sliderItemsCountRef.current) {
                setTimeout(() => {
                    sliderTape.style.transition = "none";
                    id = 0;
                    sliderTape.style.transform = `translateX(${-sliderItemWidthRef.current * id}px)`;
                }, 500);
            }
        };

        const handlePrevClick = () => {
            id--;
            sliderTape.style.transition = "transform 0.5s ease-in-out";
            sliderTape.style.transform = `translateX(${-sliderItemWidthRef.current * id}px)`;
            updatePoints();

            if (id <= 0) {
                setTimeout(() => {
                    sliderTape.style.transition = "none";
                    id = sliderItemsCountRef.current ;
                    sliderTape.style.transform = `translateX(${-sliderItemWidthRef.current * id}px)`;
                }, 500);
            }
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
        <div className="slider-citates">
            <div className="slider-wrapper">
                <div className="slider-tape" ref={sliderTapeRef}>
                    <div className="slider-item" ref={el => sliderItemsRef.current[0] = el}>
                        <SliderCitatesItem citate={"They are doing perfect performance."} author={"Max Verstappen"} />
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[1] = el}>
                        <SliderCitatesItem
                            citate={"Interesting company and interesting cars. We will work with them all the time."}
                            author={"Dietrich Mateschitz"} />
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[2] = el}>
                        <SliderCitatesItem citate={"I'm very happy to work with them. They are doing great job."}
                                           author={"Sergio Perez"} />
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[3] = el}>
                        <SliderCitatesItem
                            citate={"Their motors are faster than my mind. I'm like a roller coaster, side to side."}
                            author={"Lando Norris"} />
                    </div>
                    <div className="slider-item" ref={el => sliderItemsRef.current[4] = el}>
                        <SliderCitatesItem
                            citate={"Use AnderleCars, You dont need a Tesla. Youre like: Euhhh my cars not charging, taratam. Grow up!"}
                            author={"Andrew Tate"} />
                    </div>
                </div>
            </div>
            <div className="slider-buttons">
                <button className="slider-button slider-button-prev" ref={prevButtonRef}>Prev</button>
                <div className="slider-points">
                    <div className="slider-point active" ref={el => sliderPointsRef.current[0] = el}></div>
                    <div className="slider-point" ref={el => sliderPointsRef.current[1] = el}></div>
                    <div className="slider-point" ref={el => sliderPointsRef.current[2] = el}></div>
                    <div className="slider-point" ref={el => sliderPointsRef.current[3] = el}></div>
                    <div className="slider-point" ref={el => sliderPointsRef.current[4] = el}></div>
                </div>
                <button className="slider-button slider-button-next" ref={nextButtonRef}>Next</button>
            </div>
        </div>
    );
}

export default SliderCitates;
