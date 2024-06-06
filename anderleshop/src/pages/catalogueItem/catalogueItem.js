import "./main.css"
import formula from "./images/formula-fc.jpg";
const CatalogueItem = ({ item }) => {
    return (
        <div className={"catalogueItem"}>
            <div className="container">
                <h1>Title</h1>
                <div className="catalogueItemMain">
                    <div className="catalogueItemPhotos">
                        <img className={"catalogueItemMainPhotos"} src={formula} alt=""/>
                        <div className="catalogueItemPhotosSlider">slider</div>
                    </div>
                    <div className="catalogueItemDescription">
                        <div className="catalogueItemDescriptionText">description</div>
                        <div className="catalogueItemHelpCheckboxes">checkboxes</div>
                        <div className="catalogueItemHelpForm">form</div>
                    </div>
                </div>
                <div className="cataslogueItemMightLike"></div>
            </div>
        </div>
    )
}

export default CatalogueItem;