import {Link} from "react-router-dom";
import cart from "../../modules/header/images/cart.png";


const NavPhoto = ({path, photo}) => {
    return (
        <Link to={path}><img src={photo} alt="" /></Link>
    )
}

export default NavPhoto;