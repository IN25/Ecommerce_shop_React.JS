import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //we convert because stripe processes the payments in cents
  const publishableKey =
    "pk_test_51IxvDuI3cXf7qEXJSc23tyRi6yEkcPlqfE75WWhvInYdMiWXPMhniR83hBwzPpd9YIpExb9AWFJ3awnIs2HluH1C00YHmLoDzT";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
