import React, { useState } from "react";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const Banking = () => {
  const [isDay, setIsDay] = useState(false);
  const [balance, setBalance] = useState(0);
  const [shadowStyle, setShadowStyle] = useState({});

  function handleDay() {
    setIsDay(true);
  }
  function handleNight() {
    setIsDay(false);
  }

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const card = e.currentTarget.getBoundingClientRect();

    // Calculate the relative position of the mouse
    const x = clientX - card.left - card.width / 2;
    const y = clientY - card.top - card.height / 2;

    // Adjust the shadow intensity based on distance from center
    const intensity = 5;
    setShadowStyle({
      boxShadow: `${x / 70}px ${y / 70}px ${intensity}px rgb(20, 59, 157)`,
    });
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat relative flex justify-center items-center"
      style={{
        backgroundImage: `url('${isDay ? "/daymode.jpg" : "/nightmode.jpg"}')`,
      }}
    >
      <div
        className="h-[400px] w-[500px] bg-[#ffffff16] rounded-2xl text-white flex flex-col gap-[50px] p-6 transition-all duration-300"
        style={{
          ...shadowStyle, // Apply dynamic shadow effect
          transition: "box-shadow 0.1s ease-out",
        }}
        onMouseMove={handleMouseMove} // Track mouse movement
        onMouseLeave={() => setShadowStyle({})} // Remove shadow when cursor leaves
      >
        {/* Mode Toggle */}
        <div className="flex justify-around items-center h-[100px] w-full">
          <span
            className="font-bold text-[25px]"
            style={{ color: isDay ? "black" : "white" }}
          >
            Change the mode
          </span>
          {isDay ? (
            <button
              onClick={handleNight}
              className="flex justify-center items-center gap-2 h-[40px] w-[100px] text-center rounded-md bg-[#ffffff02] hover:bg-black text-[20px]"
            >
              <span>Night</span>
              <FaRegMoon />
            </button>
          ) : (
            <button
              onClick={handleDay}
              className="flex justify-center items-center gap-2 h-[40px] w-[100px] text-center rounded-md bg-[#ffffff02] hover:bg-yellow-600 text-[20px]"
            >
              <span>Day</span>
              <GoSun />
            </button>
          )}
        </div>

        {/* Balance Display */}
        <p
          className="text-[70px] text-center font-bold"
          style={{ color: isDay ? "black" : "white" }}
        >
          Balance: {balance}
        </p>

        {/* Deposit & Withdraw Buttons */}
        <div className="flex justify-around h-[100px] w-full">
          <button
            onClick={() => setBalance(balance + 100)}
            className="text-[20px] h-[40px] w-[160px] text-center rounded-md bg-[#ffffff02] hover:bg-[#0e0d0d69] font-semibold"
            style={{ color: isDay ? "black" : "white" }}
          >
            Deposit 100rs
          </button>
          <button
            disabled={balance === 0}
            onClick={() => setBalance(balance - 100)}
            className="text-[20px] h-[40px] w-[160px] text-center rounded-md bg-[#ffffff02] hover:bg-[#0e0d0d69] font-semibold"
            style={{ color: isDay ? "black" : "white" }}
          >
            Withdraw 100rs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banking;
