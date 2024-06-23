import { useEffect, useState } from "react";
import CourseCard from "../../components/TopCourseCard/CourseCard";

const TopCourseSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const seeMore = () => {
      fetch("popularCourse.json")
        .then((res) => res.json())
        .then((data) => {
          const popularCourseData = data.filter((item) =>
            item.category.includes("popular")
          );
          setCourses(popularCourseData);
        });
    };
    seeMore();
  }, []);

  return (
    <>
      <section className="py-6 sm:py-12 bg-[#FEFAF6] text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold text-black">
              See what you can learn with our Top courses
            </h2>
            <p className="font-serif text-sm text-gray-400">
              These are the top rated courses
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((eachCourse) => (
              <CourseCard eachCourse={eachCourse} key={eachCourse._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCourseSection;
