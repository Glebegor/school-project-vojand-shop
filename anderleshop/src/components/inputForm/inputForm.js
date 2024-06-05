import Input from "../../ui/input/input";
import "./main.css"

const InputForm = ({placeholder}) => {
    return (
        <div className={"inputWrapper"}><Input placeholder={placeholder}/></div>
    )
}

export default InputForm;