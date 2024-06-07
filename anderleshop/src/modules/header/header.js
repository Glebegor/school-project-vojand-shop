import "./main.css";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import NavLink from "../../components/navLink/navLink";
import NavPhoto from "../../components/navPhoto/navPhoto";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"container"}>
                <a href={"/"}><img src={logo} alt="" className={"logo"}/></a>
                <div className={"navWrapper"}>
                    <div className={"nav"}>
                        <NavLink path={"/anderlehaus"} title={"Anderlehaus"}/>
                        <NavLink path={"/contacts"} title={"Contacts"}/>
                        <NavLink path={"/aboutus"} title={"About us"}/>
                        <NavLink path={"/catalogue"} title={"Catalogue"}/>
                    </div>
                    <NavPhoto path={"/cart"} photo={cart}/>
                </div>

            </div>
        </div>
    )
}

export default Header;