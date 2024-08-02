import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="w-full max-h-screen bg-[#FFFFFF]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
