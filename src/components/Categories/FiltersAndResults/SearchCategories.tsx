import { FaSearch } from "react-icons/fa";

const SearchCategories = () => {
  return (
    <div className="w-full h-[25vh] relative">
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-50"></div>
      <img
        src="/cairo.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex flex-col items-center justify-center mx-[20px] h-full">
        <h1 className="text-white text-3xl text-center font-bold z-50 max-[515px]:text-2xl max-[400px]:text-[20px]">
          How was your experience?
        </h1>

        <div className="mt-6 z-50 flex items-center justify-center max-w-[450px] w-[100%]">
          <label className="text-white text-lg" htmlFor="search" />
          <input
            type="text"
            id="search"
            placeholder="Find what you want to review..."
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

export default SearchCategories;
