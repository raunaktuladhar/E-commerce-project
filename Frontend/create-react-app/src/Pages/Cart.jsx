import React from "react";
import CartItems from '../Components/CartItems/CartItems.jsx';
import KhaltiPayment from "../Components/KhaltiPayment/KhaltiPayment.jsx";

const Cart = () => {
    return(
        <div>
            <CartItems>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <KhaltiPayment></KhaltiPayment>
                </div>
            </CartItems>
        </div>
    )
}

export default Cart
