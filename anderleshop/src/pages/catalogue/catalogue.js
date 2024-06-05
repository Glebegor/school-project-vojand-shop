import "./main.css";
import Button from "../../ui/button/button";
import Input from "../../ui/input/input";
import logoPhoto from "./images/logo.png";
import CatItem from "../../components/catItem/catItem";
import Filters from "../../modules/filters/filters";
import SliderCatalogue from "../../modules/sliderCatalogue/sliderCatalogue";

const Catalogue = () => {
    return (
        <div className={"catalogue"}>
            <SliderCatalogue/>
            <div className="catalogueShopper container">
                <div className="catalogueShopperSearcher">
                    <div className="catalogueShopperSearcherFilterBy">Filter by lower Price</div>
                    <div className="catalogueShopperSearcherLogo">
                        <img src={logoPhoto} alt={"nothing"}/>
                    </div>
                    <div className="catalogueShopperSearcherWrapper">
                        <Input placeholder={"Search"}/>
                        <Button title={"Search"}/>
                    </div>
                </div>
                <div className="catalogueShopperFilter">
                    <Filters />
                </div>
                <div className="catalogueOrders">
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={6} descrition={"some wqeqweqkop some texte some texte some texte"} id={1}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={4} descrition={"some texte some texte some texte some texte"} id={2}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={5} descrition={"some texte some texte some texte some texte"} id={3}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                    <CatItem price={"15 000 000"} img={""} title={"Some text"} rating={3} descrition={"some texte some texte some texte some texte"} id={4}/>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;