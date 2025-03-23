import React, { useEffect, useState } from "react";

const SignUp = ({ setboolean, storedata, setstoredata }) => {
  const [data, SetData] = useState({ UserName: "", Password: "" });
  const [Error, SetError] = useState({});

  console.log(storedata);

  function handleData(e) {
    e.preventDefault();
    if (validation()) {
      setstoredata([data, ...storedata]);
      SetData({ UserName: "", Password: "" });
      setboolean(true);
    }
  }

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(storedata));
  }, [storedata]);

  function validation() {
    let valid = true;
    let obj = {};

    if (!data.UserName.trim()) {
      obj.UserName = "Please enter your Username";
      valid = false;
    }
    if (!data.Password.trim()) {
      obj.Password = "Please enter your Password";
      valid = false;
    }

    SetError(obj);
    return valid;
  }
  return (
    <div className="w-[350px] h-[350px] bg-[white] z-[25] absolute top-[20%] left-[36%] rounded-[20px] shadow-lg shadow-white-500/50 ">
      <div className="flex justify-center ">
        <span className="text-[30px]">Sign Up Page</span>
      </div>
      <form
        action=""
        onSubmit={handleData}
        className="w-[100%] h-[90%] flex flex-col justify-around p-[20px]"
      >
        <div className="flex flex-col">
          <label
            className="text-lg font-medium text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            placeholder="Enter your username"
            id="username"
            value={data.UserName}
            onChange={(e) => SetData({ ...data, UserName: e.target.value })}
          />
          {Error.UserName && <p className="text-[red]">{Error.UserName}</p>}
        </div>

        <div className="flex flex-col">
          <label
            className="text-lg font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder="Enter your password"
            id="password"
            value={data.Password}
            onChange={(e) => SetData({ ...data, Password: e.target.value })}
          />
          {Error.Password && <p className="text-[red]">{Error.Password}</p>}
        </div>
        <button className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[40px] text-[white] text-[20px] hover:shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
