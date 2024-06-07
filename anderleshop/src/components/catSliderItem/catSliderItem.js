import {useEffect} from "react";


var CatSliderItem = ({imgs, oneClick}) => {
    return (
        <div className="catSliderItem">
            <img src={imgs} onClick={oneClick} alt={""}/>
        </div>
    )
}


export default CatSliderItem;