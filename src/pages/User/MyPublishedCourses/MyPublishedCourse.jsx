import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const MyPublishedCourse = () => {
  const [myCourses, setMyCourses] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();

  useEffect(() => {
    const fetchAllCoursesPublishedByUser = async () => {
      try {
        const res = await axiosSecure.get(
          `/api/v1/courses/myPublished/${user?.email}`
        );
        if (res.data.payload && res.data.payload.length > 0) {
          toast.success(`${res.data.message}`);
          setMyCourses(res.data.payload);
        } else {
          toast.error("Could not get any course for your published course!");
        }
      } catch (error) {
        console.log(error.message);
        throw new error();
      }
    };
    fetchAllCoursesPublishedByUser();
  }, [axiosSecure, user?.email]);

  const handleDeleteCourse = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/api/v1/courses/myPublished/${id}`
          );
          if (res.data.payload) {
            setMyCourses((prevCourses) =>
              prevCourses.filter((course) => course._id !== id)
            );
            toast.success("Course deleted successfully!");
          }
        } catch (error) {
          console.log(error.message);
          toast.error("Failed to delete the course.");
        }
      }
    });
  };

  return (
    <>
      <div className="gap-y-6">
        <h2 className="text-2xl text-center font-semibold text-neutral-700 mt-10">
          My Published Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Price</th>
                <th>Difficulty level</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {myCourses.length > 0 &&
                myCourses.map((eachCourse) => (
                  <tr key={eachCourse._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={eachCourse.courseImage}
                              alt="Course Image"
                            />
                          </div>
                        </div>
                        <div className="font-bold">{eachCourse.courseNmae}</div>
                      </div>
                    </td>
                    <td>$ {eachCourse.price}</td>
                    <td>{eachCourse.level}</td>
                    <td>{eachCourse.category}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteCourse(eachCourse._id)}
                        className="btn bg-red-600 text-white hover:bg-red-500"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Toaster />
      </div>
      {/* IF NO DATA FOUND */}
      <div className="">
        <h2 className="text-4xl text-center bg-transparent my-6">
          Sorry could not find any courses which you may have published.{" "}
        </h2>
        <div className="w-full max-h-min">
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-vector/404-error-page-found_24908-59517.jpg?t=st=1722528203~exp=1722531803~hmac=f2ae14c5344321d889fce9ca61afbc06bfa3f7af01b0ac1c8249537c6e49f8c7&w=740"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MyPublishedCourse;
