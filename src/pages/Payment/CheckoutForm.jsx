import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCartHook";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [cart, refetch] = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();

  // create total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const sendDataToBackend = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/payment/create-intent`,
          { price: totalPrice }
        );
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error.message);
        throw new error();
      }
    };
    sendDataToBackend();
  }, [totalPrice]);

  // submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          cartItemIds: cart.map((item) => item.cartItemId),
          status: "pending",
        };
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/payment/save-payment`,
          payment
        );
        refetch();
        if (res.data.message) {
          Swal.fire({
            title: "Payment success!",
            text: `Transaction id: ${paymentIntent.id}, ${res.data.message}`,
            icon: "success",
            timer: 3000,
          });
          navigate("/");
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <div>
          <p className="text-red-600 text-xl font-semibold">{error}</p>
          {transactionId && (
            <p className="text-xl font-semibold text-green-600">
              Your Transaction id: {transactionId}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
