import {useEffect} from "react";
import animate from "../../animate";
import "./main.css";
import Anderle from "./images/VojtaPhoto.png"
import ContactCart from "../../components/contactCart/contactCart";
// import Foltin from "./images/FoltinPhoto.png.png"
// import Arseniuk from "./images/HlibPhoto.png.png"

const Contacts = () => {
    useEffect(() => {
        animate();
    }, []); // Empty dependency array ensures this runs only once after component mount

    return (
        <div className={"contacts"}>
            <div className="container">
                <ContactCart place={1} img={Anderle} name={"Vojta Anderle"} position={"Promoter, marketing-manager"} email={"vojta.anderle08@gmail.com"} tel={"+420 556 678 093"} titul={"Retired 8-Time FCWC"}/>
                
                <div className="contacts-cart"></div>
                <div className="contacts-cart"></div>
            </div>
        </div>
    )
}

export default Contacts;