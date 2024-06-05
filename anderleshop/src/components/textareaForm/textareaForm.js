import Textarea from "../../ui/textarea/textarea";
import "./main.css"

const TextareaForm = ({placeholder}) => {
    return (
        <div className={"textareaWrapper"}><Textarea placeholder={placeholder}/></div>

    )
}

export default TextareaForm;