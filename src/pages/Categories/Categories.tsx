import { useSearchParams } from "react-router";
import CategoryList from "../../components/Categories/CategoryList";
import SearchCategories from "../../components/Categories/FiltersAndResults/SearchCategories";
import Filters from "../../components/Categories/FiltersAndResults/Filters";
import Results from "../../components/Categories/FiltersAndResults/Results";
import TopBusinesses from "../../components/Global/TopBusinesses/TopBusinesses";
import ScoreSection from "../../components/Global/ScoreSection/ScoreSection";
import ReviewsSection from "../../components/Categories/CategoryReviews/ReviewsSection";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const myParam = searchParams.get("category");

  return (
    <div className="pt-[75px]">
      {myParam === null ? (
        <CategoryList />
      ) : (
        <>
          <SearchCategories />
          <Filters />
          <ScoreSection />
          <TopBusinesses />
          <ReviewsSection />
          <div className="max-w-[1365px] mx-auto w-full my-5 min-[1165px]:px-5">
            <Results />
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
