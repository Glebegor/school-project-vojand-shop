import "./main.css";
import formula from "./images/formula-fc.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import CatSliderItem from "../../components/catSliderItem/catSliderItem";
import CheckboxFilters from "../../components/checkboxFilters/checkboxFilters";
import Button from "../../ui/button/button";

const CatalogueItem = () => {
    const [products, setProducts] = useState({});
    const [imagesData, setImages] = useState([]);
    const [photoHeight, setPhotoHeight] = useState(500); // Initial height

    useEffect(() => {
        const id = window.location.pathname.split("/").pop();

        axios.get("http://localhost:5774/api/v1/product/" + id)
            .then((response) => {
                const productsData = response.data.data;
                setProducts(productsData);
                setImages(productsData.images.split(';'));
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });

    }, []);

    const updateImage = (e) => {
        document.querySelector(".catalogueItemMainPhotos").src = e.target.src;
        setPhotoHeight(500); // Resetting height on image change
    }

    return (
        <div className={"catalogueItem"}>
            <div className="container">
                <h1>{products.title}</h1>
                <div className="catalogueItemMain">
                    <div className="catalogueItemPhotos">
                        <img
                            className={"catalogueItemMainPhotos"}
                            src={"http://localhost:5774/api/v1/productImage/" + products.images?.split(';')[0]}
                            alt=""
                            style={{ height: `${photoHeight}px` }} // Set height dynamically
                        />
                        <div className="catalogueItemPhotosSlider">
                            <div className="catalogueItemPhotosSliderTape">
                                {imagesData.map((img, index) => (
                                    <CatSliderItem
                                        key={index}
                                        oneClick={updateImage}
                                        imgs={"http://localhost:5774/api/v1/productImage/" + img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="catalogueItemDescription">
                        <div className="catalogueItemDescriptionText">{products.description}</div>
                        <div className="catalogueItemHelpCheckboxes">
                            <CheckboxFilters label={"Some checkbox"} />
                            <CheckboxFilters label={"Some checkbox"} />
                            <CheckboxFilters label={"Some checkbox"} />
                        </div>
                        <div className="catalogueItemHelpForm">
                            Quantity
                            <input type="number" placeholder={"1"}/>
                            <Button title={"To cart"}/>
                        </div>
                    </div>
                </div>
                <div className="cataslogueItemMightLike"></div>
            </div>
        </div>
    );
};

export default CatalogueItem;
