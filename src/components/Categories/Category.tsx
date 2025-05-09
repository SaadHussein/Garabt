import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Category = ({ index, title }: { index: number; title: string }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
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
        );
      }}
      className={`${
        index % 7 === 0
          ? "bg-[linear-gradient(to_right,_#d1cc84,_#da4b42)]"
          : index % 7 === 1
          ? "bg-[linear-gradient(to_right,_#79d6f4,_#a644cc)]"
          : index % 7 === 2
          ? "bg-[linear-gradient(to_right,_#5f9e89,_#d0af57)]"
          : index % 7 === 3
          ? "bg-[linear-gradient(to_right,_#ead59b,_#e372a2)]"
          : index % 7 === 4
          ? "bg-[linear-gradient(to_right,_#b583b8,_#746cc5)]"
          : index % 7 === 5
          ? "bg-[linear-gradient(to_right,_#81b0e1,_#689fb3)]"
          : index % 7 === 6
          ? "bg-[linear-gradient(to_right,_#39a692,_#93c89d)]"
          : "bg-teal-400"
      } relative px-4 py-8 cursor-pointer text-white font-semibold text-xl flex items-center justify-between w-full`}
    >
      <img
        className="absolute w-full h-full inset-0 object-cover opacity-35"
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
