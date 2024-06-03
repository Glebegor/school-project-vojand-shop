import "./main.css";
import NavPhoto from "../../components/navPhoto/navPhoto";
import logo from "./images/logo.png";

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <div className={"footer-logo"}><NavPhoto path={"/"} photo={logo}/></div>
                <div className={"footer-data"}>+420 324 344 111</div>
                <div className={"footer-data"}>Anderle.Corp@gmail.com</div>
                <div className={"copyRight"}>© 2024 Matěj Foltín, Vojtěch Anderle, Hlib Arseniuk, all rights received
                </div>
            </div>
        </div>
    )
}

export default Footer;