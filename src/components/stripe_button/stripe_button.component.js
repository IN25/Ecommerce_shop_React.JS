import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //we convert because stripe processes the payments in cents
  const publishableKey =
    "pk_test_51IxvDuI3cXf7qEXJSc23tyRi6yEkcPlqfE75WWhvInYdMiWXPMhniR83hBwzPpd9YIpExb9AWFJ3awnIs2HluH1C00YHmLoDzT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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
      panelLabel={"Pay Now"}
      token={onToken} //triggers when we submit a payment
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
