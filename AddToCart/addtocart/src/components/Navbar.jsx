import { Link } from "react-router-dom";

const Navbar = ({ bool, setBool, Boolean, SetBoolean }) => {
  function handleClick() {
    setBool(!bool);
  }
  function handleLogin() {
    SetBoolean(!Boolean);
  }

  return (
    <div
      className="shadow-lg"
      style={{
        backgroundColor: "white",
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: "0",
        zIndex: "5",
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
        <div style={{ width: "15%", fontSize: "20px" }}>
          {" "}
          <Link to={"/home"}>Home</Link>{" "}
        </div>
        <div style={{ width: "15%", fontSize: "20px" }}>
          <Link to={"/about"}>About</Link>
        </div>
        <div style={{ width: "15%", fontSize: "20px" }}>
          <Link to={"/features"}>feature</Link>
        </div>
        <div style={{ width: "15%", fontSize: "20px" }}>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <button
          onClick={() => handleLogin()}
          className=" hover:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[18px] hover:shadow-lg"
        >
          Log in
        </button>
        <div>
          <button
            onClick={() => handleClick()}
            className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[white] hover:shadow-lg"
          >
            Show Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
