import "./main.css";
import Button from "../../ui/button/button";
import {Link} from "react-router-dom";

const LinkButton = ({path}) => {
    return (
        <Link to={path}><Button/></Link>
    )
}

export default LinkButton;