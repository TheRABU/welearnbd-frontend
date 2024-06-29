import AllCourseCard from "./AllCourseCard";

const CourseTab = ({ items, recommendation }) => {
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
      <div className="bg-slate-50 grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 mx-4 md:mx-0 md:px-0">
        {items.map((singleItem, idx) => (
          <AllCourseCard courseItem={singleItem} key={idx} />
        ))}
      </div>
      {/* RECOMMENDED COURSES  */}
      {recommendation && (
        <div>
          <h3 className="text-3xl font-semibold text-black text-left ml-5 lg:text-center">
            Recommended Courses{" "}
          </h3>
          <div className="grid bg-blue-600 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 mx-4 md:mx-0 md:px-0">
            {recommendation?.slice(0, 3).map((eachRecommend) => (
              <AllCourseCard
                key={eachRecommend._id}
                courseItem={eachRecommend}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CourseTab;
