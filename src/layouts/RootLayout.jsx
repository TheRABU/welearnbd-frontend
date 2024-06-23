import { Outlet } from "react-router-dom";
import FloatingNav from "../components/Navbar/FloatingNav";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div>
        <FloatingNav />
      </div>
      <div className="h-full pt-6 md:pt-20">
        <Outlet />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
