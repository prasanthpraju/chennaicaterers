import CateringSection from "../components/CateringSection";
import ClientReviews from "../components/ClientReviews";
import HeroSlider from "../components/HeroSlider";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyOurService from "../components/WhyOurService";

const home = () => {
  return (
    <div>
      <HeroSlider />
      <CateringSection />
      <HowItWorks/>
      <WhyChooseUs/>
      <WhyOurService/>
      <ClientReviews/>
    </div>
  );
};

export default home;