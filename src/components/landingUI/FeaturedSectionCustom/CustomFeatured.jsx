import studentImage from "../../landingUI/std2.avif";
import "./feature.css";
const CustomFeatured = () => {
  return (
    <>
      <div className="featured-div h-screen mt-0 py-30 px-6 lg:px-36 xl:px-56 bg-fixed block lg:flex items-center justify-between">
        <div className="w-full py-4 lg:py-0 md:w-2/4 lg:w-4/6 xl:w-3/6">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={studentImage}
            alt=""
          />
        </div>
        <div className="flex-grow flex-col items-center px-16 py-10">
          <div className="text-contents py-6">
            <h2 className="text-xl text-white lg:text-5xl">
              Our students are world wide
            </h2>
            <p className="text-md lg:text-xl text-gray-300 font-semibold">
              Our students have been into industries all over the world. We
              proudly make them our alumni.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFeatured;
