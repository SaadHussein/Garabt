import { FaFireFlameCurved } from "react-icons/fa6";
import Business from "./Business";

const TopBusinesses = () => {
  return (
    <div className="py-5 flex items-center justify-center flex-col w-full max-w-[1365px] mx-auto">
      <div className="w-full px-5 flex items-center justify-center gap-2">
        <FaFireFlameCurved size={30} color="red" />
        <p className="font-bold text-2xl">Top 3 Businesses</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-5 mt-2.5">
        <Business index={0} />
        <Business index={1} />
        <Business index={2} />
      </div>
    </div>
  );
};

export default TopBusinesses;
