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
const Home = () => {
  return (
    <>
      <div className="">
        <Banner />
      </div>
      <Container>
        <div>
          <AnotherFeature />
        </div>
      </Container>
      <div>
        <TopCourseSection />
      </div>
      <Container>
        <div className="my-10">
          <SectionTitle heading={"Our Partners are"} />
          <CompanyGrid />
        </div>
      </Container>

      <div>
        <AnotherSection />
      </div>

      <div>
        <PricingSection />
      </div>
      <div className="my-6 lg:my-20">
        <OurWork />
      </div>

      <div>
        <StatsComponent />
      </div>
    </>
  );
};

export default Home;
