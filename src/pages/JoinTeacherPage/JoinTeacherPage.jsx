import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth.js";
import axios from "axios";
import { axiosPublic } from "../../hooks/useAxiosPublic.jsx";
const JoinTeacherPage = () => {
  const [categories, setCategories] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/courses`
        );
        const filteredCategories = response.data.map((item) => item.category);
        setCategories(filteredCategories);
      } catch (error) {
        console.log(error.message);
        throw new error();
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const category = form.category.value;
    const experience = form.experience.value;

    const newRequest = { name, email, category, experience };
    const response = await axiosPublic.post(
      "/api/v1/teachers/requests",
      newRequest
    );
    console.log(response.data);
    Swal.fire({
      title: "Good job!",
      text: "You request to become a teacher is submitted wait for reply from admin",
      icon: "success",
    });
    form.reset();
  };

  return (
    <>
      <div className="pt-20 md:pt-28 bg-gray-900">
        <h2 className="text-3xl text-center text-white">
          Join Today as a teacher
        </h2>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
            Services
          </h2>
          <p className="mb-12 text-lg text-gray-500">
            Here is a few of the awesome Services we provide.
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        DAPP Development
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A decentralized application (dapp) is an application built
                      on a decentralized network that combines a smart contract
                      and a frontend user interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Web 3.0 Development
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Web 3.0 is the third generation of Internet services that
                      will focus on understanding and analyzing data to provide
                      a semantic web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Project Audit
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A Project Audit is a formal review of a project, which is
                      intended to assess the extent up to which project
                      management standards are being upheld.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Hacking / RE
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A security hacker is someone who explores methods for
                      breaching defenses and exploiting weaknesses in a computer
                      system or network.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Bot/Script Development
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Bot development frameworks were created as advanced
                      software tools that eliminate a large amount of manual
                      work and accelerate the development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Joining FORM  */}
      <div className="wrapper-form">
        <div className="bg-white border-4 rounded-lg shadow relative m-10">
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="user-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    disabled={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="user-email"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Your email"
                    defaultValue={user?.email}
                    disabled={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Category
                  </label>
                  <select
                    className="select select-info w-full max-w-xs"
                    id="category"
                    name="category"
                    required={true}
                  >
                    <option value="" selected>
                      Select Category
                    </option>
                    {categories.map((category, idx) => (
                      <option value={category} key={idx}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="text-lg font-medium text-gray-900 block mb-2"
                  >
                    Chose your experience level
                  </label>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Experienced</span>
                      <input
                        required={true}
                        type="radio"
                        name="experience"
                        value="expert"
                        className="radio checked:bg-red-500"
                        defaultChecked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Mid Level</span>
                      <input
                        type="radio"
                        name="experience"
                        value="mid"
                        className="radio checked:bg-blue-500"
                        defaultChecked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Beginner</span>
                      <input
                        type="radio"
                        name="experience"
                        value="beginner"
                        className="radio checked:bg-teal-500"
                        defaultChecked
                      />
                    </label>
                  </div>
                </div>
                {/* <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="$2300"
                    required=""
                  />
                </div> */}
                {/* <div className="col-span-full">
                  <label
                    htmlFor="product-details"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Product Details
                  </label>
                  <textarea
                    id="product-details"
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Details"
                  ></textarea>
                </div> */}
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinTeacherPage;
