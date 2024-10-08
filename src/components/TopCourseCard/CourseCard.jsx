import { Link } from "react-router-dom";

const CourseCard = ({ eachCourse }) => {
  const { _id, courseImage, courseName, teacherName, price } = eachCourse;
  return (
    // <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
    //   <img
    //     src="https://source.unsplash.com/random/300x300/?2"
    //     alt=""
    //     className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
    //   />
    //   <div className="flex flex-col justify-between p-6 space-y-8">
    //     <div className="space-y-2">
    //       <h2 className="text-3xl font-semibold tracking-wide">
    //         Donec lectus leo
    //       </h2>
    //       <p className="text-gray-100">
    //         Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
    //       </p>
    //     </div>
    //     <button
    //       type="button"
    //       className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
    //     >
    //       Read more
    //     </button>
    //   </div>
    // </div>
    <div className="bg-white rounded-xl shadow-xl p-2 transition-transform duration-300 transform hover:scale-105">
      <Link to={`/courseDetail/${_id}`}>
        <div className="relative overflow-hidden rounded-lg ">
          <img
            className="object-cover w-full md:h-36 "
            src={courseImage}
            alt="Product"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-4">{courseName}</h3>
        <p className="text-gray-500 text-sm mt-2">By {teacherName}</p>
        <p className="text-gray-500 text-sm mt-2">$ {price}</p>
      </Link>
    </div>
  );
};

export default CourseCard;
