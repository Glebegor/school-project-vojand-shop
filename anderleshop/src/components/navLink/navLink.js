import {Link} from "react-router-dom";


const NavLink = ({path, title}) => {
    return (
        <Link to={path}>{title}</Link>
    )
}

export default NavLink;