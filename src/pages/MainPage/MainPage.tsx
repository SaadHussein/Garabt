import HeroSection from "../../components/MainPage/HeroSection";
import ReviewsSection from "../../components/MainPage/ReviewsSection/ReviewsSection";
import ScoreSection from "../../components/MainPage/ScoreSection/ScoreSection";

const MainPage = () => {
  return (
    <div className="pt-[75px]">
      <HeroSection />
      <ScoreSection />
      <ReviewsSection />
    </div>
  );
};

export default MainPage;
