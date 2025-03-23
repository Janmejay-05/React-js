import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3005/user")
      .then((res) => setUserData(res.data));
  }, [userData]);
  function handleDelete(id) {
    axios
      .delete("http://localhost:3005/user/" + id)
      .then((res) => console.log(res));
  }
  function handleBack() {
    navigation("/");
  }
  return (
    <>
      <button
        className="ml-[50px] mt-[50px] p-[4px] w-[100px] text-[20px] text-white bg-blue-600 rounded-lg hover:bg-blue-700  "
        onClick={() => handleBack()}
      >
        {"<--"} Back
      </button>
      <div className="m-[50px] w-[100%] grid grid-cols-[repeat(3,1fr)] gap-x-[20px] gap-y-[20px]">
        {userData.map((element, index) => {
          return (
            <div className=" h-[100px]  " key={index}>
              <h3>Email : {element.email}</h3>
              <h3>Password : {element.password}</h3>
              <div className="flex gap-[30px]">
                <button
                  className="p-[4px] text-white bg-gray-600 rounded-lg hover:bg-gray-500 hover:text-black"
                  onClick={() => handleDelete(element.id)}
                >
                  delete
                </button>
                <button className="p-[4px] text-white bg-gray-600 rounded-lg hover:bg-gray-500 hover:text-black">
                  <Link to={"/update/" + element.id}>Edit</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;
