import { useEffect, useState } from "react";

const NumberCounter = ({ number }: { number: number }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) {
        setCount(count + 1);
      }
    }, Math.round(2500 / number));

    return () => {
      clearInterval(interval);
    };
  }, [count, number]);

  return <>{count}</>;
};

export default NumberCounter;
