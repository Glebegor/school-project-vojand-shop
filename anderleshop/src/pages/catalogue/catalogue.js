import "./main.css";
import Button from "../../ui/button/button";
import Input from "../../ui/input/input";
import logoPhoto from "./images/logo.png";
import CatItem from "../../components/catItem/catItem";
import Filters from "../../modules/filters/filters";
import SliderCatalogue from "../../modules/sliderCatalogue/sliderCatalogue";
import { useEffect, useState } from "react";
import animate from "../../animate";
import axios from "axios";

const Catalogue = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        animate();
        axios.get("http://localhost:5774/api/v1/product")
            .then((response) => {
                // Assuming response.data is an object with an array under key 'data'
                const productsData = response.data.data;
                setProducts(productsData);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className={"catalogue"}>
            <SliderCatalogue />
            <div className="catalogueShopper container">
                <div className="catalogueShopperSearcher">
                    <div className="catalogueShopperSearcherFilterBy">Filter by lower Price</div>
                    <div className="catalogueShopperSearcherLogo">
                        <img src={logoPhoto} alt={"nothing"} />
                    </div>
                    <div className="catalogueShopperSearcherWrapper">
                        <Input placeholder={"Search"} />
                        <Button onClick={() => { }} title={"Search"} />
                    </div>
                </div>
                <div className="catalogueShopperFilter">
                    <Filters />
                </div>
                <div className="catalogueOrders">
                    <CatItem
                        key={"423"}
                        img={""} // Assuming images key instead of img
                        title={"TEST"}
                        rating={3}
                        description={"TEST TEST TEST"}
                        id={"423"}
                        price={"1000000"}
                    />
                    {products.map((product) => (
                        <CatItem
                            key={product.id}
                            img={product.images} // Assuming images key instead of img
                            title={product.title}
                            rating={product.rating}
                            description={product.description}
                            id={product.id}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
