import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ setboolean, storedata, setbool }) => {
  const [data, SetData] = useState({ UserName: "", Password: "" });
  const [Error, SetError] = useState({});

  console.log(storedata);

  function handleData(e) {
    e.preventDefault();
    let count = 0;
    if (validation()) {
      console.log(storedata, " vali");
      storedata.forEach((e) => {
        if (e.UserName == data.UserName && e.Password == data.Password) {
          count++;
        }
      });

      console.log(count);

      if (count == 1) {
        setbool(false);
      } else {
        alert("please create your acc or check id and pass");
        return;
      }
      SetData({ UserName: "", Password: "" });
    }
  }

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
        <span className="text-[30px]">Log In Page</span>
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
        <div className="flex justify-around">
          <button className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[40px] text-[white] text-[20px] hover:shadow-lg">
            Submit
          </button>
          <button
            onClick={() => setboolean(false)}
            className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[40px] text-[white] text-[20px] hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
