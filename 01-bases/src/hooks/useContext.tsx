import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState<number>(0);
    const increaseBy = (value: number) => {
      //setCount(count + value);
      //setCount((Current) => Current + value );
      setCount(Math.max(value + count, 0));
  
    };

  return {
// Propierties
  count,

  //Actions
  increaseBy,
  }
}

