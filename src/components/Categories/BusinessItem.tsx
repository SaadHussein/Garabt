import { FaDollarSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AnimatedStars from "../Global/AnimatedStars";

const BusinessItem = ({ index }: { index: number }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`my-1 w-full px-2 min-[1165px]:px-4 py-3 ${
        index % 2 !== 0 ? "bg-green-400" : "bg-blue-400"
      } rounded-md`}
    >
      <div className="flex items-center justify-between w-full h-full gap-6 max-[400px]:gap-3">
        <div>
          <img
            src="/bmwLogo.jpg"
            alt="company logo"
            className="rounded-md w-14 h-14"
          />
        </div>
        <div className="flex flex-col items-start justify-start flex-1 w-full h-full">
          <span className="text-white text-[12px] font-semibold">
            Automatives
          </span>
          <h2 className="text-white font-semibold text-[16px] min-[1165px]:text-[18px]">
            BMW Cars
          </h2>
          <p className="text-[14px] font-medium min-[1165px]:text-[16px] text-white">
            Nasr-City, Cairo, Egypt
          </p>
          <div className="flex items-center justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <p className="font-medium text-white max-[500px]:text-[12px]">
                0.00
              </p>
              <AnimatedStars
                delay={300}
                rating={0}
                numberOfStars={5}
                size={width >= 500 ? 16 : 12}
              />
            </div>
            <span className="text-white font-medium"> - </span>
            <div className="flex items-center justify-start gap-[1px]">
              <FaDollarSign color="white" size={width >= 500 ? 18 : 14} />
              <FaDollarSign color="white" size={width >= 500 ? 18 : 14} />
              <FaDollarSign color="white" size={width >= 500 ? 18 : 14} />
            </div>
            <span className="text-white font-medium"> - </span>
            <p className="font-medium text-white max-[500px]:text-[12px]">
              0 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
