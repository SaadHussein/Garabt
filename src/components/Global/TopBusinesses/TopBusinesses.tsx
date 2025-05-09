import { FaFireFlameCurved } from "react-icons/fa6";
import Business from "./Business";

const TopBusinesses = () => {
  return (
    <div className="py-5 flex items-center justify-center flex-col w-full max-w-[1365px] mx-auto min-[1165px]:px-5">
      <div className="w-full px-5 flex items-center justify-center gap-2 bg-amber-300 py-3">
        <FaFireFlameCurved size={30} color="white" />
        <p className="font-bold text-2xl text-white">Top 3 Businesses</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Business index={0} />
        <Business index={1} />
        <Business index={2} />
      </div>
    </div>
  );
};

export default TopBusinesses;
