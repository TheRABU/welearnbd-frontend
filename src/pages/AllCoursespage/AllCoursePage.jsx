import "./allCourse.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
const AllCoursePage = () => {
  const [text] = useTypewriter({
    words: ["Unlock your", "true potential today!", "and learn new skills"],
    loop: 5,
  });
  return (
    <>
      <div className="backgroundImg h-screen bg-fixed">
        <div className="flex h-full items-center justify-center">
          <h3 className="text-xl lg:text-5xl text-center w-4/6 font-semibold text-white">
            {text}
            <Cursor cursorColor="white" />
          </h3>
        </div>
      </div>
    </>
  );
};

export default AllCoursePage;
