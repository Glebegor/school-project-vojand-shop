import "./main.css"
import SliderCitatesItem from "../../components/sliderCitatesItem/sliderCitatesItem";

const SliderCitates = () => {
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
                <div className={"slider-button slider-button-prev"}>Prev</div>
                <div className={"slider-button slider-button-next"}>Next</div>
            </div>
            <div className={"slider-points"}>

            </div>
        </div>

    )
}


export default SliderCitates;