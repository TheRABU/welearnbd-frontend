import CourseCard from "../../components/TopCourseCard/CourseCard";

const TopCourseSection = () => {
  return (
    <>
      <section className="py-6 sm:py-12 bg-[#FEFAF6] text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold text-black">
              See what you can learn with our Top courses
            </h2>
            <p className="font-serif text-sm text-gray-400">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCourseSection;
