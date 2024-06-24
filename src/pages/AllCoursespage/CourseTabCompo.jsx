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
    </>
  );
};

export default CourseTab;
