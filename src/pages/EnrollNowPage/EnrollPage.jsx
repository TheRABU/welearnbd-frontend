import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TEST_KEY);
const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Enroll = () => {
  const courseDetail = useLoaderData();
  const { courseName, courseImage, price, level, teacherName } = courseDetail;
  const { user } = useAuth();

  return (
    <>
      <div className="wrapper pb-6 lg:pb-14">
        <div className="border-blue-500 border-2 p-4 mx-3 lg:mx-20 md:p-10 m-3 md:m-10 rounded-md bg-[#ffffff] h-full ">
          <div>
            <h2 className="text-center text-neutral-700 text-4xl">
              Enroll now in {courseName}
            </h2>
          </div>
          <div className="flex-row lg:flex items-start justify-center py-10 px-6 md:px-20 mx-auto space-x-8">
            {/* CARD */}
            <div className="parent-div  mb-10 h-auto max-w-md">
              <div className="antialiased text-gray-900 ">
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg overflow-hidden shadow-2xl ">
                    <img
                      className="h-48 w-full object-cover object-end"
                      src={courseImage}
                      alt="course image"
                    />
                    <div className="p-6">
                      <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                          New
                        </span>
                        {/* <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                      3 beds &bull; 2 baths
                    </div> */}
                      </div>
                      <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                        {courseName}
                      </h4>

                      <div className="mt-1">
                        <span>$ {price}</span>
                      </div>
                      <div className="mt-1">
                        <h3>By {teacherName}</h3>
                      </div>
                      <div className="mt-1">
                        <h3>Level {level}</h3>
                      </div>
                      <div className="mt-3">
                        <Link to="/allCourses">
                          <button className="btn bg-teal-200 text-black">
                            View some more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="max-w-xl p-5 rounded-md shadow-2xl border-2 border-gray-600 bg-white">
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;
