import { useState } from "react";
import "./allCourse.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabCSS.css";
const AllCoursePage = () => {
  const [text] = useTypewriter({
    words: ["Unlock your", "true potential today!", "and learn new skills"],
    loop: 5,
  });

  const [tabIndex, setTabIndex] = useState(0);

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
      <div className="border-blue-500 mx-auto border-2 p-4 md:p-10 m-3 md:m-10 rounded-xl bg-[#ffffff] h-full ">
        {/* TABS */}
        <div className="flex items-center my-6 -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-100">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList
              className={
                "flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-700 text-gray-400"
              }
            >
              <Tab>Web development</Tab>
              <Tab>Learn React</Tab>
              <Tab>Learn App development</Tab>
              <Tab>Video editing</Tab>
              <Tab>Youtube</Tab>
            </TabList>
            <TabPanel className={"my-6"}>
              <div className="max-w-xs p-6 rounded-md shadow-xl dark:bg-gray-50 dark:text-gray-900">
                <img
                  src="https://source.unsplash.com/random/300x300/?1"
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                    Quisque
                  </span>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Nam maximus purus
                  </h2>
                </div>
                <p className="dark:text-gray-800">
                  Mauris et lorem at elit tristique dignissim et ullamcorper
                  elit. In sed feugiat mi. Etiam ut lacinia dui.
                </p>
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AllCoursePage;
