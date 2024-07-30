import { useEffect, useState } from "react";
import CourseCard from "../../components/TopCourseCard/CourseCard";
import axios from "axios";

const TopCourseSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/courses`
        );

        const filteredPopularCourses = response.data.filter((item) =>
          item.category.includes("popular")
        );
        setCourses(filteredPopularCourses);
      } catch (error) {
        console.log(error.message);
        throw new error();
      }
    };
    fetchCourses();
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
            {courses.slice(0, 4).map((eachCourse) => (
              <CourseCard eachCourse={eachCourse} key={eachCourse._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCourseSection;
