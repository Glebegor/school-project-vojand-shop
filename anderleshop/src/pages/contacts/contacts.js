import {useEffect} from "react";
import animate from "../../animate";
import "./main.css";
import Anderle from "./images/VojtaPhoto.png"
import ContactCart from "../../components/contactCart/contactCart";
import Foltin from "./images/FoltinPhoto.png"
import Arseniuk from "./images/HlibPhoto.png"

const Contacts = () => {
    useEffect(() => {
        animate();
    }, []); // Empty dependency array ensures this runs only once after component mount

    return (
        <div className={"contacts"}>
            <div className="container">
                <ContactCart animate={"__animate__right"} place={1} img={Anderle} name={"Vojta Anderle"} position={"Promoter, marketing-manager"} email={"vojta.anderle08@gmail.com"} tel={"+420 556 678 093"} titul={"Retired 8-Time FCWC"}/>
                <ContactCart animate={"__animate__"}place={2} img={Foltin} name={"Matěj Foltín"} position={"Noname"} email={"matej.foltin@gmail.com"} tel={"+420 774 286 897"} titul={"Current World Champion of the FCWC"}/>
                <ContactCart animate={"__animate__left"}place={3} img={Arseniuk} name={"Hlib Arseniuk"} position={"Full-Stack developer"} email={"hlib.arseniuk.work@gmail.com"} tel={"+420 349 834 222"} titul={"Developer of Anderle OS"}/>

            </div>
        </div>
    )
}

export default Contacts;