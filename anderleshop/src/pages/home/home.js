import "./main.css";
import LinkButton from "../../components/linkButton/button";

const Home = () => {
    return (
        <div>
            <section className={"homeMain"}>
                <div className={"container"}>
                    <div className={"h1 long-letters"}>The importance of being first</div>
                    <LinkButton/>
                </div>
            </section>
            <section className={"homeQuality"}>2</section>
            <section className={"homeComments"}>3</section>
            <section className={"contacts"}>4</section>
        </div>
    )
}

export default Home;