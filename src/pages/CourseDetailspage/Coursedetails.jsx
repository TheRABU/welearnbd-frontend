import useFetchSingleCourse from "../../hooks/useFetchSingleCourse";
import Accordian from "./Accordian";

const Coursedetails = () => {
  const [details] = useFetchSingleCourse();
  return (
    <>
      <div className="h-full sm:px-2 pt-16 md:px-16 lg:px-32 md:pt-28 2xl:px-80 bg-[#ffffff]">
        <div>
          <h2 className="text-4xl text-center from-neutral-500 font-semibold">
            Details of {details.courseName}
          </h2>
        </div>

        <article className="sm:flex-row lg:flex justify-around items-start py-5">
          {/* COURSE INFO */}
          <div className="text-contents px-10 py-10 w-full lg:w-5/12 shrink-0 text-justify">
            <h2 className="text-5xl text-neutral-700 font-semibold">
              {details.courseName}
            </h2>
            <p className="text-2xl">
              By <span className="font-semibold">{details.teacherName}</span>
            </p>
            <p className="text-xl font-sans">
              Level of difficulty: {details.level}
            </p>
            <p className="text-xl">$ {details.price}</p>
          </div>
          {/* IMAGE */}
          <div className="image px-3 md:px-6 w-full h-full lg:min-h-max lg:w-8/12 lg:max-w-fit overflow-hidden">
            <img
              className="object-cover rounded-xl w-full h-full bg-slate-700"
              src={details.courseImage}
              alt=""
            />
          </div>
        </article>
        <aside className="px-6">
          {/* COURSE SYLLABUS */}
          <p className="text-xl from-neutral-400 font-semibold">
            Course contents
          </p>
          <div className="">
            {details.courseSyllabus?.map((item) => (
              <Accordian key={details._id} eachCourseSyllabus={item} />
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Coursedetails;
