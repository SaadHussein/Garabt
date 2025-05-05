import { useCallback, useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaCompass } from "react-icons/fa6";
import useStore from "../../store";

const BottomHeader = () => {
  const breakPoint = 1165;
  const startYRef = useRef<number | null>(null);
  const [showElement, setShowElement] = useState(false);
  const [isTextAppear, setIsTextAppear] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showBottomHeader, setShowBottomHeader] = useState<boolean>(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const setOpenMobileNavigation = useStore(
    (state) => state.setOpenMobileNavigation
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > prevScrollPosition) {
      setShowBottomHeader(false);
      if (isTextAppear) {
        setShowElement(false);
      }
    } else {
      setShowBottomHeader(true);
      if (isTextAppear) {
        setShowElement(true);
      }
    }

    setPrevScrollPosition(scrollPosition);
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startYRef.current = e.clientY;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startYRef.current === null) return;

    const diffY = e.clientY - startYRef.current!;

    if (diffY < -30) {
      setShowElement(true);
      setIsTextAppear(true);
    } else if (diffY > 30) {
      setShowElement(false);
      setIsTextAppear(false);
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return width <= breakPoint ? (
    <>
      <div
        onMouseDown={handleMouseDown}
        className={`z-10000 h-[60px] bg-green-400 fixed ${
          showElement ? "bottom-[40px]" : "bottom-0"
        }  left-0 w-full transform transition-transform duration-500 ease-in-out ${
          showBottomHeader ? "translate-y-0" : "translate-y-[85px]"
        }`}
      >
        <div className="flex justify-center items-center h-full px-4 gap-12 max-[435px]:gap-6 max-[300px]:gap-5">
          <div className="font-semibold text-white duration-300 cursor-pointer hover:text-green-600">
            <AiFillHome size={width > 320 ? 28 : 22} />
          </div>
          <div className="font-semibold text-white duration-300 cursor-pointer hover:text-green-600">
            <GoStarFill size={width > 320 ? 28 : 22} />
          </div>
          <div
            onClick={() => {
              setOpenMobileNavigation(true);
            }}
            className="font-semibold text-white duration-300 cursor-pointer hover:text-green-600 w-[75px] h-[75px] max-[365px]:w-[60px] max-[365px]:h-[60px] flex justify-center items-center relative bg-green-400 bottom-5 rounded-full border-4 border-white shadow-lg"
          >
            <img
              src="/pyramids.jpg"
              alt="Profile Image"
              className="w-[55px] h-[55px] max-[365px]:w-[42px] max-[365px]:h-[42px] rounded-full"
              loading="lazy"
            />
          </div>
          <div className="font-semibold text-white duration-300 cursor-pointer hover:text-green-600">
            <HiMiniBellAlert size={width > 320 ? 28 : 22} />
          </div>
          <div className="font-semibold text-white duration-300 cursor-pointer hover:text-green-600">
            <FaCompass size={width > 320 ? 28 : 22} />
          </div>
        </div>
      </div>

      <div
        className={`transform transition-transform duration-300 ease-in-out ${
          showElement ? "translate-y-0" : "translate-y-[40px]"
        } h-[40px] bg-green-400 text-center w-full fixed bottom-0 left-0 flex justify-center items-center text-white font-semibold text-md max-[465px]:text-sm max-[365px]:text-xs`}
      >
        <div className="text-center flex items-center gap-1.5">
          Can't find a listing ?{" "}
          <p className="underline cursor-pointer">
            Click here and we'll add it for you!
          </p>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default BottomHeader;
