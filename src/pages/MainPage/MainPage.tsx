import HeroSection from "../../components/MainPage/HeroSection";
import ReviewsSection from "../../components/MainPage/ReviewsSection/ReviewsSection";
import ScoreSection from "../../components/Global/ScoreSection/ScoreSection";
import TopBusinesses from "../../components/Global/TopBusinesses/TopBusinesses";

const MainPage = () => {
  return (
    <div className="pt-[75px]">
      <HeroSection />
      <ScoreSection />
      <TopBusinesses />
      <ReviewsSection />
    </div>
  );
};

export default MainPage;
