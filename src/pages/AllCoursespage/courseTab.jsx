const courseTab = ({ courseItem }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white rounded-xl shadow-xl p-2 transition-transform duration-300 transform hover:scale-105">
          <div className="relative overflow-hidden rounded-lg ">
            <img
              className="object-cover w-full h-36 "
              src="example.image"
              alt="Product"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-4">Course Title</h3>
          <p className="text-gray-500 text-sm mt-2">Teacher Teacher name</p>
          <p className="text-gray-500 text-sm mt-2">$ </p>
        </div>
      </div>
    </>
  );
};

export default courseTab;
