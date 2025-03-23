import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("counter", count);
  });

  return (
    <div>
      <p>Cout :{count} </p>

      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        Dec
      </button>
      <button onClick={() => setCount((temp) =>)}>Inc</button>
    </div>
  );
};

export default Counter;
