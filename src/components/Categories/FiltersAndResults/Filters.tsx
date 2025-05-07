import { useNavigate } from "react-router";

const Filters = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-0.5">
      <button className="flex-1 cursor-pointer bg-green-400 duration-300 hover:bg-green-600 py-4 text-white font-semibold text-lg">
        Filters
      </button>
      <button
        onClick={() => {
          navigate("/categories");
        }}
        className="flex-1 cursor-pointer bg-green-400 duration-300 hover:bg-green-600 py-4 text-white font-semibold text-lg"
      >
        Category
      </button>
      <button className="flex-1 cursor-pointer bg-green-400 duration-300 hover:bg-green-600 py-4 text-white font-semibold text-lg">
        Reset
      </button>
    </div>
  );
};

export default Filters;
