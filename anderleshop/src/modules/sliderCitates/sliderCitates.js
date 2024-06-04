import "./main.css"
import SliderCitatesItem from "../../components/sliderCitatesItem/sliderCitatesItem";

const SliderCitates = () => {
    // Slider logic

    const prevButton = document.querySelector(".slider-button-prev")
    const nextButton = document.querySelector(".slider-button-next")

    nextButton.addEventListener("click", () => {console.log("next")})
    // prevButton.addEventListener("click", () => {console.log("prev")})

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
                </div>
                <button className={"slider-button slider-button-next"}></button>
            </div>

        </div>

    )
}


export default SliderCitates;