import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontSize: "35px",
          height: "70%",
          width: "50%",
          fontWeight: "bolder",
          fontFamily: "Arial",
        }}
      >
        CryptoM5
      </div>
      <div
        style={{
          width: "40%",
          height: "50px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <div style={{ width: "15%", fontSize: "20px" }}>Home</div>
        <div style={{ width: "15%", fontSize: "20px" }}>About</div>
        <div style={{ width: "15%", fontSize: "20px" }}>Feature</div>
        <div style={{ width: "15%", fontSize: "20px" }}>Contact</div>
        <div>
          <button
            style={{
              width: "150px",
              height: "35px",
              fontSize: "20px",
              color: "white",
              backgroundColor: "blueviolet",
              borderRadius: "20px",
              border: "none",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
