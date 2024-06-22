import { Outlet } from "react-router-dom";
import FloatingNav from "../components/Navbar/FloatingNav";

const RootLayout = () => {
  return (
    <div>
      <div>
        <FloatingNav />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
