import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [product, SetProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        SetProduct(res);
      });
  }, []);
  return (
    <div>
      {product &&
        product.map((element, index) => {
          return (
            <div key={index} style={{ border: "1px solid black" }}>
              <h2>{element.title}</h2>
              <img src={element.image} alt={element.title} height={"150px"} />
              <p>{element.description}</p>
              <p>{element.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
