import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Add = () => {
  const [user, SetUser] = useState([]);
  const [product, SetProdct] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  console.log(user);
  console.log(product);

  useEffect(() => {
    axios.get("http://localhost:3005/user").then((res) => SetUser(res.data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = validation();
    const emailvalid = emailValidation();
    if (isValid) {
      if (emailvalid) {
        const store = await axios.post("http://localhost:3005/user", product);
        console.log(store);
      } else {
        alert("email already exists");
        return;
      }
    }
  }

  function validation() {
    let obj = {};
    let valid = true;

    if (!product.email.trim()) {
      valid = false;
      obj.email = "Please enter the email correctly";
    }
    if (!product.password.trim()) {
      valid = false;
      obj.password = "please enter thr password correctly";
    }
    setError(obj);
    return valid;
  }
  function emailValidation() {
    let valid = true;
    user.map((item) => {
      if (item.email.includes(product.email)) {
        valid = false;
      }
    });

    return valid;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-around">
          <h2 className=" w-[70%] text-2xl font-bold text-center text-gray-800">
            Add User
          </h2>{" "}
          <button className="w-[30%] p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Link to={"/user"}>Show Data</Link>
          </button>
        </div>
        <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
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
              value={product.email}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => SetProdct({ ...product, email: e.target.value })}
            />
            {error && <p className="text-[red]">{error.email}</p>}
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
              value={product.password}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                SetProdct({ ...product, password: e.target.value })
              }
            />
            {error && <p className="text-[red]">{error.password}</p>}
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

export default Add;
