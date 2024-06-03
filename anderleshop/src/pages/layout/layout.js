import Header from "../../modules/header/header";
import Footer from "../../modules/footer/footer";
import "./main.css";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div className={"layout"}>
            <Header />
            <main>
                {<Outlet/>}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;