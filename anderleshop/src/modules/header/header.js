import "./main.css";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import NavLink from "../../components/navLink/navLink";
import NavPhoto from "../../components/navPhoto/navPhoto";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"container"}>
                <img src={logo} alt="" className={"logo"}/>
                <div className={"nav"}>
                    <NavLink path={"/"} title={"Home"}/>
                    <NavLink path={"/"} title={"Contacts"}/>
                    <NavLink path={"/"} title={"About us"}/>
                    <NavLink path={"/"} title={"Catalogue"}/>
                    <NavPhoto path={"/"} photo={cart}/>
                </div>
            </div>
        </div>
    )
}

export default Header;