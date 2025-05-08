import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Category = ({ index, title }: { index: number; title: string }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(
          "/categories/?category=" +
            title
              .split(" ")
              .map((word) => {
                if (word === "&") return "and";
                return word;
              })
              .join("_")
              .toLowerCase()
        )
      }
      className={`${
        index % 6 === 0
          ? "bg-red-400"
          : index % 6 === 1
          ? "bg-blue-400"
          : index % 6 === 2
          ? "bg-green-400"
          : index % 6 === 3
          ? "bg-yellow-400"
          : index % 6 === 4
          ? "bg-purple-400"
          : index % 6 === 5
          ? "bg-pink-400"
          : index % 5 === 0
          ? "bg-gray-400"
          : "bg-teal-400"
      } relative px-4 py-6 cursor-pointer text-white font-semibold text-xl flex items-center justify-between w-full`}
    >
      <img
        className="absolute w-full h-full inset-0 object-cover opacity-50"
        loading="lazy"
        src="/cairo.jpg"
        alt="background"
      />
      <p className="text-white z-10">{title}</p>
      <FaArrowCircleRight className="text-white z-10" />
    </div>
  );
};

export default Category;
