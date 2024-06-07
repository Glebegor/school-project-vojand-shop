import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import map1 from "./images/map1.png";
import map2 from "./images/map2.png";

const Anderlehaus = () => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <div className={"anderlehaus"}>
            <div className="container">
                <div className="anderlehaus-text">
                    <h1 className="__animate__left">Welcome to AnderleHaus</h1>
                    <div className="anderlehaus-info-text __animate__right">
                        AnderleHaus is one of the world's largest shopping centers with an area of 1,270,000 m2.
                    </div>
                    <div className="anderlehaus-info-text __animate__left">
                        <strong>F1 Track:</strong> Experience the thrill of Formula 1 on our unique track. Perfect for
                        speed lovers and adrenaline seekers.
                    </div>
                    <div className="anderlehaus-info-text __animate__right">
                        <strong>Map of ANDERLEHAUS:</strong> Find your way to our attractions with the interactive map.
                        All shops and entertainment zones at your fingertips.
                    </div>
                    <div className="anderlehaus-info-text __animate__left">
                        <strong>Museum of Arseniuk:</strong> Explore the fascinating history and achievements of the
                        Arseniuk FCWC team. Get inspired by their legendary performances.
                    </div>
                    <div className="anderlehaus-info-text __animate__right">
                        <strong>FCWC Team:</strong> Join the fans of the FCWC team and support your favorite players.
                        Together, we celebrate every victory!
                    </div>
                    <div className="anderlehaus-info-text __animate__left">
                        <strong>ANDERLEHAUS DOPORUČUJE PLÁNOVANOU ÚDRŽBU, KTEROU POSKYTUJEME:</strong>
                        <ul className="__animate__right">
                            <li>Servis brzdové kapaliny</li>
                            <li>Výměna kabinového filtru</li>
                            <li>Výměna spojky</li>
                            <li>Servis chladicí kapaliny</li>
                            <li>Diferenční servis</li>
                            <li>Výměna vzduchového filtru motoru</li>
                            <li>Standardní rutinní údržba Foltin cars</li>
                            <li>Servis převodovky</li>
                            <li>Služby pro upgrade výkonu</li>
                        </ul>
                    </div>
                    <div className="anderlehaus-info-text __animate__left">
                        AnderleHaus also contains one of the best F1 tracks, with an area of 4,272m.
                    </div>
                </div>
                <div className="anderlehaus-photo">
                    <img className="map" src={map1} alt="map1"/>
                    <img className="map" src={map2} alt="map2"/>
                </div>
            </div>
        </div>
    )
}

export default Anderlehaus;