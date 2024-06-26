import React, {useEffect, useState} from "react";
import "./main.css"; // Import CSS file for styling

function RangeSlider() {
    useEffect(() => {
        function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
            const [from, to] = getParsed(fromInput, toInput);
            fillSlider(fromInput, toInput, '#C6C6C6', '#E01506', controlSlider);
            if (from > to) {
                fromSlider.value = to;
                fromInput.value = to;
            } else {
                fromSlider.value = from;
            }
        }

        function controlToInput(toSlider, fromInput, toInput, controlSlider) {
            const [from, to] = getParsed(fromInput, toInput);
            fillSlider(fromInput, toInput, '#C6C6C6', '#E01506', controlSlider);
            setToggleAccessible(toInput);
            if (from <= to) {
                toSlider.value = to;
                toInput.value = to;
            } else {
                toInput.value = from;
            }
        }

        function controlFromSlider(fromSlider, toSlider, fromInput) {
            const [from, to] = getParsed(fromSlider, toSlider);
            fillSlider(fromSlider, toSlider, '#C6C6C6', '#E01506', toSlider);
            if (from > to) {
                fromSlider.value = to;
                fromInput.value = to;
            } else {
                fromSlider.value = from;

                fromInput.value = from;
            }
        }

        function controlToSlider(fromSlider, toSlider, toInput) {
            const [from, to] = getParsed(fromSlider, toSlider);
            fillSlider(fromSlider, toSlider, '#C6C6C6', '#E01506', toSlider);
            setToggleAccessible(toSlider);
            if (from <= to) {
                toSlider.value = to;
                toInput.value = to;
            } else {
                toInput.value = from;
                toSlider.value = from;
            }
        }

        function getParsed(currentFrom, currentTo) {
            const from = parseInt(currentFrom.value, 10);
            const to = parseInt(currentTo.value, 10);
            return [from, to];
        }

        function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
            const rangeDistance = to.max-to.min;
            const fromPosition = from.value - to.min;
            const toPosition = to.value - to.min;
            controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
        }

        function setToggleAccessible(currentTarget) {
            const toSlider = document.querySelector('#toSlider');
            if (Number(currentTarget.value) <= 0 ) {
                toSlider.style.zIndex = 2;
            } else {
                toSlider.style.zIndex = 0;
            }
        }

        const fromSlider = document.querySelector('#fromSlider');
        const toSlider = document.querySelector('#toSlider');
        const fromInput = document.querySelector('#fromInput');
        const toInput = document.querySelector('#toInput');
        fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
        setToggleAccessible(toSlider);

        fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
        toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
        fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
        toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
    }, []);

    return (
        <div className="range_container">
            <div className="sliders_control">
                <input id="fromSlider" type="range" value="10" min="0" max="26000000"/>
                <input id="toSlider" type="range" value="40" min="0" max="26000000"/>
            </div>
            <div className="form_control">
                <div className="form_control_container">
                    <div className="form_control_container__time">Min</div>
                    <input className="form_control_container__time__input" type="number" id="fromInput" value="10"
                           min="0" max="26000000"/>
                </div>
                <div className="form_control_container">
                    <div className="form_control_container__time">Max</div>
                    <input className="form_control_container__time__input" type="number" id="toInput" value="40" min="0"
                           max="26000000"/>
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;
