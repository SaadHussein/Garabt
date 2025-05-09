import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const Filters = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-90px 0px 0px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
      <div ref={ref} className="relative bottom-[0px]"></div>
      <div
        className={`${
          isSticky ? "fixed top-[75px] left-0 right-0 z-50" : "relative"
        } bg-white`}
      >
        <div className="flex items-center gap-0.5">
          <button className="flex-1 cursor-pointer bg-gray-700 duration-300 hover:bg-gray-800 py-4 text-white font-semibold text-lg max-[500px]:text-[14px]">
            Filters
          </button>
          <button
            onClick={() => {
              navigate("/categories");
            }}
            className="flex-1 cursor-pointer bg-gray-700 duration-300 hover:bg-gray-800 py-4 text-white font-semibold text-lg max-[500px]:text-[14px]"
          >
            Category
          </button>
          <button className="flex-1 cursor-pointer bg-gray-700 duration-300 hover:bg-gray-800 py-4 text-white font-semibold text-lg max-[500px]:text-[14px]">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
