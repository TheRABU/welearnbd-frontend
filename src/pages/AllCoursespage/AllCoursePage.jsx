import { useEffect, useState } from "react";
import "./allCourse.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabCSS.css";
import useFetchCourse from "../../hooks/useFetchCourse";
import CourseTab from "./CourseTabCompo";
const AllCoursePage = () => {
  const [text] = useTypewriter({
    words: ["Unlock your", "true potential today!", "and learn new skills"],
    loop: 5,
  });

  const [tabIndex, setTabIndex] = useState(0);
  // a array of categories from which compare the categories selected
  const categories = [
    "web development",
    "digital marketing",
    "app development",
    "Learn Javascript",
    "React",
  ];

  // fetch the courses based on the category
  const [category] = useFetchCourse();

  const webDev = category.filter((item) =>
    item.category.includes("web development")
  );
  const marketing = category.filter((item) =>
    item.category.includes("marketing")
  );

  return (
    <>
      <div className="backgroundImg h-screen bg-fixed">
        <div className="flex flex-row h-full items-center justify-center">
          <h3 className="text-xl lg:text-7xl text-center w-4/6 font-semibold text-white">
            {text}
            <Cursor cursorColor="white" />
          </h3>
        </div>
      </div>
      {/* ALL COURSES BASED ON CATEGORY */}
      <div className="border-blue-500 border-2 p-4 mx-3 lg:mx-20 md:p-10 m-3 md:m-10 rounded-md bg-[#ffffff] h-full ">
        {/* TABS */}
        <div className="flex items-center my-6 -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-100">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className={"border-b-4 border-gray-700 text-gray-400"}>
              <Tab>Web development</Tab>
              <Tab>Marketing</Tab>
              <Tab>Learn App development</Tab>
              <Tab>Video editing</Tab>
              <Tab>Youtube</Tab>
            </TabList>
            <TabPanel>
              <CourseTab items={webDev} />
            </TabPanel>
            <TabPanel>
              <CourseTab items={marketing} />
            </TabPanel>
          </Tabs>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AllCoursePage;
