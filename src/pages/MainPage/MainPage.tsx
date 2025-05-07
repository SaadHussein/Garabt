import HeroSection from "../../components/MainPage/HeroSection";
import ReviewsSection from "../../components/MainPage/ReviewsSection/ReviewsSection";
import ScoreSection from "../../components/MainPage/ScoreSection/ScoreSection";
import TopBusinesses from "../../components/MainPage/TopBusinesses/TopBusinesses";

const MainPage = () => {
  return (
    <div className="pt-[75px]">
      <HeroSection />
      <ScoreSection />
      <ReviewsSection />
      <TopBusinesses />
    </div>
  );
};

export default MainPage;
