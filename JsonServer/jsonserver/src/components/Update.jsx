import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [userData, setUserData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { id } = useParams();
  const navigat = useNavigate();
  console.log(id);

  function handleSubmit(e) {
    e.preventDefault();
    const isVaild = validation();
    const emailValid = emailValidation();
    if (isVaild) {
      if (emailValid) {
        axios
          .put("http://localhost:3005/user/" + id, { email, password })
          .then((res) => {
            console.log(res);
            alert("your data is updated successfully");
            navigat(-1);
          })
          .catch((e) => {
            console.log(e);
            alert(e + " in your data ");
          });
      } else {
        alert("email already exists");
        return;
      }
    }
  }

  function validation() {
    let obj = {};
    let valid = true;
    if (!email.trim()) {
      valid = false;
      obj.email = "Please enter your changed email";
    }
    if (!password.trim()) {
      valid = false;
      obj.password = "please enter your chnaged password";
    }

    setError(obj);
    return valid;
  }

  function emailValidation() {
    let valid = true;
    userData.map((item) => {
      if (item.email != selectedEmail) {
        if (item.email.includes(email)) {
          valid = false;
        }
      }
    });

    return valid;
  }

  useEffect(() => {
    axios
      .get("http://localhost:3005/user/" + id)
      .then((res) => {
        setEmail(res.data.email);
        setSelectedEmail(res.data.email);
        setPassword(res.data.password);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("http://localhost:3005/user")
      .then((res) => setUserData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-around">
          <h2 className=" w-[70%] text-2xl font-bold text-center text-gray-800">
            Edit Information
          </h2>{" "}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              ID (Email)
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.email && <p>{error.email}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error.password && <p>{error.password}</p>}
          </div>
          <input
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
