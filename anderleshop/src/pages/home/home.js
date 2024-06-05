import "./main.css";
import LinkButton from "../../components/linkButton/linkButton";
import SliderCitates from "../../modules/sliderCitates/sliderCitates";
import FormContacts from "../../modules/formContacts/formContacts";
import { useEffect } from "react";
import animate from "../../animate";

const Home = () => {
    useEffect(() => {
        animate();
    }, []); // Empty dependency array ensures this runs only once after component mount

    return (
        <div>
            <section className={"homeMain"}>
                <div className={"container __animate__"}>
                    <div className={"h1 long-letters  __animate__"}>The importance of being first</div>
                    <LinkButton path={"/catalogue"} title={"Buy now"} />
                </div>
            </section>
            <section className={"homeQuality"}>
                <div className={"container __animate__"}>
                    <div className={"h1 long-letters  __animate__"}>Quality is important</div>
                    <LinkButton path={"/catalogue"} title={"Test quality"} />
                </div>
            </section>
            <section className={"homeComments"}>
                <div className={"container "}>
                    <SliderCitates />
                </div>
            </section>
            <section className={"homeContacts"}>
                <div className={"container __animate__"}>
                    <h1 className={"long-letters __animate__"}>Contacts</h1>
                    <FormContacts />
                </div>
            </section>
        </div>
    );
}

export default Home;
