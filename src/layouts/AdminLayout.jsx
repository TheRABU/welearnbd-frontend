import { Outlet } from "react-router-dom";
import FloatingNav from "../components/Navbar/FloatingNav";
import LeftSideBar from "../components/AdminComponents/LeftSide";

const AdminLayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* <FloatingNav /> */}
        <div className="wrapper flex flex-grow overflow-hidden">
          <div className="w-3/12 bg-white h-full">
            <LeftSideBar />
          </div>
          <div className="w-9/12 overflow-auto bg-[#ffffff]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
