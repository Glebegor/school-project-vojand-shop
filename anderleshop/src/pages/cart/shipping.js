
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";
import CartItem from "../../components/cartItem/cartItem";
import Formula from "./images/formula.jpg";
import Input from "../../ui/input/input";
import Checkbox from "../../ui/checkbox/checkbox";

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
                    <h1 className={"cart-title"}>Shipping Place</h1>
                    <div className="cart-items-wrapper left">
                        <h1>Anderle Shop</h1>
                        <Checkbox label={"Anderle Shop Monaco"}/>
                        <Checkbox label={"Anderle Shop Prague"}/>
                        <Checkbox label={"Anderle Shop Florida"}/>
                        <Checkbox label={"Anderle Shop Los Angeles"}/>
                        <Checkbox label={"Anderle Shop Gothenburg"}/>
                        <Checkbox label={"Anderle Shop San Francisco"}/>
                        <Checkbox label={"Anderle Shop Brno"}/>

                        <h1>AnderleHaus</h1>
                        <Checkbox label={"Anderle Shop Brno"}/>

                        <h1>Home Delivery</h1>
                        <Checkbox label={"Home Delivery"}/>

                    </div>
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