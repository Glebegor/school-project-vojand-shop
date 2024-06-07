
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";
import CartItem from "../../components/cartItem/cartItem";
import Formula from "./images/formula.jpg";

const Shipping = () => {
    useEffect(() => {
        animate();

    }, []);


    return (
        <div className={"cart-wrp"}>
            <div className="container">
                <div className="__animate__ cart-menu">
                    <p className="cartName">Cart</p>
                    <p className="ShippingName active">Shipping</p>
                    <p className="PaymentName">Payment</p>
                    <p className="DeliveryInfoName">Delivery information</p>
                </div>
                <div className="cart-wrapper">
                    <h1 className={"cart-title"}>Shipping</h1>
                    <div className="cart-items-wrapper"></div>
                    <div className="cart-info">
                    <a href={"/payment"}><Button title={"Continue"} onClick={() => {
                        }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Shipping;