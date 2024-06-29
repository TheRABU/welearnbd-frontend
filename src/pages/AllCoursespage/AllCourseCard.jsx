const AllCourseCard = ({ courseItem }) => {
  const { courseName, teacherName, price, level, courseImage } = courseItem;
  return (
    <div className="bg-white rounded-xl shadow-xl p-2 transition-transform duration-300 transform hover:scale-105">
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
    </div>
  );
};

export default AllCourseCard;
