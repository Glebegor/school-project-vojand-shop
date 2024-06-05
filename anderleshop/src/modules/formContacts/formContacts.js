import InputForm from "../../components/inputForm/inputForm";
import TextareaForm from "../../components/textareaForm/textareaForm";
import "./main.css";
import ButtonForm from "../../components/buttonForm/buttonForm";

const FormContacts = () => {
    return (
        <form className={"contacts-form"}>
            <div className={"row-form"}>
                <InputForm placeholder={"Name"}/>
                <InputForm placeholder={"Surname"}/>
            </div>
            <div className={"row-form"}>
                <InputForm placeholder={"Email"}/>
                <InputForm placeholder={"Phone"}/>
            </div>
            <div className={"row-form"}>
                <TextareaForm placeholder={"Message"}/>
            </div>
            <div className={"row-form"}>
                <ButtonForm title={"Contact us"} onClick={() => {}}/>
            </div>
        </form>
)
}


export default FormContacts;