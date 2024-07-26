import { Link } from "react-router-dom";
import useFetchSingleCourse from "../../hooks/useFetchSingleCourse";
import Accordian from "./Accordian";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Coursedetails = () => {
  const [details] = useFetchSingleCourse();
  const { user } = useAuth();

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
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/cart`,
          cartItem
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
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

        <article className="sm:flex-row lg:flex justify-around items-start my-3 py-5 border-2 border-neutral-600 rounded-lg">
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
            <div className="mt-5">
              <Link to={`/enroll/${details._id}`}>
                <button className="btn btn-secondary">Enroll Now</button>
              </Link>
            </div>
            <div className="mt-5">
              <Link>
                <button
                  onClick={() => handleAddToCart(details)}
                  className="btn bg-orange-500 border-b-8 border-b-black"
                >
                  Add to cart
                </button>
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
        <aside className="px-6">
          {/* COURSE SYLLABUS */}
          <p className="text-xl from-neutral-400 font-semibold">
            Course contents
          </p>
          <div className="">
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
