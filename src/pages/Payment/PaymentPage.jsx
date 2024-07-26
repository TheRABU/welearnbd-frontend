import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TEST_KEY);

// const options = {
//   mode: "payment",
//   amount: 1099,
//   currency: "usd",
//   // Fully customizable with appearance API.
//   appearance: {
//     /*...*/
//   },
// };

const PaymentPage = () => {
  return (
    <>
      <div className="h-full pt-20">
        <h2 className="text-4xl text-center text-neutral-700">Payment Page</h2>
        <div className="px-52">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
