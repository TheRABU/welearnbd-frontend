import Banner from "../../components/Banner/Banner";
import SectionTitle from "../../components/SectionTitle";
import StatsComponent from "../../components/Stats/StatsComponent";
import OurWork from "../../components/landingUI/OurWork";
import Container from "../../container/Container";
import CompanyGrid from "../../components/landingUI/CompanyIconsGrid/CompanyGrid";
import svgBackground from "../../components/landingUI/wave.svg";
import TopCourseSection from "./TopCourseSection";
import AnotherSection from "../../components/landingUI/JustAnotherSection/AnotherSection";
import PricingSection from "./PricingSection";
import AnotherFeature from "./AnotherFeature";

import JoinTeacherSection from "./JoinTeacherSection";
import FAQsection from "./FAQsection";
import Testimonial from "./Testimonial/Testimonial";
import CustomFeatured from "../../components/landingUI/FeaturedSectionCustom/CustomFeatured";
const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="">
        <Banner />
      </div>
      {/* Promotional boxes */}
      <Container>
        <div>
          <AnotherFeature />
        </div>
      </Container>
      {/* Top Courses Section */}
      <div>
        <TopCourseSection />
      </div>
      {/* Custom Photo and text featured section */}
      <div className="mt-0">
        <CustomFeatured />
      </div>
      {/* Services */}
      <div>
        <AnotherSection />
      </div>
      {/* Statistics Section */}
      <div className="py-20">
        <StatsComponent />
      </div>
      {/* Pricing section */}
      <div>
        <PricingSection />
      </div>
      {/* Brands Collaboration/Partners section */}
      <Container>
        <div className="mt-10">
          <SectionTitle heading={"Our Partners are"} />
          <CompanyGrid />
        </div>
      </Container>
      {/* Join as a Teacher section */}
      <div>
        {/* <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="1"
              d="M0,288L48,261.3C96,235,192,181,288,138.7C384,96,480,64,576,85.3C672,107,768,181,864,213.3C960,245,1056,235,1152,192C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div> */}
        <div className="py-10">
          <JoinTeacherSection />
        </div>
        {/* <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="1"
              d="M0,224L34.3,213.3C68.6,203,137,181,206,149.3C274.3,117,343,75,411,101.3C480,128,549,224,617,250.7C685.7,277,754,235,823,192C891.4,149,960,107,1029,117.3C1097.1,128,1166,192,1234,192C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
      {/* Another Promotional section */}
      <div className="my-6">
        <OurWork />
      </div>
      {/* F.A.Q Section */}
      <div>
        <FAQsection />
      </div>
      {/* Testimonial/ Clients review */}
      <div>
        <Container>
          <Testimonial />
        </Container>
      </div>
    </>
  );
};

export default Home;
