import { useState } from "react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="relative rounded-t-lg flex flex-col overflow-hidden overflow-y-auto h-svh pt-20 items-center justify-center bg-zinc-950">
      {/* Background image */}
      <img
        className="absolute w-full h-full lg:w-auto lg:h-auto"
        src="https://tutorials.lexingtonthemes.com/images/blueBlob.svg"
        alt="alt text"
      />
      {/* Ends Background image */}
      <div className="relative items-center h-full px-8 py-5 mx-auto md:px-12 max-w-7xl">
        <h1 className="text-3xl text-center text-[#ffffff] font-bold">
          Prices of premium services
        </h1>
        {/* Pricing Toggle Buttons */}
        <div className="md:max-w-sm mx-auto">
          {/* Toggle Button Container */}
          <div className="inline-flex w-full border rounded-full mt-6 overflow-hidden border-white/20 p-0.5 z-0">
            {/* Monthly Button */}
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${
                !annual ? "bg-black/50 text-white" : "text-white"
              }`}
              onClick={() => setAnnual(false)}
              type="button"
            >
              Monthly
            </button>
            {/* Annual Button */}
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${
                annual ? "bg-black/50 text-white" : "text-white"
              }`}
              onClick={() => setAnnual(true)}
              type="button"
            >
              Annual
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5 lg:mt-12 lg:grid-cols-3">
          {/* Plan 1 */}
          <div className="flex flex-col h-fit justify-between p-8 shadow-2xl rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50">
            <div className="h-full">
              <div className="flex flex-col justify-between gap-3">
                <p className="text-xl font-medium tracking-tight text-white">
                  {" "}
                  Starter Pack{" "}
                </p>
                <p className="text-white">
                  <span className="text-2xl tracking-tight">
                    {annual ? "$10" : "$12"}
                  </span>
                  <span className="text-base font-medium">
                    /m
                    {annual && <span>(billed annually)</span>}
                  </span>
                </p>
              </div>
              <p className="mt-8 text-xs text-white/80">
                This plan is ideal for individual users and hobbyists who are
                looking for essential functionalities to support their projects.
              </p>
              <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  5 mb/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  75 pages/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  10 messages/Day
                </li>
                {/* <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Up to 3 PDFs
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Gpt-3.5-turbo model
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Test mode
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Doc summary
                </li> */}
              </ul>
              <div className="grid place-content-center">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-8 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-md hover:bg-blue-500 focus:bg-blue-700">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
          {/* Plan 2 */}
          <div className="flex flex-col h-fit justify-between p-8 shadow-2xl rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50">
            <div>
              <div className="flex flex-col justify-between gap-3">
                <p className="text-xl font-medium tracking-tight text-white">
                  {" "}
                  Standard Pack{" "}
                </p>
                <p className="text-white">
                  <span className="text-2xl tracking-tight">
                    {annual ? "$135" : "$20"}
                  </span>
                  <span className="text-base font-medium">
                    /m
                    {annual && <span>(billed annually)</span>}
                  </span>
                </p>
              </div>
              <p className="mt-8 text-xs text-white/80">
                This plan is ideal for individual users and hobbyists who are
                looking for essential functionalities to support their projects.
              </p>
              <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  5 mb/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  75 pages/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  10 messages/Day
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Up to 3 PDFs
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Gpt-3.5-turbo model
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Test mode
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Doc summary
                </li>
              </ul>
            </div>
            <div className="grid place-content-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-8 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-md hover:bg-blue-500 focus:bg-blue-700">
                Choose plan
              </button>
            </div>
          </div>
          {/* Plan 3 */}
          <div className="flex flex-col h-fit justify-between p-8 shadow-2xl rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50">
            <div>
              <div className="flex flex-col justify-between gap-3">
                <p className="text-xl font-medium tracking-tight text-white">
                  {" "}
                  Delux Pack{" "}
                </p>
                <p className="text-white">
                  <span className="text-2xl tracking-tight">
                    {annual ? "$200" : "$25"}
                  </span>
                  <span className="text-base font-medium">
                    /m
                    {annual && <span>(billed annually)</span>}
                  </span>
                </p>
              </div>
              <p className="mt-8 text-xs text-white/80">
                This plan is ideal for individual users and hobbyists who are
                looking for essential functionalities to support their projects.
              </p>
              <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  5 mb/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  75 pages/PDF
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  10 messages/Day
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  Up to 3 PDFs
                </li>
                <li className="inline-flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                  Gpt-3.5-turbo model
                </li>
              </ul>
            </div>
            <div className="grid place-content-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2 mt-8 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-md hover:bg-blue-500 focus:bg-blue-700">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
