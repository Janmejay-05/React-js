import React from "react";
import DataCard from "./DataCard";

const DataCont = () => {
  return (
    <div>
      <DataCard city={"Ahmedabad"} state={"Gujarat"} country={"India"} />
      <DataCard city={"Surat"} state={"Gujarat"} country={"India"} />
      <DataCard city={"Bhavnagar"} state={"Gujarat"} country={"India"} />
    </div>
  );
};

export default DataCont;
