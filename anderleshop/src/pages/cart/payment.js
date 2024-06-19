
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";
import CartItem from "../../components/cartItem/cartItem";
import Formula from "./images/formula.jpg";
import Checkbox from "../../ui/checkbox/checkbox";

const Payment = () => {
    useEffect(() => {
        animate();

    }, []);


    return (
        <div className={"cart-wrp"}>
            <div className="container">
                <div className="__animate__ cart-menu">
                    <p className="cartName ">Cart</p>
                    <p className="ShippingName">Shipping</p>
                    <p className="PaymentName active">Payment</p>
                    <p className="DeliveryInfoName">Delivery information</p>
                </div>
                <div className="cart-wrapper">
                    <h1 className={"cart-title"}>Payment Mathods</h1>
                    <div className="cart-items-wrapper left">
                        <Checkbox label={"Online card"}/>
                        <Checkbox label={"Card COD"}/>
                        <Checkbox label={"QR Code"}/>
                        <Checkbox label={"Cash on COD"}/>
                        <Checkbox label={"Google Pay"}/>
                        <Checkbox label={"Apple Pay"}/>
                        <Checkbox label={"PayPal"}/>
                        <Checkbox label={"ANDERLEPAY"}/>


                    </div>
                    <div className="cart-info">
                        <a href={"delivery"}><Button title={"Continue"} onClick={() => {
                        }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Payment;