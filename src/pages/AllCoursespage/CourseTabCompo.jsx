import AllCourseCard from "./AllCourseCard";

const CourseTab = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <h1 className="text-4xl text-center font-black">
          Sorry no items available at the moment
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-200 grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 mx-4 md:mx-0 md:px-0">
        {items.map((singleItem, idx) => (
          <AllCourseCard courseItem={singleItem} key={idx} />
        ))}
      </div>
      {/* RECOMMENDED COURSES  */}
      <div>
        <h3 className="text-3xl font-semibold text-black text-left ml-5 lg:text-center">
          Recommended Courses{" "}
        </h3>
        <div className="grid bg-blue-600 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 mx-4 md:mx-0 md:px-0">
          <div className="bg-white rounded-xl shadow-xl p-2 transition-transform duration-300 transform hover:scale-105">
            <div className="relative overflow-hidden rounded-lg ">
              <img
                className="object-cover w-full md:h-36 "
                src="image"
                alt="Product"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-4">Title</h3>
            <p className="text-gray-500 text-sm mt-2">Teacher Teacher name</p>
            <p className="text-gray-500 text-sm mt-2">$ </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTab;
