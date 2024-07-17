import { Outlet } from "react-router-dom";

import LeftSideUserBar from "../components/UserComponents/LeftSideUserBar";
import MobileLeftSideBar from "../components/AdminComponents/MobileLeftSide";
const UserLayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* <FloatingNav /> */}
        <div className="wrapper flex flex-grow overflow-hidden">
          <div className="hidden lg:block w-3/12 bg-white h-full">
            <LeftSideUserBar />
          </div>
          <div className="block lg:hidden lg:h-full">
            <MobileLeftSideBar />
          </div>
          <div className="w-full lg:w-9/12 overflow-auto bg-[#ffffff]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
