import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const AnimatedStars = ({
  rating = 5,
  delay = 200,
  numberOfStars = 5,
  gap = 0,
}: {
  rating: number;
  delay: number;
  numberOfStars: number;
  gap?: number;
}) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (filled < rating) {
      const timeout = setTimeout(() => {
        setFilled(filled + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [filled, rating, delay]);

  return (
    <div className={`flex gap-[${gap}px]`}>
      {[...Array(numberOfStars)].map((_, index) => (
        <FaStar
          key={index}
          color={index < filled ? "gold" : "lightgray"}
          className="transition-colors duration-300"
        />
      ))}
    </div>
  );
};

export default AnimatedStars;
