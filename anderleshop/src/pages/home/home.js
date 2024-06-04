import "./main.css";
import LinkButton from "../../components/linkButton/linkButton";
import SliderCitates from "../../modules/sliderCitates/sliderCitates";

const Home = () => {
    return (
        <div>
            <section className={"homeMain"}>
                <div className={"container"}>
                    <div className={"h1 long-letters animate __animate__"}>The importance of being first</div>
                    <LinkButton path={"/catalogue"} title={"Buy now"}/>
                </div>
            </section>
            <section className={"homeQuality"}>
                <div className={"container"}>
                    <div className={"h1 long-letters animate __animate__"}>Quality is important</div>
                    <LinkButton path={"/catalogue"} title={"Test quality"}/>
                </div>
            </section>
            <section className={"homeComments"}>
                <div className={"container"}>
                    <SliderCitates />
                </div>
            </section>
            <section className={"contacts"}>4</section>
        </div>
    )
}

export default Home;