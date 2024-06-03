import Header from "../../modules/header/header";
import Footer from "../../modules/footer/footer";
import "./main.css";
const Layout = ({children}) => {
    return (
        <div className={"layout"}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;