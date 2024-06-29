import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("clientReviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <>
      {/* <section className="mt-8 mx-auto py-10 bg-[#ffffff] text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:ml-40 lg:justify-evenly lg:px-40">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                    <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-violet-400"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {review.review}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-violet-400"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.ratings}
                      readOnly
                    />
                    <p className="text-xl font-semibold leading-tight">
                      {review.clientName}
                    </p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      {/* ANOTHER SECTION */}

      {/* ANOTHER 2 */}
      <div className="container mx-auto lg:px-36">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full md:w-8/12 lg:w-[850px] mx-auto">
                <div className="relative">
                  <div className="flex justify-center items-center h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                    <div className="px-8">
                      <p className="text-lg font-medium text-white mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8 text-white"
                        >
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        {review.review}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="absolute right-0 w-8 h-8 text-white"
                        >
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                      </p>
                      <Rating
                        style={{
                          maxWidth: 180,
                          textAlign: "center",
                          padding: 20,
                        }}
                        value={review.ratings}
                        readOnly
                      />
                      <div className="mt-4">
                        <div className="text-center">
                          <p className="text-white font-medium">
                            - {review.clientName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
