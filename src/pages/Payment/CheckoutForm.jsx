import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const courseDetail = useLoaderData();
  const { price } = courseDetail;

  //   useEffect(() => {
  //     const sendRequest = async () => {
  //       try {
  //         const res = await axios.post("/api/v1/payment/create-intent", {
  //           price,
  //         });
  //         console.log(res.data.clientSecret);
  //         setClientSecret(res.data.clientSecret);
  //       } catch (error) {
  //         console.log(error.message);
  //         setErrorMessage(error.message);
  //       }
  //     };
  //     sendRequest();
  //   }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setErrorMessage("Stripe has not been initialized properly.");
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("Payment successful!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={{ clientSecret }} />
        <button className="btn btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </>
  );
};

export default CheckoutForm;
