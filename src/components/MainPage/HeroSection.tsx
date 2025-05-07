import useStore from "../../store";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const counrty = useStore((state) => state.country);
  return (
    <div className="h-[57.5vh] max-[450px]:h-[35vh] relative">
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-50"></div>
      <img
        src="/cairo.jpg"
        alt="Hero Section Image"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex flex-col items-center justify-center mx-[20px] h-full">
        <h1 className="text-white text-5xl text-center font-bold z-50 max-[515px]:text-4xl max-[400px]:text-[25px]">
          Welcome to GARAPT
        </h1>
        <p className="text-white text-lg mt-4 z-50 text-center max-[515px]:text-[15px]">
          Your go-to platform for discovering and reviewing businesses in{" "}
          {counrty}.
        </p>
        <div className="mt-6 z-50 flex items-center justify-center max-w-[450px] w-[100%]">
          <label className="text-white text-lg" htmlFor="search" />
          <input
            type="text"
            id="search"
            placeholder="Search for businesses..."
            className="px-4 py-2  focus:outline-none focus:ring-2 focus:ring-green-500 bg-white w-[100%]"
          />
          <div className="bg-green-400 px-4 py-2 text-white cursor-pointer duration-300 hover:bg-green-600">
            <FaSearch size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
