const FAQsection = () => {
  return (
    <>
      <section className="bg-white text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Do we provide support and guidelines?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Yes we have a dedicated team to support any confusion.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Do we take VAT on our purchase?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Governmental rates are applied. (if your country charges tax
                then that amount will be taken)
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Can I get refund money after I enroll any course?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                From 2022 we are no longer keeping the refund money option
                available.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQsection;
