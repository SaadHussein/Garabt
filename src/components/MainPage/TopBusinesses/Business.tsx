import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Business = ({ index }: { index: number }) => {
  return (
    <div
      className={`w-full px-2 min-[1165px]:px-4 py-3 ${
        index % 3 === 0
          ? "bg-amber-300 after:bg-amber-300"
          : index % 3 === 1
          ? "bg-lime-400 after:bg-lime-400"
          : index % 3 === 2
          ? "bg-blue-400 after:bg-blue-400"
          : ""
      } rounded-br-4xl relative after:content-[""] after:-z-50 after:w-[75px] after:h-[75px] after:absolute after:-top-10 after:right-0`}
    >
      <div className="flex items-center justify-between w-full h-full gap-6 max-[400px]:gap-3">
        <div className="text-5xl font-bold text-white border-[1px] border-solid border-white w-[80px] h-[80px] flex items-center justify-center">
          {index + 1}
        </div>
        <div className="flex flex-col items-start justify-start flex-1 w-full h-full">
          <span className="text-gray-700 text-[12px] min-[650px]:text-[14px] font-semibold">
            Automatives
          </span>
          <h2 className="text-gray-700 font-bold text-[16px] min-[1165px]:text-[18px]">
            BMW Cars
          </h2>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-1">
              <div className="relative flex items-center justify-center flex-col">
                <FaStar
                  className="absolute top-0 right-0"
                  color="white"
                  size={14}
                />
                <p className="text-white font-bold text-[22px]">4.7</p>
                <span className="text-[12px] font-semibold text-white">
                  Star Ratings
                </span>
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="/happy.png"
                  alt="happy-users"
                  className="w-[55px] h-[50px]"
                />
                <p className="text-2xl text-white font-bold">3</p>
              </div>
            </div>
            <p className="text-gray-700 font-bold">
              Reviews <span className="text-white">3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
