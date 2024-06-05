import React, { useEffect, useRef } from "react";
import "./main.css";

const SliderCatalogue = () => {
    const sliderTapeRef = useRef(null);
    const idRef = useRef(0);

    useEffect(() => {
        const sliderTape = sliderTapeRef.current;
        const sliderItems = document.querySelectorAll(".slider-item-cat");
        const sliderItemWidth = sliderItems[0].offsetWidth;

        // Clone the first and last items
        const firstClone = sliderItems[0].cloneNode(true);
        const lastClone = sliderItems[sliderItems.length - 1].cloneNode(true);

        sliderTape.appendChild(firstClone);
        sliderTape.insertBefore(lastClone, sliderItems[0]);

        let id = 1;
        sliderTape.style.transform = `translateX(${-sliderItemWidth * id}px)`;

        const interval = setInterval(() => {
            id++;
            sliderTape.style.transition = "transform 1.5s ease-in-out";
            sliderTape.style.transform = `translateX(${-sliderItemWidth * id}px)`;

            if (id >= sliderItems.length) {
                setTimeout(() => {
                    sliderTape.style.transition = "none";
                    id = 0;
                    sliderTape.style.transform = `translateX(${-sliderItemWidth * id}px)`;
                }, 3500);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-catalogue-cat">
            <div className="slider-tape-cat" ref={sliderTapeRef}>
                <div className="slider-item-cat">
                    <img
                        src={"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/1422823415_0-sixteen_nine.jpg?size=948:533"}
                        alt="Item 1"
                    />
                </div>
                <div className="slider-item-cat">
                    <img
                        src={"https://cdn.alza.cz/Foto/ImgGalery/Image/hra-florbal.jpg"}
                        alt="Item 2"
                    />
                </div>
                <div className="slider-item-cat">
                    <img
                        src={"https://media.gq-magazine.co.uk/photos/5e662a63b4e1880008727a40/16:9/w_2240,c_limit/20200309-F1-Round-Up-01.jpg"}
                        alt="Item 3"
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderCatalogue;
