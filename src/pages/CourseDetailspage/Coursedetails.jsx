import { Link } from "react-router-dom";
import useFetchSingleCourse from "../../hooks/useFetchSingleCourse";
import Accordian from "./Accordian";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { BsCart3 } from "react-icons/bs";

const Coursedetails = () => {
  const [details] = useFetchSingleCourse();
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();

  const handleAddToCart = async (details) => {
    if (user && user.email) {
      const cartItem = {
        cartItemId: details._id,
        email: user.email,
        price: details.price,
        level: details.level,
        teacherName: details.teacherName,
        courseName: details.courseName,
        courseImage: details.courseImage,
      };
      try {
        const res = await axiosSecure.post(`/api/v1/cart`, cartItem);
        if (res.data.payload) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You already have that item in the cart",
          });
        }
      } catch (error) {
        console.log("Error adding to cart: ", error.message);
        Swal.fire({
          title: "Error",
          text: "There was an error adding the item to your cart.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Please Login to add item to cart!",
        timer: 3000,
        icon: "warning",
      });
    }
  };
  return (
    <>
      <div className="h-full sm:px-2 pt-16 md:px-16 lg:px-32 md:pt-28 2xl:px-80 bg-[#ffffff]">
        <div>
          <h2 className="text-4xl text-center from-neutral-500 font-semibold">
            Details of {details.courseName}
          </h2>
        </div>

        <article className="sm:flex-row lg:flex justify-around items-start my-3 py-5 border-2 border-neutral-600 rounded-lg m-5">
          {/* COURSE INFO */}
          <div className="text-contents px-10 py-10 w-full lg:w-5/12 shrink-0">
            <h2 className="text-5xl text-neutral-700 font-semibold">
              {details.courseName}
            </h2>
            <p className="text-2xl">
              By <span className="font-semibold">{details.teacherName}</span>
            </p>
            <p className="text-xl font-sans">
              Level of difficulty: {details.level}
            </p>
            <p className="text-xl">$ {details.price}</p>
            {/* <div className="mt-5">
              <Link to={`/enroll/${details._id}`}>
                <button className="btn btn-secondary">Enroll Now</button>
              </Link>
            </div> */}

            <div className="mt-2">
              <Link
                onClick={() => handleAddToCart(details)}
                className="box-border relative inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <BsCart3 className="text-2xl mr-2" />
                  Add to Cart
                </span>
              </Link>
            </div>
          </div>
          {/* IMAGE */}
          <div className="image px-3 md:px-6 w-full lg:w-8/12 lg:max-w-fit overflow-hidden">
            <img
              className="object-cover rounded-xl w-full lg:max-h-[400px] lg:object-contain bg-slate-700"
              src={details.courseImage}
              alt=""
            />
          </div>
        </article>
        <aside className="px-6 mb-6">
          {/* COURSE SYLLABUS */}
          <p className="text-xl from-neutral-400 font-semibold">
            Course contents
          </p>
          <div className="border-2 border-neutral-600 rounded-xl p-3">
            {details.courseSyllabus?.map((item, idx) => (
              <Accordian key={idx} eachCourseSyllabus={item} />
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Coursedetails;
