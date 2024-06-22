import Banner from "../../components/Banner/Banner";
import StatsComponent from "../../components/Stats/StatsComponent";
import OurWork from "../../components/landingUI/OurWork";
import Container from "../../container/Container";

const Home = () => {
  return (
    <>
      <div className="pt-6 md:pt-20">
        <Banner />
      </div>
      <div className="my-6 lg:my-20">
        <OurWork />
      </div>
      <Container>
        <div>
          <StatsComponent />
        </div>
      </Container>
    </>
  );
};

export default Home;
