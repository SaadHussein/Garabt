import AnimatedStars from "../../Global/AnimatedStars";

const ReviewItem = ({ index }: { index: number }) => {
  const isArabic = (text: string) => {
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  };

  function truncateText(text: string, maxLength = 35) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div
      className={`my-1 w-full px-2 min-[1165px]:px-4 py-3 ${
        index % 2 === 0 ? "bg-green-400" : "bg-blue-400"
      } rounded-md`}
    >
      <div className="flex items-center justify-between w-full h-full gap-6 max-[400px]:gap-3">
        <div className="relative flex items-center justify-start flex-col">
          <img
            src={`https://randomuser.me/api/portraits/thumb/men/75.jpg`}
            alt="user"
            className="w-14 h-14 rounded-full border-solid border-2 border-white p-1"
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-sm font-semibold text-white text-[12px]">
              John Doe
            </h1>
          </div>
          <img
            src="/happy.png"
            className="absolute w-11 h-10 -top-3.5 -right-3.5"
            alt="status"
          />
        </div>
        <div className="flex items-start justify-start flex-col flex-1 h-full">
          <h2 className="text-white font-semibold text-[16px] min-[1165px]:text-[18px]">
            Busines Name
          </h2>
          <div
            className={`${
              isArabic("Saaaad") ? "text-end" : "text-start"
            } text-end w-full`}
          >
            <p className="text-[14px] font-medium min-[1165px]:text-[16px]">
              Saaaad
            </p>
            <p className="text-[12px] font-medium min-[1165px]:text-[16px]">
              {truncateText(
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, asperiores."
              )}
            </p>
          </div>
          <div className="flex items-center justify-between w-full mt-1">
            <div className="flex items-center justify-start">
              <p className="font-semibold text-[14px]">Gave it:</p>
              <div className="flex items-center justify-start ml-1">
                <AnimatedStars
                  numberOfStars={5}
                  delay={400}
                  rating={5}
                  gap={false}
                />
              </div>
            </div>
            <p className="text-[12px] text-gray-500">4 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
