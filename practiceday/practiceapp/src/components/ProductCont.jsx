import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductCont = () => {
  const [productData, setData] = useState([]);

  function handleAdd() {
    setData([
      {
        username: "janmejay",
        email: "janmejayazala.gmail.com",
        password: "dnfewiufh",
      },
      {
        username: "Ayush",
        email: "Ayush.gmail.com",
        password: "awhfgowi",
      },
    ]);
  }
  return (
    <div>
      <button onClick={handleAdd}>Add Product</button>
      {productData.map((element, index) => {
        return (
          <ProductCard
            key={index}
            username={element.username}
            email={element.email}
            password={element.password}
          />
        );
      })}
    </div>
  );
};

export default ProductCont;
