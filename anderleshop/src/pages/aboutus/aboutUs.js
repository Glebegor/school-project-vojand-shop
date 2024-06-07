import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
const AboutUs = () => {
    useEffect(() => {
        animate();
    }, []); // Empty dependency array ensures this runs only once after component mount

    return (
        <div className={"aboutUs "}>
            <div className="aboutUsMain">
                <h1 className="__animate__">Welcome to the Anderle Shop</h1>
            </div>

            <div className="container">
                <div className="aboutUsItem">
                    <h2 className="__animate__right">Co jsme zač</h2>
                    <p className="__animate__left">Vítejte v Anderle Shop, unikátním obchodním ústavu, který nabízí
                        zážitky,
                        jež jsou stejně vzrušující jako závodní okruhy Formule 1. Naše zařízení, situované v srdci
                        města, je
                        více než jen prodejna; je to brána, kde se setkávají šampioni ze všech koutů multivesmíru.</p>
                </div>
                <div className="aboutUsItem">
                    <h2 className="__animate__right">Naše Produkty:</h2>
                    <ul className="__animate__left">
                        <li><b>Formule 1</b>: Nabízíme exkluzivní modely vozů Formule 1, které jsou symbolem rychlosti a
                            inovace.
                        </li>
                        <li><b>Volanty</b>: Naše volanty jsou vyrobeny s nejvyšší precizností, aby poskytovaly
                            autentický
                            zážitek z řízení.
                        </li>
                        <li><b>Berle</b>: Pro ty, kteří potřebují podporu, máme širokou škálu berli, které kombinují
                            funkčnost s designem.
                        </li>
                        <li><b>Florbalky</b>: Sportovní nadšenci u nás najdou florbalky, které jsou synonymem pro
                            kvalitu a
                            odolnost.
                        </li>
                        <li><b>Licencované Kradené Účty od LoL</b>: Pro hráče League of Legends nabízíme účty, které
                            otevírají nové možnosti ve hře.
                        </li>
                    </ul>
                </div>

                <div className="aboutUsItem">
                    <h2 className="__animate__right">Naše Spolupráce:</h2>
                    <p className="__animate__left">Jsme hrdí na naše partnerství s týmem <span className="red-bull">Red Bull</span>,
                        které nám umožňuje být součástí závodní elity. Tato spolupráce nám přinesla nejen prestiž, ale i
                        přátelství s <span className="red-bull">Maxem Verstappenem</span>, který je nejen naším
                        ambasadorem, ale
                        také pravidelným zákazníkem.</p>
                </div>

                <div className="aboutUsItem">
                    <h2 className="__animate__right">Ocenění</h2>
                    <p className="__animate__left">Byli jsme poctěni oceněním za nejlepší obchod, které nám předal
                        sám <span
                            className="red-bull">Max Verstappen</span>. Tento moment byl vrcholem naší práce a odhodlání
                        poskytovat
                        nejlepší služby a produkty.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;