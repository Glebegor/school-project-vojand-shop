
import "./main.css"
import Button from "../../ui/button/button";
import star from "./images/star.png";
import starAct from "./images/starActive.png";
import LinkButton from "../linkButton/linkButton";
const CatItem = ({ img, title, rating, description, id , price}) => {
    function checkLen() {
        if (description.length > 45) {
            return description.slice(0, 50) + "...";
        } else {
            return description;
        }
    }
    return (
        <div className={"catItem "}>
            <div className={"catItemImg"}>
                <img src={"https://uploads.audi-mediacenter.com/system/production/media/119075/images/f4076741890dadd6938f83a773476bf2ea4dede8/A234333_web_1920.jpg?1698538264"} alt=""/>
            </div>
            <div className="catItemDescrition">
                <h2 className={"catItemTitle"}>
                    {title}
                </h2>
                <div className={"catItemText"}>
                    {checkLen()}
                </div>

                <div className="catItemAbove">
                    <div>
                        <div className="catItemPrice">
                            {price}$
                        </div>
                        <div className={"catItemRating"}>
                            {
                                Array.from({length: 6}, (v, k) => {
                                    if (k < rating) {
                                        return <img src={starAct} key={k}/>
                                    } else {
                                        return <img src={star} key={k}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className={"catItemButton"}>
                        <LinkButton path={"/catalogueItem/" + id} title={"Check it"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CatItem;