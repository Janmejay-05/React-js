import React, { useEffect, useState } from "react";
import Login from "./Login";

const Section = ({ bool }) => {
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [original, setOriginal] = useState([]);
  const [catProduct, setCatProduct] = useState([]);

  function handleCart(element) {
    setCartProduct([element, ...cartProduct]);
  }

  function handleKeyup() {
    // setProduct(original);

    // console.log(product, "product");
    // console.log(original, "original");

    if (search === "") {
      setProduct(catProduct);
    } else {
      let searched = catProduct.filter((element) => {
        if (element.title.toLowerCase().trim().includes(search)) {
          return element;
        }
      });
      setProduct(searched);
    }
  }

  function handleCategory(e) {
    console.log(e.target.value);

    if (e.target.value === "all") {
      setCatProduct(original);
      setProduct(original);
    } else {
      let filteredData = original.filter((element) => {
        if (e.target.value === element.category) {
          return element;
        }
      });
      setCatProduct(filteredData);
      setProduct(filteredData);
    }
  }
  function handleAcending() {
    let ace = product.sort((a, b) => a.price - b.price);
    setProduct([...ace]);
  }

  function handleDecending() {
    let ace = product.sort((a, b) => b.price - a.price);
    setProduct([...ace]);
  }

  function handlePrice() {
    let p = 0;
    cartProduct.forEach((element) => {
      p += Math.ceil(element.price);
    });
    console.log(p);
    return p;
  }
  // console.log(cartProduct);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => {
        setProduct(response);
        setOriginal(response);
        setCatProduct(response);
      });
  }, []);

  return (
    <div className="w-[100%]  flex justify-between  pt-[70px] ">
      <div className="w-[calc(100%-550px)] ">
        <div className="w-[100%] flex gap-[20px] mb-[20px] mt-[20px] ml-[30px]">
          <button
            onClick={() => handleAcending()}
            className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[white] hover:shadow-lg"
          >
            low to high
          </button>
          <button
            onClick={() => handleDecending()}
            className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[white] hover:shadow-lg"
          >
            high to low
          </button>
          <div className="w-[400px]">
            <input
              placeholder="search"
              type="text"
              className="w-[100%] px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={() => handleKeyup()}
            />
          </div>
          <div>
            <select onChange={(e) => handleCategory(e)} name="" id="">
              <option value="all">All</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
        </div>
        <div className="  grid grid-cols-[repeat(3,1fr)] gap-y-[30px] ">
          {product.map((element, index) => {
            return (
              <div
                key={index}
                className="h-[350px] w-[300px] ml-[20px] hover:shadow-lg rounded-[20px] border-[2px] border-[#0000002b] flex-col content-center justify-items-center  "
              >
                <p className="text-center text-[20px] font-bold mb-[20px]">
                  {element.category}
                </p>
                <img
                  className="rounded-[20px]"
                  src={element.image}
                  alt="{}"
                  style={{ height: "50%", width: "80%" }}
                />
                <p className="text-center">{element.title}</p>
                <p className="text-center">$ {element.price}</p>
                <button
                  disabled={cartProduct.includes(element)}
                  onClick={() => handleCart(element)}
                  className="bg-indigo-600 hover:not-focus:bg-indigo-700 rounded-[20px] w-[100px] h-[30px] text-[white] hover:shadow-lg"
                >
                  Add Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {bool ? (
        <div className="w-[450px] h-screen rounded-[20px] border-[2px] border-[#0000002b] shadow-lg fixed right-[0] overflow-scroll ">
          {cartProduct.map((element) => {
            return (
              <div
                key={element.id}
                className="w-[100%] h-[150px]  flex justify-around mb-[50px]"
              >
                <img src={element.image} alt="" className="w-[50%] h-[100%]" />
                <div className="w-[40%] h-[100%]">
                  <p>{element.title}</p>
                  <p>{element.price}</p>
                </div>
              </div>
            );
          })}

          <p className="text-[30px] mb-[50px] ">
            Total price : ${handlePrice()}
          </p>
        </div>
      ) : (
        <div className="w-[350px] h-screen none fixed right-[0] "></div>
      )}
    </div>
  );
};

export default Section;
