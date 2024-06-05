import InputForm from "../../components/inputForm/inputForm";
import TextareaForm from "../../components/TextareaForm/textareaForm";
import "./main.css";

const FormContacts = () => {
    return (
        <form className={"contacts-form"}>
            <div className={"row-form"}>
                <InputForm placeholder={"some text"}/>
                <InputForm placeholder={"some text"}/>
            </div>
            <div className={"row-form"}>
                <InputForm placeholder={"some text"}/>
                <InputForm placeholder={"some text"}/>
            </div>
            <div className={"row-form"}>
                <TextareaForm/>
            </div>

        </form>
)
}


export default FormContacts;