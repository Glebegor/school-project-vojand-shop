
import "./main.css"
import {useEffect} from "react";
import animate from "../../animate";
import Button from "../../ui/button/button";
import CartItem from "../../components/cartItem/cartItem";
import Formula from "./images/formula.jpg";

const Cart = () => {
    useEffect(() => {
        animate();
        let price = 0;
        let items = document.querySelectorAll(".cartItem");
        items.forEach((item) => {
            let itemPrice = item.querySelector(".cartItemPrice").textContent;
            itemPrice = itemPrice.replace(/\s/g, "");
            itemPrice = itemPrice.replace("$", "");
            price += parseInt(itemPrice);
        });

        var cartTotal = document.querySelector(".cart-total");
        cartTotal.textContent = `Total: ${price}$`;
    }, []);


    return (
        <div className={"cart-wrp"}>
            <div className="container">
                <div className="__animate__ cart-menu">
                    <p id="cartName active">Cart</p>
                    <p id="ShippingName">Shipping</p>
                    <p id="PaymentName">Payment</p>
                    <p id="DeliveryInfoName">Delivery information</p>
                </div>
                <div className="cart-wrapper">
                    <h1 className={"cart-title"}>Your cart</h1>
                    <div className="cart-items-wrapper">
                        <CartItem title={"RB 23"} rating={6} photo={Formula} price={"15 000 000"}/>
                        <CartItem title={"RB 23"} rating={6} photo={Formula} price={"15 000 000"}/>
                        <CartItem title={"W 11"} rating={5} photo={Formula} price={"15 000 000"}/>
                        <CartItem title={"RB 23"} rating={6} photo={Formula} price={"15 000 000"}/>
                        <CartItem title={"RB 23"} rating={6} photo={Formula} price={"15 000 000"}/>

                    </div>
                    <div className="cart-info">
                        <div className="cart-total">Total: 0$</div>
                        <Button title={"Continue"} onClick={() => {
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart;