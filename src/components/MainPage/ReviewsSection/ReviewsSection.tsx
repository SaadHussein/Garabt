import { FaStar } from "react-icons/fa";
import ReviewItem from "./ReviewItem";

const ReviewsSection = () => {
  return (
    <div className="py-5 flex items-center justify-center flex-col w-full max-w-[1365px] mx-auto">
      <div className="w-full px-5 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <FaStar color="gold" size={28} />
          <h1 className="font-bold text-2xl max-[400px]:text-xl">
            Latest Reviews
          </h1>
        </div>
        <div>
          <button className="cursor-pointer bg-[linear-gradient(to_right,_#1190d1,_#9AC53F)] text-white hover:bg-green-600 duration-300 px-4 py-2 rounded-md font-semibold max-[400px]:text-sm">
            View All
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center min-[1165px]:px-5 mt-2.5">
        <ReviewItem index={0} />
        <ReviewItem index={1} />
        <ReviewItem index={2} />
      </div>
    </div>
  );
};

export default ReviewsSection;
