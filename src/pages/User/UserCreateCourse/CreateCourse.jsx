import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const CreateNewCourse = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const [categories, setCategories] = useState([]);
  const imgBBapikey = import.meta.env.VITE_IMGBB_API_KEY;
  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imgBBapikey}`;

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
    const teacherName = user?.displayName;
    const teacherEmail = user?.email;
    const courseName = form.courseName.value;
    const category = form.category.value;
    const price = form.price.value;
    const level = form.level.value;
    const image = form.image.files[0];
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    try {
      const imageResponse = await axios.post(imageHostingApi, formData);
      const imageUrl = imageResponse.data.data.display_url;

      const newCourse = {
        courseName,
        courseImage: imageUrl,
        teacherName,
        teacherEmail,
        category,
        price,
        level,
      };
      const response = await axiosSecure.post(`/api/v1/courses`, newCourse);
      if (response.data.payload) {
        toast.success("Course created successfully");
        form.reset();
      } else {
        toast.error("Failed to create course");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to upload image or create course");
    }
  };

  return (
    <>
      <div className="wrapper-form h-screen mt-8 ">
        <div className="bg-white border-4 rounded-lg shadow relative m-10">
          <div>
            <h2 className="text-3xl text-center mt-5">Create New Course</h2>
          </div>
          <div className="p-6 my-12 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    name="teacherName"
                    id="user-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    disabled={true}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Course-name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Course Name
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    id="user-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Course Tile"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Course Category
                  </label>
                  <select
                    className="select select-info w-full max-w-xs"
                    id="category"
                    name="category"
                    required={true}
                    defaultValue="default"
                  >
                    <option value="default" disabled>
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
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Course Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    required
                  />
                </div>
                {/* <div className="col-span-full">
                  <label
                    htmlFor="product-details"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Course Description
                  </label>
                  <textarea
                    id="product-details"
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Details"
                  ></textarea>
                </div> */}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-lg font-medium text-gray-900 block mb-2"
                >
                  Choose the level of difficulty of your course
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Advanced</span>
                    <input
                      required={true}
                      type="radio"
                      name="level"
                      value="advanced"
                      className="radio checked:bg-red-500"
                      defaultChecked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Intermediate</span>
                    <input
                      type="radio"
                      name="level"
                      value="intermediate"
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
                      name="level"
                      value="beginner"
                      className="radio checked:bg-teal-500"
                      defaultChecked
                    />
                  </label>
                </div>
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

export default CreateNewCourse;
