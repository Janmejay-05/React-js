import React from "react";

const DataCard = ({ city, state, country, produvt }) => {
  return (
    <div style={{ height: "200px", width: "200px", border: "1px solid black" }}>
      <h2>city : {city}</h2>
      <p>State : {state}</p>
      <p>Country : {country}</p>
    </div>
  );
};

export default DataCard;
