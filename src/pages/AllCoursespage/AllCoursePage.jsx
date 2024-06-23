import { useState } from "react";

const AllCoursePage = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <>
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
    </>
  );
};

export default AllCoursePage;
