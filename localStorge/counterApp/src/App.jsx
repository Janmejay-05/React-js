import React, { useEffect, useState } from "react";

const App = () => {
  const [Count, SetCount] = useState(
    JSON.parse(localStorage.getItem("Count")) || 0
  );
  useEffect(() => {
    localStorage.setItem("Count", Count);
  }, [Count]);
  return (
    <div className='h-screen w-screen bg-[url("../public/nightmode.jpeg")]'>
      <p className="text-white">Count : {Count}</p>
      <div className="">
        <button
          disabled={Count === 0}
          onClick={() => {
            SetCount(Count - 1);
          }}
        >
          Dec
        </button>
        <button
          onClick={() => {
            SetCount(Count + 1);
          }}
        >
          Inc
        </button>
      </div>
    </div>
  );
};

export default App;
