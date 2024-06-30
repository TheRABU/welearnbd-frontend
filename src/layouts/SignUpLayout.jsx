import { Outlet } from "react-router-dom";
import FloatingNav from "../components/Navbar/FloatingNav";

const SignUpLayout = () => {
  return (
    <div>
      <FloatingNav />
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default SignUpLayout;
