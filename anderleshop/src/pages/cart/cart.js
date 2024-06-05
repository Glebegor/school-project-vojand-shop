
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";

const Cart = () => {
    useEffect(() => {
        animate();
    }, []);
    return (
        <div className={"cart-wrp"}>
            <div className="container">
                <div className="__animate__ cart-menu">
                    <p id="cartName">Cart</p>
                    <p id="ShippingName">Shipping</p>
                    <p id="PaymentName">Payment</p>
                    <p id="DeliveryInfoName">Delivery information</p>
                </div>
                <div className="cart-wrapper">
                    <h1>Your cart</h1>
                    <div className="cart-items-wrapper">

                    </div>
                    <Button title={"Continue"} onClick={() => {}}/>
                </div>
            </div>
        </div>
    )
}


export default Cart;