import React from "react";
import KhaltiCheckout from "khalti-checkout-web";

const KhaltiPayment = () => {
    const config = {
        publicKey: "your_test_public_key_here", // Replace with your test/live public key
        productIdentity: "1234567890",
        productName: "Cart Items",
        productUrl: "http://localhost:5173",
        eventHandler: {
            onSuccess(payload) {
                console.log("Payment Successful!", payload);
                alert("Payment Successful!");
            },
            onError(error) {
                console.log("Payment Failed!", error);
                alert("Payment Failed!");
            },
            onClose() {
                console.log("User closed the Khalti popup.");
            }
        },
        paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"]
    };

    const checkout = new KhaltiCheckout(config);

    return (
        <button onClick={() => checkout.show({ amount: 1000 })}>
            Pay with Khalti
        </button>
    );
};

export default KhaltiPayment;
