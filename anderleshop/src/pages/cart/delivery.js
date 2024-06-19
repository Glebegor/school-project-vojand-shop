
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";
import CartItem from "../../components/cartItem/cartItem";
import Formula from "./images/formula.jpg";
import Input from "../../ui/input/input";

const Delivery = () => {
    useEffect(() => {
        animate();

    }, []);


    return (
        <div className={"cart-wrp"}>
            <div className="container">
                <div className="__animate__ cart-menu">
                    <p className="cartName ">Cart</p>
                    <p className="ShippingName">Shipping</p>
                    <p className="PaymentName">Payment</p>
                    <p className="DeliveryInfoName active">Delivery information</p>
                </div>
                <div className="cart-wrapper">
                    <h1 className={"cart-title"}>Shipping</h1>
                    <div className="cart-items-wrapper">
                        <form className={"delivery-form"}>
                            <Input title={"Full name"} type={"text"} placeholder={"Full name"}/>
                            <Input title={"E-mail"} type={"text"} placeholder={"E-mail"}/>
                            <Input title={"Phone"} type={"text"} placeholder={"Phone"}/>
                            <Input title={"Adress"} type={"text"} placeholder={"Adress"}/>
                            <Input title={"Postal code"} type={"text"} placeholder={"Postal code"}/>
                            <Input title={"AnderlePayCode"} type={"text"} placeholder={"AnderlePayCode"}/>
                        </form>
                    </div>
                    <div className="cart-info">
                    <a href={"/"}><Button title={"Buy"} onClick={() => {
                    }}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Delivery;