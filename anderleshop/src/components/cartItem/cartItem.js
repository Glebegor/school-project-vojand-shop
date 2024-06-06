import "./main.css";
import Button from "../../ui/button/button";
import starAct from "../catItem/images/starActive.png";
import star from "../catItem/images/star.png";

const CartItem = ({photo, title, price, rating}) => {
    function countRating() {

    }
    return (
        <div className={"cartItem"}>
            <img src={photo} alt=""/>
            <div className="cartItemDescription">
                <h2 className="cartItemTitle">{title}</h2>
                <div className="cartItemPrice">{price}</div>
                <div className="cartItemRating">
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
                <Button title={"Remove"} onClick={() => {}} />
            </div>
        </div>
    )
}


export default CartItem;