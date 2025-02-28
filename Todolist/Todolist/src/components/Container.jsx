import React, { useEffect, useState } from "react";

const Container = () => {
  const [inputData, setIputData] = useState("");
  const [Todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolistData")) || []
  );

  function handleTodolist() {
    setTodolist([inputData, ...Todolist]);
    setIputData("");
  }
  console.log(Todolist);

  useEffect(() => {
    localStorage.setItem("todolistData", JSON.stringify(Todolist));
  }, [Todolist]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        value={inputData}
        onChange={(element) => {
          setIputData(element.target.value);
        }}
      />
      <button onClick={handleTodolist}>Add Data</button>

      <div>
        {Todolist.map((element, i) => {
          return (
            <div key={i}>
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
