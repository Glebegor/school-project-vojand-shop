import "./main.css";
import Button from "../../ui/button/button";
import {Link} from "react-router-dom";

const LinkButton = ({path, title}) => {
    return (
        <Link to={path}><Button title={title}/></Link>
    )
}

export default LinkButton;