import AllCourseCard from "./AllCourseCard";

const CourseTab = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {items.map((singleItem, idx) => (
          <AllCourseCard courseItem={singleItem} key={idx} />
        ))}
      </div>
    </>
  );
};

export default CourseTab;
