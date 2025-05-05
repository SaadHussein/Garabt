import { FaStar } from "react-icons/fa6";

const ReviewItem = ({ index }: { index: number }) => {
  return (
    <div
      className={`my-3 w-full px-4 py-4 ${
        index % 2 === 0 ? "bg-green-400" : "bg-blue-400"
      } rounded-md`}
    >
      <div className="flex items-center justify-between w-full max-[375px]:flex-col">
        <div className="flex items-center justify-start gap-2 ">
          <img
            src={`https://randomuser.me/api/portraits/thumb/men/75.jpg`}
            alt="user"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-lg font-semibold text-white">John Doe</h1>
            <p className="text-sm text-gray-600">2 days ago</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-1 max-[375px]:mt-1">
          <span className="text-yellow-400 text-lg flex items-center justify-start gap-0.5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <p className="text-lg text-white">5.0</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-white mt-4 mb-2">
          Business Name
        </h1>
        <h2 className="text-[16px] font-semibold text-white">
          Customer Review: Great Product
        </h2>
        <p className="text-white text-sm mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam,
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
