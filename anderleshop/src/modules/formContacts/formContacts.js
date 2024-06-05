import InputForm from "../../components/inputForm/inputForm";
import TextareaForm from "../../components/textareaForm/textareaForm";
import "./main.css";
import ButtonForm from "../../components/buttonForm/buttonForm";

const FormContacts = () => {
    return (
        <form className={"contacts-form"}>
            <div className={"row-form __animate__left"}>
                <InputForm placeholder={"Name"}/>
                <InputForm placeholder={"Surname"}/>
            </div>
            <div className={"row-form __animate__right"}>
                <InputForm placeholder={"Email"}/>
                <InputForm placeholder={"Phone"}/>
            </div>
            <div className={"row-form __animate__left"}>
                <TextareaForm placeholder={"Message"}/>
            </div>
            <div className={"row-form __animate__"}>
                <ButtonForm title={"Contact us"} onClick={() => {}}/>
            </div>
        </form>
)
}


export default FormContacts;