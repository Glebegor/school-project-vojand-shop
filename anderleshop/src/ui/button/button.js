import "./main.css";

const Button = ({title, onClick}) => {
    return (
        <button className={"mainButton"} onClick={onClick}>{title}</button>
    )
}

export default Button;