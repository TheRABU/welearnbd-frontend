import { Outlet } from "react-router-dom";
import FloatingNav from "../components/Navbar/FloatingNav";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div>
        <FloatingNav />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
