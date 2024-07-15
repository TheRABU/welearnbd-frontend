import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const courseDetail = useLoaderData();
  const { courseName, courseImage, price, level, teacherName, _id } =
    courseDetail;
  const { user } = useAuth();
  console.log(courseDetail);
  return (
    <>
      <div className="border-blue-500 border-2 p-4 mx-3 lg:mx-20 md:p-10 m-3 md:m-10 rounded-md bg-[#ffffff] h-full ">
        <div className="flex-row  lg:flex items-center justify-center py-20 px-6 md:px-20 mx-auto space-x-8">
          {/* CARD */}
          <div className="parent-div h-auto max-w-md">
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
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  disabled={true}
                  defaultValue={user?.displayName}
                  placeholder="Enter your Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled={true}
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      required={true}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                  Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        required={true}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        required={true}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        required={true}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="postCode"
                        id="post-code"
                        placeholder="Post Code"
                        required={true}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-[#4C3BCF] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Enroll Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
