import Banner from "../../components/Banner/Banner";
import SectionTitle from "../../components/SectionTitle";
import StatsComponent from "../../components/Stats/StatsComponent";
import OurWork from "../../components/landingUI/OurWork";
import Container from "../../container/Container";
import CompanyGrid from "../../components/landingUI/CompanyIconsGrid/CompanyGrid";
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
      <div className=" pt-6 md:pt-20">
        <Banner />
      </div>
      {/* Promotional boxes */}
      <Container>
        <div>
          <AnotherFeature />
        </div>
      </Container>
      {/* Top Courses Section */}
      <div id="topCourses">
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
        <div className="py-10">
          <JoinTeacherSection />
        </div>
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
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
